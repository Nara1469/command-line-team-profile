const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

const promptMember = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Team member name:',
    },
    {
      type: 'rawlist',
      name: 'role',
      message: 'Select the member\'s role:',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
    },
  ]);
}

const beginHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/css/style.css">
  <title>Team Profile</title>
</head>
<body>
  <header>
    <h1>Developer Team</h1>
  </header>
  <div class="container">`;

const endHTML = `\n  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="./assets/js/script.js"></script>
</body>
</html>`;

function addEmployeeCard(member) {
  console.log(member);
  // return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = '';
    switch (role) {
      case 'Engineer': {
        const github = member.getGithub();
        data = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item"><a href="https://github.com/${github}">GitHub: ${github}</a></li>
              </ul>
            </div>
          </div>`;
        break;
      }
      case 'Intern': {
        const school = member.getSchool();
        data = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
              </ul>
            </div>`;
        break;
      }
      case 'Manager': {
        const office = member.getOfficeNumber();
        data = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">Office: ${office}</li>
              </ul>
            </div>
          </div>`;
        break;
      }
      default:
        break;
    }
    console.log(data);
    console.log(`Adding team member: ${role}`);
    fs.appendFileSync("index.html", data);
  // });
}

function addMember() {
  promptMember()
    .then(function ({ name, role, id, email }) {
      let roleQuestion = '';
      switch (role) {
        case 'Engineer':
          roleQuestion = 'GitHub username:';
          break;
        case 'Intern':
          roleQuestion = 'school name:';
          break;
        case 'Manager':
          roleQuestion = 'office #:';
          break;
        default:
          roleQuestion = '';
          break;
      }
      console.log(role);
      inquirer.prompt([
        {
          type: 'input',
          name: 'roleDependent',
          message: `${role}'s ${roleQuestion}`,
        },
        {
          type: 'confirm',
          name: 'moreMembers',
          message: 'Would you like to add more team members?',
        }])
        .then(function ({ roleDependent, moreMembers }) {
          let newMember;
          switch (role) {
            case 'Engineer':
              newMember = new Engineer(name, id, email, roleDependent);
              break;
            case 'Intern':
              newMember = new Intern(name, id, email, roleDependent);
              break;
            case 'Manager':
              newMember = new Manager(name, id, email, roleDependent);
              break;
            default:
              break;
          }
          employees.push(newMember);
          // console.log(employees);
          // console.log(newMember);
          if (employees.length === 1) {
            fs.writeFileSync('index.html', beginHTML);
          }
          addEmployeeCard(newMember);
          if (moreMembers) {
            addMember();
          } else {
            fs.appendFileSync('index.html', endHTML);
          }
        });
    });
}

// a function to initialize app
function init() {
  addMember();
}

// Function call to initialize app
init();
