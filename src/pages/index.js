import * as React from "react";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';

import JessspoonBridge from '../images/jessspoon-bridge.png';

// markup
const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Helmet>
        <title>Jess Spoon</title>
      </Helmet>
      <div className="relative overflow-hidden">

        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Jess Spoon</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Come with us on our journey as we combine our passion for music together with a mixture of blues and rock.</p>

                    <div className="grid grid-cols-3 gap-8 md:grid-cols-6 lg:grid-cols-3">
                      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <a className="social-icons" href="https://twitter.com/spoon_jess">
                          <FontAwesomeIcon icon={faTwitterSquare} size="1x" />
                        </a>
                      </div>
                      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <a className="social-icons" href="https://www.facebook.com/jessspoonsound/">
                          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
                        </a>
                      </div>
                      <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                        <a className="social-icons" href="https://www.youtube.com/channel/UC8w1V7z1ZyZXMs3lRYcJQrg">
                          <FontAwesomeIcon icon={faYoutubeSquare} size="1x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src={JessspoonBridge} alt="JessSpoon band on a bridge" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default IndexPage;
