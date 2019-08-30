CREATE TABLE "user" (
	"id" UUID NOT NULL,
	"email" CHAR(60),
	"password" CHAR(60),
	"name" CHAR(64),
	"isAdmin" Boolean NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);