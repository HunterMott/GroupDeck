## Overview

**GroupDeck** is a web application built to help people find other people with similar interests! Once you make an account you can create your own event for people to see and come check out or check out others events to see if you would be interested in going to their event!
<br>

## MVP

- Back-end
  - Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
  - Have at least 1 association between tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between non-User tables 
  
- Front-end
  - Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in my components efficiently.
  - Use _only_ React for DOM Manipulation.
  - Consume data from my **Ruby on Rails API**, and render that data in my components.
  - Utilize **React Router**, for client-side routing.
  - Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.
  
<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React makes it painless to create interactive UIs |
|   React Router   |Helps with routing and making my life easy|
|   Material UI    | A Google component library |
|  Ruby on rails   | A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller |

<br>

### Client (Front End)

#### Wireframes

- Mobile Landing

![imagealt](https://i.imgur.com/85nVthc.png)

- Sign in / Sign up

![Dummy Link](https://i.imgur.com/ZmwQT2i.png)

- Signed in home / Details page

![Dummy Link](https://i.imgur.com/B5Yyxms.png)

- Add new / User Events

![Dummy Link](https://i.imgur.com/ca87TfR.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ components/
      |__ LoginForm.jsx
      |__ SignupForm.jsx
      |__ Events.jsx
      |__ AddEventForm.jsx
|__ services/
      |__ ApiConfig.js
      |__ Events.js
      |__ Users.js
|__ screens/
      |__ Login.jsx
      |__ Signup.jsx
      |__ MyEvents.jsx
      |__ EventEdit.jsx
      |__ Create.jsx
      |__ Home.jsx
      |__ EventDetail.jsx
|__ Layout/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Layout.jsx
      |__ Footer.jsx

```

#### Component Tree

![Component tree](https://i.imgur.com/K7R2U5e.png)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Prep    |    H     |     4 hrs      |     2 hrs     |    3 hrs    |
| Backend Skeleton |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Backend finish   |    H     |     6 hrs      |     3 hrs     |     TBD     |
| Start Client   |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Build basic components |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |    H     |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |    H     |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |    H     |     6 hrs      |     3 hrs     |     TBD     |
| Add Contact Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |    H     |     6 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![imagealt](https://i.imgur.com/8yFLr0h.png)

<br>

***

## Post-MVP

  - Likes and comments on events
  - Share events with your friends
  - Create groups for people to join
  
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
