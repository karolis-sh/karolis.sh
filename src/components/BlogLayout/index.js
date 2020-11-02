import React from 'react';
import PropTypes from 'prop-types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import App from '../App';
import Container from '../Container';
import Github from '../Github';
import Twitter from '../Twitter';
import Linkedin from '../Linkedin';
import Email from '../Email';
import Logo from '../Logo';
import { components } from './mdx';
import './index.css';

export default function BlogLayout({ children, pageContext: { frontmatter } }) {
  return (
    <App>
      <GatsbySeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          type: 'article',
          title: `${frontmatter.title} | k.sh`,
          description: frontmatter.description,
        }}
      />
      <div className="BlogLayout flex flex-col overflow-hidden">
        <header className="py-5 md:py-8 bg-white border-b">
          <Container>
            <Link to="/" className="inline-block" aria-label="To homepage">
              <Logo />
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
            <div className="flex justify-center !items-center">
              <img
                alt="profile"
                className="rounded-full mr-4 md:mr-6"
                width="180"
                src="https://res.cloudinary.com/karolis/image/upload/c_scale,q_auto,w_180/v1/karolis.sh/profile"
                style={{ width: 80, height: 80 }}
              />
              <div>
                <strong>
                  Karolis Šarapnickis{' '}
                  <span role="img" aria-label="Lithuania" title="Hello from Lithuania!">
                    🇱🇹
                  </span>
                </strong>
                <h2 className="text-xs mb-2">Front-end Tech Lead @ Tesonet</h2>
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
            <Github className="mr-8" />
            <Twitter className="mr-8" />
            <Linkedin className="mr-8" />
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
    }).isRequired,
  }).isRequired,
};
