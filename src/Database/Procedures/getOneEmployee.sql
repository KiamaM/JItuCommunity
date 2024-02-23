CREATE OR ALTER PROCEDURE getOneEmployees(@user_id VARCHAR(100))
AS
BEGIN   
    SELECT * FROM employees WHERE user_id = @user_id
END