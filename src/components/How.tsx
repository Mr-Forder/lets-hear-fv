export default function How() {
  return (
    <>
      <div className="container px-6 py-16 mx-auto bg-white dark:bg-gray-900 ">
        <div className="how-to  flex flex-wrap ">
          <div className=" w-full md:w-1/2 lg:w-1/2 space-y-12 ">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white">
                How it Works
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
              </div>
            </div>
            <div className="flex">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-cyan-50 bg-gray-100 rounded-xl md:mx-4 dark:text-white dark:bg-teal-50 how-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-extrabold text-gray-700 capitalize dark:text-white">
                    Listen
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Are there places where you feel comfortable going to because
                    they are accessible and you can hear well?
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4 ">
              <span className="inline-block p-2 text-cyan-50 bg-gray-100 rounded-xl md:mx-4 dark:text-white dark:bg-teal-50  how-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-extrabold text-gray-700 capitalize dark:text-white">
                  Hear
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Do you struggle to hear conversations and feel isolated or
                  frustrated going about your daily business?
                </p>
              </div>
            </div>

            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-cyan-50 bg-gray-100 rounded-xl md:mx-4 dark:text-white dark:bg-teal-50 how-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-extrabold text-gray-700 capitalize dark:text-white">
                  Review!
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  We want your feedback. By completing a review on Let's Hear,
                  you'll be helping people with hearing loss around the world to
                  find accessible venues, services and places.
                </p>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Not only that, you'll also be helping local businesses and
                  public services to become more accessible to those with
                  hearing loss. Everybody wins!
                </p>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-1/2 lg:w-1/2 flex justify-center">
            <img
              src="/ls-003-review.png"
              className="w-90 floating"
              alt="review"
            />
          </div>
        </div>
      </div>
    </>
  );
}
