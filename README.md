# Lando + Drupal + Gatsby

This is a smash together of my "Headless Monk" starter repo and experimentation with the Frontend Masters Intro to Gatsby. There may be weird things just laying around and these are just rough ideas.

**This configuration is not for production use. It does not use any authentication and is not secure. For demonstration only.**

## How to Use

You should be able to just run `lando start` and it will install everything, create demo content and run develop for Gatsby. Visit http://head.lndo.site for Gatsby and http://backend.lndo.site for Drupal.

## Requirements

 - Docker
 - Lando
 - Clean Underpants


## Derivative Images

Made as a proof of concept for pulling image derivatives directly from Drupal rather than image processing at Gatsby build time which can take a long time.

See my breakdown here: https://www.chapterthree.com/node/2886

### GraphQL Module Version

 - `gatsby-source-graphql`
 - Drupal: graphql module (Could use JSON:API instead but I wanted to play with this.)
 - `src/templates/article.js` shows the query
 - `src/components/image.js` component for creating the img tag with srcSet.

### JSON:API Version

 - `gatsby-source-drupal`
 - Drupal: `jsonapi_image_styles` allows access to image styles.
 - `src/templates/page.js` shows the query
 - `src/components/picture.js` component for creating the picture tag with srcSet.

**See how the 2 versions differ in their queries and results.**


## Live Preview Experiment

Preview nodes by id in Gatsby without a build. The goal would be a preview that works on unpublished revisions of Drupal draft content. Maybe an unnecessary alternative to Gatsby Live Preview, I don't know all the limitations of that yet.

 - @apollo/client
 - `src/pages/preview/article.js` Apollo query and React component to live render article from `/preview/article/?nid=[nid]` without a build.


## Full configuration for decoupled dev with lando.

This is also my prefered configuration for decoupled development with lando if you're interested in that. There are special provisions to make Gatsby work.

 - Find "Gatsby" comments in `.lando.yml`.
 - In `fontend/package.json`:  Include `--host 0.0.0.0` on build and serve scripts.
   ```
    ...
    "scripts": {
      "develop": "cross-env GATSBY_GRAPHQL_IDE=playground gatsby develop --host 0.0.0.0",
      "serve": "gatsby serve --host 0.0.0.0",
    },
    ...
    ```
