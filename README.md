## Countries List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this project

- Clone this repo
- In the project directory run `yarn install`
- After install the dependencies run `yarn start` to run the project. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- If you can run the unit tests use `yarn test`

## Folder Structure

```bash
├── src
│   ├── components
│   │   ├── card
│   |   |   |── **/*.js
│   |   |   |── __tests__
│   |   |   |   |── **/*.test.js
│   │   ├── filter-search
│   |   |   |── **/*.js
│   |   |   |── __tests__
│   |   |   |   |── **/*.test.js
│   │   ├── form
│   |   |   |── **/*.js
│   |   |   |── __tests__
│   |   |   |   |── **/*.test.js
│   ├── hooks
│   |   |   |── **/*.js
│   ├── services
│   |   |   |── **/*.js
│   ├── utils
│   |   |   |── **/*.js
│   ├── views
│   │   ├── details
│   |   |   |── **/*.js
│   |   |   |── __tests__
│   |   |   |   |── **/*.test.js
│   │   ├── home
│   |   |   |── **/*.js
│   |   |   |── __tests__
│   |   |   |   |── **/*.test.js
```

## Tecnologies

- React
- React Testing Library
- Apollo Client
- Local State Management
- Styled Components

## To do

- Add Semaphore CI
- Create loading component and remove loading message in home and details page
- Add toast when user update country infos
- Use Typescript 
- Add GMaps and calc the distance between the select country and five nearest countries 
