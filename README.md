# Akin News 

## Front End React App


Akin News Application is a news aggregation demo loosely based on Reddit.

This project aims to demonstrate some of the skills I've learnt in my front end study and is mostly dedicated to React subjects including:

-React DOM
-React Lifecycle
-React Routing
-Optimistic Rendering
-Error Handling
-CSS styling

This front end application interacts with the back end RESTful API I created. Details of the API may be found on Github: https://github.com/Akin-23/akin_news-api

## Using Akin News

A working example of this demo is published at https://loquacious-faun-fbecf6.netlify.app/

### Functionality

To access the complete range of features within the application, user authentication is required. By simply clicking the "User Login" link in the navigation bar, the demo initiates a GET request to the API, presenting a list of available users for selection. You can login in by clicking on the user's avatar. Once logged in as a user, you gain access to exciting capabilities on the website.

#### Home and Topic Routes

Upon loading, the demo initiates requests to retrieve lists of topics and articles from the API. These topics are then seamlessly integrated into the drop-down menu within the Header component, facilitating dynamic menu generation.

Both the home and topic pages employ the same Article card component to present concise summaries of articles, ensuring a consistent user experience.

Furthermore, the application offers flexible article sorting options on the home page, allowing users to arrange articles by date, vote count, or comment count. Additionally, users can specify whether they prefer ascending or descending order for the sorting. This feature enhances user control and customization of their content viewing experience.

#### Individual Article Routes

The Single Article component requests and displays an article based on the supplied route. It displays:
the full article
-associated meta data:
-author
-publication date
-image
-topic
-vote and comment counts
-comments associated with the article

Logged in users may:
vote the article up or down
publish comments on the article
delete their own comments

#### Errors
Bad route errors result in the relevant 404 page.

## Installing a Local Copy

These instructions will help you to get a copy of Akin News up and running on your local machine for testing purposes.

Installing
Please ensure you have [Node.js](https://nodejs.org/en/download) installed.

Duplicate or fork this repository from https://github.com/Akin-23/akin-news-frontend

Inside this new directory, install the required NPM packages:

npm install

### Run the application
To start the application, run this command in the CLI:
npm run dev


Author:
👤 Peter Akin-Nibosun
GitHub: @Akin_23
Linkedin: https://www.linkedin.com/in/peter-akin-nibosun-b63753270/



