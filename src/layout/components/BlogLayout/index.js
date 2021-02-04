import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { GitHub, Twitter, LinkedIn, Email } from '~/social';
import { SVG, getUrl } from '~/assets';
import App from '~/app';
import { components } from '~/blog';
import Container from '../Container';
import './index.css';

export default function BlogLayout({ children, pageContext: { frontmatter } }) {
  const image = getUrl(`blog/${frontmatter.banner}`, 'c_fill,f_auto,h_630,q_auto,w_1200');
  return (
    <App>
      <GatsbySeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          type: 'article',
          title: `${frontmatter.title} | k.sh`,
          description: frontmatter.description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <div className="BlogLayout flex flex-col overflow-hidden">
        <header className="py-5 md:py-8 bg-white border-b">
          <Container className="flex items-center justify-between">
            <Link to="/" className="inline-block" aria-label="To homepage">
              <SVG.Logo />
            </Link>
            <Link to="/blog/" className="font-bold">
              /BLOG/
            </Link>
          </Container>
        </header>
        <article className="flex-1 bg-gray-100 text-gray-800 py-6 lg:pt-12">
          <Container>
            <div className="mdx">
              <div className="flex justify-end">
                <span className="text-xs leading-none">{frontmatter.date}</span>
              </div>
              <MDXProvider components={components}>{children}</MDXProvider>
            </div>
            <hr className="my-8" />
            <div className="flex justify-center">
              <img
                alt="profile"
                className="rounded-full mr-4 md:mr-6"
                src={getUrl('profile.jpg', 'c_scale,f_auto,q_auto,w_180')}
                style={{ width: 80, height: 80 }}
              />
              <div>
                <strong>
                  Karolis Šarapnickis{' '}
                  <span role="img" aria-label="Lithuania" title="Hello from Lithuania!">
                    🇱🇹
                  </span>
                </strong>
                <h2 className="text-xs mb-2">
                  Engineering Manager @{' '}
                  <OutboundLink
                    href="https://nordsecurity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nord Security
                  </OutboundLink>
                </h2>
                <p>
                  I build stuff using JavaScript and share my findings from time to time. I hope you
                  will find something useful here.
                </p>
              </div>
            </div>
          </Container>
        </article>
        <footer className="bg-gray-100 pt-6 pb-12 md:pt-10 md:pb-16 lg:pb-20">
          <Container className="flex justify-center">
            <GitHub className="mr-8" />
            <Twitter className="mr-8" />
            <LinkedIn className="mr-8" />
            <Email />
          </Container>
        </footer>
      </div>
    </App>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
