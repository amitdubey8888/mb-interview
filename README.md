# Message Broadcast Code Exercise

Thank you for taking the time to interview with us! 

This repository is designed to be a boilerplate to get you started with the coding exercise portion of the interview.
You'll note that we have provided the following for you:

1. The [back-end](./back-end) directory with a basic [express-generator](https://expressjs.com/en/starter/generator.html) template 
   
AND

2. The [front-end](./front-end) directory with a basic [create-react-app](https://create-react-app.dev/) template

## Set Up

Before starting, please fork, clone, or download the repository to your local machine.

Please navigate into both of these directories and execute `npm i` to install their dependencies while you familiarize yourself with the requirements below.

## Important Conditions

1. You are encouraged to ask questions if something is unclear, we want you to succeed!
2. You may use any _publicly available_ source (StackOverflow, API Documentation, etc) during the exercise, but you may __NOT__ use any snippets or code from previous projects.
3. We encourage making use of multiple commits to display your familiarity with Git, and easy reversion in case you'd like to change your approach.

---

## Requirement 1

You are tasked with updating the ExpressJS server in the [back-end](./back-end) directory to:

1. On start up, fetch data from url: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments) and store it in any local database (sqlite, MySQL, MongoDB, Postgres).
2. Host a GET endpoint that will return the data in the Table created/loaded in #1 as a JSON array of objects.

## Requirement 2

Additionally, you will update the ReactJS application in [front-end](./front-end) directory to:

3. Host a landing/index page with your name and a button linking to the following page:
4. The second page will, on load, connect to the API from #2 in [Requirement 1](#requirement-1) to get the info stored in database and display it as an HTML Table (or Bootstrap/Material GRID for bonus points). 
5. The second page should include two buttons:
   - "Refresh" button (resend the API call from #4 and repopulate the Table)
   - "Back" button to navigate to landing page from #3.

## Submission

Once you have completed the code exercise, please push the code to your own publicly accessible Git location (GitHub, GitLab, etc) and send the link to your point of contact.

Alternatively, you may create a ZIP file with your submission and send it via email, dropbox, or cloud drive to your proctor. 
__Please remember to remove the `node_modules` directories to reduce file size before sending this way.__

Done! Thank you for your interest in Message Broadcast, we look forward to reviewing your code!