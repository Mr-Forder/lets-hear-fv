import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import Layout from "src/components/layout";
import HouseNav from "src/components/houseNav";
import SingleMap from "src/components/singleMap";
import Link from "next/link";
import {
  ShowLocationQuery,
  ShowLocationQueryVariables,
} from "src/generated/ShowLocationQuery";

const SHOW_LOCATION_QUERY = gql`
  query ShowLocationQuery($id: String!) {
    location(id: $id) {
      id
      userId
      address
      rating
      review
      loops
      latitude
      longitude
      nearby {
        id
        latitude
        longitude
      }
    }
  }
`;

export default function ShowHouse() {
  const {
    query: { id },
  } = useRouter();

  if (!id) return null;
  return <HouseData id={id as string} />;
}

function HouseData({ id }: { id: string }) {
  const { data, loading } = useQuery<
    ShowLocationQuery,
    ShowLocationQueryVariables
  >(SHOW_LOCATION_QUERY, { variables: { id } });

  if (loading || !data)
    return (
      <>
        <Layout
          main={
            <div className="dark:bg-gray-900 bg-white">
              <div className="container  px-4 py-80 pt-96 mx-auto text-center dark:bg-gray-900">
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
  if (!data.location)
    return (
      <Layout
        main={
          <>
            <div className="dark:bg-gray-900 bg-white">
              <div className="container  px-4 py-48  mx-auto text-center dark:bg-gray-900">
                <div className="max-w-lg mx-auto  ">
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Unable to load review.
                  </h1>
                  <p className="mt-6 text-gray-500 dark:text-gray-300 pb-8">
                    You may be trying to access a review that doesn't exist. If
                    this problem persists, please let us know by contacting us.
                  </p>
                  <Link href="/contact">
                    <a className="px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-blue-600 font-bold">
                      Get in Touch
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      />
    );

  const { location } = data;

  return (
    <Layout
      main={
        <div className="sm:block md:flex">
          <div className="map w-full md:w-1/3 lg:w-1/3 p-8 bg-white dark:bg-gray-900">
            <HouseNav location={location} />
            <h1 className="text-2xl font-extrabold text-gray-700 capitalize dark:text-white pb-1 pt-4">
              {location.address}
            </h1>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
            </div>

            {/* ratings */}
            <div className="flex mt-2 item-center pb-16">
              {location.rating === 1 && (
                <>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </>
              )}
              {location.rating === 2 && (
                <>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </>
              )}
              {location.rating === 3 && (
                <>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </>
              )}
              {location.rating === 4 && (
                <>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </>
              )}
              {location.rating === 5 && (
                <>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 text-teal-50 fill-current "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </>
              )}
            </div>

            <p className="text-2xl font-extrabold capitalize text-teal-50  pb-1 text-center">
              {location.loops}
            </p>

            <p className="pb-4 text-gray-500 dark:text-gray-300 text-center text-xl pt-4 font-bold">
              {location.review}
            </p>
          </div>
          <div className="map w-full md:w-1/2 lg:w-2/3 main-map">
            <SingleMap location={location} nearby={location.nearby} />
          </div>
        </div>
      }
    />
  );
}
