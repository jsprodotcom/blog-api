drop table if exists article;

create table article (
  id serial unique,
  title varchar(100) null,
  body text null,
  author varchar(100) null
);
