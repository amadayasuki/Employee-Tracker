# Employee-Tracker
This challenge is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

### Challenge Requirements
```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
## Screenshots

Some screenshots of some of the API routes being tested.

<img src= "" width="500px"/>


## Installation and Start Up

1. To install, `git clone` the repository and run `npm install` to install dependencies.

2. Connect to MYSQL: 
```
run source db/db/sql
source db/schema.sql
source db/seeds.sql
```

3. Create an .env file and add your MYSQL username and password

4. Run `npm start` 

## Technologies

This app uses:

- Express
- Node
- MYSQL
- Inquirer

## Link To Demo:

https://drive.google.com/file/d/1_psNOsJRxVKObNfR1nRp4svZ53zzsLy4/view