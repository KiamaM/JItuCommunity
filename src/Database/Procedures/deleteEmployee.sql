CREATE OR ALTER PROCEDURE deleteEmployee(@user_id VARCHAR(100))
AS
BEGIN
    UPDATE employees SET is_deleted = 1 WHERE user_id = @user_id
END