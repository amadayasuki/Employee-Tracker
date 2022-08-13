const { prompt } = require("inquirer");
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
      choices : [

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
