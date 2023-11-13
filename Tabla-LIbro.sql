CREATE TABLE book (
    id SERIAL PRIMARY KEY,
	title VARCHAR(40),
    authorID int,
	rating int,
    review  TEXT,
	cover VARCHAR(200),
	category VARCHAR(30),
	openid VARCHAR(20),
	year int,
	FOREIGN KEY (authorID) REFERENCES author(id)
);