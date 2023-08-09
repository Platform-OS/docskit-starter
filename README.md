<h1 align="center">
  platformOS DocsKit Starter
</h1>

## Prerequisites

* PlatformOS: https://platformos.com
* DocsKit: https://docskit.platformos.com
* GatsbyJS: https://www.gatsbyjs.com/docs
* Markdown: https://www.markdownguide.org/
* MDX: https://mdxjs.com/

## Installation

```
npm install && npm install --prefix src
```

## Updating the content

You can change the existing sample pages or create new ones in the `src/docs` folder.

## Changing the theme and extending the built-in components

You can update the default theme by providing your custom colors (in RGB format) in the theme configuration file: `src/src/@platformos/gatsby-theme-platformos-docskit/theme/colors.js`

This file acts as a design token file and you can override it using the Gatsby Shadowing API.

You can also provide your own component overrides using the same concept.

For more details you can check the official Gatsby documentation: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/

## Development build

```
npm run develop --prefix src
```

This will start the Gatsby dev server at http://localhost:8000/

## Production build

```
npm run build
```

### Manual deployment
For manual deployment you should set the node environment variable `ASSET_PREFIX` to point to your full platformOS asset url, or you can hardcode the asset url in `src/gatsby-config.js` (`assetPrefix`).

### Automated Deployment using Github Workflows

You can find the GitHub workflow actions in the `.github.example/workflows` folder.
You can rename `.github.example` to `.github` to enable these default workflows.

## GitHub workflows

* preview: This workflow runs automatically for every Pull Requests opened for the `master` branch. It builds the PR version and deploys it to a preview environment.
* deploy_to_qa: This workflow runs automatically when you merge a PR to the master branch, deploying the latest stable version to the QA/UAT environment
* deploy_to_production: You can run this workflow manually to deploy the latest master branch to production

You need to set up the following github secrets for your workflows:
* MPKIT_EMAIL: The email assigned to your Partner Portal user
* MPKIT_TOKEN: Your partner portal access token
* MPKIT_PREVIEW_URL: The instance url for your PREVIEW instance
* MPKIT_QA_URL: The instance url for your QA instance
* MPKIT_PROD_URL: The instance url for your PRODUCTION instance

You also need to set up these environment variables for your workflow:
* PREVIEW_ASSET_PREFIX: The full asset url for your PREVIEW instance
* QA_ASSET_PREFIX: The full asset url for your QA instance
* PROD_ASSET_PREFIX: The full asset url for your PRODUCTION instance

