CREATE TABLE "user" (
	"id" serial NOT NULL,
	"name" serial(10) NOT NULL,
	"isAdmin" serial(5) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "team" (
	"id" serial NOT NULL,
	"name" serial(12) NOT NULL UNIQUE,
	"home_image" varchar(255) NOT NULL,
	"away_image" varchar(255) NOT NULL,
	CONSTRAINT "team_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "matchup" (
	"id" serial NOT NULL,
	"favorite" serial(12) NOT NULL,
	"underdog" serial(12) NOT NULL,
	"date" serial(12) NOT NULL,
	"winner_id" serial(20) NOT NULL,
	CONSTRAINT "matchup_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "picks" (
	"id" serial NOT NULL,
	"matchup" integer(20) NOT NULL,
	"user" varchar(12) NOT NULL,
	"team" integer(2) NOT NULL,
	CONSTRAINT "picks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);






ALTER TABLE "picks" ADD CONSTRAINT "picks_fk0" FOREIGN KEY ("matchup") REFERENCES "matchup"("id");
ALTER TABLE "picks" ADD CONSTRAINT "picks_fk1" FOREIGN KEY ("user") REFERENCES "user"("id");
ALTER TABLE "picks" ADD CONSTRAINT "picks_fk2" FOREIGN KEY ("team") REFERENCES "team"("id");
