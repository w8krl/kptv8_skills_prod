-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.26 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for res_mgr
CREATE DATABASE IF NOT EXISTS `res_mgr` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `res_mgr`;

-- Dumping structure for table res_mgr.comp_domain
CREATE TABLE IF NOT EXISTS `comp_domain` (
  `id` int NOT NULL AUTO_INCREMENT,
  `domain` varchar(250) DEFAULT NULL,
  `last_modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.comp_domain: ~3 rows (approximately)
/*!40000 ALTER TABLE `comp_domain` DISABLE KEYS */;
INSERT INTO `comp_domain` (`id`, `domain`, `last_modified`) VALUES
	(1, 'Network Design / Planning', '2021-08-17 05:46:10'),
	(2, 'Network Operations', '2021-08-17 05:51:30'),
	(3, 'OSS Design / Planning', '2021-08-17 05:51:41');
/*!40000 ALTER TABLE `comp_domain` ENABLE KEYS */;

-- Dumping structure for table res_mgr.comp_subdomain
CREATE TABLE IF NOT EXISTS `comp_subdomain` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sub_domain` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `parent_domain` int NOT NULL,
  `last_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_comp_subdomain_comp_domain` (`parent_domain`),
  CONSTRAINT `FK_comp_subdomain_comp_domain` FOREIGN KEY (`parent_domain`) REFERENCES `comp_domain` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.comp_subdomain: ~6 rows (approximately)
/*!40000 ALTER TABLE `comp_subdomain` DISABLE KEYS */;
INSERT INTO `comp_subdomain` (`id`, `sub_domain`, `parent_domain`, `last_modified`) VALUES
	(1, 'Field', 1, '2021-08-17 05:57:04'),
	(2, 'RAN', 1, '2021-08-17 05:57:07'),
	(3, 'Transport', 1, '2021-08-17 05:57:12'),
	(4, 'Fixed', 1, '2021-08-17 05:57:14'),
	(5, 'Core', 1, '2021-08-17 05:57:16'),
	(6, 'IT / OSS', 3, '2021-08-17 20:13:58');
/*!40000 ALTER TABLE `comp_subdomain` ENABLE KEYS */;

-- Dumping structure for table res_mgr.comp_tags
CREATE TABLE IF NOT EXISTS `comp_tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `parent_subdomain` int DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `last_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_comp_tags_comp_subdomain` (`parent_subdomain`) USING BTREE,
  CONSTRAINT `FK_comp_tags_comp_subdomain` FOREIGN KEY (`parent_subdomain`) REFERENCES `comp_subdomain` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.comp_tags: ~55 rows (approximately)
/*!40000 ALTER TABLE `comp_tags` DISABLE KEYS */;
INSERT INTO `comp_tags` (`id`, `tag`, `parent_subdomain`, `created_by`, `last_modified`) VALUES
	(14, 'Nokia Site Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(15, 'Nokia Site Survey', 2, 'mdakin', '2021-08-17 06:07:13'),
	(16, 'Nokia Site Acquisition', 2, 'mdakin', '2021-08-17 06:07:13'),
	(17, 'Nokia 2G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(18, 'Nokia 3G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(19, 'Nokia 4G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(20, 'Nokia 5G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(21, 'Nokia O-RAN Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(22, 'Nokia 2G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(23, 'Nokia 3G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(24, 'Nokia 4G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(25, 'Nokia 5G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(26, 'Nokia O-RAN', 2, 'mdakin', '2021-08-17 06:07:13'),
	(27, 'Ericsson Site Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(28, 'Ericsson Site Survey', 2, 'mdakin', '2021-08-17 06:07:13'),
	(29, 'Ericsson Site Acquisition', 2, 'mdakin', '2021-08-17 06:07:13'),
	(30, 'Ericsson 2G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(31, 'Ericsson 3G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(32, 'Ericsson 4G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(33, 'Ericsson 5G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(34, 'Ericsson O-RAN Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(35, 'Ericsson 2G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(36, 'Ericsson 3G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(37, 'Ericsson 4G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(38, 'Ericsson 5G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(39, 'Ericsson O-RAN', 2, 'mdakin', '2021-08-17 06:07:13'),
	(40, 'Huawei Site Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(41, 'Huawei Site Survey', 2, 'mdakin', '2021-08-17 06:07:13'),
	(42, 'Huawei Site Acquisition', 2, 'mdakin', '2021-08-17 06:07:13'),
	(43, 'Huawei 2G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(44, 'Huawei 3G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(45, 'Huawei 4G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(46, 'Huawei 5G Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(47, 'Huawei O-RAN Design', 2, 'mdakin', '2021-08-17 06:07:13'),
	(48, 'Huawei 2G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(49, 'Huawei 3G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(50, 'Huawei 4G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(51, 'Huawei 5G Planning', 2, 'mdakin', '2021-08-17 06:07:13'),
	(52, 'Mavenir O-RAN', 2, 'mdakin', '2021-08-17 06:07:13'),
	(53, 'NEC O-RAN', 2, 'mdakin', '2021-08-17 06:07:13'),
	(54, 'IBM O-RAN', 2, 'mdakin', '2021-08-17 06:07:13'),
	(56, 'U2020', 6, 'kwebster', '2021-08-17 06:09:27'),
	(57, 'NetAct', 6, 'kwebster', '2021-08-17 06:09:27'),
	(58, 'Nokia eNB', 6, 'kwebster', '2021-08-17 06:09:27'),
	(59, 'Ericsson eNB', 6, 'kwebster', '2021-08-17 06:09:27'),
	(60, 'Solution Architect', 6, 'kwebster', '2021-08-17 06:09:27'),
	(61, 'Data architect', 6, 'kwebster', '2021-08-17 06:09:27'),
	(62, 'MySQL', 6, 'kwebster', '2021-08-17 06:09:27'),
	(63, 'SQL', 6, 'kwebster', '2021-08-17 06:09:27'),
	(64, 'Databases', 6, 'kwebster', '2021-08-17 06:09:27'),
	(65, 'Software Development', 6, 'kwebster', '2021-08-17 06:09:27'),
	(66, 'Scripting', 6, 'kwebster', '2021-08-17 06:09:27'),
	(67, 'Comarch', 6, 'kwebster', '2021-08-17 06:09:27'),
	(68, 'NetCracker', 6, 'kwebster', '2021-08-17 06:09:27'),
	(69, 'TIBCO Mashery', 6, 'kwebster', '2021-08-17 06:09:27');
/*!40000 ALTER TABLE `comp_tags` ENABLE KEYS */;

-- Dumping structure for table res_mgr.comp_tag_data
CREATE TABLE IF NOT EXISTS `comp_tag_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `res_id` int NOT NULL,
  `comp_tag_id` int NOT NULL,
  `last_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `FK_competency_data_res` (`res_id`),
  CONSTRAINT `FK_competency_data_res` FOREIGN KEY (`res_id`) REFERENCES `res` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1685 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table res_mgr.comp_tag_data: ~165 rows (approximately)
/*!40000 ALTER TABLE `comp_tag_data` DISABLE KEYS */;
INSERT INTO `comp_tag_data` (`id`, `res_id`, `comp_tag_id`, `last_modified`) VALUES
	(1509, 887, 14, '2021-08-30 04:54:43'),
	(1510, 887, 15, '2021-08-30 04:54:43'),
	(1511, 887, 16, '2021-08-30 04:54:43'),
	(1512, 887, 17, '2021-08-30 04:54:43'),
	(1513, 887, 18, '2021-08-30 04:54:43'),
	(1514, 887, 19, '2021-08-30 04:54:43'),
	(1515, 887, 20, '2021-08-30 04:54:43'),
	(1516, 887, 21, '2021-08-30 04:54:43'),
	(1517, 887, 22, '2021-08-30 04:54:43'),
	(1518, 887, 23, '2021-08-30 04:54:43'),
	(1519, 887, 24, '2021-08-30 04:54:43'),
	(1520, 887, 25, '2021-08-30 04:54:43'),
	(1521, 887, 26, '2021-08-30 04:54:43'),
	(1522, 887, 27, '2021-08-30 04:54:43'),
	(1523, 887, 28, '2021-08-30 04:54:43'),
	(1524, 887, 29, '2021-08-30 04:54:43'),
	(1525, 887, 30, '2021-08-30 04:54:43'),
	(1526, 887, 31, '2021-08-30 04:54:43'),
	(1527, 887, 32, '2021-08-30 04:54:43'),
	(1528, 887, 33, '2021-08-30 04:54:43'),
	(1529, 887, 34, '2021-08-30 04:54:43'),
	(1530, 887, 35, '2021-08-30 04:54:43'),
	(1531, 887, 36, '2021-08-30 04:54:43'),
	(1532, 887, 37, '2021-08-30 04:54:43'),
	(1533, 887, 38, '2021-08-30 04:54:43'),
	(1534, 887, 39, '2021-08-30 04:54:43'),
	(1535, 887, 40, '2021-08-30 04:54:43'),
	(1536, 887, 41, '2021-08-30 04:54:43'),
	(1537, 887, 42, '2021-08-30 04:54:43'),
	(1538, 887, 43, '2021-08-30 04:54:43'),
	(1539, 887, 44, '2021-08-30 04:54:43'),
	(1540, 887, 45, '2021-08-30 04:54:43'),
	(1541, 887, 46, '2021-08-30 04:54:43'),
	(1542, 887, 47, '2021-08-30 04:54:43'),
	(1543, 887, 48, '2021-08-30 04:54:43'),
	(1544, 887, 49, '2021-08-30 04:54:43'),
	(1545, 887, 50, '2021-08-30 04:54:43'),
	(1546, 887, 51, '2021-08-30 04:54:43'),
	(1547, 887, 52, '2021-08-30 04:54:43'),
	(1548, 887, 53, '2021-08-30 04:54:43'),
	(1549, 887, 54, '2021-08-30 04:54:43'),
	(1550, 887, 56, '2021-08-30 04:54:43'),
	(1551, 887, 57, '2021-08-30 04:54:43'),
	(1552, 887, 58, '2021-08-30 04:54:43'),
	(1553, 887, 59, '2021-08-30 04:54:43'),
	(1554, 887, 60, '2021-08-30 04:54:43'),
	(1555, 887, 61, '2021-08-30 04:54:43'),
	(1556, 887, 62, '2021-08-30 04:54:43'),
	(1557, 887, 63, '2021-08-30 04:54:43'),
	(1558, 887, 64, '2021-08-30 04:54:43'),
	(1559, 887, 65, '2021-08-30 04:54:43'),
	(1560, 887, 66, '2021-08-30 04:54:43'),
	(1561, 887, 67, '2021-08-30 04:54:43'),
	(1562, 887, 68, '2021-08-30 04:54:43'),
	(1563, 887, 69, '2021-08-30 04:54:43'),
	(1564, 889, 14, '2021-08-30 06:24:20'),
	(1565, 889, 15, '2021-08-30 06:24:20'),
	(1566, 889, 16, '2021-08-30 06:24:20'),
	(1567, 889, 17, '2021-08-30 06:24:20'),
	(1568, 889, 18, '2021-08-30 06:24:20'),
	(1569, 889, 19, '2021-08-30 06:24:20'),
	(1570, 889, 20, '2021-08-30 06:24:20'),
	(1571, 889, 21, '2021-08-30 06:24:20'),
	(1572, 889, 22, '2021-08-30 06:24:20'),
	(1573, 889, 23, '2021-08-30 06:24:20'),
	(1574, 889, 24, '2021-08-30 06:24:20'),
	(1575, 889, 25, '2021-08-30 06:24:20'),
	(1576, 889, 26, '2021-08-30 06:24:20'),
	(1577, 889, 27, '2021-08-30 06:24:20'),
	(1578, 889, 28, '2021-08-30 06:24:20'),
	(1579, 889, 29, '2021-08-30 06:24:20'),
	(1580, 889, 30, '2021-08-30 06:24:20'),
	(1581, 889, 31, '2021-08-30 06:24:20'),
	(1582, 889, 32, '2021-08-30 06:24:20'),
	(1583, 889, 33, '2021-08-30 06:24:20'),
	(1584, 889, 34, '2021-08-30 06:24:20'),
	(1585, 889, 35, '2021-08-30 06:24:20'),
	(1586, 889, 36, '2021-08-30 06:24:20'),
	(1587, 889, 37, '2021-08-30 06:24:20'),
	(1588, 889, 38, '2021-08-30 06:24:20'),
	(1589, 889, 39, '2021-08-30 06:24:20'),
	(1590, 889, 40, '2021-08-30 06:24:20'),
	(1591, 889, 41, '2021-08-30 06:24:20'),
	(1592, 889, 42, '2021-08-30 06:24:20'),
	(1593, 889, 43, '2021-08-30 06:24:20'),
	(1594, 889, 44, '2021-08-30 06:24:20'),
	(1595, 889, 45, '2021-08-30 06:24:20'),
	(1596, 889, 46, '2021-08-30 06:24:20'),
	(1597, 889, 47, '2021-08-30 06:24:20'),
	(1598, 889, 48, '2021-08-30 06:24:20'),
	(1599, 889, 49, '2021-08-30 06:24:20'),
	(1600, 889, 50, '2021-08-30 06:24:20'),
	(1601, 889, 51, '2021-08-30 06:24:20'),
	(1602, 889, 52, '2021-08-30 06:24:20'),
	(1603, 889, 53, '2021-08-30 06:24:20'),
	(1604, 889, 54, '2021-08-30 06:24:20'),
	(1605, 889, 56, '2021-08-30 06:24:20'),
	(1606, 889, 57, '2021-08-30 06:24:20'),
	(1607, 889, 58, '2021-08-30 06:24:20'),
	(1608, 889, 59, '2021-08-30 06:24:20'),
	(1609, 889, 60, '2021-08-30 06:24:20'),
	(1610, 889, 61, '2021-08-30 06:24:20'),
	(1611, 889, 62, '2021-08-30 06:24:20'),
	(1612, 889, 63, '2021-08-30 06:24:20'),
	(1613, 889, 64, '2021-08-30 06:24:20'),
	(1614, 889, 65, '2021-08-30 06:24:20'),
	(1615, 889, 66, '2021-08-30 06:24:20'),
	(1616, 889, 67, '2021-08-30 06:24:20'),
	(1617, 889, 68, '2021-08-30 06:24:20'),
	(1618, 889, 69, '2021-08-30 06:24:20'),
	(1619, 890, 14, '2021-08-30 06:27:53'),
	(1620, 890, 15, '2021-08-30 06:27:53'),
	(1621, 890, 16, '2021-08-30 06:27:53'),
	(1622, 890, 17, '2021-08-30 06:27:53'),
	(1623, 890, 18, '2021-08-30 06:27:53'),
	(1624, 890, 19, '2021-08-30 06:27:53'),
	(1625, 890, 20, '2021-08-30 06:27:53'),
	(1626, 890, 21, '2021-08-30 06:27:53'),
	(1627, 890, 22, '2021-08-30 06:27:53'),
	(1628, 890, 23, '2021-08-30 06:27:53'),
	(1629, 890, 24, '2021-08-30 06:27:53'),
	(1630, 890, 25, '2021-08-30 06:27:53'),
	(1631, 890, 26, '2021-08-30 06:27:53'),
	(1632, 890, 27, '2021-08-30 06:27:53'),
	(1633, 890, 28, '2021-08-30 06:27:53'),
	(1634, 890, 29, '2021-08-30 06:27:53'),
	(1635, 890, 30, '2021-08-30 06:27:53'),
	(1636, 890, 31, '2021-08-30 06:27:53'),
	(1637, 890, 32, '2021-08-30 06:27:53'),
	(1638, 890, 33, '2021-08-30 06:27:53'),
	(1639, 890, 34, '2021-08-30 06:27:53'),
	(1640, 890, 35, '2021-08-30 06:27:53'),
	(1641, 890, 36, '2021-08-30 06:27:53'),
	(1642, 890, 37, '2021-08-30 06:27:53'),
	(1643, 890, 38, '2021-08-30 06:27:53'),
	(1644, 890, 39, '2021-08-30 06:27:53'),
	(1645, 890, 40, '2021-08-30 06:27:53'),
	(1646, 890, 41, '2021-08-30 06:27:53'),
	(1647, 890, 42, '2021-08-30 06:27:53'),
	(1648, 890, 43, '2021-08-30 06:27:53'),
	(1649, 890, 44, '2021-08-30 06:27:53'),
	(1650, 890, 45, '2021-08-30 06:27:53'),
	(1651, 890, 46, '2021-08-30 06:27:53'),
	(1652, 890, 47, '2021-08-30 06:27:53'),
	(1653, 890, 48, '2021-08-30 06:27:53'),
	(1654, 890, 49, '2021-08-30 06:27:53'),
	(1655, 890, 50, '2021-08-30 06:27:53'),
	(1656, 890, 51, '2021-08-30 06:27:53'),
	(1657, 890, 52, '2021-08-30 06:27:53'),
	(1658, 890, 53, '2021-08-30 06:27:53'),
	(1659, 890, 54, '2021-08-30 06:27:53'),
	(1660, 890, 56, '2021-08-30 06:27:53'),
	(1661, 890, 57, '2021-08-30 06:27:53'),
	(1662, 890, 58, '2021-08-30 06:27:53'),
	(1663, 890, 59, '2021-08-30 06:27:53'),
	(1664, 890, 60, '2021-08-30 06:27:53'),
	(1665, 890, 61, '2021-08-30 06:27:53'),
	(1666, 890, 62, '2021-08-30 06:27:53'),
	(1667, 890, 63, '2021-08-30 06:27:53'),
	(1668, 890, 64, '2021-08-30 06:27:53'),
	(1669, 890, 65, '2021-08-30 06:27:53'),
	(1670, 890, 66, '2021-08-30 06:27:53'),
	(1671, 890, 67, '2021-08-30 06:27:53'),
	(1672, 890, 68, '2021-08-30 06:27:53'),
	(1673, 890, 69, '2021-08-30 06:27:53'),
	(1674, 891, 14, '2021-08-30 06:40:15'),
	(1675, 891, 16, '2021-08-30 06:40:15'),
	(1676, 891, 20, '2021-08-30 06:40:15'),
	(1677, 891, 22, '2021-08-30 06:40:15'),
	(1678, 892, 14, '2021-08-30 12:11:24'),
	(1679, 892, 15, '2021-08-30 12:11:24'),
	(1680, 892, 17, '2021-08-30 12:11:24'),
	(1681, 892, 18, '2021-08-30 12:11:24'),
	(1682, 892, 19, '2021-08-30 12:11:24'),
	(1683, 892, 20, '2021-08-30 12:11:24'),
	(1684, 892, 21, '2021-08-30 12:11:24');
/*!40000 ALTER TABLE `comp_tag_data` ENABLE KEYS */;

-- Dumping structure for table res_mgr.prof_certs
CREATE TABLE IF NOT EXISTS `prof_certs` (
  `id_cert` int NOT NULL,
  `cert_name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `vendor` varchar(500) DEFAULT NULL,
  `version` varchar(50) DEFAULT NULL,
  `awarding_body` varchar(50) DEFAULT NULL,
  `site` varchar(500) DEFAULT NULL,
  `last_modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cert`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.prof_certs: ~0 rows (approximately)
/*!40000 ALTER TABLE `prof_certs` DISABLE KEYS */;
/*!40000 ALTER TABLE `prof_certs` ENABLE KEYS */;

-- Dumping structure for table res_mgr.prof_cert_data
CREATE TABLE IF NOT EXISTS `prof_cert_data` (
  `id_cert_data` int NOT NULL,
  `id_res` int NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `last_modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cert_data`),
  KEY `FK__prof_certs` (`id_res`),
  CONSTRAINT `FK__prof_certs` FOREIGN KEY (`id_res`) REFERENCES `prof_certs` (`id_cert`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.prof_cert_data: ~0 rows (approximately)
/*!40000 ALTER TABLE `prof_cert_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `prof_cert_data` ENABLE KEYS */;

-- Dumping structure for table res_mgr.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id_project` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(200) DEFAULT NULL,
  `project_summary` varchar(500) DEFAULT NULL,
  `client` varchar(200) DEFAULT NULL,
  `active` tinyint DEFAULT NULL,
  `project_start` datetime DEFAULT NULL,
  `project_end` datetime DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `office_address` varchar(200) DEFAULT NULL,
  `country` varchar(150) DEFAULT NULL,
  `long` float DEFAULT NULL,
  `postcode` float DEFAULT NULL,
  `last_modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.projects: ~1 rows (approximately)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id_project`, `project_name`, `project_summary`, `client`, `active`, `project_start`, `project_end`, `lat`, `office_address`, `country`, `long`, `postcode`, `last_modified`) VALUES
	(1, 'Maya', 'Core Network Planning', 'O2', NULL, '2021-07-26 12:27:18', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(2, 'Chariot', 'RAN Transformation', 'Three', NULL, '2019-01-01 00:00:00', '2021-03-31 23:59:59', NULL, NULL, NULL, NULL, NULL, NULL),
	(3, 'C44 Group', 'Group Activities', 'C44', NULL, '2000-01-01 00:00:00', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- Dumping structure for table res_mgr.res
CREATE TABLE IF NOT EXISTS `res` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `title` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `pri_contact_no` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `sec_contact_no` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `contract_type` varchar(50) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `long` float DEFAULT NULL,
  `career_start` varchar(50) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `notifications` tinyint DEFAULT NULL,
  `management_co` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `co_type` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `is_umbrella` tinytext,
  `comments` varchar(500) DEFAULT NULL,
  `service_desc` varchar(50) DEFAULT NULL,
  `role` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `assignment_start` varchar(50) DEFAULT NULL,
  `assignment_end` varchar(50) DEFAULT NULL,
  `pri_rate` float DEFAULT NULL,
  `sec_rate` varchar(50) DEFAULT NULL,
  `rate_period` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `empl_category` varchar(50) DEFAULT NULL,
  `currency` varchar(50) DEFAULT NULL,
  `commitment` varchar(50) DEFAULT NULL,
  `active_status` varchar(50) DEFAULT NULL,
  `cv_path` varchar(150) DEFAULT NULL,
  `last_modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatar` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=893 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.res: ~305 rows (approximately)
/*!40000 ALTER TABLE `res` DISABLE KEYS */;


-- PERSONAL DATA REDACTED


/*!40000 ALTER TABLE `res` ENABLE KEYS */;

-- Dumping structure for table res_mgr.res_assignments
CREATE TABLE IF NOT EXISTS `res_assignments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_proj` int DEFAULT NULL,
  `title` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `desc` varchar(250) DEFAULT NULL,
  `start` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end` datetime DEFAULT NULL,
  `id_res` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__projects_1` (`id_proj`),
  KEY `FK_res_assignments_res` (`id_res`),
  CONSTRAINT `FK__projects_1` FOREIGN KEY (`id_proj`) REFERENCES `projects` (`id_project`),
  CONSTRAINT `FK_res_assignments_res` FOREIGN KEY (`id_res`) REFERENCES `res` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.res_assignments: ~0 rows (approximately)
/*!40000 ALTER TABLE `res_assignments` DISABLE KEYS */;
INSERT INTO `res_assignments` (`id`, `id_proj`, `title`, `desc`, `start`, `end`, `id_res`) VALUES
	(1, 2, 'OSS Consultant', 'OSS Lead for Chariot Transformation', '2019-02-04 07:00:00', '2021-04-07 17:00:00', 466),
	(2, 3, 'Automation Consultant', 'C44 Automation Strategy', '2021-05-01 00:00:00', NULL, 466);
/*!40000 ALTER TABLE `res_assignments` ENABLE KEYS */;

-- Dumping structure for table res_mgr.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id_role` int NOT NULL,
  `title` date DEFAULT NULL,
  `id_project` int DEFAULT NULL,
  `role_start` date DEFAULT NULL,
  `role_end` date DEFAULT NULL,
  `filled` tinyint DEFAULT NULL,
  `emp_id` int DEFAULT NULL,
  PRIMARY KEY (`id_role`),
  KEY `FK__emp` (`emp_id`),
  KEY `FK__projects` (`id_project`),
  CONSTRAINT `FK__emp` FOREIGN KEY (`emp_id`) REFERENCES `res` (`id`),
  CONSTRAINT `FK__projects` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id_project`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table res_mgr.roles: ~0 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
