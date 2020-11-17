import React from 'react';

import { GitHub, Twitter, LinkedIn, Email } from '~/social';
import { SVG, getUrl } from '~/assets';
import { SplitLayout } from '~/layout';

export default function Index() {
  return (
    <SplitLayout
      first={
        <div className="flex flex-col justify-center md:mx-8 lg:mx-12" style={{ maxWidth: '25em' }}>
          <div className="flex flex-col items-center mt-5 md:mt-0 md:flex-row justify-end sm:mb-4">
            <img
              alt="profile"
              className="mx-auto rounded-full mb-4 md:mb-0"
              src={getUrl('profile.jpg', 'c_scale,f_auto,q_auto,w_180')}
              style={{ width: 90, height: 90 }}
            />
            <div className="flex flex-col justify-between md:py-3">
              <div className="flex flex-col items-center leading-snug text-lg mb-3 md:items-end">
                <div>
                  <strong>karolis</strong>
                  <span>.šarapnickis</span>
                </div>
                <SVG.Pronunciation />
              </div>
              <div className="text-center leading-tight text-sm  md:text-right">
                <h1>
                  <strong>Senior Software Developer</strong>
                </h1>
                <h2 className="text-xs">Front-end Tech Lead @ Tesonet</h2>
              </div>
            </div>
          </div>
          <div className="text-sm leading-snug text-justify mt-6 mb-3">
            <p className="pb-2">
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
            <GitHub className="mr-6 sm:mr-0 sm:mb-6" />
            <Twitter className="mr-6 sm:mr-0 sm:mb-6" />
            <LinkedIn className="mr-6 sm:mr-0 sm:mb-6" />
            <Email />
          </div>
        </div>
      }
    />
  );
}
