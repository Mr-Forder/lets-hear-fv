import { useState } from "react";
import Link from "next/link";

import Layout from "src/components/layout";

import PreFooter from "src/components/PreFooter";

export default function Thanks() {
  return (
    <>
      <Layout
        main={
          <section className="bg-white dark:bg-gray-900  pb-80">
            <div className="container max-w-4xl px-6 py-16 mx-auto">
              <div className="container px-6  mt-32 mx-auto text-center dark:bg-gray-900">
                <div className="max-w-lg mx-auto  pb-20">
                  <div className="  flex justify-center ">
                    {" "}
                    <img
                      style={{ width: "100px" }}
                      src="/logo.svg"
                      alt="lets hear"
                    />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Thanks!
                  </h1>
                  <p className="mt-6 text-gray-500 dark:text-gray-300 pb-4">
                    Thanks for getting in touch with Let's Hear. You'll hear
                    back from us soon.
                  </p>

                  <Link href="/">
                    <a className="px-3 py-2 mx-1 text-sm leading-5 text-center text-white transition-colors duration-200 transform rounded-md  md:mx-0 md:w-auto bg-teal-50  hover:bg-blue-600 font-bold">
                      Back to IHLMA
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}
