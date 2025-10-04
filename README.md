# 3D Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJMMC41IDEybDIuMTggMi4xOEwxMiA0LjU0bDkuMzIgOS42NEwyMy41IDEyIDEyIDJ6bTAgOWwtOC41IDguNzVWMTlIMjAuNVYxOS43NUwxMiAxMXoiLz48L3N2Zz4=)](https://jsueling.github.io/threejs-portfolio)

[![Build Status](https://github.com/jsueling/threejs-portfolio/actions/workflows/test_and_deploy_next_to_pages.yml/badge.svg?branch=main)](https://github.com/jsueling/threejs-portfolio/actions/workflows/test_and_deploy_next_to_pages.yml)

A 3D portfolio application built with [Next.js](https://nextjs.org/) and deployed to GitHub Pages. This project leverages [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) to create a 3D interactive experience in the browser.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: A React framework for production.
- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Three.js](https://threejs.org/)**: A cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)**: A React renderer for Three.js.
- **[React Three Drei](https://github.com/pmndrs/drei)**: A collection of useful helpers and abstractions for React Three Fiber.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or later)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/jsueling/threejs-portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project uses two primary frameworks for testing:

- **[Jest](https://jestjs.io/)**: For unit and component tests.
- **[Cypress](https://www.cypress.io/)**: For end-to-end (E2E) tests.

### Running Tests Locally

To run the Jest tests in watch mode:
```sh
npm run test
```

To run Cypress E2E tests, first ensure your development server is running (`npm run dev`). Then, in a separate terminal, you can either open the interactive Test Runner or run the tests headlessly.

To open the interactive Cypress Test Runner:
```sh
npm run cy:open
```

To run all Cypress tests headlessly in the terminal (as done in [.github/workflows/test_and_deploy_next_to_pages.yml](.github/workflows/test_and_deploy_next_to_pages.yml)):
```sh
npm run cy:run
```

## Deployment

This project is set up for continuous deployment to GitHub Pages using a customised [GitHub Actions workflow](.github/workflows/test_and_deploy_next_to_pages.yml). The workflow is triggered on a push to the `main` branch. It runs all Jest and Cypress tests, builds the Next.js application, exports it as a static site, and deploys it.

## Acknowledgements

- Thanks to [JasperTobias](https://sketchfab.com/JasperTobias) for his [Low Poly Earth](https://skfb.ly/6TAUn) model.
