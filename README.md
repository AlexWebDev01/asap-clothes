# ASAP E-commerce

This is an e-commerce web-application buit with React on front-end, Netlify for hosting and Stripe for payment processing.

## Tech stack

- `TypeScript` as main language
- `React`, `redux`, `redux-saga`, `styled-components` for front-end
- `Firebase` as a database and authentication handler
- `Netlify` for hosting and lambdas (serverless functions)
- `Vite` as a build tool
- `Eslint` and `prettier` for keeping project sharp

## Prerequisite

### 1. Google

- Create or use an existing Google developer account (it's free): https://console.cloud.google.com/
- Create a new project
- Enable API & services: `Identity Toolkit API`, `Cloud Firestore API`, `Token Service API`

### 2. Firebase

- Create or use an existing Firebase account (it's free): https://firebase.google.com/
- Go to the console: https://console.firebase.google.com/
- Create a project
- Open the Firestore Database section and create a database
- Fill database manually or use existing in project util: `addCollectionAndDocuments`
- Open the Authentication section and choose providers: `Email/Password`, `Google` (for Google provider you should copy the ID of your Google project)

### 3 Stripe

- Create or use an existing Stripe account (it's free): https://stripe.com/
- Create a project

### 4. Netlify

- Create or use an existing `Netlify` account (it's free)
- Create a new project, chain it with the project repo on your GitHub/GitLab account

## Installation

- Install project dependencies: `npm install`
- Create a `.env` file with variables:

```
VITE_NODE_ENV = production || staging
STRIPE_SECRET_KEY = Copy from the Stripe
VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY = Copy from the Stripe
VITE_FIREBASE_API_KEY = Cope from the Firebase
```

- Add the same .env variables into Netlify project: `Configuration` -> `Environment variables` -> `Add a variable`

## Netlify functions local usage

In this project is used Netlify function. It's is a serverless function that provides any function available via API call:
https://www.netlify.com/platform/core/functions/

For using Netlify functions locally install the CLI and start the project with Netlify command:

### Install or update the Netlify CLI

`npm install netlify-cli -g`

### Start Netlify Dev

`netlify dev`

## Npm scripts and commands

Production build: `npm build && npm start`

Development mode: `npm run dev` || `vite dev`

Linters: `npm run lint:fix`

Development mode with Netlify functions: `netlify dev`
