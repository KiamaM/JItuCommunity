CREATE TABLE employees(
    user_id VARCHAR(50) NOT NULL PRIMARY KEY, 
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    cohort NUMERIC, 
);

ALTER TABLE employees
ADD email VARCHAR(100)

SELECT * FROM employees