const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            title
            slug
            id
            isFrontPage
            blocks {
              __typename
              ... on WPGraphQL_AcfProjectLinkBannerBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfServiceIconBoxesBlock {
                renderedContent
              }
              ... on WPGraphQL_CoreHtmlBlock {
                saveContent
              }
              ... on WPGraphQL_AcfProjectHeaderBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfBuilderLogoListingsBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfPropertyMapModalTriggerBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfPropertyMapModalTrigger2Block {
                renderedContent
              }
              ... on WPGraphQL_AcfProjectPhotoGalleryBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfProjectFeatureCardsBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfAboutUsHeaderBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfAboutUsTimelineBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfAboutUsIntroductionBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfAboutUsWhoWeAreBlock {
                renderedContent
              }
              ... on WPGraphQL_AcfFeatureIconBoxesBlock {
                renderedContent
              }
            }
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              opengraphImage {
                altText
                sourceUrl
                srcSet
              }
              twitterTitle
              twitterDescription
              twitterImage {
                altText
                sourceUrl
                srcSet
              }
            }
          }
        }
        suppliers(first: 30) {
          nodes {
            supplierInfoGroup {
              gallery {
                mediaItemUrl
              }
              logo {
                mediaItemUrl
              }
              supplierContactAddress
              supplierEmail
              supplierFacebookUrl
              supplierFax
              supplierGoogleplusUrl
              supplierOpeningHours
              supplierTelephone
              supplierTwitterUrl
              supplierWebsite
            }
            id
            databaseId
            slug
            title
            content
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              opengraphImage {
                altText
                sourceUrl
                srcSet
              }
              twitterTitle
              twitterDescription
              twitterImage {
                altText
                sourceUrl
                srcSet
              }
            }
          }
        }
        properties(first: 5000, after: null) {
          nodes {
            id
            title
            propertyInfoGroup {
              coords
              showHome
              sold
              propertyCode
              supplier {
                ... on WPGraphQL_Supplier {
                  databaseId
                }
              }
            }
            propertyCategories {
              nodes {
                slug
              }
            }
          }
        }
        stages {
          nodes {
            title
            stageInfoGroup {
              coords
            }
            propertyCategories {
              nodes {
                slug
              }
            }
          }
        }
        propertyCategories {
          nodes {
            slug
            databaseId
            name
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { wpgraphql } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const supplierTemplate = path.resolve(`./src/templates/supplier.js`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  wpgraphql.pages.nodes.forEach(node => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: node.isFrontPage ? `/` : `/${node.slug}`,
      component: slash(pageTemplate),
      context: {
        id: node.id,
        title: node.title,
        slug: node.slug,
        blocks: node.blocks,
        seo: node.seo,
        properties: wpgraphql.properties.nodes,
        suppliers: wpgraphql.suppliers.nodes,
        stages: wpgraphql.stages.nodes,
        propertyCategories: wpgraphql.propertyCategories.nodes,
      },
    })
  })

  wpgraphql.suppliers.nodes.forEach(node => {
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/suppliers/${node.slug}`,
      component: slash(supplierTemplate),
      context: {
        id: node.id,
        title: node.title,
        content: node.content,
        slug: node.slug,
        gallery: node.supplierInfoGroup.gallery
          ? node.supplierInfoGroup.gallery.map(imgObj => imgObj.mediaItemUrl)
          : [],
        supplierLogo: node.supplierInfoGroup.logo
          ? node.supplierInfoGroup.logo.mediaItemUrl
          : "",
        address: node.supplierInfoGroup.supplierContactAddress,
        email: node.supplierInfoGroup.supplierEmail,
        facebook: node.supplierInfoGroup.supplierFacebookUrl,
        fax: node.supplierInfoGroup.supplierFax,
        googlePlus: node.supplierInfoGroup.supplierGoogleplusUrl,
        openingHours: node.supplierInfoGroup.supplierOpeningHours,
        telephone: node.supplierInfoGroup.supplierTelephone,
        twitter: node.supplierInfoGroup.supplierTwitterUrl,
        website: node.supplierInfoGroup.supplierWebsite,
        seo: node.seo,
      },
    })
  })
}
