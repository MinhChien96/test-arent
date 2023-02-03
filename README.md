# Test Frontend Arent

Template Typescript React Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

- [Table of Content]()
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Project structure](#project-structure)
    - [src folder](#src-folder)
  - [Project Routes](#project-routes)
    - [Public routes](#public-routes)
    - [Private routes (need auth)](#private-routes-need-auth)

## Installation

To use this template

- Clone this project
- Install dependencies from `package.json` to your machine

  ```bash
  $ yarn
  # or
  $ npm install
  ```

- Run or build project
  ```bash
  $ yarn start
  $ yarn build
  # or npm run start / npm run build
  ```
- Run mockup

  ```bash
  $ yarn run mockup
  ```

- Run lint
  ```bash
  $ yarn run lint
  $ yarn run lint:fix
  # to auto fix
  ```

## Technologies

- Integrate ESlint, Prettier
- Tailwindcss and Styled-Component
- Using TypeScript
- Functional programming with React hooks
- Using rechartjs to draw chart
- Using json-server to create fake server backend

## Project structure

### src folder

- **@type**: Declare modules, interface, type for TypeScript
- **components**: common component
- **configs**: config for project
- **hooks**: contains hooks using
- **pages**: pages of project
- **resources**: images, global style, fonts, …
- **services**: services, contains functions get, post .. api (axios e.g)
- **utils**: functions helpers

## Project Routes

### Public routes

- **Login**: '/login'
- **Column Page**: '/column': This is the column page about health
- **404**: Page not found

### Private routes (need auth)

- **Top Page**: '/'
- **My Record**: '/record'
