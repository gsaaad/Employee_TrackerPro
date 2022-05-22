
INSERT INTO departments (name)
VALUES
    ("Meat"),
    ("Dairy"),
    ("Bakery"),
    ("Cashier"),
    ("Fish");


INSERT INTO roles (title, salary, department_id)
VALUES
    ('MANAGER', 150000, 1),
    ('Engineer', 100000, 1),
    ('Backend', 120000, 2),
    ('FrontEnd', 110000, 2),
    ('Service', 50000, 3),
    ('Testing', 40000, 3),
    ('PRODUCT manager', 80000, 4),
    ('Investor', 1600000, 5);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Kevin", "Mance", 3, 1),
    ("Kevin", "Mance", 2, 1),
    ("Kevin", "Mance", 1, 1),
    ("Kevin", "Mance", 4, 1),
    ("Kevin", "Mance", 4, 1),
    ("Kevin", "Mance", 3, 1),
    ("Kevin", "Mance", 3, 1),
    ("Kevin", "Mance", 1, 1),
    ("Kevin", "Mance", 2, 1),
    ( "Kevin", "Mance", 5, 1); 