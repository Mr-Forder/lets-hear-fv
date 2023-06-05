import { GetServerSideProps, NextApiRequest } from "next";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { loadIdToken } from "src/auth/firebaseAdmin";
import Layout from "src/components/layout";
import HouseForm from "src/components/houseForm";
import { useAuth } from "src/auth/useAuth";
import PreFooter from "src/components/PreFooter";
import {
  EditLocationQuery,
  EditLocationQueryVariables,
} from "src/generated/EditLocationQuery";

const EDIT_LOCATION_QUERY = gql`
  query EditLocationQuery($id: String!) {
    location(id: $id) {
      id
      userId
      address
      rating
      review
      loops
      latitude
      longitude
    }
  }
`;

export default function EditHouse() {
  const {
    query: { id },
  } = useRouter();

  if (!id) return null;
  return <LocationData id={id as string} />;
}

function LocationData({ id }: { id: string }) {
  const { user } = useAuth();
  const { data, loading } = useQuery<
    EditLocationQuery,
    EditLocationQueryVariables
  >(EDIT_LOCATION_QUERY, { variables: { id } });

  //user actually probably won't see this if not already authenticated - serversideprops will catch no user id first
  if (!user) return <Layout main={<div>Please login</div>} />; //backup - serversideprops should handle this but just in case...
  if (loading)
    return (
      <>
        <Layout
          main={
            <div className="dark:bg-gray-900 bg-white">
              <div
                className="container  px-4 py-80 pt-96 mx-auto text-center dark:bg-gray-900"
                style={{ height: "100vh" }}
              >
                <div className="max-w-lg mx-auto  ">
                  <span className="loader"></span>
                </div>
              </div>
            </div>
          }
        />
        ;
      </>
    );
  if (data && !data.location)
    return <Layout main={<div>Unable to load review</div>} />;
  if (user.uid !== data?.location?.userId)
    return (
      <Layout
        main={<div>You don't have permission to edit this review.</div>}
      />
    );

  return (
    <Layout
      main={
        <>
          <div className=" dark:bg-gray-800 bg-gray-100">
            <div className="flex justify-center h-screen">
              <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                  <div className="text-center">
                    <HouseForm location={data.location} />
                  </div>
                </div>
              </div>

              <div
                className="hidden bg-cover lg:block lg:w-2/3"
                style={{ backgroundImage: "url(" + "/splash.jpg" + ")" }}
              >
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 justify-end">
                  <div>
                    <h1 className="pb-4  text-md md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-50 to-blue-500">
                      Spread the Word
                    </h1>

                    <p className="max-w-xl mt-3 text-gray-300 font-bold">
                      By completing a review on Let's Hear, you'll be helping
                      people with hearing loss around the world to find
                      accessible venues, services and places.
                    </p>

                    <p className="max-w-xl mt-3 text-gray-300">
                      Not only that, you'll also be helping local businesses and
                      public services to become more accessible to those with
                      hearing loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <PreFooter />
          </div>
        </>
      }
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (!uid) {
    //if no user, redirect to login page
    res.setHeader("location", "/auth");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};
