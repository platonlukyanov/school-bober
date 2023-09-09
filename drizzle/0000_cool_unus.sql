CREATE TABLE IF NOT EXISTS "homeworks" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_id" text NOT NULL,
	"date" date NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subjects" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar
);
