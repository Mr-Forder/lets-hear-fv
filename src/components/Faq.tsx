import Link from "next/link";
export default function Faq() {
  return (
    <>
      <div className="container px-6 py-16 mx-auto bg-white dark:bg-gray-900 ">
        <div className="how-to  flex flex-wrap ">
          <div className=" w-full md:w-1/2 lg:w-1/2 space-y-12 ">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800 capitalize lg:text-4xl dark:text-white">
                FAQs
              </h1>
              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-teal-50"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-teal-50"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 lg:w-3/4  mx-auto  bg-white dark:bg-gray-900 pb-24">
        <div className="shadow-md">
          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-one"
            >
              What is a hearing loop?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Hearing Loops (also known as induction loops) are systems for
                  helping people hear, transmitting audio by magnetic field from
                  an installed loop to a users hearing aid or receiver.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-two"
            >
              How does a hearing loop work?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex flex-col mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Sound is transmitted from a sound source, for example a person
                  speaking, through a microphone or music from a sound system to
                  an induction loop driver.
                </p>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  The driver converts the source to a magnetic field via a wire
                  loop, which is picked up wirelessly by the T-coil in a hearing
                  aid or cochlear implant. This is converted back into an audio
                  signal within the hearing aid.
                </p>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  For more information on how loops and T-coils work together,{" "}
                  <span className="font-bold text-teal-50">
                    <a href="https://ihlma.org/">visit us at IHLMA</a>.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-three"
            >
              Why should publicly accessable venues offer hearing loops to its
              visitors?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex flex-col mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  People with hearing loss of all levels, frequently exhibit a
                  disproportionate amount of difficulty understanding speech in
                  the presence of noise.
                </p>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  This is especially the case in situations where desired speech
                  signals are weakened by distance, and contaminated by noise
                  and reverberation, before arriving at the listeners’ ears or
                  hearing aids.
                </p>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  This is where assistive technologies, such as hearing loops,
                  can be of help.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-four"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-four"
            >
              How do I leave a review?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex flex-col mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Leaving a review on Let's Hear is a piece of cake.
                </p>
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Simply click "add a review" and enter the name of the venue or
                  postcode of the location you want to review. From there, you
                  can let people know if any hearing loops are installed on
                  site, give a rating from 1-5, and add any extra comments you
                  may have.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-five"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-five"
            >
              But I'm not sure of the address of the place I want to review!
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  No problem! Just begin typing in the name of the place or it's
                  general location and Let's Hear will provide some suggestions
                  for the place that you're looking for.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-six"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-six"
            >
              Do I need to sign up to use Let's Hear?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex flex-col mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Anyone can use Let's Hear to browse and view reviews without
                  needing an account. We do ask that anyone who wishes to leave
                  a review creates an account first.
                </p>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  It only takes a moment, and we don't require or use any of
                  your personal details.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-seven"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-seven"
            >
              Can anyone leave a review?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  Yes, anyone can write or edit a review. We seek to keep Let's
                  Hear accessible to anyone and everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="tab w-full overflow-hidden border-t g-white dark:bg-gray-900">
            <input
              className="absolute opacity-0 "
              id="tab-multi-eight"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer mx-4 text-xl text-gray-700 dark:text-white"
              htmlFor="tab-multi-eight"
            >
              I have comments, suggestions or a technical issue with Let's Hear.
              How do I get in touch?
            </label>
            <div className="tab-content overflow-hidden">
              <div className="flex mt-8 md:mx-10">
                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300 py-4">
                  We welcome all comments and suggestions. To do so, simply get
                  in touch by{" "}
                  <span className="font-bold text-teal-50">
                    <Link href="/contact">contacting us</Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
