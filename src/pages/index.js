/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
                <OutboundLink
                  href="http://ipa-reader.xyz/?text=%CB%88karol%C9%AAs%20%CA%83arapn%C9%99tsk%C9%AAs"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Listen"
                  className="flex items-center"
                >
                  <span role="img" aria-label="speaker">
                    🔈
                  </span>
                  <SVG.Pronunciation className="ml-1 mt-1" />
                </OutboundLink>
              </div>
              <div className="text-center leading-tight text-sm  md:text-right">
                <h1>Sr Software Engineer</h1>
                <h2 className="text-xs">
                  @{' '}
                  <OutboundLink
                    href="https://www.uber.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Uber</strong>
                  </OutboundLink>
                </h2>
              </div>
            </div>
          </div>
          <div className="text-sm !leading-snug text-justify mt-6 mb-3">
            <p className="pb-2">
              I'm a purpose-driven software engineer with professional hands-on experience building
              web projects and leading teams. I'm a persistent person who values honesty, structure,
              and knowledge.
            </p>
            <p className="pb-2">
              I like the open-source idealogy, so occasionally I make some contributions on GitHub
              or write a blog post with my findings.
            </p>
            <p>Beyond software domain, I 👨‍👩‍👦🍔🏋️🚴</p>
          </div>
        </div>
      }
      second={
        <div className="flex flex-col justify-center text-sm font-semibold my-5 align-center w-full md:mx-8 font-bold">
          <div className="text-center mb-8 sm:mb-10 md:flex">
            <Link to="/blog/">/BLOG/</Link>
          </div>
          <div className="flex mx-auto items-center sm:flex-col sm:mx-0 md:items-start">
            <GitHub className="mr-6 sm:mr-0 sm:mb-6" />
            <Twitter className="mr-6 sm:mr-0 sm:mb-6" />
            <LinkedIn className="mr-6 sm:mr-0 sm:mb-6" />
            <Email className="mr-6 sm:mr-0 sm:mb-6" />
            <Link href="https://k-sh.notion.site/k-sh/Karolis-arapnickis-4044444277b9477c838924f5a0e7c686">
              /CV/
            </Link>
          </div>
        </div>
      }
    />
  );
}
