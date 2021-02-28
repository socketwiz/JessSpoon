import * as React from "react";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import JessspoonBridge from '../images/jessspoon-bridge.png';

// markup
const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        <header className="relative">

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>

                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>

                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>

                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <div className="mt-6 px-5">
                  <a href="/" className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">Start free trial</a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">Existing customer? <a href="/" className="text-gray-900 hover:underline">Login</a></p>
                </div>
              </div>
            </div>
          </div>
        </header>

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

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3">
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
