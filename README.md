# React Oktio Dashboard

This project is a Oktio super buyer and supplier dashboard for managing projects. 

## Application Features
-Auction
-Project listing.
-Events.


 ### How I will improve more on this application:

##### - If giving more time and incentives for this project, I would integrate all API endpoints and ensure they work properly.




#### I am also currently doing refactoring of the application and improving more on the design and functionality. 

### The application is also fully deploy and hosted on Netlify. Live view of the application Demo can be found here- [React Oktio Dashboard](https://oktio-dashboard.netlify.app)

## Pictutial View of the Application


![front]()



## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
   
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

The project has two branches: `master`, `dev`.

* `master` contains the full source code on the solution I have developed for this excercise
* `dev` . It also contains code under  development and refactoring. 

 ## Project Folder structure.

```
	project-title
	├── README.md
	├── package.json
	├── .gitignore
	├── public
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	└── src
	      └── components
		        ├── assets
			     -  images
				├──Activity
				├──Auction
				├──common
				├──featuredInfo
				├──sidebar
				├──topbar
				├──widgetSm

			    ├── pages
				     ├──dashboard
					      ├── dashboard.js
						  ├── dashboard.css
					 ├──user
					     ├── user.css
						 ├── User.js
	      └── Redux
	              └── apiCalls.js
		          ├── projectRedux.js
				  ├── store.js
		          ├── userRedux.js
		   
	  ├── index.css
	  ├── index.js
	  ├── registerServiceWorker.js
```

### Tools Required
The following tools is required to develop and run this application:

* A text editor or an IDE (like Vscode)
* Command Line

### Installation
Installation steps:

##Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js
![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
You must have to install packages. You can do this by running yarn or npm install from the root of the project to install all the necessary dependencies.

### Development server


#### Running the App

  ``` 
Run yarn start or npm stall from the root of your project to start a dev server. 
Navigate to http://localhost:3000/. 
The app will automatically reload if you change any of the source files.
  ```

## Deployment

You can deploy the application on any server. You can make use of Netlify,a git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. Visit [Netlify](https://www.netlify.com/)


## Authors

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


`Oktio Dashboard` is open source software

## Resources

I made use of these `resources` during development.

* [Raect Doc](https://reactjs.org/docs/getting-started.html)
* [Material Ui](https://mui.com/)
* [Redux](https://redux.js.org/)
