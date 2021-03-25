<h1 align="center"> FullStack Blog-App FrontEnd </h1>

<div align="center">
  <h3 align="center">
    <a href="https://github.com/SemihDurmus/Fullstack_Blog_App_Frontend_prev.git">
       Previous Commits
    </a> |
    <a href="https://github.com/SemihDurmus/FullStack_Blog_App_FrontEnd">
       Source Code
    </a> |
        <a href="#">
      Live Demo - Coming soon
    </a>
    
 
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

<img src="src/assets/landing.png" width="800">
<img src="src/assets/home.png" width="800">
<img src="src/assets/search.png" width="800">
<img src="src/assets/profile_page.png" width="800">
<img src="src/assets/comment.png" width="800">
<img src="src/assets/forgot.png" width="800">

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- Code Buddy : [Ramazan Aksu](https://github.com/raymondaksu)

## Features

This app comprises use of Web Socekts, Live Chat, Formik & Yup, CRUD operations, Routing, Context, Axios, Local storage and Pagination in React.js. In addition to the mentioned features there are user authentication and password reset features provided by the back-end side. Styling is done by Material-UI and CSS.

- At the langing page, the user can either create an account, log in with his credentials or continue to the home page without logging in.
- There is another option on landing page: forgot password. If this option is selected the programs asks for an email address to send a reset password link. If the entered address is not assigned to any user, the email wil not be sent. After following the link in email, the user can create a new password.
- On the home page user can see a search area, category selector and all the published posts as cards. Only 6 cards are shown per page, so to see more of the posts there is pagination.
- Search area is for filtering the posts by titles by the entered keyword. The category selector is for filtering the posts by categories. It is possible to enter more than one category.
- An unauthenticated user can only view the cards, but not more.
- An authenticated user can view his profile by clicking on the avatar on top-right.
- Profile consists of an image and bio. Options on profile page are:
  - STATS: A modal to show the post statistics
  - STORIES : Shows the published and draft posts of the user seperately
  - EDIT PROFILE: A modal to edit image URL and bio.
  - ACCOUNT SETTINGS: A page to view the account info. This page contains 3 more options:
    - Change Credentials: A modal that the user can change username and email
    - Change Password: A modal that the user can change the password
    - Delete Account: A modal that the user can delete the account
- The orange colored plus sign on top right is the link to create a post. This button directs to a page where the user can create a post by entering title, image URL, content and category. User can also decide whether to publish the post or save as a draft.
- On the home page user can view the details of a post by clicking on the card.
- In addition to the title, content, author name & avatar and post date; post detail page includes like, page view and comment count displays. Like button is clickable. It toggles and change its color every time it is clicked.
- Bottom of the post content comes the comments. A comment inholds commenter name, avatar, content and create date. If the current user on the page is the owner of the comment, he has the option to edit or delete his own comment. Once the comment is edited, the expression "edited" appears next o the edit date. The user can submit a comment using the text area on the bottom of the page.
- If the current user is the owner of the post at te post detail page, two more options are displayed on the bottom: EDIT POST and DELETE POST.
- The user can click on other users avatars to view their profiles. In this page there is user image, bio, user's stats modal, published posts and one more thing: LIVE CHAT
- Live Chat is a modal box, where the current user has the option to send direct message to another user. Here a list of previous messages are also displayed.

## How To Use

The packages/dependencies below should be installed prior to running the app.

```
    "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "formik": "^2.2.6",
    "gh-pages": "^3.1.0",
    "moment": "^2.29.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-lines-ellipsis": "^0.14.1",
    "react-loadingg": "^1.7.2",
    "react-paginate": "^7.0.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "react-select": "^4.0.2",
    "web-vitals": "^0.2.4",
    "yup": "^0.32.8"

```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- Source of Backend and APIs : [Live on heroku](https://fs-blog-backend.herokuapp.com/)
- Source of Backend Code : [Repository](https://github.com/SemihDurmus/Fullstack_Blog_App_Backend)

## Contact

- GitHub [SemihDurmus](https://github.com/SemihDurmus)
- Linkedin [@Semih Durmus](https://www.linkedin.com/in/semih-durmus-0548751b7/)
