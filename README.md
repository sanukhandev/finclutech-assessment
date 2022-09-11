[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


# Finclutech assessment project

### MongoDB - Express - React -  NodeJS

MERN stack is intended to provide a starting point for building full-stack JavaScript applications, including dynamic web  apps. The stack is made of MongoDB, Express, React,  and NodeJS.

## Pre-requisites
- NodeJS 16.x or higher
- MongoDB (Cloud Atlas / Local)
- NPM 8.x or higher
- Git
- Postman (optional, for testing APIs) 
- WebStorm (Personal preference)
- React Developer Tools (Chrome Extension)
- React CLi (npm install -g create-react-app) // use 16.x or higher
- Nodemon (dev dependency)
- Mongoose (dev dependency)
- Express (dev dependency)
- heroku (Cloud deployment)


## Task Description
The task: A JSON file has been created here;
https://github.com/Finclutech/finclutech_interview/blob/main/customer_info.json.
- The data entries in this JSON file should be parsed into a datastore of your choice. 
- Create a login page, allow the user to log in and verify the credentials from the
   datastore of choice. 
- Create a webpage that is accessible after the login process and allow the user of the
   system to: 
  - View the list of users that are inserted from the JSON
  - Create a new entry
  - Amend an entry
  -Remove a record
## Demo
Demo project deployed on Heroku: [https://finclutech.herokuapp.com/](https://finclutech.herokuapp.com/)
- Dummy accounts:
    - email: `sanu@admin.com` - password: `qwerty123`

## Project Breakdown

### 1. API Server


- Directory `root` contains the server code.
- Todo:
    - [x] Authentication system - JWT
        - [x] Sign up - [bcrypt](https://www.npmjs.com/package/bcrypt)
        - [x] Local login - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - [passport-jwt](https://www.npmjs.com/package/passport-jwt)
    - [x] Student management - CRUD operations

### 2. React Client

- Directory `client`
- Created by using [create-react-app](https://www.npmjs.com/package/create-react-app)
- Todo:
    - [x] Router - [react-router-dom](https://www.npmjs.com/package/react-router-dom) - [connected-react-router](https://www.npmjs.com/package/connected-react-router)
    - [x] Authentication pages
        - [x] Sign up page
        - [x] Login page
    - [x] Student management 
      - [x] Add Student
      - [x] List Students
      - [x] Edit Student
      - [x] Delete Student
    - [ ] User management pages // TODO
        - [ ] User list page
        - [ ] User edit page


### 5. CI and CD // TODO

- Directory `.github/workflows`
- Todo:
    - [ ] Testing workflow
    - [ ] Building and deploying workflow

## Getting started

### 1. Clone the `finclutech-assessment` repository


```bash
git clone https://github.com/sanukhandev/finclutech-assessment.git
cd finclutech-assessment
cp .env.copy .env
# Edit all three .env files to meet your requirements
```

### 2. Install package dependencies

In the `root` directory, run:

```bash
npm install:deps
```

### 3. Initialize the database

In the `root` directory, run:

```bash
npm seed:db
```


### 4. Start development servers

To start `server`, `client`,  run:

```bash
# In the root directory (mern):
npm start:dev
# Server API is running at http://localhost:SERVER_PORT (http://localhost:5000 by default)
# Web client is running at http://localhost:PORT (http://localhost:3000 by default)
```

**NOTE:**
- **Using concurrently dev dependency to run both the process in parallel**
- **Currently deployed to heroku server since heroku is not free from next month the project will be moving to another cloud platform soon**
- **Ignore any react warnings or errors since this project is on react 18 some of the deprecation may pop up on console**

