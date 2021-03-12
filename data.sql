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
(11,1,'pepito 13',108,NULL,'2021-04-04','2021-03-03 00:22:43.588707',1),
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

/*Data for the table `auth_group` */

LOCK TABLES `auth_group` WRITE;

UNLOCK TABLES;

/*Data for the table `auth_group_permissions` */

LOCK TABLES `auth_group_permissions` WRITE;

UNLOCK TABLES;

/*Data for the table `auth_permission` */

LOCK TABLES `auth_permission` WRITE;

insert  into `auth_permission`(`id`,`name`,`content_type_id`,`codename`) values 
(1,'Can add log entry',1,'add_logentry'),
(2,'Can change log entry',1,'change_logentry'),
(3,'Can delete log entry',1,'delete_logentry'),
(4,'Can view log entry',1,'view_logentry'),
(5,'Can add permission',2,'add_permission'),
(6,'Can change permission',2,'change_permission'),
(7,'Can delete permission',2,'delete_permission'),
(8,'Can view permission',2,'view_permission'),
(9,'Can add group',3,'add_group'),
(10,'Can change group',3,'change_group'),
(11,'Can delete group',3,'delete_group'),
(12,'Can view group',3,'view_group'),
(13,'Can add user',4,'add_user'),
(14,'Can change user',4,'change_user'),
(15,'Can delete user',4,'delete_user'),
(16,'Can view user',4,'view_user'),
(17,'Can add content type',5,'add_contenttype'),
(18,'Can change content type',5,'change_contenttype'),
(19,'Can delete content type',5,'delete_contenttype'),
(20,'Can view content type',5,'view_contenttype'),
(21,'Can add session',6,'add_session'),
(22,'Can change session',6,'change_session'),
(23,'Can delete session',6,'delete_session'),
(24,'Can view session',6,'view_session'),
(25,'Can add alumno',7,'add_alumno'),
(26,'Can change alumno',7,'change_alumno'),
(27,'Can delete alumno',7,'delete_alumno'),
(28,'Can view alumno',7,'view_alumno'),
(29,'Can add curso',8,'add_curso'),
(30,'Can change curso',8,'change_curso'),
(31,'Can delete curso',8,'delete_curso'),
(32,'Can view curso',8,'view_curso'),
(33,'Can add Token',9,'add_token'),
(34,'Can change Token',9,'change_token'),
(35,'Can delete Token',9,'delete_token'),
(36,'Can view Token',9,'view_token'),
(37,'Can add token',10,'add_tokenproxy'),
(38,'Can change token',10,'change_tokenproxy'),
(39,'Can delete token',10,'delete_tokenproxy'),
(40,'Can view token',10,'view_tokenproxy');

UNLOCK TABLES;

/*Data for the table `auth_user` */

LOCK TABLES `auth_user` WRITE;

insert  into `auth_user`(`id`,`password`,`last_login`,`is_superuser`,`username`,`first_name`,`last_name`,`email`,`is_staff`,`is_active`,`date_joined`) values 
(1,'pbkdf2_sha256$216000$dOSJdb3DdLFo$gg1///EIBAprbRD+ozdKsILh5LvVIkD76HkVottC4kE=','2021-03-11 23:28:06.866212',1,'admin','','','',1,1,'2021-03-02 00:47:35.366690');

UNLOCK TABLES;

/*Data for the table `auth_user_groups` */

LOCK TABLES `auth_user_groups` WRITE;

UNLOCK TABLES;

/*Data for the table `auth_user_user_permissions` */

LOCK TABLES `auth_user_user_permissions` WRITE;

UNLOCK TABLES;

/*Data for the table `authtoken_token` */

LOCK TABLES `authtoken_token` WRITE;

insert  into `authtoken_token`(`key`,`created`,`user_id`) values 
('b7ea7c486301f881301197aa8dccd24aa2ef397e','2021-03-03 00:53:45.324706',1);

UNLOCK TABLES;

/*Data for the table `django_admin_log` */

LOCK TABLES `django_admin_log` WRITE;

insert  into `django_admin_log`(`id`,`action_time`,`object_id`,`object_repr`,`action_flag`,`change_message`,`content_type_id`,`user_id`) values 
(1,'2021-03-02 00:50:04.582692','1','Pepito 4 - 108',1,'[{\"added\": {}}]',7,1),
(2,'2021-03-02 01:26:38.718692','2','Pepito 5 - 10',1,'[{\"added\": {}}]',7,1);

UNLOCK TABLES;

/*Data for the table `django_content_type` */

LOCK TABLES `django_content_type` WRITE;

insert  into `django_content_type`(`id`,`app_label`,`model`) values 
(1,'admin','logentry'),
(7,'alumnos','alumno'),
(8,'alumnos','curso'),
(3,'auth','group'),
(2,'auth','permission'),
(4,'auth','user'),
(9,'authtoken','token'),
(10,'authtoken','tokenproxy'),
(5,'contenttypes','contenttype'),
(6,'sessions','session');

UNLOCK TABLES;

/*Data for the table `django_migrations` */

LOCK TABLES `django_migrations` WRITE;

insert  into `django_migrations`(`id`,`app`,`name`,`applied`) values 
(1,'contenttypes','0001_initial','2021-03-02 00:42:37.569692'),
(2,'auth','0001_initial','2021-03-02 00:42:38.061692'),
(3,'admin','0001_initial','2021-03-02 00:42:39.189691'),
(4,'admin','0002_logentry_remove_auto_add','2021-03-02 00:42:39.510692'),
(5,'admin','0003_logentry_add_action_flag_choices','2021-03-02 00:42:39.576692'),
(6,'alumnos','0001_initial','2021-03-02 00:42:39.661691'),
(7,'alumnos','0002_auto_20210226_2035','2021-03-02 00:42:40.277691'),
(8,'contenttypes','0002_remove_content_type_name','2021-03-02 00:42:40.880695'),
(9,'auth','0002_alter_permission_name_max_length','2021-03-02 00:42:41.164690'),
(10,'auth','0003_alter_user_email_max_length','2021-03-02 00:42:41.251691'),
(11,'auth','0004_alter_user_username_opts','2021-03-02 00:42:41.294692'),
(12,'auth','0005_alter_user_last_login_null','2021-03-02 00:42:41.516691'),
(13,'auth','0006_require_contenttypes_0002','2021-03-02 00:42:41.529698'),
(14,'auth','0007_alter_validators_add_error_messages','2021-03-02 00:42:41.567690'),
(15,'auth','0008_alter_user_username_max_length','2021-03-02 00:42:41.979692'),
(16,'auth','0009_alter_user_last_name_max_length','2021-03-02 00:42:42.261692'),
(17,'auth','0010_alter_group_name_max_length','2021-03-02 00:42:42.305690'),
(18,'auth','0011_update_proxy_permissions','2021-03-02 00:42:42.335691'),
(19,'auth','0012_alter_user_first_name_max_length','2021-03-02 00:42:42.477698'),
(20,'sessions','0001_initial','2021-03-02 00:42:42.540691'),
(21,'alumnos','0003_auto_20210301_1943','2021-03-02 00:43:17.295690'),
(22,'alumnos','0004_auto_20210301_1944','2021-03-02 00:44:52.593691'),
(23,'authtoken','0001_initial','2021-03-03 00:49:46.965706'),
(24,'authtoken','0002_auto_20160226_1747','2021-03-03 00:49:47.428706'),
(25,'authtoken','0003_tokenproxy','2021-03-03 00:49:47.585706'),
(26,'alumnos','0005_auto_20210310_1848','2021-03-10 23:48:23.241649');

UNLOCK TABLES;

/*Data for the table `django_session` */

LOCK TABLES `django_session` WRITE;

insert  into `django_session`(`session_key`,`session_data`,`expire_date`) values 
('4uws43obdse3x11cvyj6cl9s7rb6zks0','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILFH:BpImtlyaXFacPN59vupb9oKa3FuLnZjw7dviI3Rrpj8','2021-03-20 00:56:39.953925'),
('5vn7kfoivtlx1edhevmr18f0d11gwtul','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILMI:ptVbY36j4AbdRbPjpVgh4pUzLiiN1vgGDuph3dQ3Eqw','2021-03-20 01:03:54.739927'),
('732kec8gyjfo40ndzq9q8651x2uvbnd4','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILRW:GJwN-gZVL2fTnfItYfjHgq5Rp2v_SiuxcH7Qwtt5kuM','2021-03-20 01:09:18.958925'),
('9tq5hg365kjwen4riabpvaycpbjr5cn0','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lHFlp:vx-8BrPmGR82obUs4c9xzm-3CvqrX7WrR7_oSekabgA','2021-03-17 00:53:45.413705'),
('cfyd2adn612fmlyc2o6arhs9jw6lnyv1','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILZ4:SFp6ptVKIJmuwXI2u6dTeDE9jvSBE2I4gFW_25PQMoI','2021-03-20 01:17:06.639925'),
('e7egi4h0eiydauv3ih8ts1ehzppx2ma2','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILJb:zLhB_wwVeUZLkaCoudB3wmIpfPhWC1N3hnnM_xdMho4','2021-03-20 01:01:07.740925'),
('frlcopkzkppwudptblxvtr4cvdhs4q0w','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILEq:mGhrKobIoyEwjN_LG4u291TTOG8bd9cuKbXcIJvYypQ','2021-03-20 00:56:12.516925'),
('m48ik4rfspjqbkhgb3lolexykpamuy07','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lK8Ks:eEjueR__d_LeY62-txWDt5_SGt4MZjvvKMwcdGIHXOc','2021-03-24 23:33:50.161650'),
('p0wpewowj10nzwtwz77wjjcf762igj2h','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILTU:sS2EWXskuvU-FJ6qyQyH3TdmRgIJEkj7okshNxxKK_s','2021-03-20 01:11:20.974925'),
('qzrwh2poqeo1507e7dorycwb5q4e7iii','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lGtCi:KcdhFbT8swJLB6n97bkmwWFw3vWuhgXGQiAIAULX0v0','2021-03-16 00:48:00.166697'),
('tpx6wnrn1pufhqgtlq7wcdqruwkeakxa','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILtA:oW-aoFUBrrQ_7HifLAr5PAxtXuKInoVsHKFEe7GVZ_M','2021-03-20 01:37:52.767926'),
('wdbvh7k4mksant6wsqo1z9ge7c30gx3f','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lIKpe:HQQUS391VGqzw4MOCJpM1153SQHj57v-FTBWCNPx4-c','2021-03-20 00:30:10.871925'),
('wdhjxvzh9023knten2b3yd5amlwd4qxq','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lJPfh:sLDLLfF-iYcQIkKf-gBtyCpE0YOXMbrgKx1zep8iadg','2021-03-22 23:52:21.364014'),
('wsned1s4j85u3udjghifu4c3ddsl3jzv','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lILh8:OLjY87KhfjxxKHZBFQtSAJ21lJI21OwO2IVa43nREpU','2021-03-20 01:25:26.791924'),
('y6qxuw18ql3pufi03pdxz2pwru20016a','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lIKfR:2wHZaNuNu73yHIx8a9ZIi20wQuTgqJ9x3jjz4uRoOec','2021-03-20 00:19:37.656926'),
('yxc36kw1iac87egwnu3qnjwpcstz7mdu','.eJxVzMEOwiAQBNB_4WxIgYLg0Xu_gSy7q1QNJKU9Gf9dmvSg15k38xYRtjXHrfESZxIXocTpN0uATy57QQ8o9yqxlnWZk9yJPNomp0r8uh727yBDy30NZx0cBrDeKO_RJQpoCYz13qmbMTwOPo1dsAbSyIGIrElutOg6HMTnC95FOBY:1lKUis:x0WV-Jtw733fstGbUpz4WcpBcfuYfLguWbE0ReIyRFk','2021-03-25 23:28:06.874213');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
