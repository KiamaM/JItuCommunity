CREATE PROCEDURE updateEmployee(
    @user_id VARCHAR(100),
    @first_name VARCHAR(200), 
    @last_name VARCHAR(200), 
    @email VARCHAR(200), 
    @cohort NUMERIC)
AS
BEGIN
    UPDATE employees SET 
        first_name=@first_name, 
        last_name=@last_name, 
        email=@email, 
        cohort=@cohort
    WHERE user_id = @user_id
END