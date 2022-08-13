use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 200000, 1),
    ('Salesperson', 10000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 130000, 2),
    ('Account Manager', 200000, 3),
    ('Accountant', 150000, 3),
    ('Legal Team Lead', 300000, 4),
    ('Lawyer', 200000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Levi', 'Ackerman', 1, NULL),
    ('Sasha', 'Braus', 2, 1),
    ('Eren', 'Yaeger', 3, NULL),
    ('Connie', 'Springer', 4, 3),
    ('Mikasa', 'Akerman', 5, NULL),
    ('Erwin', 'Smith', 6, 5),
    ('Bertholdt', 'Hoover', 7, NULL),
    ('Armin', 'Arlet', 8, 7);