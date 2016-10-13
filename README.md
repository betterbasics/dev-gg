# Project Title

This project is similar to [Greater Goods](https://greatergoods.com/) and it is developed using MEAN Stack.

## Overview of MEAN

* MEAN is a collection of JavaScript-based technologies ([**M**ongoDB](https://www.mongodb.com/)(A NoSQL database powered by JavaScript), [**E**xpress.js](http://expressjs.com/)(A Node.js application framework), [**A**ngularJS](https://angularjs.org/)(A front-end javascript application framework), and [**N**ode.js](https://nodejs.org/en/)(A server-side javascript application engine)) used to develop web applications.
* From the client and server sides to databases, MEAN is a full-stack development toolkit.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Internet Information Services (IIS)](https://www.iis.net)
* [Git](https://git-scm.com/)
* [MongoDB](https://www.mongodb.com/)
* [Node.js®](https://nodejs.org/en/)

#### Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. ([Source](https://git-scm.com/))

Git ensures us to manage changes to source code over time.
* [Install Git on Windows](https://www.atlassian.com/git/tutorials/install-git/mac-os-x)

#### Internet Information Services (IIS)

Internet Information Services (IIS) for Windows® Server is a flexible, secure and manageable Web server for hosting anything on the Web. From media streaming to web applications, IIS's scalable and open architecture is ready to handle the most demanding tasks. ([Source](https://www.iis.net/))

We need to install IIS in order to run the MEAN Stack in Windows® Server.
* [Install IIS 7](https://www.iis.net/learn/install/installing-iis-7/installing-iis-on-windows-vista-and-windows-7)

#### MongoDB

MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind. Instead of storing your data in tables and rows as you would with a relational database, in MongoDB you store JSON-like documents with dynamic schemas. The goal of MongoDB is to bridge the gap between key-value stores (which are fast and scalable) and relational databases (which have rich functionality). ([Source](https://www.youtube.com/watch?v=CvIr-2lMLsk))

Follow the link below to install MongoDB Community Edition on Windows systems.
* [Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Node.js®

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. ([Source](https://nodejs.org/en/))

Guide for a complete Node.js® installation.
* [How to Install Node.js® and NPM on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

### Required Packages

Once Node.js and MongoDB are installed we need some packages via the [NPM Package Manager](https://www.npmjs.com/). NPM is a package manager like Nuget, Macports, Ruby Gems etc. It’s possible to search fir and download many 3rd party libraries to use via NPM. NPM will already be installed as part of Node.js. ([Source](http://www.bradoncode.com/tutorials/mean-stack-tutorial-part-1-setup/))

The required packages are:
* **bower** - A package manager for the web. We use NPM for server side node.js modules and Bower manages front-end packages like angular, jquery etc. See the [npm bower package](https://www.npmjs.com/package/bower) for more info.
* **grunt-cli** - This is required so that we can run Grunt tasks from the CLI. See the [npm grunt-cli package](https://www.npmjs.com/package/grunt-cli) for more info. [Grunt](http://gruntjs.com/) is a JavaScript task runner that can be used to automate tasks such as deployment steps, unit testing, linting etc.

Here are the commands to run in the terminal to get these packages:
***Windows Users:** You can run these commands via Node.js Command Prompt (comes with Node install), Powershell or if you have installed Git for Windows via the Git bash emulator.*
```
npm install -g bower
npm install -g grunt-cli
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
