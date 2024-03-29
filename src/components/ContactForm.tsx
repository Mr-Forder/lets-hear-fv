import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6eac14c0-ed84-11ec-94cd-436cd72d679b";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>

        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 dark:placeholder-gray-300 text-gray-600 dark:text-gray-200 relative  bg-white  rounded dark:bg-gray-800 text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 dark:placeholder-gray-300 text-gray-600 dark:text-gray-200 relative  bg-white  rounded dark:bg-gray-800 text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 dark:placeholder-gray-300  dark:text-gray-200 relative dark:bg-gray-800  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>

      <div className="mb-3 pt-0">
        <button
          className="bg-teal-50 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
