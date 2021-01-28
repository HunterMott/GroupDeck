## Overview

_**GroupDeck** is a web applictaion built to help people find other people with similar interests! Once you make an account you can create your own event for people to see and come check out or check out others events to see if you would be interested in going to their event!
<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.
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

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React makes it painless to create interactive UIs |
|   React Router   |Helps with routing and making my life easy|
|   Material UI    | A Google component library |
|  Ruby on rails   | A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![https://whimsical.com/p4-brrrr-MMF9uJT7ruDfRrhpS1gJ7P](https://whimsical.com/p4-brrrr-MMF9uJT7ruDfRrhpS1gJ7P)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![imagealt](https://i.imgur.com/8yFLr0h.png)

<br>

***

## Post-MVP

  - Likes and comments on events
  - Share events with your friends
  
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
