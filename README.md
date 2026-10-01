# TMA-Web-Application
```text
A JavaScript-based assessment dashboard developed as part of my Open University TMA studies. The project demonstrates practical front-end development skills including  DOM manipulation, Fetch API integration

PROJECT OVERVIEW

The EduMax application provides students with an assessment dashboard containing:

Completed assessments
Upcoming assessments
Expandable and collapsible assessment details
Assessment feedback
Frequently asked questions
A form for submitting questions

JavaScript is used to control the user interface and communicate with backend API endpoints.

FEATURES

Assessment Details:

Users can expand and collapse individual assessment cards.

The interface dynamically changes the button text between:

Show details and Hide details

The aria-expanded attribute is also updated to reflect the current state of each assessment.

FEEDBACK

When feedback is required, the application retrieves data from the backend API using the browser's Fetch API.

GET /api/feedback

The returned response is displayed dynamically in the assessment interface 

Q&A

The upcoming assessment contains a Q&A section.

Questions and answers are retrieved from: GET /api/q-and-a

The returned JSON data is processed by JavaScript and dynamically converted into HTML definition-list elements.

Example:

<dt>Question</dt>
<dd>Answer</dd>
Submitting Questions

Users can submit a question through the Q&A form.

The form data is collected using the JavaScript FormData object and sent to the API using a POST request.

POST /api/q-and-a

TECHNOLOGIES
  
HTML5	                    

CSS3	                    

JavaScript	              

DOM API	                  

Fetch API	                

JSON	                    

FormData	                

API                       

QUESTIONS & ANSWERS

GET /api/q-and-a

The API returns JSON containing questions and answers.

The JavaScript application processes the response and dynamically creates the corresponding dt and dd elements.

SENDING A QUESTION

POST /api/q-and-a

The question submitted through the form is collected using FormData and sent to the backend API.

ACCESSIBILITY

Accessibility was considered when implementing the interactive assessment cards.

The toggle buttons use:

aria-expanded

to communicate whether the associated assessment details are currently visible.

The interface also provides clear button states:

Show details

when the content is hidden, and:

Hide details

when the content is visible.


 TESTING

The project includes automated tests for the application behaviour.

Install the project dependencies:

npm install

Start the development server:

npm run dev-server

Run the automated tests:

npm run test

Testing focuses on functionality such as:

Initial assessment states
Assessment toggle behaviour
Button text
aria-expanded values
API data retrieval
Dynamic Q&A rendering
Form submission

📂 Project Structure


TMA-EduMax-Web-Application/
│
├── app/
│   ├── index.html
│   ├── index.js
│   └── style.css
│
├── package.json
├── package-lock.json
└── README.md

 KEY LEARNING:

This project helped me develop practical experience with:

JavaScript DOM manipulation

JavaScript event listeners

Asynchronous programming

Fetch API

HTTP GET and POST requests

JSON data

FormData

Dynamic HTML generation

Accessibility

API integration

Automated testing

Debugging


DEVELOPMENT WORKFLOW:

The project follows a simple development workflow:

User Interaction

       ↓
       
JavaScript Event Handler

       ↓
       
DOM Manipulation / API Request

       ↓
       
Backend API Response

       ↓
       
JavaScript Processes Data

       ↓
       
Web Page Updated


FUTURE IMPROVEMENTS:

Potential improvements for a portfolio version include:

Improved API error handling

Loading indicators

Authentication and user accounts

session handling

Responsive design improvements

User-friendly error messages

Form validation

Integration with a production backend

Deployment to a cloud hosting platform


AUTHOR:

Georges Pofou

Computing and IT / Software Development Student
The Open University

Interested in:

Software Development |Test Automation | QA Automation| SDET |Web Development |API Testing
