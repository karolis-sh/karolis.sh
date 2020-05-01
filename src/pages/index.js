import React from 'react';

import Layout from '../components/Layout';
import { Github, Twitter } from '../components/Icons';
import Pronunciation from '../components/Pronunciation';

export default function Index() {
  return (
    <Layout
      first={
        <div className="flex flex-col justify-center md:mx-8 lg:mx-12" style={{ maxWidth: '25em' }}>
          <div className="flex flex-col items-center mt-5 md:mt-0 md:flex-row justify-end sm:mb-4">
            <img
              src="https://res.cloudinary.com/karolis/image/upload/c_scale,f_auto,q_auto:best,w_180/v1588011994/karolis.sh/profile.jpg"
              alt="profile"
              style={{ width: 90, height: 90 }}
              className="mx-auto rounded-full border border-black bg-gray-500 mb-4 md:mb-0"
            />
            <div className="flex flex-col justify-between md:py-3">
              <div className="flex flex-col items-center leading-snug text-lg mb-3 md:items-end">
                <div>
                  <strong>karolis.</strong>
                  <span>šarapnickis</span>
                </div>
                <Pronunciation />
              </div>
              <div className="text-center leading-tight text-sm  md:text-right">
                <h1>
                  <strong>Senior Software Developer</strong>
                </h1>
                <h2 className="text-gray-900 text-xs">Front-end Tech Lead @ Tesonet</h2>
              </div>
            </div>
          </div>
          <div className="text-sm leading-snug text-justify mt-6 mb-3">
            <p>
              I build web related solutions using JavaScript. I care deeply about the work I put
              out, so exceptional performance, user and developer experience are my primary
              development principles.
            </p>
            <p>
              I try to keep my eyes on the latest technologies, but currently I am fully focused on
              the React ecosystem.
            </p>
          </div>
        </div>
      }
      second={
        <div className="flex flex-col justify-center text-sm font-semibold my-5 md:mx-8 lg:mx-12">
          <div className="flex mx-auto sm:flex-col sm:mx-0">
            <a
              className="flex items-center mr-6 sm:mr-0 sm:mb-6"
              href="https://github.com/karolis-sh"
              rel="noopener noreferrer"
              target="_blank"
              title="GitHub profile"
            >
              <Github />
              <span className="ml-2">@karolis-sh</span>
            </a>
            <a
              className="flex items-center"
              href="https://twitter.com/karolis_sh"
              rel="noopener noreferrer"
              target="_blank"
              title="Twitter profile"
            >
              <Twitter />
              <span className="ml-2">/karolis_sh</span>
            </a>
          </div>
          <a
            className="mx-auto my-6 sm:mx-0"
            href="mailto:pastas.k@gmail.com"
            title="Personal email"
          >
            pastas.k@gmail.com
          </a>
          <a
            className="mx-auto sm:mx-0"
            href="/Karolis_Résumé.pdf"
            download="Karolis_Résumé.pdf"
            title="Résumé"
          >
            Résumé
          </a>
        </div>
      }
    />
  );
}
