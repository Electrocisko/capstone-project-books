SELECT *
FROM book
INNER JOIN author ON book.authorid = author.id
WHERE book.id= 11;