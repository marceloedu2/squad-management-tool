# Squad Management Tool

To get started we must configure the development environment as described in [Intall Node and npm](https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329).
Now open the terminal in the project folder and install the dependencies.

## Installation
To start the project first open the terminal in the project folder and install the dependencies.

```bash
npm i
 or
yarn 
```

## Usage
The project has integration with the api [api-football](https://www.api-football.com/), to configure this, we must first register on the platform and acquire 3 access variables. 

The following files must be included in the project file within .env as in the example .env.example

Example:
```bash
NEXT_PUBLIC_API_HOST=api-football-v1.p.rapidapi.com
NEXT_PUBLIC_API_KEY=25d55ad283aa400af464c76d713c07ad
NEXT_PUBLIC_API_URL=https://api-football-v1.p.rapidapi.com/
```

## Starter
to start the project we must execute the following command:

```bash
npm run dev
 or
yarn dev
```
