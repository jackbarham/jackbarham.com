# Custom Portfolio Website

- Preview [www.jackbarham.com](https://www.jackbarham.com)

## Overview

Here's my portfolio website which uses Vue.js and Vue Router. To add new projects (portfolio items), create a new `project-name.json` file in `src/data` folder where the file name (project-name) will become the page slug: www.jackbarham.com/projects/project-name.

## Deploying

Once you have updated your website and added your AWS S3 and CloudFront details into `.keys.js` (remove `example` from the end of the file) and run `yarn deploy` to deploy your updates.

## Uses

- Vue.js & Vue Router
- Gulp (to deploy)
- AWS S3 & CloudFront

## Set up & Build

- Install: `yarn`
- Develop: `yarn serve`
- Deploy `yarn deploy`

## Fonts

The fonts used are [FF Meta Serif](https://fonts.adobe.com/fonts/ff-meta-serif) and [Soleil](https://fonts.adobe.com/fonts/soleil) which requires an [Adobe Fonts](https://fonts.adobe.com) account. I've haven't created a fallback option, so you're likely to see Times New Roman until you set your own font preferences.

## SEO

This project uses Vue Route without any SSR (Server Side Rendering). Google does pick up and render Javascript pages as there are no API calls, but not recommended if you need reliable SEO.
