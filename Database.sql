
ALTER DATABASE Library CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
USE  Library;
DROP TABLE books;
CREATE TABLE books(BookName CHAR(200),
				   Authors CHAR(200),
                   Pubisher CHAR(50),
                   ISBN CHAR(20),
                   GenreID CHAR(10),
                   THBookNumber CHAR(10),
                   PrintLocation CHAR(50),
                   Pages INT,
                   Genre CHAR(50));

SELECT * FROM books;
SELECT DISTINCT Genre FROM books;
