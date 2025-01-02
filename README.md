<img src="public/studio-sanity.jpg" alt="Studio" width="100%">

## Intro

Studio is a Sanity CMS project starter.

## Root Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3333` |
| `npm run build` | Build your sanity to `./dist/`              |
| `sanity deploy` | Deploys the studio latest changes to Sanity |

### Config File

. Please make sure to update your `projectId`<br>
. Update your schema types here `sitePages` ['home', 'post', ...] (later used in the api)<br>
. Upate your local and netlify URLs

### Quering data

[api.js](data/api.js)<br>
Helpers to get the data from the Studio

[queries.js](data/queries.js)<br>
Queries in groq to get the data from post types, components & settings

### Embeding The Studio into your project

To embed the studio into your project you need to move two files to the root directory<br>

[sanity.cli.js](sanity.cli.js)<br>
[sanity.config.js](sanity.config.js)

We also recomend to move the [data/](data) folder to the root

🚨🚨🚨 Please make sure to update the reference of the `config file` on [sanity.cli.js](sanity.cli.js)

🚩🚩🚩 Small note if you move the project to the root folder `sanity deploy` needs to be run
on the root folder not on the studio folder

### Authors

Karl Justiniano - [@karljstn](https://x.com/karljstn)<br>
Mario Sanchez Maselli - [@mariosmaselli](https://x.com/mariosmaselli)
