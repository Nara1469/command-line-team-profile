const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

// Ask questions(name, role, id, email) from command line
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
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body>
  <header>
    <h1>Developer Team</h1>
  </header>
  <div class="container">`;

const endHTML = `\n  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</body>
</html>`;

// Append an employee card in HTML
function appendEmployeeCard(member) {
  const name = member.getName();
  const role = member.getRole();
  const id = member.getId();
  const email = member.getEmail();
  let card = '';
  switch (role) {
    case 'Manager': {
      const office = member.getOfficeNumber();
      card = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>🌟 ${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">Office #: ${office}</li>
              </ul>
            </div>
          </div>`;
      break;
    }
    case 'Engineer': {
      const github = member.getGithub();
      card = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>🚀 ${role}</h4>
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
      card = `\n    <div class="card shadow bg-white rounded">
            <div class="card-header">
              <h3>${name}</h3>
              <h4>🎓 ${role}</h4>
            </div>
            <div class="card small-card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">Email: ${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
              </ul>
            </div>
          </div>`;
      break;
    }
    default:
      card = '';
      break;
  }
  console.log(`Adding team member: ${role}`);
  fs.appendFileSync('./dist/index.html', card);
}

// Get an employee info from command line and create index.html
function addMember() {
  promptMember()
    .then(function ({ name, role, id, email }) {
      let roleQuestion = '';
      switch (role) {
        case 'Manager':
          roleQuestion = 'office #:';
          break;
        case 'Engineer':
          roleQuestion = 'GitHub username:';
          break;
        case 'Intern':
          roleQuestion = 'school name:';
          break;      
        default:
          roleQuestion = '';
          break;
      }
      // console.log(role);
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
            case 'Manager':
              newMember = new Manager(name, id, email, roleDependent);
              break;
            case 'Engineer':
              newMember = new Engineer(name, id, email, roleDependent);
              break;
            case 'Intern':
              newMember = new Intern(name, id, email, roleDependent);
              break;
            default:
              break;
          }
          employees.push(newMember);
          if (employees.length === 1) {
            fs.writeFileSync('./dist/index.html', beginHTML);
          }
          appendEmployeeCard(newMember);
          if (moreMembers) {
            addMember();
          } else {
            fs.appendFileSync('./dist/index.html', endHTML);
          }
        });
    });
}

/* pseudo coding
function addMember() {
  inquirer.prompt([
    name,   
    role, // choices['Manager', 'Engineer', 'Intern']
    id,
    email,
  ])
  .then({name, role, id, email}) {
    let roleQuestion = ''
    switch (role) {
      case 'Manager' : roleQuestion = 'office'
      case 'Engineer' : roleQuestion = 'github'
      case 'Intern' : roleQuestion = 'school'
    }
    inquirer.prompt([
      roleQuestion,
      moreMember, // add more member (Y/N)
    ])
    .then({roleQuestion, moreMember}) {
      // create newMember class with input info
      // writeFile with beginning of HTML
      // appendFile with member info
      if (moreMember) {
        function addMember() // call this.function itself
      else
        // appendFile with ending of HTML
      }
    })
  })
}
*/


// a function to initialize app
function init() {
  addMember();
}

// Function call to initialize app
init();
