export default function Card() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900  w-full">
        <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1  mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center">
              <img
                className="object-cover w-80 rounded-xl aspect-square"
                src="/ls-001-talk.png"
                alt="hear"
              />
              <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Listen
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-80 rounded-xl aspect-square"
                src="/ls-002-hear.png"
                alt="hear"
              />

              <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Hear
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="object-cover w-80 rounded-xl aspect-square"
                src="/ls-003-review.png"
                alt="review"
              />

              <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Review
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
