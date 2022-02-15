CREATE TABLE "public.Auth" (
	"auth_id" serial NOT NULL,
	"email" serial(255) NOT NULL,
	"password_hash" varchar(1000) NOT NULL,
	CONSTRAINT "Auth_pk" PRIMARY KEY ("auth_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Users" (
	"user_id" serial NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"dob" varchar(255) NOT NULL,
	"auth_id" integer NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Daily_pain_logs" (
	"log_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"body" TEXT NOT NULL,
	"energy_levels" integer NOT NULL,
	"mood" integer NOT NULL,
	"pain_triggers" integer NOT NULL,
	CONSTRAINT "Daily_pain_logs_pk" PRIMARY KEY ("log_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Pain_triggers" (
	"pain_triggers_id" serial NOT NULL,
	"trigger_label" serial(255) NOT NULL,
	CONSTRAINT "Pain_triggers_pk" PRIMARY KEY ("pain_triggers_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Trigger_log_junction" (
	"trigger_log_junction_id" integer NOT NULL,
	"log_id" integer NOT NULL,
	"pain_triggers_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Treatments" (
	"treatment_id" integer NOT NULL,
	"treatment_label" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Treatment_log_junction" (
	"treatment_log_junction_id" integer NOT NULL,
	"log_id" integer NOT NULL,
	"treatment_id" integer NOT NULL,
	"was_effective" BOOLEAN NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("auth_id") REFERENCES "Auth"("auth_id");

ALTER TABLE "Daily_pain_logs" ADD CONSTRAINT "Daily_pain_logs_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id");


ALTER TABLE "Trigger_log_junction" ADD CONSTRAINT "Trigger_log_junction_fk0" FOREIGN KEY ("log_id") REFERENCES "Daily_pain_logs"("log_id");
ALTER TABLE "Trigger_log_junction" ADD CONSTRAINT "Trigger_log_junction_fk1" FOREIGN KEY ("pain_triggers_id") REFERENCES "Pain_triggers"("pain_triggers_id");


ALTER TABLE "Treatment_log_junction" ADD CONSTRAINT "Treatment_log_junction_fk0" FOREIGN KEY ("log_id") REFERENCES "Daily_pain_logs"("log_id");
ALTER TABLE "Treatment_log_junction" ADD CONSTRAINT "Treatment_log_junction_fk1" FOREIGN KEY ("treatment_id") REFERENCES "Treatments"("treatment_id");








