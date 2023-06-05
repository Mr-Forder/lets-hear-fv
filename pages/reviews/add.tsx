import { GetServerSideProps, NextApiRequest } from "next";
import { loadIdToken } from "src/auth/firebaseAdmin";
import Layout from "src/components/layout";
import HouseForm from "src/components/houseForm";
import PreFooter from "src/components/PreFooter";

export default function Add() {
  return (
    <Layout
      main={
        <>
          <div className=" dark:bg-gray-700 bg-gray-100">
            <div className="flex justify-center h-screen">
              <div
                className="hidden bg-cover lg:block lg:w-2/3"
                style={{ backgroundImage: "url(" + "/splash.jpg" + ")" }}
              >
                <div className="flex items-center justify-start  h-full px-20 bg-gray-900 bg-opacity-40">
                  <div className="">
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
              <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                  <div className="text-center">
                    <HouseForm />
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
    res.setHeader("location", "/auth");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};
