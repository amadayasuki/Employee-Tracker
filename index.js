const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

/*  Load Prompts
function init() {

  loadMainPrompts();
}

function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "Please choose the following options"
      choices : [

        {
          name: "View Employees",
          value: "VIEW_EMPLOYEES"
        },

        {
          name: "View Employees By Department",
          value: "VIEW_EMPLOYEES_BY DEPARTMENT"
        },

        {
          name: "View Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER"
        },

        {
          name: "Add Employee"
          value: "ADD_EMPLOYEE"
        },

        
      ]
    }
  ])
}
*/