# Message Broadcast Code Exercise

Thank you for taking the time to interview with us! 

This repository is designed to be a boilerplate to get you started with the coding exercise portion of the interview.
You'll note that we have provided the following for you:

1. The [back-end](./back-end) directory with a basic [express-generator](https://expressjs.com/en/starter/generator.html) template 
   
AND

2. The [front-end](./front-end) directory with a basic [create-react-app](https://create-react-app.dev/) template 

Please navigate into both of these directories and execute `npm i` to install their dependencies while you familiarize yourself with the requirements below.

---

## Requirement 1

You are tasked with updating the ExpressJS server in the [back-end](./back-end) directory to:

1. On start up, fetch data from url: [https://jsonplaceholder.typicode.com/comments](https://jsonplaceholder.typicode.com/comments) and store it in any local database (sqlite, MySQL, MongoDB).
2. Host an GET endpoint that will return the data in the Table created/loaded in #1 as a JSON array of objects.

## Requirement 2

Additionally, you will update the ReactJS application in [front-end](./front-end) directory to:

3. Host a landing/index page with your name and a button linking to the following page:
4. The second page will, on load, connect to the API from #2 in [Requirement 1](#requirement-1) to get the info stored in database and display it as an HTML Table (or Bootstrap/Material GRID for bonus points). 
5. The second page should include two buttons:
   - "Refresh" button (resend the API call from #4 and repopulate the Table)
   - "Back" button to navigate to landing page from #3.

## Submission

Once you have completed the code exercise, please push the code to your own publicly accessible Git location (GitHub, GitLab, etc) and send the link to your point of contact. 

Done! Thank you for your interest in Message Broadcast, we look forward to reviewing your code!