/*
SQLyog Community v13.0.1 (64 bit)
MySQL - 8.0.21 : Database - claseshibridas
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`claseshibridas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `claseshibridas`;

/*Data for the table `alumnos_alumno` */

LOCK TABLES `alumnos_alumno` WRITE;

insert  into `alumnos_alumno`(`id`,`estado`,`nombre`,`codigo`,`estatura`,`fecha_nacimiento`,`fecha_creacion`,`curso_id`) values 
(2,1,'Pepito 2',1120,1.69,'2021-03-16','2021-03-02 01:26:38.713691',1),
(3,1,'Pepito 6',109,NULL,'2002-03-03','2021-03-02 01:29:14.765692',1),
(4,1,'Pepito 7',11,NULL,'2001-03-02','2021-03-02 01:39:37.219692',1),
(5,1,'Pepito 9',109,NULL,'2002-03-12','2021-03-02 23:22:53.902707',1),
(6,1,'Pepito 9',109,NULL,'2002-03-12','2021-03-02 23:24:30.626706',1),
(7,1,'Pepito 9',109,NULL,'2002-03-12','2021-03-02 23:25:12.190706',1),
(8,1,'Pepito 9',109,NULL,'2002-03-12','2021-03-02 23:25:16.375706',1),
(9,1,'Pepito 4',108,NULL,'2021-03-17','2021-03-02 23:54:17.180706',1),
(10,1,'Pepito 12',101,NULL,'2021-03-04','2021-03-03 00:10:21.735706',1),
(11,1,'pepito 13',108,1.5,'2021-04-04','2021-03-03 00:22:43.588707',1),
(12,1,'pepito 14',108,NULL,'2021-04-04','2021-03-03 00:25:17.172706',1),
(13,1,'Pepito 15',101,NULL,'2021-03-16','2021-03-03 00:28:17.218706',1),
(14,1,'Pepito 16',101,NULL,'2021-03-16','2021-03-03 00:29:04.262707',1),
(15,1,'Pepito 17',101,NULL,'2021-03-11','2021-03-03 00:29:42.892706',1),
(16,1,'Pepito 18',101,NULL,'2021-12-31','2021-03-03 00:33:30.766705',1),
(17,1,'Pepito 19',101,NULL,'2021-12-31','2021-03-03 00:33:36.606706',1),
(18,1,'Pepito 20',101,NULL,'2021-03-16','2021-03-09 01:04:30.885015',1),
(19,1,'Pepito 21',101,NULL,'2021-03-16','2021-03-09 01:04:38.604014',1),
(20,1,'Pepito 22',103,NULL,'2010-12-29','2021-03-09 01:43:40.608014',1),
(21,1,'Pepito 23',104,NULL,'2011-03-15','2021-03-09 01:50:27.485013',1),
(22,1,'Pepito 5',10,108,'2001-03-02','2021-03-10 23:51:19.616650',1);

UNLOCK TABLES;

/*Data for the table `alumnos_curso` */

LOCK TABLES `alumnos_curso` WRITE;

insert  into `alumnos_curso`(`id`,`cantidad`,`curso`,`codigo`,`estado`,`promedio`,`fecha_creacion`) values 
(1,20,'6D',101,1,3.5,'2021-03-01 19:48:50.000000');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
