CREATE TABLE `dailyTask` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task_detail` text NOT NULL,
	`is_checked` integer DEFAULT false
);
--> statement-breakpoint
CREATE TABLE `day` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`list_id` integer NOT NULL,
	`timestamp` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`list_id`) REFERENCES `dailyTask`(`id`) ON UPDATE no action ON DELETE no action
);
