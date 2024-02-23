CREATE OR ALTER PROCEDURE registerEmployee(@user_id VARCHAR(100),@first_name VARCHAR(100),@last_name VARCHAR(100), @email VARCHAR(100), @cohort NUMERIC)
AS
BEGIN
INSERT INTO employees(user_id, first_name, last_name,email, cohort)
VALUES(@user_id, @first_name, @last_name, @email, @cohort)
END