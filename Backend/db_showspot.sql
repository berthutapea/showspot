/*
 Navicat Premium Data Transfer

 Source Server         : mysql_localhost
 Source Server Type    : MySQL
 Source Server Version : 80037 (8.0.37)
 Source Host           : localhost:9090
 Source Schema         : db_showspot

 Target Server Type    : MySQL
 Target Server Version : 80037 (8.0.37)
 File Encoding         : 65001

 Date: 25/11/2024 22:59:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `admin_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `campus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `major` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `group_type_id` int NOT NULL,
  `class_type_id` int NOT NULL,
  `photo_profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('admin-1', 'Admin', 'admin', '$argon2id$v=19$m=65536,t=3,p=1$sZezqsikIR2u59CUxfnM+w$4TgfE9VgtTsJt3UQ6vvK3U41iFReMXKQ0r/Qp1t01x4', 'Politeknik Negeri Batam', 'Informatic Engineering', 1, 1, 'http://127.0.0.1:5000/api/images/pexels-pixabay-39866.jpg', '2024-11-06 20:56:14', '2024-11-25 22:03:53');

-- ----------------------------
-- Table structure for class_type
-- ----------------------------
DROP TABLE IF EXISTS `class_type`;
CREATE TABLE `class_type`  (
  `class_type_id` int NOT NULL,
  `class_type_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`class_type_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of class_type
-- ----------------------------
INSERT INTO `class_type` VALUES (1, 'Morning');
INSERT INTO `class_type` VALUES (2, 'Afternoon');
INSERT INTO `class_type` VALUES (3, 'Night');

-- ----------------------------
-- Table structure for filter_project
-- ----------------------------
DROP TABLE IF EXISTS `filter_project`;
CREATE TABLE `filter_project`  (
  `filter_project_id` int NOT NULL,
  `filter_project_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`filter_project_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of filter_project
-- ----------------------------
INSERT INTO `filter_project` VALUES (1, 'The Best');
INSERT INTO `filter_project` VALUES (2, 'Mobile');
INSERT INTO `filter_project` VALUES (3, 'Web');

-- ----------------------------
-- Table structure for grades
-- ----------------------------
DROP TABLE IF EXISTS `grades`;
CREATE TABLE `grades`  (
  `grade_id` int NOT NULL,
  `grade` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of grades
-- ----------------------------
INSERT INTO `grades` VALUES (1, 'A');
INSERT INTO `grades` VALUES (2, 'B');
INSERT INTO `grades` VALUES (3, 'C');
INSERT INTO `grades` VALUES (4, 'D');
INSERT INTO `grades` VALUES (5, 'E');

-- ----------------------------
-- Table structure for group_project
-- ----------------------------
DROP TABLE IF EXISTS `group_project`;
CREATE TABLE `group_project`  (
  `group_project_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `group_project_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `student_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `student_position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `group_project_id`(`group_project_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of group_project
-- ----------------------------
INSERT INTO `group_project` VALUES ('group-project15121', 'Project 1', '[[\"Ethan Martinez\",\"112116\"],[\"Sophia Jones\",\"112107\"]]', 'Hustler', '2024-11-25 22:08:29');
INSERT INTO `group_project` VALUES ('group-project15121', 'Project 1', '[[\"Oliver Smith\",\"112104\"]]', 'Hipster', '2024-11-25 22:08:30');
INSERT INTO `group_project` VALUES ('group-project15121', 'Project 1', '[[\"Sitorus Tamba\",\"112101\"]]', 'Scrum Master', '2024-11-25 22:08:30');
INSERT INTO `group_project` VALUES ('group-project15121', 'Project 1', '[[\"Emily Clark\",\"112119\"]]', 'Hacker', '2024-11-25 22:08:30');
INSERT INTO `group_project` VALUES ('group-project40901', 'Project 2', '[[\"Oliver Smith\",\"112104\"]]', 'Hustler', '2024-11-25 22:11:54');
INSERT INTO `group_project` VALUES ('group-project40901', 'Project 2', '[[\"Alexander Lewis\",\"112120\"]]', 'Hipster', '2024-11-25 22:11:54');
INSERT INTO `group_project` VALUES ('group-project40901', 'Project 2', '[[\"William Brown\",\"112106\"]]', 'Scrum Master', '2024-11-25 22:11:54');
INSERT INTO `group_project` VALUES ('group-project40901', 'Project 2', '[[\"Emily Clark\",\"112119\"]]', 'Hacker', '2024-11-25 22:11:54');
INSERT INTO `group_project` VALUES ('group-project65241', 'project 2', '[[\"Alexander Lewis\",\"112120\"]]', 'Hustler', '2024-11-25 22:19:23');
INSERT INTO `group_project` VALUES ('group-project65241', 'project 2', '[]', 'Hipster', '2024-11-25 22:19:23');
INSERT INTO `group_project` VALUES ('group-project65241', 'project 2', '[]', 'Scrum Master', '2024-11-25 22:19:23');
INSERT INTO `group_project` VALUES ('group-project65241', 'project 2', '[]', 'Hacker', '2024-11-25 22:19:23');
INSERT INTO `group_project` VALUES ('group-project111', 'project 3', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hustler', '2024-11-25 22:21:11');
INSERT INTO `group_project` VALUES ('group-project111', 'project 3', '[[\"Isabella Thomas\",\"112111\"]]', 'Hipster', '2024-11-25 22:21:11');
INSERT INTO `group_project` VALUES ('group-project111', 'project 3', '[[\"Alexander Lewis\",\"112120\"]]', 'Scrum Master', '2024-11-25 22:21:11');
INSERT INTO `group_project` VALUES ('group-project111', 'project 3', '[[\"Charlotte Martinez\",\"112109\"]]', 'Hacker', '2024-11-25 22:21:11');
INSERT INTO `group_project` VALUES ('group-project85951', 'Project 4', '[[\"Simanjuntak Sihombing\",\"112102\"]]', 'Hustler', '2024-11-25 22:24:07');
INSERT INTO `group_project` VALUES ('group-project85951', 'Project 4', '[[\"Ava White\",\"112117\"]]', 'Hipster', '2024-11-25 22:23:41');
INSERT INTO `group_project` VALUES ('group-project85951', 'Project 4', '[[\"James Garcia\",\"112108\"]]', 'Scrum Master', '2024-11-25 22:23:41');
INSERT INTO `group_project` VALUES ('group-project85951', 'Project 4', '[[\"William Brown\",\"112106\"]]', 'Hacker', '2024-11-25 22:23:41');
INSERT INTO `group_project` VALUES ('group-project84381', 'Project 5', '[[\"Sitorus Tamba\",\"112101\"]]', 'Hustler', '2024-11-25 22:25:49');
INSERT INTO `group_project` VALUES ('group-project84381', 'Project 5', '[[\"Emma Johnson\",\"112105\"]]', 'Hipster', '2024-11-25 22:25:49');
INSERT INTO `group_project` VALUES ('group-project84381', 'Project 5', '[[\"Mia Moore\",\"112113\"]]', 'Scrum Master', '2024-11-25 22:25:49');
INSERT INTO `group_project` VALUES ('group-project84381', 'Project 5', '[[\"Simanjuntak Sihombing\",\"112102\"]]', 'Hacker', '2024-11-25 22:25:49');
INSERT INTO `group_project` VALUES ('group-project71751', 'Project 6', '[[\"Emily Clark\",\"112119\"]]', 'Hustler', '2024-11-25 22:27:53');
INSERT INTO `group_project` VALUES ('group-project71751', 'Project 6', '[[\"Lucas Wilson\",\"112114\"]]', 'Hipster', '2024-11-25 22:27:53');
INSERT INTO `group_project` VALUES ('group-project71751', 'Project 6', '[[\"Liam Anderson\",\"112110\"]]', 'Scrum Master', '2024-11-25 22:27:53');
INSERT INTO `group_project` VALUES ('group-project71751', 'Project 6', '[[\"Togatorop Sitompul\",\"112103\"]]', 'Hacker', '2024-11-25 22:27:53');
INSERT INTO `group_project` VALUES ('group-project38751', 'project 6', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hustler', '2024-11-25 22:29:28');
INSERT INTO `group_project` VALUES ('group-project38751', 'project 6', '[[\"Ethan Martinez\",\"112116\"]]', 'Hipster', '2024-11-25 22:29:28');
INSERT INTO `group_project` VALUES ('group-project38751', 'project 6', '[[\"Isabella Thomas\",\"112111\"]]', 'Scrum Master', '2024-11-25 22:29:28');
INSERT INTO `group_project` VALUES ('group-project38751', 'project 6', '[[\"Sophia Jones\",\"112107\"]]', 'Hacker', '2024-11-25 22:29:28');
INSERT INTO `group_project` VALUES ('group-project29131', 'project 7', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hustler', '2024-11-25 22:29:48');
INSERT INTO `group_project` VALUES ('group-project29131', 'project 7', '[[\"Ethan Martinez\",\"112116\"]]', 'Hipster', '2024-11-25 22:29:48');
INSERT INTO `group_project` VALUES ('group-project29131', 'project 7', '[[\"Isabella Thomas\",\"112111\"]]', 'Scrum Master', '2024-11-25 22:29:48');
INSERT INTO `group_project` VALUES ('group-project29131', 'project 7', '[[\"Sophia Jones\",\"112107\"]]', 'Hacker', '2024-11-25 22:29:48');
INSERT INTO `group_project` VALUES ('group-project14311', 'Project 8', '[[\"Isabella Thomas\",\"112111\"]]', 'Hustler', '2024-11-25 22:31:25');
INSERT INTO `group_project` VALUES ('group-project14311', 'Project 8', '[[\"Simanjuntak Sihombing\",\"112102\"]]', 'Hipster', '2024-11-25 22:31:46');
INSERT INTO `group_project` VALUES ('group-project14311', 'Project 8', '[[\"Liam Anderson\",\"112110\"]]', 'Scrum Master', '2024-11-25 22:31:25');
INSERT INTO `group_project` VALUES ('group-project14311', 'Project 8', '[[\"Lucas Wilson\",\"112114\"]]', 'Hacker', '2024-11-25 22:31:25');
INSERT INTO `group_project` VALUES ('group-project82321', 'Project 9', '[[\"Charlotte Martinez\",\"112109\"]]', 'Hustler', '2024-11-25 22:34:48');
INSERT INTO `group_project` VALUES ('group-project82321', 'Project 9', '[[\"Ava White\",\"112117\"]]', 'Hipster', '2024-11-25 22:34:48');
INSERT INTO `group_project` VALUES ('group-project82321', 'Project 9', '[[\"Amelia Davis\",\"112115\"]]', 'Scrum Master', '2024-11-25 22:34:48');
INSERT INTO `group_project` VALUES ('group-project82321', 'Project 9', '[[\"James Garcia\",\"112108\"]]', 'Hacker', '2024-11-25 22:34:48');
INSERT INTO `group_project` VALUES ('group-project67631', 'Project 10', '[[\"Amelia Davis\",\"112115\"]]', 'Hustler', '2024-11-25 22:36:40');
INSERT INTO `group_project` VALUES ('group-project67631', 'Project 10', '[[\"Mia Moore\",\"112113\"]]', 'Hipster', '2024-11-25 22:36:40');
INSERT INTO `group_project` VALUES ('group-project67631', 'Project 10', '[[\"Simanjuntak Sihombing\",\"112102\"]]', 'Scrum Master', '2024-11-25 22:36:40');
INSERT INTO `group_project` VALUES ('group-project67631', 'Project 10', '[[\"Togatorop Sitompul\",\"112103\"]]', 'Hacker', '2024-11-25 22:36:40');
INSERT INTO `group_project` VALUES ('group-project40891', 'Project 11', '[[\"Emma Johnson\",\"112105\"]]', 'Hustler', '2024-11-25 22:38:43');
INSERT INTO `group_project` VALUES ('group-project40891', 'Project 11', '[[\"Ava White\",\"112117\"]]', 'Hipster', '2024-11-25 22:38:43');
INSERT INTO `group_project` VALUES ('group-project40891', 'Project 11', '[[\"Mia Moore\",\"112113\"]]', 'Scrum Master', '2024-11-25 22:38:43');
INSERT INTO `group_project` VALUES ('group-project40891', 'Project 11', '[[\"Isabella Thomas\",\"112111\"]]', 'Hacker', '2024-11-25 22:38:43');
INSERT INTO `group_project` VALUES ('group-project26791', 'Project 12', '[[\"Ava White\",\"112117\"]]', 'Hustler', '2024-11-25 22:40:27');
INSERT INTO `group_project` VALUES ('group-project26791', 'Project 12', '[[\"James Garcia\",\"112108\"]]', 'Hipster', '2024-11-25 22:40:27');
INSERT INTO `group_project` VALUES ('group-project26791', 'Project 12', '[[\"Oliver Smith\",\"112104\"]]', 'Scrum Master', '2024-11-25 22:40:27');
INSERT INTO `group_project` VALUES ('group-project26791', 'Project 12', '[[\"Alexander Lewis\",\"112120\"]]', 'Hacker', '2024-11-25 22:40:27');
INSERT INTO `group_project` VALUES ('group-project72331', 'Project 13', '[[\"Sitorus Tamba\",\"112101\"]]', 'Hustler', '2024-11-25 22:42:20');
INSERT INTO `group_project` VALUES ('group-project72331', 'Project 13', '[[\"Charlotte Martinez\",\"112109\"]]', 'Hipster', '2024-11-25 22:42:20');
INSERT INTO `group_project` VALUES ('group-project72331', 'Project 13', '[[\"Emily Clark\",\"112119\"]]', 'Scrum Master', '2024-11-25 22:42:20');
INSERT INTO `group_project` VALUES ('group-project72331', 'Project 13', '[[\"Emma Johnson\",\"112105\"]]', 'Hacker', '2024-11-25 22:42:21');
INSERT INTO `group_project` VALUES ('group-project61371', 'project 14', '[[\"Noah Harris\",\"112118\"]]', 'Hustler', '2024-11-25 22:44:29');
INSERT INTO `group_project` VALUES ('group-project61371', 'project 14', '[[\"Lucas Wilson\",\"112114\"]]', 'Hipster', '2024-11-25 22:44:29');
INSERT INTO `group_project` VALUES ('group-project61371', 'project 14', '[[\"Mia Moore\",\"112113\"]]', 'Scrum Master', '2024-11-25 22:44:29');
INSERT INTO `group_project` VALUES ('group-project61371', 'project 14', '[[\"Ava White\",\"112117\"]]', 'Hacker', '2024-11-25 22:44:29');
INSERT INTO `group_project` VALUES ('group-project44721', 'Project 15', '[[\"Lucas Wilson\",\"112114\"]]', 'Hustler', '2024-11-25 22:45:48');
INSERT INTO `group_project` VALUES ('group-project44721', 'Project 15', '[[\"Sophia Jones\",\"112107\"]]', 'Hipster', '2024-11-25 22:45:48');
INSERT INTO `group_project` VALUES ('group-project44721', 'Project 15', '[[\"Noah Harris\",\"112118\"]]', 'Scrum Master', '2024-11-25 22:45:48');
INSERT INTO `group_project` VALUES ('group-project44721', 'Project 15', '[[\"Ethan Martinez\",\"112116\"]]', 'Hacker', '2024-11-25 22:45:48');
INSERT INTO `group_project` VALUES ('group-project84191', 'Project 16', '[[\"Oliver Smith\",\"112104\"]]', 'Hustler', '2024-11-25 22:47:05');
INSERT INTO `group_project` VALUES ('group-project84191', 'Project 16', '[[\"Noah Harris\",\"112118\"]]', 'Hipster', '2024-11-25 22:47:05');
INSERT INTO `group_project` VALUES ('group-project84191', 'Project 16', '[[\"William Brown\",\"112106\"]]', 'Scrum Master', '2024-11-25 22:47:06');
INSERT INTO `group_project` VALUES ('group-project84191', 'Project 16', '[[\"Sitorus Tamba\",\"112101\"]]', 'Hacker', '2024-11-25 22:47:07');
INSERT INTO `group_project` VALUES ('group-project13011', 'Project 17', '[[\"Ethan Martinez\",\"112116\"]]', 'Hustler', '2024-11-25 22:48:41');
INSERT INTO `group_project` VALUES ('group-project75311', 'Project 17', '[[\"Ethan Martinez\",\"112116\"]]', 'Hustler', '2024-11-25 22:48:42');
INSERT INTO `group_project` VALUES ('group-project13011', 'Project 17', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hipster', '2024-11-25 22:48:42');
INSERT INTO `group_project` VALUES ('group-project75311', 'Project 17', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hipster', '2024-11-25 22:48:45');
INSERT INTO `group_project` VALUES ('group-project13011', 'Project 17', '[[\"Sophia Jones\",\"112107\"]]', 'Scrum Master', '2024-11-25 22:48:46');
INSERT INTO `group_project` VALUES ('group-project75311', 'Project 17', '[[\"Sophia Jones\",\"112107\"]]', 'Scrum Master', '2024-11-25 22:48:47');
INSERT INTO `group_project` VALUES ('group-project16431', 'Project 17', '[[\"Ethan Martinez\",\"112116\"]]', 'Hustler', '2024-11-25 22:48:48');
INSERT INTO `group_project` VALUES ('group-project13011', 'Project 17', '[[\"Noah Harris\",\"112118\"]]', 'Hacker', '2024-11-25 22:48:48');
INSERT INTO `group_project` VALUES ('group-project75311', 'Project 17', '[[\"Noah Harris\",\"112118\"]]', 'Hacker', '2024-11-25 22:48:51');
INSERT INTO `group_project` VALUES ('group-project16431', 'Project 17', '[[\"Benjamin Taylor\",\"112112\"]]', 'Hipster', '2024-11-25 22:48:51');
INSERT INTO `group_project` VALUES ('group-project16431', 'Project 17', '[[\"Sophia Jones\",\"112107\"]]', 'Scrum Master', '2024-11-25 22:48:52');
INSERT INTO `group_project` VALUES ('group-project16431', 'Project 17', '[[\"Noah Harris\",\"112118\"]]', 'Hacker', '2024-11-25 22:48:52');
INSERT INTO `group_project` VALUES ('group-project9831', 'Project 18', '[[\"Liam Anderson\",\"112110\"]]', 'Hustler', '2024-11-25 22:50:23');
INSERT INTO `group_project` VALUES ('group-project9831', 'Project 18', '[[\"Simanjuntak Sihombing\",\"112102\"]]', 'Hipster', '2024-11-25 22:50:23');
INSERT INTO `group_project` VALUES ('group-project9831', 'Project 18', '[[\"Charlotte Martinez\",\"112109\"]]', 'Scrum Master', '2024-11-25 22:50:23');
INSERT INTO `group_project` VALUES ('group-project9831', 'Project 18', '[[\"Amelia Davis\",\"112115\"]]', 'Hacker', '2024-11-25 22:50:23');
INSERT INTO `group_project` VALUES ('group-project45971', 'Project 19', '[[\"Charlotte Martinez\",\"112109\"]]', 'Hustler', '2024-11-25 22:51:18');
INSERT INTO `group_project` VALUES ('group-project45971', 'Project 19', '[[\"Isabella Thomas\",\"112111\"]]', 'Hipster', '2024-11-25 22:51:18');
INSERT INTO `group_project` VALUES ('group-project45971', 'Project 19', '[[\"Noah Harris\",\"112118\"]]', 'Scrum Master', '2024-11-25 22:51:18');
INSERT INTO `group_project` VALUES ('group-project45971', 'Project 19', '[[\"Ava White\",\"112117\"]]', 'Hacker', '2024-11-25 22:51:18');
INSERT INTO `group_project` VALUES ('group-project89791', 'Project 20', '[[\"Sophia Jones\",\"112107\"]]', 'Hustler', '2024-11-25 22:52:17');
INSERT INTO `group_project` VALUES ('group-project89791', 'Project 20', '[[\"Emily Clark\",\"112119\"]]', 'Hipster', '2024-11-25 22:52:17');
INSERT INTO `group_project` VALUES ('group-project89791', 'Project 20', '[[\"William Brown\",\"112106\"]]', 'Scrum Master', '2024-11-25 22:52:17');
INSERT INTO `group_project` VALUES ('group-project89791', 'Project 20', '[[\"Emily Clark\",\"112119\"]]', 'Hacker', '2024-11-25 22:52:17');

-- ----------------------------
-- Table structure for group_type
-- ----------------------------
DROP TABLE IF EXISTS `group_type`;
CREATE TABLE `group_type`  (
  `group_type_id` int NOT NULL,
  `group_type_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`group_type_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of group_type
-- ----------------------------
INSERT INTO `group_type` VALUES (1, 'Mobile');
INSERT INTO `group_type` VALUES (2, 'Web A');
INSERT INTO `group_type` VALUES (3, 'Web B');
INSERT INTO `group_type` VALUES (4, 'Web C');

-- ----------------------------
-- Table structure for mentors
-- ----------------------------
DROP TABLE IF EXISTS `mentors`;
CREATE TABLE `mentors`  (
  `mentor_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `campus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `major` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `group_type_id` int NOT NULL,
  `class_type_id` int NOT NULL,
  `photo_profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`mentor_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of mentors
-- ----------------------------
INSERT INTO `mentors` VALUES ('mentor10261', 'Ella Allen', 'ella', '$argon2id$v=19$m=65536,t=3,p=1$tOXd1oMI9nNkhXNSv7p76A$nl8kQQ39NN85hLigNJELChxppmNVMDEe4WND/HBJNbc', 'Univ C', 'Informatic Engineering', 3, 3, 'http://127.0.0.1:5000/api/images/team-6.jpg', '2024-11-25 21:56:55', '2024-11-25 21:57:23');
INSERT INTO `mentors` VALUES ('mentor1421', 'Samuel Carter', 'samuel', '$argon2id$v=19$m=65536,t=3,p=1$tHHFyyX7780ai33qm91OOg$bWuHIP1G9Hj+Wv+ainqAuMAI5uNHotMAuCQVrU2lqDU', 'Univ A', 'Informatic Engineering', 1, 1, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:59:38', '2024-11-25 21:59:38');
INSERT INTO `mentors` VALUES ('mentor28981', 'Michael Hall', 'michael', '$argon2id$v=19$m=65536,t=3,p=1$M202nG/KYi/sR+lO/iYpqQ$XxbsiZFcdz/xl/T043PpNTozo3Ngpl4FZe25HH+u9OU', 'Univ B', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:56:19', '2024-11-25 21:56:19');
INSERT INTO `mentors` VALUES ('mentor62291', 'Lily Walker', 'lily', '$argon2id$v=19$m=65536,t=3,p=1$lRFWxXkFWyD00HikvsG0hA$p2hHQQa3T/6uQXvju/06uqge4VVMFeIBRUOL0pIsKss', 'Univ A', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-4.jpg', '2024-11-25 21:55:47', '2024-11-25 21:55:47');
INSERT INTO `mentors` VALUES ('mentor67951', 'Grace Baker', 'grace', '$argon2id$v=19$m=65536,t=3,p=1$icXPHLl/YLuFrdpr+tzMvQ$l4SXhSVVvTVgo1PAv/CP/d+TExJyb8R+7kVzYhSkTf4', 'Univ A', 'Informatic Engineering', 4, 3, 'http://127.0.0.1:5000/api/images/team-6.jpg', '2024-11-25 21:59:04', '2024-11-25 21:59:04');
INSERT INTO `mentors` VALUES ('mentor69571', 'Sophia Howard', 'sofia howard', '$argon2id$v=19$m=65536,t=3,p=1$kIQ0KzU+xi90/uHBt6tc1A$CisyeJ8AfhF8tUMUtnzwqA+b0kkkFmcB5R3CPUMBqI4', 'Univ C', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-6.jpg', '2024-11-25 22:01:31', '2024-11-25 22:01:31');
INSERT INTO `mentors` VALUES ('mentor70931', 'Olivia Evans', 'olivia', '$argon2id$v=19$m=65536,t=3,p=1$e8bNMgqfFgG7PkmEIM3owA$6X9xi8cxZ3Uf9dRhVqnDgI2nhgzHfCzsIoHlNkhRV2I', 'Univ E', 'Informatic Engineering', 4, 2, 'http://127.0.0.1:5000/api/images/pexels-christina-morillo-1181579.jpg', '2024-11-25 22:00:21', '2024-11-25 22:00:34');
INSERT INTO `mentors` VALUES ('mentor85851', 'Daniel Murphy', 'daniel', '$argon2id$v=19$m=65536,t=3,p=1$ccwLGIADlJYO4usulIUFug$lMQmkyOWuM49x+EsxrSlBX0ueRbZzXoqX6SDYRRnH4Y', 'Univ A', 'Informatic Engineering', 1, 3, 'http://127.0.0.1:5000/api/images/pexels-pixabay-39866.jpg', '2024-11-25 22:02:12', '2024-11-25 22:02:12');
INSERT INTO `mentors` VALUES ('mentor93401', 'Henry Adams', 'henry', '$argon2id$v=19$m=65536,t=3,p=1$G69EXenjZQl5O8nicZplqQ$+Gar8KvoZFEFdzuac0Bu1n5rxevVThC3YDMOSjttwZo', 'Univ D', 'Informatic Engineering', 4, 3, 'http://127.0.0.1:5000/api/images/team-3.jpg', '2024-11-25 21:58:15', '2024-11-25 21:58:15');
INSERT INTO `mentors` VALUES ('mentor96851', 'Hannah Scott', 'hannah', '$argon2id$v=19$m=65536,t=3,p=1$oqhXaDfwGyvf55mFMHm6vg$twGNdNbN2OyqgtaXo2hb+UCy9p5NydCgOOS4ZxeoMe8', 'Univ D', 'Informatic Engineering', 3, 3, 'http://127.0.0.1:5000/api/images/pexels-christina-morillo-1181579.jpg', '2024-11-25 22:02:57', '2024-11-25 22:02:57');

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects`  (
  `application_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `application_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `application_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `group_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `link_video` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `link_design` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `link_github` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `group_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `grade_id` int NULL DEFAULT NULL,
  `project_filter_id` int NULL DEFAULT NULL,
  `status_project_id` int NULL DEFAULT NULL,
  `notes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`application_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('project111', 'project 3', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'project 3', 'https://dummy3.com', 'https://dummy3.com', 'https://dummy3.com', 'project 3', 'group-project111', NULL, NULL, 2, NULL, '2024-11-25 22:21:11', '2024-11-25 22:21:11');
INSERT INTO `projects` VALUES ('project13011', 'Project 17', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 17', 'https://dummy17.com', 'https://dummy17.com', 'https://dummy17.com', 'Project 17', 'group-project13011', NULL, NULL, 2, NULL, '2024-11-25 22:48:51', '2024-11-25 22:48:51');
INSERT INTO `projects` VALUES ('project14311', 'Project 8', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 8', 'https://dummy8.com', 'https://dummy8.com', 'https://dummy8.com', 'Project 8', 'group-project14311', NULL, NULL, 2, NULL, '2024-11-25 22:31:25', '2024-11-25 22:31:25');
INSERT INTO `projects` VALUES ('project15121', 'Project 1', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 1', 'https://dummy1.com', 'https://dummy1.com', 'https://dummy1.com', 'Project 1', 'group-project15121', NULL, NULL, 2, NULL, '2024-11-25 22:26:06', '2024-11-25 22:26:06');
INSERT INTO `projects` VALUES ('project26791', 'Project 12', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 12', 'https://dummy12.com', 'https://dummy12.com', 'https://dummy12.com', 'Project 12', 'group-project26791', NULL, NULL, 2, NULL, '2024-11-25 22:40:27', '2024-11-25 22:40:27');
INSERT INTO `projects` VALUES ('project29131', 'project 7', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'project 7', 'https://dummy7.com', 'https://dummy7.com', 'https://dummy7.com', 'project 7', 'group-project29131', NULL, NULL, 2, NULL, '2024-11-25 22:29:48', '2024-11-25 22:29:48');
INSERT INTO `projects` VALUES ('project40891', 'Project 11', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 11', 'https://dummy11.com', 'https://dummy11.com', 'https://dummy11.com', 'Project 11', 'group-project40891', NULL, NULL, 2, NULL, '2024-11-25 22:38:43', '2024-11-25 22:38:43');
INSERT INTO `projects` VALUES ('project40901', 'Project 2', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 2', 'https://dummy2.com', 'https://dummy2.com', 'https://dummy2.com', 'Project 2', 'group-project40901', NULL, NULL, 2, NULL, '2024-11-25 22:22:07', '2024-11-25 22:22:07');
INSERT INTO `projects` VALUES ('project44721', 'Project 15', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 15', 'https://dummy15.com', 'https://dummy15.com', 'https://dummy15.com', 'Project 15', 'group-project44721', NULL, NULL, 2, NULL, '2024-11-25 22:45:48', '2024-11-25 22:45:48');
INSERT INTO `projects` VALUES ('project45971', 'Project 19', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 19', 'https://dummy19.com', 'https://dummy19.com', 'https://dummy19.com', 'Project 19', 'group-project45971', NULL, NULL, 2, NULL, '2024-11-25 22:51:18', '2024-11-25 22:51:18');
INSERT INTO `projects` VALUES ('project61371', 'project 14', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'project 14', 'https://dummy14.com', 'https://dummy14.com', 'https://dummy14.com', 'project 14', 'group-project61371', NULL, NULL, 2, NULL, '2024-11-25 22:44:29', '2024-11-25 22:44:29');
INSERT INTO `projects` VALUES ('project67631', 'Project 10', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 10', 'https://dummy10.com', 'https://dummy10.com', 'https://dummy10.com', 'Project 10', 'group-project67631', NULL, NULL, 2, NULL, '2024-11-25 22:36:40', '2024-11-25 22:36:40');
INSERT INTO `projects` VALUES ('project71751', 'Project 6', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 6', 'https://dummy6.com', 'https://dummy6.com', 'https://dummy6.com', 'Project 6', 'group-project71751', NULL, NULL, 2, NULL, '2024-11-25 22:27:53', '2024-11-25 22:27:53');
INSERT INTO `projects` VALUES ('project72331', 'Project 13', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 13', 'https://dummy13.com', 'https://dummy13.com', 'https://dummy13.com', 'Project 13', 'group-project72331', NULL, NULL, 2, NULL, '2024-11-25 22:42:21', '2024-11-25 22:42:21');
INSERT INTO `projects` VALUES ('project75311', 'Project 17', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 17', 'https://dummy17.com', 'https://dummy17.com', 'https://dummy17.com', 'Project 17', 'group-project75311', NULL, NULL, 2, NULL, '2024-11-25 22:48:51', '2024-11-25 22:48:51');
INSERT INTO `projects` VALUES ('project82321', 'Project 9', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 9', 'https://dummy9.com', 'https://dummy9.com', 'https://dummy9.com', 'Project 9', 'group-project82321', NULL, NULL, 2, NULL, '2024-11-25 22:34:48', '2024-11-25 22:34:48');
INSERT INTO `projects` VALUES ('project84191', 'Project 16', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 16', 'https://dummy16.com', 'https://dummy16.com', 'https://dummy16.com', 'Project 16', 'group-project84191', NULL, NULL, 2, NULL, '2024-11-25 22:47:07', '2024-11-25 22:47:07');
INSERT INTO `projects` VALUES ('project84381', 'Project 5', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 5', 'https://dummy5.com', 'https://dummy5.com', 'https://dummy5.com', 'Project 5', 'group-project84381', NULL, NULL, 2, NULL, '2024-11-25 22:25:49', '2024-11-25 22:25:49');
INSERT INTO `projects` VALUES ('project85951', 'Project 4', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 4', 'https://dummy4.com', 'https://dummy4.com', 'https://dummy4.com', 'Project 4', 'group-project85951', NULL, NULL, 2, NULL, '2024-11-25 22:23:41', '2024-11-25 22:23:41');
INSERT INTO `projects` VALUES ('project89791', 'Project 20', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 20', 'https://dummy20.com', 'https://dummy20.com', 'https://dummy20.com', 'Project 20', 'group-project89791', NULL, NULL, 2, NULL, '2024-11-25 22:52:17', '2024-11-25 22:52:17');
INSERT INTO `projects` VALUES ('project9831', 'Project 18', 'http://127.0.0.1:5000/api/images/dummy-project.jpg', 'Project 18', 'https://dummy18.com', 'https://dummy18.com', 'https://dummy18.com', 'Project 18', 'group-project9831', NULL, NULL, 2, NULL, '2024-11-25 22:50:23', '2024-11-25 22:50:23');

-- ----------------------------
-- Table structure for sessions
-- ----------------------------
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE `sessions`  (
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `session_code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `access_code` int NULL DEFAULT NULL,
  `expired_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sessions
-- ----------------------------
-- INSERT INTO `sessions` VALUES ('admin-1', '$argon2id$v=19$m=65536,t=3,p=1$Qtwy9aIZSejtrWh1hobIHg$obUF1rIjzCCDeBxgYIj5v+rG00zzGIroGmpKx4Kr6Nw', 1, '2024-11-26 22:52:34');

-- ----------------------------
-- Table structure for sop_project
-- ----------------------------
DROP TABLE IF EXISTS `sop_project`;
CREATE TABLE `sop_project`  (
  `sop_project_id` int NOT NULL,
  `sop_project_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `sop_project_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sop_project
-- ----------------------------
INSERT INTO `sop_project` VALUES (1, '<p>Coba</p>\r\n', 'Coba');

-- ----------------------------
-- Table structure for status_project
-- ----------------------------
DROP TABLE IF EXISTS `status_project`;
CREATE TABLE `status_project`  (
  `status_project_id` int NOT NULL,
  `status_project_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`status_project_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of status_project
-- ----------------------------
INSERT INTO `status_project` VALUES (1, 'confirmed');
INSERT INTO `status_project` VALUES (2, 'pending');
INSERT INTO `status_project` VALUES (3, 'rejected');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students`  (
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fullname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nim` int NULL DEFAULT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `campus` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `major` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `group_type_id` int NOT NULL,
  `class_type_id` int NOT NULL,
  `photo_profile` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('student12951', 'Oliver Smith', 112104, 'oliver', '$argon2id$v=19$m=65536,t=3,p=1$4DPw3NTGqVIHWezdDyGWkQ$Ph8t51gqOh+lx2ZC9YLUi+dDZSNp6glZDvEI88ymOzI', 'Univ C', 'Informatic Engineering', 3, 3, 'http://127.0.0.1:5000/api/images/pexels-pixabay-39866.jpg', '2024-11-25 21:40:29', '2024-11-25 21:40:29');
INSERT INTO `students` VALUES ('student25411', 'Alexander Lewis', 112120, 'alexander', '$argon2id$v=19$m=65536,t=3,p=1$FhcVy+n3xixLpAWxuglGkA$Mjyh/HJ0LkuB9J/3abhTt5/liww5uDGviUND/s3hneM', 'Univ E', 'Informatic Engineering', 1, 3, 'http://127.0.0.1:5000/api/images/team-5.jpg', '2024-11-25 21:55:08', '2024-11-25 21:55:08');
INSERT INTO `students` VALUES ('student30271', 'William Brown', 112106, 'william', '$argon2id$v=19$m=65536,t=3,p=1$rkK8+tHo4a/78G8bSrOhyA$DidMUvw+h/916FBUiJkTsKHtZXmWEngAxym/xScVmdk', 'Univ B', 'Informatic Engineering', 4, 1, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:42:04', '2024-11-25 21:42:04');
INSERT INTO `students` VALUES ('student30841', 'Sitorus Tamba', 112101, 'sitorus', '$argon2id$v=19$m=65536,t=3,p=1$FqYwQsz+KfvEFLjYtuEhUg$yINhuLllRXQsOK2ZGb00SL+/mrM/JgtvByjI9/6gq2M', 'Univ A', 'Informatic Engineering', 1, 1, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:34:59', '2024-11-25 21:37:20');
INSERT INTO `students` VALUES ('student38801', 'Emily Clark', 112119, 'emily', '$argon2id$v=19$m=65536,t=3,p=1$U3l4mbkmKSz0UBniHEZ3Aw$ccFRSSyqxR4KdWTPA7oWr6jamEdg97Po0PmlmK/UR9c', 'Univ A', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/pexels-christina-morillo-1181579.jpg', '2024-11-25 21:54:17', '2024-11-25 21:54:17');
INSERT INTO `students` VALUES ('student39961', 'Benjamin Taylor', 112112, 'benjamin', '$argon2id$v=19$m=65536,t=3,p=1$cVhb430lroJ2FC4pFq3hBw$bgt9Yb0ErV6pnGk/GUzDemiEuAph+aC4hAZNdpYC3GA', 'Univ D', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-5.jpg', '2024-11-25 21:46:50', '2024-11-25 21:46:50');
INSERT INTO `students` VALUES ('student41601', 'Isabella Thomas', 112111, 'isabella', '$argon2id$v=19$m=65536,t=3,p=1$G9BamLEuuSeARUAnFfgKcg$/MfuQdC3tnuS40Pr08gfD4kHibIzVi1vYPSNFVFCS5g', 'Univ B', 'Informatic Engineering', 1, 3, 'http://127.0.0.1:5000/api/images/team-6.jpg', '2024-11-25 21:45:50', '2024-11-25 21:45:50');
INSERT INTO `students` VALUES ('student44161', 'Ethan Martinez', 112116, 'ethan', '$argon2id$v=19$m=65536,t=3,p=1$7gCeZ0CIfYpIlaFCdceJ/w$kWMD17vGbVcSsB+vuO1lmXjx3+QggAa37WazlFyY4PU', 'Univ B', 'Informatic Engineering', 1, 1, 'http://127.0.0.1:5000/api/images/team-3.jpg', '2024-11-25 21:51:57', '2024-11-25 21:51:57');
INSERT INTO `students` VALUES ('student46551', 'Sophia Jones', 112107, 'sophia', '$argon2id$v=19$m=65536,t=3,p=1$PkSRoqJmLnq7lSwNMlpaUA$d8FkgWMUTn+4X8hfiku0UzMaLBCvc7RT7jCtIYMkGKU', 'Univ A', 'Informatic Engineering', 4, 2, 'http://127.0.0.1:5000/api/images/team-6.jpg', '2024-11-25 21:42:39', '2024-11-25 21:42:39');
INSERT INTO `students` VALUES ('student48771', 'Charlotte Martinez', 112109, 'charlotte', '$argon2id$v=19$m=65536,t=3,p=1$MryYK7fxH7RDha9Ieu9OLQ$DEKtxXW3/TOJ77t4acmd7+XW0gNOglO5MaIIVJz/uS4', 'Univ C', 'Informatic Engineering', 1, 2, 'http://127.0.0.1:5000/api/images/pexels-christina-morillo-1181579.jpg', '2024-11-25 21:44:21', '2024-11-25 21:44:21');
INSERT INTO `students` VALUES ('student56661', 'Amelia Davis', 112115, 'amelia', '$argon2id$v=19$m=65536,t=3,p=1$y+t052ZBzhgQutnm2DfMXA$4e7L0O3NwNHtZzzq96R4bd/MoMpnt1N6gP8kpM8jm6U', 'Univ C', 'Informatic Engineering', 3, 3, 'http://127.0.0.1:5000/api/images/pexels-christina-morillo-1181424.jpg', '2024-11-25 21:51:16', '2024-11-25 21:51:16');
INSERT INTO `students` VALUES ('student57181', 'Ava White', 112117, 'ava', '$argon2id$v=19$m=65536,t=3,p=1$7hqpi7PNvaBZdzslhDK7Bw$/SzvqtYSyLLbaE+Gbb3C7SJa5Bq/B2qF7Jmqr+4yyMg', 'Univ B', 'Informatic Engineering', 2, 2, 'http://127.0.0.1:5000/api/images/team-4.jpg', '2024-11-25 21:52:46', '2024-11-25 21:52:46');
INSERT INTO `students` VALUES ('student68591', 'James Garcia', 112108, 'james', '$argon2id$v=19$m=65536,t=3,p=1$/MsdMOVIOqUAWvw/C71+6Q$IjFIXJQerSsl9BVbyFyy5oyh/OkqG5mUXm9VT7P26L4', 'Univ E', 'Informatic Engineering', 3, 1, 'http://127.0.0.1:5000/api/images/team-3.jpg', '2024-11-25 21:43:25', '2024-11-25 21:43:25');
INSERT INTO `students` VALUES ('student73951', 'Emma Johnson', 112105, 'emma', '$argon2id$v=19$m=65536,t=3,p=1$330epROZ+XCQSZQiO5fBIQ$IyJK3ASKWHVWkTkcoq5LkXpt0AxoFy/fLnhO2zK6Uso', 'Univ D', 'Informatic Engineering', 4, 2, 'http://127.0.0.1:5000/api/images/team-4.jpg', '2024-11-25 21:41:16', '2024-11-25 21:41:16');
INSERT INTO `students` VALUES ('student85021', 'Mia Moore', 112113, 'mia', '$argon2id$v=19$m=65536,t=3,p=1$zyjA89OIzDVD3KAb4YPdFA$ICjsTaOEp4AIPXpgdX0BxxHGbF0Ks0djJAWYh5b6ZiY', 'Univ C', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-4.jpg', '2024-11-25 21:48:52', '2024-11-25 21:48:52');
INSERT INTO `students` VALUES ('student85841', 'Simanjuntak Sihombing', 112102, 'sihombing', '$argon2id$v=19$m=65536,t=3,p=1$jDFjVSjxYR/kW42p8GF5+g$KeiYJk1buv/CSuq9q4z4UayPsgqdI1DlU9fFvvY8uAI', 'Univ A', 'Informatic Engineering', 2, 1, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:35:52', '2024-11-25 21:35:52');
INSERT INTO `students` VALUES ('student86611', 'Liam Anderson', 112110, 'liam', '$argon2id$v=19$m=65536,t=3,p=1$ObrL6CMxvYg2TKwf907ixA$YvKfC7sII0GRzjCEf+L64mcbBbzLqZ8S12Bij4R9hdE', 'Univ B', 'Informatic Engineering', 4, 1, 'http://127.0.0.1:5000/api/images/team-4.jpg', '2024-11-25 21:45:06', '2024-11-25 21:45:06');
INSERT INTO `students` VALUES ('student90501', 'Lucas Wilson', 112114, 'lucas', '$argon2id$v=19$m=65536,t=3,p=1$Wwc0YU7T0FNGYJp0o2Evfg$53O8YWn10b6LbcaQnRB6JJVS3O+sUyQQh6mt45a41FA', 'Univ A', 'Informatic Engineering', 3, 1, 'http://127.0.0.1:5000/api/images/team-1.jpg', '2024-11-25 21:49:55', '2024-11-25 21:49:55');
INSERT INTO `students` VALUES ('student93111', 'Togatorop Sitompul', 112103, 'sitompul', '$argon2id$v=19$m=65536,t=3,p=1$vKz3hcYxEUjJ+hjc0wjTmA$zrUu305+A3gepiY9rfd5FLYpZXRPwPSm5rDfRSqipYQ', 'Univ B', 'Informatic Engineering', 3, 2, 'http://127.0.0.1:5000/api/images/team-5.jpg', '2024-11-25 21:38:52', '2024-11-25 21:38:52');
INSERT INTO `students` VALUES ('student99281', 'Noah Harris', 112118, 'noah', '$argon2id$v=19$m=65536,t=3,p=1$6ZDSxN2n9f6OMnv5in+4YA$Dv/UZyQA3o7cs10xe0Z+U7PGci6Y+HFIZYuzcnEQ+mM', 'Univ B', 'Informatic Engineering', 3, 1, 'http://127.0.0.1:5000/api/images/pexels-pixabay-39866.jpg', '2024-11-25 21:53:30', '2024-11-25 21:53:30');

SET FOREIGN_KEY_CHECKS = 1;
