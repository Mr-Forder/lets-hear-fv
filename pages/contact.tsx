import { useState } from "react";

import Layout from "src/components/layout";
import ContactForm from "src/components/ContactForm";
import PreFooter from "src/components/PreFooter";

export default function Contact() {
  return (
    <>
      <Layout
        main={
          <section className=" bg-white dark:bg-gray-900 pt-24 pb-52 ">
            <div className="container max-w-4xl px-6  mx-auto bg-white dark:bg-gray-900">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl pb-8">
                Contact Us
              </h1>
              <p className="p-8 text-m text-gray-500 dark:text-gray-300">
                We'd love to hear from you. To drop us a message, simply
                complete our form below and we'll be in touch.
              </p>
              <div
                className="
    bg-white dark:bg-gray-900 py-4"
              >
                <div className="flex items-center justify-between w-full p-8 pb-0 ">
                  <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                </div>

                <div className="pb-20">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>
        }
      />
    </>
  );
}
