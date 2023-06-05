import { useState } from "react";

import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { useDebounce } from "use-debounce";
import Layout from "src/components/layout";
import Map from "src/components/map";
import Hero from "src/components/Hero";
import Faq from "src/components/Faq";
import How from "src/components/How";
import HouseList from "src/components/houseList";
import PreFooter from "src/components/PreFooter";
import { useLastData } from "src/utils/useLastData";
import { useLocalState } from "src/utils/useLocalState";
import { useAuth } from "src/auth/useAuth"; //custom authProvider context hook
import {
  LocationsQuery,
  LocationsQueryVariables,
} from "src/generated/LocationsQuery";
import Onboarding from "src/components/Onboarding";

const LOCATIONS_QUERY = gql`
  query LocationsQuery($bounds: BoundsInput!) {
    locations(bounds: $bounds) {
      id
      latitude
      longitude
      address
      rating
      review
      loops
    }
  }
`;

type BoundsArray = [[number, number], [number, number]];

const parseBounds = (boundsString: string) => {
  const bounds = JSON.parse(boundsString) as BoundsArray;
  return {
    sw: {
      latitude: bounds[0][1],
      longitude: bounds[0][0],
    },
    ne: {
      latitude: bounds[1][1],
      longitude: bounds[1][0],
    },
  };
};

export default function Home() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null); //highlight on hover state
  const { logout, authenticated } = useAuth(); //destructure firebase context via useAuth custom hook
  const [dataBounds, setDataBounds] = useLocalState<string>(
    "bounds",
    "[[0,0],[0,0]]"
  );
  const [debouncedDataBounds] = useDebounce(dataBounds, 200);

  const { data, error } = useQuery<LocationsQuery, LocationsQueryVariables>(
    LOCATIONS_QUERY,
    {
      variables: { bounds: parseBounds(debouncedDataBounds) },
    }
  );

  const lastData = useLastData(data);

  // if (!error) return <Layout main={<div>Error loading houses</div>} />;

  return (
    <>
      <Layout
        main={
          <div className="main-container flex flex-wrap bg-white dark:bg-gray-900">
            {error ? (
              <>
                <div className="container px-6 py-24 mt-32 mx-auto text-center dark:bg-gray-900">
                  <div className="max-w-lg mx-auto  ">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                      Let's Hear servers are currently undergoing maintenance
                    </h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300 pb-8">
                      Refresh your page to see if we're done. If this issue
                      persists, please get in touch to let us know that you're
                      unable to access our services.
                    </p>
                    <Link href="/contact">
                      <a className="px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-blue-600 font-bold">
                        Get in Touch
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="main-map-info onboard map w-full md:w-1/2 lg:w-2/3 ">
                  <Onboarding />
                </div>
                <div className=" main-map-info map w-full md:w-1/2 lg:w-2/3 ">
                  <Map
                    setDataBounds={setDataBounds}
                    locations={lastData ? lastData.locations : []}
                    highlightedId={highlightedId}
                  />
                </div>

                <div
                  className="review-list w-full md:w-1/2 lg:w-1/3 bg-gray-50 dark:bg-gray-900"
                  style={{ maxHeight: "calc(100vh)", minHeight: "calc(100vh)" }}
                >
                  <div className="max-w-lg py-8">
                    <h3 className=" pb-4   p-2 text-3xl md:text-4xl  md:pl-16 font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-50 to-teal-50">
                      Help us map the provision of public hearing loops across
                      the world.
                    </h3>

                    <p className=" p-2 md:pl-16 text-md text-gray-500 dark:text-gray-300">
                      Had an experience you'd like to share? By completing a
                      review, you'll be helping to inform a network that
                      supports people with hearing loss and help them find
                      accessible services.
                    </p>
                  </div>

                  <div style={{ maxHeight: "calc(100vh)" }}>
                    <HouseList
                      locations={lastData ? lastData.locations : []}
                      setHighlightedId={setHighlightedId}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="container px-6 py-24  mx-auto text-center dark:bg-gray-900">
              <div className="max-w-lg mx-auto  ">
                <div className="  flex justify-center ">
                  {" "}
                  <img
                    style={{ width: "100px" }}
                    src="/logo.svg"
                    alt="lets hear"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                  Find the places that meet your needs with Let's Hear.{" "}
                </h1>
                <p className="mt-6 text-gray-500 dark:text-gray-300 pb-8">
                  Welcome to Let's Hear - an online service that aims to empower
                  it's users to map the provision of Hearing Loops in public
                  spaces by rating and reviewing the places that they visit.
                </p>

                {authenticated ? (
                  <>
                    <Link href="/reviews/add">
                      <a className=" px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-cyan-50 font-bold">
                        Add a review
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/auth">
                      <a className=" px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-cyan-50 font-bold">
                        Sign Up / Login
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <How />
            <section className="bg-gray-100 dark:bg-gray-900 lg:py-48 lg:my-16 lg:flex lg:justify-center w-full">
              <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div className="lg:w-1/2">
                  <div
                    className="h-64 bg-cover lg:rounded-lg lg:h-full"
                    style={{ backgroundImage: "url(" + "/ihlma.jpg" + ")" }}
                  ></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
                    Brought to you by{" "}
                    <span className="text-teal-50">IHLMA</span>
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    Let's Hear is developed and maintained by the{" "}
                    <span className="text-teal-50 font-bold">
                      International Hearing loop Association.
                    </span>{" "}
                    We seeek to spread information and awareness about the
                    emerging assistive hearing technologies that are changing
                    the lives of those with hearing loss.
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    IHLMA is an association of the major manufacturers of audio
                    induction loop equipment, aiming to support good quality
                    loop installations around the world. We also provide support
                    and guidance to organisations and individuals interested in
                    Hearing Loop systems.
                  </p>
                  <div className="mt-8">
                    <a
                      href="https://ihlma.org/"
                      className="px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-cyan-50 font-bold"
                    >
                      Visit IHLMA
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <Faq />

            <PreFooter />
          </div>
        }
      />
    </>
  );
}
