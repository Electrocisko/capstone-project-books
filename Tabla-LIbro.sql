CREATE TABLE book (
    id SERIAL PRIMARY KEY,
	title VARCHAR(40),
    authorID int,
	rating int,
    review  TEXT,
	cover VARCHAR(200),
	category VARCHAR(30),
	isbn VARCHAR(20),
	publication_date DATE,
	FOREIGN KEY (authorID) REFERENCES author(id)
);