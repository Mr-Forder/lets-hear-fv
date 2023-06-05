import { useState } from "react";
import Link from "next/link";

import Layout from "src/components/layout";

import PreFooter from "src/components/PreFooter";

export default function Privacy() {
  return (
    <>
      <Layout
        main={
          <section className="bg-white dark:bg-gray-900">
            <div className="container max-w-4xl px-6 py-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl pb-8">
                Terms & Conditions
              </h1>
              <p className="p-8 text-m text-gray-500 dark:text-gray-300">
                This agreement applies as between you, the User of this Website
                and Let's Hear, the owner(s) of this Website. Your agreement to
                comply with and be bound by these terms and conditions is deemed
                to occur upon your first use of the Website. If you do not agree
                to be bound by these terms and conditions, you should stop using
                the Website immediately...
              </p>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Definitions and Interpretation
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    In this Agreement the following terms shall have the
                    following meanings: “Content” means any text, graphics,
                    images, audio, video, software, data compilations and any
                    other form of information capable of being stored in a
                    computer that appears on or forms part of this Website;
                    “Let's Hear” means Let's Hear; “Service” means collectively
                    any online facilities, tools, services or information that
                    Let's Hear makes available through the Website either now or
                    in the future; “System” means any online communications
                    infrastructure that Let's Hear makes available through the
                    Website either now or in the future. This includes, but is
                    not limited to, web-based email, message boards, live chat
                    facilities and email links; “User” / “Users” means any third
                    party that accesses the Website and is not employed by Let's
                    Hear and acting in the course of their employment; and
                    “Website” means the website that you are currently using
                    (www.letshear.ihlma.org) and any sub-domains of this site
                    (e.g. subdomain.www.letshear.ihlma.org) unless expressly
                    excluded by their own terms and conditions.
                  </p>
                </div>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Intellectual Property
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    All Content included on the Website, unless uploaded by
                    Users, including, but not limited to, text, graphics, logos,
                    icons, images, sound clips, video clips, data compilations,
                    page layout, underlying code and software is the property of
                    Let's Hear, our affiliates or other relevant third parties.
                    By continuing to use the Website you acknowledge that such
                    material is protected by applicable United Kingdom and
                    International intellectual property and other relevant laws.
                    Subject to sub-clause 2.3 you may not reproduce, copy,
                    distribute, store or in any other fashion re-use material
                    from the Website unless otherwise indicated on the Website
                    or unless given express written permission to do so by Let's
                    Hear. Material from the Website may be re-used without
                    written permission where any of the exceptions detailed in
                    Chapter III of the Copyright Designs and Patents Act 1988
                    apply.
                  </p>
                </div>
              </div>
              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Links to Other Websites
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    This Website may contain links to other sites. Unless
                    expressly stated, these sites are not under the control of
                    Let's Hear or that of our affiliates. We assume no
                    responsibility for the content of such Websites and disclaim
                    liability for any and all forms of loss or damage arising
                    out of the use of them. The inclusion of a link to another
                    site on this Website does not imply any endorsement of the
                    sites themselves or of those in control of them.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Links to this Website
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Those wishing to place a link to this Website on other sites
                    may do so only to the home page of the site
                    letshear.ihlma.org without prior permission. Deep linking
                    (i.e. links to specific pages within the site) requires the
                    express permission of Let's Hear. To find out more please
                    contact us by email at admin@ihlma.org.
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                  <div className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      Disclaimers
                    </h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full"></span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Let's Hear makes no warranty or representation that the
                    Website will meet your requirements, that it will be of
                    satisfactory quality, that it will be fit for a particular
                    purpose, that it will not infringe the rights of third
                    parties, that it will be compatible with all systems, that
                    it will be secure and that all information provided will be
                    accurate. We make no guarantee of any specific results from
                    the use of our Service. No part of this Website is intended
                    to constitute advice and the Content of this Website should
                    not be relied upon when making any decisions or taking any
                    action of any kind. Whilst Let's Hear uses reasonable
                    endeavours to ensure that the Website is secure and free of
                    errors, viruses and other malware, all Users are advised to
                    take responsibility for their own security, that of their
                    personal details and their computers.
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
