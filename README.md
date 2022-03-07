# team-profile-generator

Bootcamp Week 10: Homework

# 10 Object-Oriented Programming: Team Profile Generator

## Table of Contents 

- [Description](#description)
- [User Story](#story)
- [License](#license)
- [Installation Guide](#installation)
- [My Solution](#my-solution)
- [Test](#test)
- [Samples](#samples)
- [Questions](#questions)

## Description

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

> **Note**: There is no starter code for this assignment.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## License

🏆 This application is licensed under The MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation Guide

This application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. So you need to install all these necessary dependencies. First clone the repository then run the following command at the root directory to install the dependencies:

```
npm i
```
    
The application will be invoked by using the following command:
    
```
node index
```

A directory structure looks like in the following way:

```
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

## My Solution

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes

## Test

The tests for these classes (in the ./tests directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Samples

The index.html file is created in ./dist directory. Here is a link of the generated [index.html](./dist/index.html) as a result of this application.

Because this application won’t be deployed, here is a link to a walkthrough video that demonstrates the Team Profile Generator functionality. 

- [Walkthrough Video - Screen Castify Format](./images/team-profile-functionality-webm.webm) 
- [Walkthrough Video - Mp4 Format](./images/team-profile-functionality-mp4.mp4)

Also, passing tests must be submitted, and a link to the video. The walkthrough video must show all four tests passing from the command line.

- [Walkthrough Video - Screen Castify Format](./images/team-profile-functionality-webm.webm) 
- [Walkthrough Video - Mp4 Format](./images/team-profile-functionality-mp4.mp4)

### Screenshots 

The following image shows the inputs from the command line in Terminal: ![User Input](./images/command-line-input.png)

The following image shows the generated HTML’s appearance: ![HTML webpage titled “Developer Team” features five boxes listing employee names, titles, and other key info.](./images/team-profile-generator.png)

## Questions

If you have any questions about the repo, open an issue or contact me directly at naraamtm@gmail.com. You can find more of my work at [GitHub](https://github.com/nara1469/).