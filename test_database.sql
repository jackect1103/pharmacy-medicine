/*
 Navicat Premium Data Transfer

 Source Server         : 百度智能云
 Source Server Type    : MySQL
 Source Server Version : 50737
 Source Host           : 106.13.199.161:3306
 Source Schema         : test_database

 Target Server Type    : MySQL
 Target Server Version : 50737
 File Encoding         : 65001

 Date: 22/04/2022 12:39:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for durpInfos
-- ----------------------------
DROP TABLE IF EXISTS `durpInfos`;
CREATE TABLE `durpInfos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `factory` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `durgname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `warehousename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `productiontime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expirationtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prescription` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `librarynumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `regionsnumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of durpInfos
-- ----------------------------
INSERT INTO `durpInfos` VALUES (2, '111', '111', '111', '111', '111', '2022-03-31T16:00:00.000Z', '2022-03-31T16:00:00.000Z', '1', '111', '111', '111');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `roleid` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 1, 'admin', '123456', 0);
INSERT INTO `users` VALUES (2, 2, '123', '123456', 1);

-- ----------------------------
-- Table structure for warehouses
-- ----------------------------
DROP TABLE IF EXISTS `warehouses`;
CREATE TABLE `warehouses`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warehousename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `durgname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `librarynum` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `outbound` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `entry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of warehouses
-- ----------------------------
INSERT INTO `warehouses` VALUES (1, '222222222222', '111', '111', '111111111111', '111', '111');
INSERT INTO `warehouses` VALUES (4, '111111111', '111111111', '111111111', '111111111', '111111111', '111111111');

SET FOREIGN_KEY_CHECKS = 1;
