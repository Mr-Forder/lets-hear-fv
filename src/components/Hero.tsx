import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="how-to  flex flex-wrap bg-white">
          <div className=" w-full md:w-1/2 lg:w-1/3 ">
            <img src="/ls-001-talk.jpg" className="w-90" alt="Talk" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Listen
            </h1>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 text-center p-8">
              <span className="mx-2">
                Are there places where you feel comfortable going to because
                they are accessible and you can hear well?
              </span>
            </p>
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/3">
            <img src="/ls-002-hear.jpg" className="w-90" alt="Hear" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Hear
            </h1>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 text-center p-8">
              <span className="mx-2">
                Do you struggle to hear conversations and feel isolated or
                frustrated going about your daily business?
              </span>
            </p>
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/3">
            <img src="/ls-003-review.jpg" className="w-90" alt="review" />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Review
            </h1>
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 text-center p-8 ">
              <span className="mx-2">
                We want your feedback to help other people with hearing loss and
                also to help businesses.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
