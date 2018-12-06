import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import { globalStyle } from '../../styles'

const GlobalStyle = createGlobalStyle`${globalStyle}`

const HeadTag = () => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            baseUrl
            homepageTitle
            description
            keywords
            socialCard
            twitterUsername
            facebookId
          }
        }
      }
    `}
    render={data => {
      const {
        baseUrl,
        homepageTitle,
        description,
        keywords,
        socialCard,
        twitterUsername,
        facebookId,
      } = data.site.siteMetadata
      return (
        <>
          <Helmet
            title={homepageTitle}
            meta={[
              {
                name: 'viewport',
                content:
                  'width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no',
              },

              { name: 'description', content: description },
              { name: 'keywords', content: keywords },

              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: twitterUsername },
              { name: 'twitter:title', content: homepageTitle },
              { name: 'twitter:description', content: description },
              { name: 'twitter:img:src', content: `${baseUrl}/${socialCard}` },

              { name: 'og:title', content: homepageTitle },
              { name: 'og:type', content: 'website' },
              { name: 'og:url', content: baseUrl },
              { name: 'og:image', content: `${baseUrl}/${socialCard}` },
              { name: 'og:description', content: description },

              { name: 'og:site_name', content: homepageTitle },
              { name: 'fb:admins', content: facebookId },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <GlobalStyle />
        </>
      )
    }}
  />
)

export default HeadTag
