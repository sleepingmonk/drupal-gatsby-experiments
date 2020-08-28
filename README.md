# Lando + Drupal + Gatsby

This is a smash together of my "Headless Monk" starter repo and experimentation with the Frontend Masters Intro to Gatsby. There may be weird things just laying around and these are just rough ideas.


## Derivative Images Proof.

Made as a proof of concept for pulling image derivatives directly from drupal rather than image processing at Gatsby build time which can take a long time at scale.

 - `gatsby-source-graphql`
 - Drupal: graphql module (Could use JSON:API instead but I wanted to play with this.)
 - `src/templates/article.js` shows the query
 - `src/components/picture.js` component for creating the picture tab with derivatives.


## Live Preview Experiment

Also made a react component to preview nodes by id in Gatsby without a build. The goal would be a preview that works on unpublished revisions of Drupal draft content. Maybe an unnecessary alternative to Gatsby Live Preview, I don't know all the limitations of that yet.

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

---

A Drupal + React starter with Lando for local development.

 - Installs Drupal 8 with a React Frontend.
 - Pre-installs sample data for the demo.

http://headless.lndo.site

http://backend.headless.lndo.site

## Requirements

 - Docker
 - Lando
 - Clean Underpants

## How to Use

 - Clone this repo and `cd` into it.
 - `lando start`
 - `lando front:start`
 - `cd backend/web && lando drush genc 5 --types=article`
 - *** You'll need to install drupal graphql module *** It's not automated in this concept repo.
 - Navigate to http://headless.lndo.site
 - Get to work and make it your own.
