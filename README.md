<a id="readme-top"></a>

## About The Project

Onboarding project for Runtime Revolution.

### Built With

[![Node][Node.js]][Node-url]
[![React][React.js]][React-url]

## Getting Started

This section shows how to setup the project.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/pangelinoRR/onboarding.git
   ```

2. Navigate to the API directory:

   ```sh
   cd api
   ```

3. Create an .env file with the following entries:

   ```env
    DB_USER=<your-mongodb-user>
    DB_PASSWORD=<your-mongodb-password>
    DB_HOST=<your-mongodb-host>
    DB_PORT=<your-mongodb-port>
    DB_NAME=<your-mongodb-database-name>

    JWT_SECRET=<secret-key-for-jwt-tokens>
   ```

4. Install the NPM packages:

   ```sh
   npm install
   ```

5. Run the API with the following command:

   ```sh
   npm run dev
   ```

6. In another terminal tab, navigate to the React app directory:

   ```sh
   cd app
   ```

7. Create an .env file with the following entries:

   ```env
    VITE_API_URL=<your-api-base-url>
   ```

   The api base url should look something like: http://localhost:3000/api

8. Next, install the NPM packages:

   ```sh
   npm install
   ```

9. Finally, run the React app with the following command:

   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">Back to top</a>)</p>

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
