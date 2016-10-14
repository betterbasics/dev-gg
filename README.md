# [Better Basics - Replication of Greater Goods Development Website](http://betterbasics.com/dev/)

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
* [IIS Node](https://hostek.com/blog/everything-you-need-to-run-node-js-applications-on-windows-iis/)

#### Internet Information Services (IIS)

Internet Information Services (IIS) for Windows® Server is a flexible, secure and manageable Web server for hosting anything on the Web. From media streaming to web applications, IIS's scalable and open architecture is ready to handle the most demanding tasks. ([Source](https://www.iis.net/))

We need to install IIS in order to run the MEAN Stack in Windows® Server.
* [Install IIS 7](https://www.iis.net/learn/install/installing-iis-7/installing-iis-on-windows-vista-and-windows-7)

The project runs in [dev directory](https://github.com/betterbasics/dev-gg/tree/master/dev) (http://localhost/dev/) above. To have a sub directory running as your index page, we have to create a web application under the IIS Manager Default Website. Below is the guide on how to create a web application.
* [Create a Web Application (IIS 7)](https://technet.microsoft.com/en-us/library/cc772042(v=ws.10).aspx)

#### Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. ([Source](https://git-scm.com/))

Git ensures us to manage changes to source code over time.
* [Install Git on Windows](https://www.atlassian.com/git/tutorials/install-git/mac-os-x)

#### MongoDB

MongoDB is an open source, document-oriented database designed with both scalability and developer agility in mind. Instead of storing your data in tables and rows as you would with a relational database, in MongoDB you store JSON-like documents with dynamic schemas. The goal of MongoDB is to bridge the gap between key-value stores (which are fast and scalable) and relational databases (which have rich functionality). ([Source](https://www.youtube.com/watch?v=CvIr-2lMLsk))

Follow the link below to install MongoDB Community Edition on Windows systems.
* [Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Node.js®

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. ([Source](https://nodejs.org/en/))

Guide for a complete Node.js® installation.
* [How to Install Node.js® and NPM on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

#### IIS Node

The [iisnode module](https://github.com/Azure/iisnode), from Tomasz Janczuk does all the heavy lifting. In short the module acts as the go between IIS and Node. This enables some really nice functionality that you won’t find by running node from the command prompt exclusively. ([Source](https://hostek.com/blog/everything-you-need-to-run-node-js-applications-on-windows-iis/))

A few of these advantages are:
* You can run a Node.js® app independently on port 80.
* Your Node.js® apps can be managed as part of your other websites and apps.
* Your letting IIS manage the Node.js® process.

Follow the guide below to run Node.js® applications on Windows IIS.
* [Hosting Node.js® Applications in IIS on Windows](https://github.com/Azure/iisnode)

### Required Packages

Once Node.js and MongoDB are installed we need some packages via the [NPM Package Manager](https://www.npmjs.com/). NPM is a package manager like Nuget, Macports, Ruby Gems etc. It’s possible to search fir and download many 3rd party libraries to use via NPM. NPM will already be installed as part of Node.js. ([Source](http://www.bradoncode.com/tutorials/mean-stack-tutorial-part-1-setup/))

The required packages are:
* **bower** - A package manager for the web. We use NPM for server side node.js modules and Bower manages front-end packages like angular, jquery etc. See the [npm bower package](https://www.npmjs.com/package/bower) for more info.
* **grunt-cli** - This is required so that we can run Grunt tasks from the CLI. See the [npm grunt-cli package](https://www.npmjs.com/package/grunt-cli) for more info. [Grunt](http://gruntjs.com/) is a JavaScript task runner that can be used to automate tasks such as deployment steps, unit testing, linting etc.

Here are the commands to run in the terminal to get these packages:
```
npm install -g bower
npm install -g grunt-cli
```
*Windows Users: You can run these commands via Node.js Command Prompt (comes with Node install), Powershell or if you have installed Git for Windows via the Git bash emulator.*

### Restoring Database

We need to import data to our mongo by simply using the **mongorestore** command. See the [mongorestore component](https://docs.mongodb.com/v2.6/reference/program/mongorestore/#bin.mongorestore) for more info.

Run the Command Prompt and change the directory as to where the backup data is located. In this case,
```
dev/data/
```

Execute this command:
```
"c:\Program Files\MongoDB\Server\3.2\bin\mongorestore" -d goods .\goods
```
*Note: mongorestore directory differs from where it resides in your local pc.*