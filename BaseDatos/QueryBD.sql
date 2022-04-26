-- Database: Employees

-- DROP DATABASE "Employees";

CREATE DATABASE "Employees"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	

create table employe(
    id int primary key,
    name varchar(100),
    image varchar(250),
	numberPhone int,
	email varchar(100),
	dateI date,
	idGere int,
	duration varchar(100)
);

insert into employe(id, name, image, numberPhone, email, dateI, idGere, duration) values('1','a','1a','2','b','2022-04-25','3','4')
select * from employe