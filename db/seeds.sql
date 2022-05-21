


INSERT INTO departments (id, name)
VALUES
    (1, "Meat"),
    (2, "Dairy"),
    (3, "Bakery"),
    (4, "Cashier"),
    (5, "Fish");


INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1,"Manager",150000,1),
    (2,"Engineer", 100000,1),
    (3,"Intern", 50000,1),
    (4,"Testing Engineer", 80000,2),
    (5, "Product Manager", 90000,5),
    (6, "Product Desginer", 99000, 6);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Kevin", "Mance", 2, 1),
    (2, "Kevin", "Mance", 2, 1),
    (3, "Kevin", "Mance", 2, 1),
    (4, "Kevin", "Mance", 2, 1),
    (5, "Kevin", "Mance", 2, 1),
    (6, "Kevin", "Mance", 2, 1),
    (7, "Kevin", "Mance", 2, 1),
    (8, "Kevin", "Mance", 2, 1),
    (9, "Kevin", "Mance", 2, 1),
    (10, "Kevin", "Mance", 2, 1);
