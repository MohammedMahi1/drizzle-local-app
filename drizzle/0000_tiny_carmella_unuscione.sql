CREATE TABLE `todo` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`day` text NOT NULL,
	`task` text NOT NULL,
	`is_checked` integer DEFAULT false NOT NULL,
	`timestamp` text DEFAULT (current_timestamp) NOT NULL
);