import { useState } from "react";
import Link from "next/link";

import Layout from "src/components/layout";

import PreFooter from "src/components/PreFooter";

export default function Terms() {
  return (
    <>
      <Layout
        main={
          <section className="bg-white dark:bg-gray-900">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl pb-8">
                Our Privacy Policy
              </h1>
              <p className="p-8 text-m text-gray-500 dark:text-gray-300">
                IHLMA (International Hearing Loop Manufacturers Association),
                understands that your privacy is important to you and that you
                care about how your personal data is used and shared online. We
                respect and value the privacy of everyone who visits this
                website, www.ihlma.org (“Our Site”) and will only collect and
                use personal data in ways that are described here, and in a
                manner that is consistent with our obligations and your rights
                under the law.
              </p>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      The type of personal information we collect
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    We currently collect and process the following information:
                    Personal identifiers and characteristics (for example, email
                    address) and personal reviews
                  </p>
                </div>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      How we get the personal information and why we have it
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8  pb-2 text-sm text-gray-500 dark:text-gray-300">
                    Most of the personal information we process is provided to
                    us directly by you for the following reason: To add
                    assistive listening systems reviews In some cases, the third
                    parties may require access to some or all of your data.
                  </p>
                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Where any of your data is required for such a purpose, we
                    will take all reasonable steps to ensure that your data will
                    be handled safely, securely, and in accordance with your
                    rights, our obligations, and the obligations of the third
                    party under the law. We may compile statistics about the use
                    of our Site including data on traffic, usage patterns, user
                    numbers, sales, and other information. All such data will be
                    anonymised and will not include any personally identifying
                    data, or any anonymised data that can be combined with other
                    data and used to identify you. Data will only be shared and
                    used within the bounds of the law.
                  </p>
                </div>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      The lawful bases we rely on for processing this
                      information are:
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Your consent. You are able to remove your consent at any
                    time. You can do this by contacting{" "}
                    <span className="text-teal-50 font-bold">
                      admin@ihlma.org
                    </span>
                    . We need it to perform a public task.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      How we store your personal information
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    All personal data is processed and stored securely on a UK
                    server, for no longer than is necessary in light of the
                    reason for which it was first collected. We will comply with
                    our obligations and safeguard your rights under threat at
                    all times.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Your data protection rights
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 pb-2 text-sm text-gray-500 dark:text-gray-300">
                    Under data protection law, you have rights including: Your
                    right of access – You have the right to ask us for copies of
                    your personal information. Your right to rectification – You
                    have the right to ask us to rectify personal information you
                    think is inaccurate. You also have the right to ask us to
                    complete information you think is incomplete. Your right to
                    erasure – You have the right to ask us to erase your
                    personal information in certain circumstances. Your right to
                    restriction of processing – You have the right to ask us to
                    restrict the processing of your personal information in
                    certain circumstances. Your right to object to processing –
                    You have the the right to object to the processing of your
                    personal information in certain circumstances. Your right to
                    data portability – You have the right to ask that we
                    transfer the personal information you gave us to another
                    organisation, or to you, in certain circumstances.
                  </p>

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    You are not required to pay any charge for exercising your
                    rights. If you make a request, we have one month to respond
                    to you. Please contact us at{" "}
                    <span className="text-teal-50 font-bold">
                      admin@ihlma.org
                    </span>{" "}
                    if you wish to make a request.
                  </p>
                </div>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}
