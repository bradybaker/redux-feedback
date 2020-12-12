-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "name" VARCHAR(30),
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

SELECT * FROM "feedback" ORDER BY "date"

-- Sample feedback item
INSERT INTO "feedback" ("name", "feeling", "understanding", "support", "comments")
VALUES ('Brady Baker', 4, 4, 5, 'Doing Great!');
