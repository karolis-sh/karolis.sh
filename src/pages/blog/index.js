import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { SVG, getUrl } from '~/assets';
import { GitHub, Twitter, LinkedIn, Email } from '~/social';
import App from '~/app';
import Container from '~/layout/components/Container';

export default function Blog() {
  const {
    allSitePage: { nodes: pages },
  } = useStaticQuery(graphql`
    query BlogQuery {
      allSitePage(
        filter: { path: { glob: "/blog/*" } }
        sort: { fields: context___frontmatter___date, order: DESC }
      ) {
        nodes {
          context {
            frontmatter {
              title
              description
              banner
              date
            }
          }
          path
        }
      }
    }
  `);

  return (
    <App>
      <GatsbySeo title="Blog" />
      <div className="BlogLayout flex flex-col overflow-hidden">
        <header className="py-5 md:py-8 bg-white border-b">
          <Container>
            <Link to="/" className="inline-block" aria-label="To homepage">
              <SVG.Logo />
            </Link>
          </Container>
        </header>
        <article className="flex-1 bg-gray-100 text-gray-800 py-6 lg:pt-12">
          <Container>
            <div className="flex flex-col">
              {pages.map(
                ({
                  path,
                  context: {
                    frontmatter: { title, description, date, banner },
                  },
                }) => {
                  const image = getUrl(`blog/${banner}`, 'c_fill,f_auto,h_300,q_auto,w_500');
                  return (
                    <Link
                      to={path}
                      key={path}
                      className="border my-2 bg-white flex flex-col sm:flex-row"
                    >
                      <img src={image} className="sm:hidden object-cover" alt="banner" />
                      <img
                        src={image}
                        className="hidden sm:inline-block object-cover"
                        style={{ width: 200 }}
                        alt="banner"
                      />
                      <div className="px-4 py-2 flex-1">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p className="text-justify my-1">{description}</p>
                        <p className="text-xs text-right">{date}</p>
                      </div>
                    </Link>
                  );
                }
              )}
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
