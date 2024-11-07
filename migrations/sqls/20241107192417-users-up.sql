/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS theflock.hotels (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `stars` INT NOT NULL,
  `active_row` TINYINT NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO theflock.users
(id, email, password, active_row, created_at, updated_at)
VALUES(1, 'orarjuan@hotmail.com', '79766914fa45dd7d033550d4a05b1957', 1, '2024-11-07 10:18:24', '2024-11-07 10:18:24');

