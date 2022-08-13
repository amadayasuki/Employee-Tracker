const {prompt}= require("inquirer");
const db = require("./db");
require("console.table");

init();

/*
Bonus
Application allows users to update employee managers 
Application allows users to view employees by manager 
Application allows users to view employees by department 
Application allows users to delete departments, roles, and employees
Application allows users to view the total utilized budget of a department—in other words, the combined salaries of all employees in that department
*/


function init() {

  promptUser();
}

function promptUser() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "Please choose the following options",
      choices: [

        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENT"
        },

        {
          name: "View Employee",
          value: "VIEW_EMPLOYEE"
        },

        {
          name: "View Role",
          value: "VIEW_ROLE"
        },

        {
          name: "Add Department",
          value: "ADD_DEPARTMENT"
        },

        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },

        {
          name: "Add Role",
          value: "ADD_ROLE"
        },

        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_DEPARTMENT":
        viewDepartment();
        break;

      case "VIEW_EMPLOYEE":
        viewEmployee();
        break;

      case "VIEW_ROLE":
        viewRole();
        break;

      case "ADD_DEPARTMENT":
        addDepartment();
        break;

      case "ADD_EMPLOYEE":
        addEmployee();
        break;

      case "ADD_ROLE":
        addRole();
        break;

      default:
        quit();
    }
  })
}

// View deparment
function viewDepartment() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => promptUser());
}

// View employee
function viewEmployee() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => promptUser());
}

// View role
function viewRole() {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => promptUser());
}

// Add department
function addDepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department?"
    }
  ])
    .then(res => {
      let name = res;
      db.createDepartment(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => promptUser())
    })
}

// Add employee
function addEmployee() {
  prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      message: "What is the employee's last name?"
    }
  ])
    .then(res => {
      let firstName = res.first_name;
      let lastName = res.last_name;

      db.findAllRoles()
        .then(([rows]) => {
          let roles = rows;
          const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
          }));

          prompt({
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: roleChoices
          })
            .then(res => {
              let roleId = res.roleId;

              db.findAllEmployees()
                .then(([rows]) => {
                  let employees = rows;
                  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                    name: `${first_name} ${last_name}`,
                    value: id
                  }));

                  managerChoices.unshift({ name: "None", value: null });

                  prompt({
                    type: "list",
                    name: "managerId",
                    message: "Who is the employee's manager?",
                    choices: managerChoices
                  })
                    .then(res => {
                      let employee = {
                        manager_id: res.managerId,
                        role_id: roleId,
                        first_name: firstName,
                        last_name: lastName
                      }

                      db.createEmployee(employee);
                    })
                    .then(() => console.log(
                      `Added ${firstName} ${lastName} to the database`
                    ))
                    .then(() => promptUser())
                })
            })
        })
    })
}
// Add role
function addRole() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      const departmentChoices = departments.map(({ id, name }) => ({
        name: name,
        value: id
      }));

      prompt([
        {
          name: "title",
          message: "What is the name of the role?"
        },
        {
          name: "salary",
          message: "What is the salary of the role?"
        },
        {
          type: "list",
          name: "department_id",
          message: "Which department does the role belong to?",
          choices: departmentChoices
        }
      ])
        .then(role => {
          db.createRole(role)
            .then(() => console.log(`Added ${role.title} to the database`))
            .then(() => promptUser())
        })
    })
}

// Exit the application
function quit() {
  console.log("Goodbye!");
  process.exit();
}

