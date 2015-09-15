-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 184.173.234.17    Database: c406editorial
-- ------------------------------------------------------
-- Server version	5.1.61

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (1,'Vicedirector/a'),(2,'Secretario/a'),(3,'Bibliotecario/a'),(4,'Director/a'),(5,'Coordinador/a'),(6,'Docente');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciclo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclo`
--

LOCK TABLES `ciclo` WRITE;
/*!40000 ALTER TABLE `ciclo` DISABLE KEYS */;
INSERT INTO `ciclo` VALUES (1,'Inicial'),(2,'1 a 3'),(3,'4 a 7'),(4,'3er Ciclo'),(5,'ESB'),(7,'');
/*!40000 ALTER TABLE `ciclo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coleccion` (
  `id_coleccion` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_coleccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coleccion`
--

LOCK TABLES `coleccion` WRITE;
/*!40000 ALTER TABLE `coleccion` DISABLE KEYS */;
INSERT INTO `coleccion` VALUES (1,'Batitú'),(2,'Buenas Palabras'),(3,'Cuentos con Historieta'),(4,'Primer ciclo'),(5,'Generación Z'),(6,'La puerta secreta'),(7,'SonSoles');
/*!40000 ALTER TABLE `coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escuela`
--

DROP TABLE IF EXISTS `escuela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `escuela` (
  `nombre` varchar(50) NOT NULL,
  `telefono` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `localidad` int(11) NOT NULL,
  `cp` int(11) NOT NULL,
  `sector` varchar(20) NOT NULL,
  `distrito` varchar(20) NOT NULL,
  `ubicacion` varchar(20) NOT NULL,
  `provincia` int(10) NOT NULL,
  `observaciones` varchar(100) NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `provincia` (`provincia`),
  KEY `localidad` (`localidad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escuela`
--

LOCK TABLES `escuela` WRITE;
/*!40000 ALTER TABLE `escuela` DISABLE KEYS */;
INSERT INTO `escuela` VALUES ('CHAMPAGNAT',4811,'champagnat@maristas.com.ar','MONTEVIDEO 1050',1,1019,'PRIVADO','01','CIUDAD DE BS AS',3,'Ver a Coord. De lengua Marcela Casaubon',1),('fsd',1111,'sfsdf','dfsd',1,5,'PUBLICO','5','5',2,'ewr',2),('asdas',0,'sda','sad',1,1,'PUBLICO','1','12',1,'qwae',5),('eqwr',1,'weq','wqe',1,8888,'PUBLICO','1','12',5,'ewqe',32),('asdas',0,'sda','sad',1,1,'PUBLICO','1','12',1,'qwae',123),('qwe',324,'aasd','asd',1,1663,'PUBLICO','1','1',3,'dasd',346),('wqe',1,'asd','as',1,1,'PUBLICO','1','1',3,'adsa',777),('sdf',12,'sad','asd',1,1,'PUBLICO','1','1',6,'1',999),('q',123,'aasd','asd',1,1,'PUBLICO','1','wqwe',2,'asd',12321),('qwe',1,'asdf','wqe',1,1,'PUBLICO','1','asd',5,'asd',26234),('asd',1,'1','1',1,1663,'PUBLICO','1','1',6,'1',77777),('asd',1,'1','1',1,1663,'PUBLICO','1','1',4,'1',343434),('qwe',1,'1','1',1,1,'PUBLICO','1','1',12,'1',878787),('asd',2,'sad','asd',1,1,'PUBLICO','1','aasd',2,'asd',444444444);
/*!40000 ALTER TABLE `escuela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `escuela_ciclo`
--

DROP TABLE IF EXISTS `escuela_ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `escuela_ciclo` (
  `id_escuela` int(11) NOT NULL,
  `id_turno` char(2) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `cantidad_grado` int(11) NOT NULL,
  `id_ciclo` int(11) NOT NULL,
  PRIMARY KEY (`id_escuela`,`id_turno`,`id_grado`,`id_ciclo`),
  KEY `id_turno` (`id_turno`),
  KEY `id_grado` (`id_grado`),
  KEY `id_ciclo` (`id_ciclo`),
  CONSTRAINT `escuela_ciclo_ibfk_3` FOREIGN KEY (`id_turno`) REFERENCES `turno` (`id`),
  CONSTRAINT `escuela_ciclo_ibfk_4` FOREIGN KEY (`id_escuela`) REFERENCES `escuela` (`id`),
  CONSTRAINT `escuela_ciclo_ibfk_5` FOREIGN KEY (`id_grado`) REFERENCES `grado` (`id`),
  CONSTRAINT `escuela_ciclo_ibfk_6` FOREIGN KEY (`id_ciclo`) REFERENCES `ciclo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `escuela_ciclo`
--

LOCK TABLES `escuela_ciclo` WRITE;
/*!40000 ALTER TABLE `escuela_ciclo` DISABLE KEYS */;
INSERT INTO `escuela_ciclo` VALUES (1,'JC',1,2,1),(1,'M',2,1,2),(32,'JC',1,4,1),(777,'M',1,2,1),(777,'M',3,2,2),(999,'M',3,3,2),(999,'M',7,3,3),(999,'M',13,3,5),(77777,'M',3,1,2),(343434,'M',2,1,2),(878787,'JC',5,1,3);
/*!40000 ALTER TABLE `escuela_ciclo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grado`
--

DROP TABLE IF EXISTS `grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(30) NOT NULL,
  `id_ciclo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_ciclo` (`id_ciclo`),
  CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`id_ciclo`) REFERENCES `ciclo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grado`
--

LOCK TABLES `grado` WRITE;
/*!40000 ALTER TABLE `grado` DISABLE KEYS */;
INSERT INTO `grado` VALUES (1,'Jardín',1),(2,'1er Grado',2),(3,'2do Grado',2),(4,'3er Grado',2),(5,'4to Grado',3),(6,'5to Grado',3),(7,'6to Grado',3),(8,'7mo Grado',3),(9,'1er Año',4),(10,'2do Año',4),(11,'3er año',5),(12,'4to año',5),(13,'5to año',5),(14,'',7);
/*!40000 ALTER TABLE `grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libro`
--

DROP TABLE IF EXISTS `libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `libro` (
  `isbn` bigint(50) NOT NULL,
  `id_col` int(11) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `paginas` int(11) DEFAULT NULL,
  `peso` varchar(100) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `fecha_alta` date DEFAULT NULL,
  `autores` varchar(200) DEFAULT NULL,
  `formato` varchar(50) DEFAULT NULL,
  `ilustradores` varchar(200) NOT NULL,
  `lectura_sugerida` varchar(100) NOT NULL,
  `genero` varchar(50) NOT NULL,
  PRIMARY KEY (`isbn`),
  KEY `id_col` (`id_col`),
  CONSTRAINT `libro_ibfk_1` FOREIGN KEY (`id_col`) REFERENCES `coleccion` (`id_coleccion`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libro`
--

LOCK TABLES `libro` WRITE;
/*!40000 ALTER TABLE `libro` DISABLE KEYS */;
INSERT INTO `libro` VALUES (9789871565047,6,'Peligro en alta mar',136,'0.170',105,'2015-06-01','Emilio Salgari / Adaptación de Cristina Rosado','13,5 x 18,5 cm.','Gabriel Molinari','a partir de los 10 años','novela de aventuras'),(9789871565054,6,'Cuentos que encantan',108,'0.135',100,'2015-06-01','Hermanos Grimm, Hans Christian Andersen, Jeanne-Marie Le Prince de Beaumont / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Victoria Assanelli','a partir de los 9 años','cuento maravilloso'),(9789871565085,6,'Viento en los sauces, El',168,'0.210',110,'2015-06-01','Kenneth Grahame / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','mEy!','a partir de los 9 años','novela'),(9789871565108,6,'Cuentos con-ciencia',112,'0.150',100,'2015-06-01','Edward P. Mitchell, Herbert G. Wells, Wardon Allan Curtis, Anton Chéjov / Versión de Elsa Pizzi','13,5 x 18,5 cm.','Fabián Mezquita','a partir de los 11 años','cuento de ciencia ficción'),(9789871565115,5,'Cuentos + Cuentos',112,'0.150',95,'2015-06-01','O. Henry, Ricardo Güiraldes, Nathaniel Hawthorne, Heinrich von Kleist, Robert L. Stevenson, Herbert H. Wells y Edward P. Mitchell','13,5 x 19,5 cm.','','a partir de los 12 años','cuento realista, fantástico y de ciencia ficción'),(9789871565122,5,'Callejón sin salida',176,'0.230',100,'2015-06-01','Charles Dickens y Wilkie Collins / Traducción de Laura Pizzi','13,5 x 19,5 cm.','','a partir de los 14 años','novela'),(9789871565139,5,'Sección policiales',176,'0.235',100,'2015-06-01','Arthur Conan Doyle, Gilbert K. Chesterton, Edgar Wallace, Jacques Futrelle, Mark Twain / Traducción de Gabriela DE Leo, Carolina Fernández y Laura Pizzi','13,5 x 19,5 cm.','','a partir de los 13 años','cuento policial'),(9789871565153,6,'Cuentos que parecen ciertos',104,'0.135',100,'2015-06-01','Saki, Edgar Allan Poe, Charles Dickens, Horacio Quiroga y Anton Chéjov','13,5 x 18,5 cm.','Cristo Camba','a partir de los 11 años','cuento realista'),(9789871565160,5,'Gigante Amapolas + El matadero, El',102,'0.130',95,'2015-06-01','Juan Bautista Alberdi y Esteban Echeverría','13,5 x 19,5 cm.','','a partir de los 16 años','teatro y cuento'),(9789871565177,5,'Prometeo encadenado + Una libra de carne',136,'0.175',95,'2015-06-01','Esquilo y Agustín Cuzzani','13,5 x 19,5 cm.','','a partir de los 15 años','teatro'),(9789871565184,6,'Dicen que los dioses… Mitos griegos 1',128,'0.160',105,'2015-06-01','Anónimo / Versión de Patricia Roggio','13,5 x 18,5 cm.','Fernando Baldó','a partir de los 10 años','mito'),(9789871565191,6,'Cuentos que encierran misterios',112,'0.150',100,'2015-06-01','Charles Dickens, Anton Chéjov, Gastón Léroux, Guy de Maupassant, Bram Stocker / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Mariano Epelbaum','a partir de los 11 años','cuento de misterio'),(9789871565207,6,'Vida de un bribón, La',160,'0.200',110,'2015-06-01','Wilkie Collins / Adaptación de Elsa Pizzi','13,5 x 18,5 cm.','Gabo Bernstein','a partir de los 11 años','novela de humor'),(9789871565214,5,'Libros sagrados, Los - Mitología griega',88,'0.125',95,'2015-06-01','Anónimo / Versión de Patricia Roggio','13,5 x 19,5 cm.','','a partir de los 12 años','mito'),(9789871565221,7,'Castillo encantado, El',264,'0.335',120,'2015-06-01','E. Nesbit / Traducción de Carolina Fernández','13,5 x 19,5 cm.','Federico Combi','a partir de los 10 años','novela'),(9789871565238,5,'Relatos del tiempo, Los',104,'0.140',95,'2015-06-01','Francis Scott Fitzgerald, Mary Shelley y Edward P. Mitchell / Traducción de Laura Pizzi','13,5 x 19,5 cm.','','a partir de los 15 años','cuento'),(9789871565245,7,'Lluvia y los cinco, La',140,'0.175',110,'2015-06-01','Márgara Averbach','13,5 x 19,5 cm.','Cristian Bernardini','a partir de los 9 años','novela'),(9789871565252,2,'Buenas Palabras 4',160,'0.450',165,'2015-06-05','Elsa Pizzi, Patricia Roggio','20 x 28 cm.','Martín Lara y otros','para 4º grado','Prácticas del Lenguaje para 4º Grado'),(9789871565269,2,'Buenas Palabras 5',168,'0.470',165,'2015-06-05','Elsa Pizzi, Patricia Roggio','20 x 28 cm.','Martín Lara y otros','para 5º grado','Prácticas del Lenguaje para 5º Grado'),(9789871565276,2,'Buenas Palabras 6',168,'0.460',165,'2015-06-05','Elsa Pizzi, Patricia Roggio','20 x 28 cm.','Martín Lara y otros','para 6º grado','Prácticas del Lenguaje para 6º Grado'),(9789871565283,7,'Mago de Oz, El',184,'0.245',110,'2015-06-01','L. Frank Baum / Traducción de Laura Pizzi','13,5 x 19,5 cm.','Martín Lara','a partir de los 9 años','novela'),(9789871565290,7,'Flecha Negra, La',194,'0.260',120,'2015-06-01','Robert L. Stevenson / Traducción de Carolina Fernández','13,5 x 19,5 cm.','Marco Baldi','a partir de los 11 años','novela de aventuras'),(9789871565306,5,'Centroforward murió al amanecer, El',92,'0.125',95,'2015-06-01','Agustín Cuzzani','13,5 x 19,5 cm.','','a partir de los 13 años','teatro'),(9789871565313,5,'Siete fantásticos latinoamericanos',92,'0.125',100,'2015-06-01','Gabriel García Márquez, Juan Forn, Alfonso Lima Barreto, Julio Cortázar, Leopoldo Lugones, Manuel Mujica Láinez y Horacio Quiroga','13,5 x 19,5 cm.','','a partir de los 13 años','cuento fantástico'),(9789871565320,6,'20.000 leguas de viaje submarino',176,'0.210',110,'2015-06-01','Julio Verne / Adaptación de Elsa Pizzi','13,5 x 18,5 cm.','Damián Zain','a partir de los 10 años','novela de aventuras'),(9789871565337,6,'Hijos del capitán Grant, Los',208,'0.255',110,'2015-06-01','Julio Verne / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Jó Rivadulla','a partir de los 11 años','novela de aventuras'),(9789871565344,3,'Cuentos con historieta 1 Terror. El engendro maldito / La Torre de los Tormentos',32,'0.070',67,'2015-06-01','Ambrose Bierce, Bram Stoker','15,5cm. x 22,5cm.','Oscar Senonez','a partir de los 11 años','terror'),(9789871565351,3,'Cuentos con historieta 2 Policial. La aventura del puente Thor / La banda de lunares',40,'0.090',67,'2015-06-01','Arthur Conan Doyle','15,5cm. x 22,5cm.','Jó Rivadulla','a partir de los 10 años','policial'),(9789871565368,3,'Cuentos con historieta 4 Policial. Los tres instrumentos de la muerte / La Clave N.º 2',32,'0.070',67,'2015-06-01','Gilbert K. Chesterton, Edgar Wallace','15,5cm. x 22,5cm.','Fabián Mezquita','a partir de los 11 años','policial'),(9789871565375,7,'Vuelta a la manzana, La',112,'0.150',110,'2015-06-01','Márgara Averbach','13,5 x 19,5 cm.','Paula Franco','a partir de los 11 años','novela'),(9789871565382,7,'Peter Pan',168,'0.210',110,'2015-06-01','James M. Barrie / Traducción de Laura Pizzi','13,5 x 19,5 cm.','Patricia López Latour','a partir de los 9 años','novela'),(9789871565399,3,'Cuentos con historieta 3 Terror. La voz en la noche / La casa maldita',32,'0.070',67,'2015-06-01','William Hope Hodgson, H. P. Lovecraft','15,5cm. x 22,5cm.','J. Tumburus','a partir de los 11 años','terror'),(9789871565443,4,'¿Dónde está Vulcana? 1',288,'0.815',230,'2015-06-05','María Eugenia Pons (Coordinación, Lengua y Ciencias Sociales), Marina Rodríguez de Sodor (Matemática) y Cecilia de Dios (Ciencias Naturales)','21,5 x 27,5 cm.','Martín Lara y otros','para 1º grado','Libro de áreas integradas para 1º Grado'),(9789871565450,6,'¿Cuentos que asustan?',88,'0.100',100,'2015-06-01','María Elena Walsh, Pamela Archanco, Ema Wolf, María Martín, Silvia Shujer, Ana María Shua y Paloma Fabrykant, Graciela Falbo','13,5 x 18,5 cm.','Juan Francisco Cancellieri','a partir de los 9 años','cuento de humor'),(9789871565467,7,'Mundo perdido, El',176,'0.220',110,'2015-06-01','Arthur Conan Doyle / Adaptación de Patricia Roggio','13,5 x 19,5 cm.','Oscar Senonez','a partir de los 11 años','novela de aventuras'),(9789871565474,2,'Buenas Palabras 7',216,'0.580',165,'2015-06-05','Elsa Pizzi, Patricia Roggio','20 x 28 cm.','Martín Lara y otros','para 7º Grado/1º Año','Prácticas del Lenguaje para 7º Grado/1º Año'),(9789871565481,5,'Joya de las siete estrellas, La',240,'0.315',110,'2015-06-19','Bram Stoker','13,5cm x 19,5cm','','a partir de los 15 años','novela fantástica'),(9789871565498,5,'Del terror al horror',120,'0.120',95,'2015-06-01','Ambrose Bierce, Edgar A. Poe, Montague R. James, Edward L. White, Howard P. Lovecraft, Robert L. Stevenson, William H. Hodgson / Traducción de Evelia Romano','13,5 x 19,5 cm.','','a partir de los 14 años','cuento de terror'),(9789871565535,4,'¿Dónde está Amaya? 2',288,'0.815',230,'2015-06-05','María Eugenia Pons (Coordinación, Lengua y Ciencias Sociales), Fernanda Bidart Bluhm (Lengua) y Lucía Fallacara y Ximena López (Matemática) y Cecilia de Dios (Ciencias Naturales)','21,5 x 27,5 cm.','Martín Lara y otros','para 2º grado','Libro de áreas integradas para 2º Grado'),(9789871565542,4,'¿Dónde está Tiberius? 3',304,'0.870',230,'2015-06-05','María Eugenia Pons (Coordinación, Lengua y Ciencias Sociales), Lucía Fallacara (Matemática) y Cecilia de Dios (Ciencias Naturales)','21,5 x 27,5 cm.','Martín Lara y otros','para 3º grado','Libro de áreas independientes para 3º Grado'),(9789871565559,1,'Cuentos de letras',40,'0.080',67,'2015-05-31','Pamela Archanco, Florencia Esses, Adriana Ballesteros, María Laura Dedé, Sol Silvestre y Aljandra Erbiti','19 x19 cm.','Josefina Preumayr','a partir de los 6 años','cuento'),(9789871565566,1,'Cuentos de Grillo Topo, Los',32,'0.075',67,'2015-05-31','Patricia Roggio','19 x19 cm.','Damián Zain','a partir de los 7 años','cuento'),(9789871565573,1,'Cuentos de “Así fue como”, Los',32,'0.075',67,'2015-05-31','Rudyard Kipling','19 x19 cm.','Diego Moscato','a partir de los 7 años','cuento'),(9789871565580,7,'El club del gusano retorcido',120,'0.150',110,'2015-06-01','Graciela Falbo','13,5 x 19,5 cm.','Ramiro Pazo','a partir de los 10 años','novela'),(9789871565597,6,'Historia de Malik y Luna Llena',96,'0.100',100,'2015-06-01','Anónimo / Versión de Patricia Roggio','13,5 x 18,5 cm.','Victoria Assanelli','a partir de los 9 años','novela'),(9789871565603,6,'Cuentos de arriba, cuentos de abajo',112,'0.120',105,'2015-06-01','Márgara Averbach','13,5 x 18,5 cm.','Leicia Gotlibowski','a partir de los 9 años','cuento'),(9789871565610,6,'La puerta abierta',120,'0.130',100,'2015-06-01','Margaret Oliphant / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Fernando Baldó','a partir de los 10 años','novela de terror'),(9789871565627,6,'Dragón perezoso, El',104,'0.135',100,'2015-06-19','Kenneth Grahame','13,5cm x 18,5cm','Maine Diaz','a partir de los 9 años','cuento maravilloso'),(9789871565634,6,'Casa de la barranca, La',144,'0.180',110,'2015-06-19','Patricia Roggio. Basada en La casa endiablada de E. Holmberg','13,5 x 18,5 cm.','Martín Melogno','a partir de los 10 años','novela policial'),(9789871565641,6,'Bruja Baba Yaga, La',104,'0.135',100,'2015-06-19','Anónimo / Versiones de Lucía Fallacara','13,5 x 18,5 cm.','Gerardo Baró','a partir de los 9 años','cuento maravilloso'),(9789871565658,5,'Caso Benson, El',152,'0.200',100,'2015-06-19','S. S. Van Dine','13,5cm x 19,5cm','','a partir de los 13 años','novela policial'),(9789871565665,1,'Mascotas y más cosas',40,'0.080',67,'2015-06-19','María Laura Dedé','18,5cm x 18,5cm','Luciana Feito','a partir de los 6 años','cuento'),(9789871565672,1,'Pequeños',32,'0.080',67,'2015-06-19','Gianni Rodari, María Elena Walsh, Carlos Marianidis, Esopo y anónimos','18,5cm x 18,5cm','Inés Hüni','a partir de los 6 años','cuento, poema, adivinanzas'),(9789872414306,6,'Aventuras de Gilgamesh, Las',104,'0.135',100,'2015-06-01','Anónimo / Versión de Patricia Roggio','13,5 x 18,5 cm.','Fernando Baldó','a partir de los 11 años','mito'),(9789872414313,6,'Mil y una noches, Las',112,'0.145',100,'2015-06-01','Anónimo / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Horacio Gatto','a partir de los 9 años','cuento maravilloso'),(9789872414320,6,'Cuentos policiales para chicos curiosos',104,'0.135',100,'2015-06-01','Arthur Conan Doyle, Gilbert K. Chesterton, Edgar Allan Poe y Paul Groussac / Adaptación de María Tadich','13,5 x 18,5 cm.','Martín Melogno','a partir de los 10 años','cuento policial'),(9789872414337,6,'Cuentos populares de pícaros y necios',96,'0.125',100,'2015-06-01','Anónimo / Versiones de Celeste Vázquez, Liliana López de Maturana, Andrea Roggio, Patricia Pano, Elsa Pizzi','13,5 x 18,5 cm.','Wally Gómez','a partir de los 9 años','cuento tradicional'),(9789872414344,6,'Antiguas leyendas de héroes y princesas',96,'0.125',105,'2015-06-01','Anónimo / Versión de Elsa Pizzi','13,5 x 18,5 cm.','Martín Melogno','a partir de los 10 años','leyenda heroica'),(9789872450007,6,'Isla misteriosa, La',208,'0.255',110,'2015-06-01','Julio Verne / Adaptación de Patricia Roggio','13,5 x 18,5 cm.','Emiliano Pereyra','a partir de los 11 años','novela de aventuras'),(9789872450014,6,'Príncipe y mendigo',160,'0.205',110,'2015-06-01','Mark Twain / Adaptación de Elsa Pizzi','13,5 x 18,5 cm.','mEy!','a partir de los 9 años','novela'),(9789872450076,6,'Cabeza del dragón, La',112,'0.145',105,'2015-06-01','Ramón del Valle-Inclán / Adaptación de Andrea Roggio','13,5 x 18,5 cm.','Gerardo Baró','a partir de los 11 años','teatro'),(9789872450083,6,'Cu Chulain el valiente',116,'0.150',105,'2015-06-01','Anónimo / Versión de Elsa Pizzi','13,5 x 18,5 cm.','Cristian Bernardini','a partir de los 11 años','leyenda heroica'),(9789872450090,6,'Cuentos fantásticos que dan miedo',108,'0.145',100,'2015-06-01','O’Brien, Edward P. Mitchell, Guy de Maupassant, Charles Dickens, Ambrose Bierce, Montague Rhodes James, Howard P. Lovecraft / Versión de Patricia Roggio','13,5 x 18,5 cm.','Fernando Baldó','a partir de los 11 años','cuento fantástico de terror');
/*!40000 ALTER TABLE `libro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libro_persona`
--

DROP TABLE IF EXISTS `libro_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `libro_persona` (
  `isbn` int(30) NOT NULL,
  `dni` int(11) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`isbn`,`dni`),
  KEY `dni` (`dni`),
  CONSTRAINT `libro_persona_ibfk_2` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libro_persona`
--

LOCK TABLES `libro_persona` WRITE;
/*!40000 ALTER TABLE `libro_persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `libro_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidad`
--

DROP TABLE IF EXISTS `localidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localidad` (
  `id_localidad` int(11) NOT NULL AUTO_INCREMENT,
  `id_provincia` int(10) NOT NULL,
  `nombre_localidad` varchar(255) NOT NULL,
  PRIMARY KEY (`id_localidad`),
  KEY `id_provincia` (`id_provincia`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidad`
--

LOCK TABLES `localidad` WRITE;
/*!40000 ALTER TABLE `localidad` DISABLE KEYS */;
INSERT INTO `localidad` VALUES (1,1,'ejemplo');
/*!40000 ALTER TABLE `localidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permiso`
--

DROP TABLE IF EXISTS `permiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permiso` (
  `id_permiso` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_permiso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permiso`
--

LOCK TABLES `permiso` WRITE;
/*!40000 ALTER TABLE `permiso` DISABLE KEYS */;
/*!40000 ALTER TABLE `permiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persona` (
  `dni` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `tipo_dni` varchar(5) NOT NULL,
  `fecha_nac` date NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `ciudad` varchar(20) NOT NULL,
  `provincia` int(10) NOT NULL,
  `cp` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` int(11) NOT NULL,
  `fecha_alta` date NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` int(10) DEFAULT NULL,
  PRIMARY KEY (`dni`),
  KEY `provincia` (`provincia`),
  CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id_provincia`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (213,'sad','asd','DNI','0000-00-00','sad','ads',1,1,'asdf',2133,'0000-00-00',NULL,NULL),(6784,'lalala','lalala','DNI','0000-00-00','wer','ewr',3,234,'wer',123,'0000-00-00',NULL,NULL),(121212,'roberto','gomez','DNI','0000-00-00','aS','SAD',4,32,'aasd',11,'0000-00-00',NULL,1),(123134,'asdasd','asdasd','DNI','0000-00-00','asd','af',3,1,'asd',123,'0000-00-00',NULL,NULL),(332511,'ejemplo','lala','DNI','0000-00-00','asdasd','ASAs',3,213,'ASD',12213,'0000-00-00',NULL,NULL),(686868,'asdasd','sdasd','DNI','0000-00-00','asd','asd',3,213,'asd',123,'0000-00-00',NULL,NULL),(1111111,'raa','asd','DNI','0000-00-00','asd','fsdf',3,213,'asdf',12,'0000-00-00',NULL,1),(6786789,'wqeqwe','qweqwrew','DNI','0000-00-00','asd','asd',2,234,'asdf',213,'0000-00-00',NULL,NULL),(11356959,'Daniel','Perazzo','DNI','1955-04-08','Rosetti 741','Muñiz',1,1663,'danperazzo@hotmail.com',2147,'2015-04-20',NULL,1),(33976195,'nombre admin','apellido admin','dni','1988-12-05','direccion 1','cordoba',1,5000,'admin@admin.com',4700000,'2015-06-22','$2a$10$qBvlrmSfqd35OSAEMPR1vOKno47KgJ9XvA3vNZI8WhBeyB4ZkHWx.',1);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona_grado`
--

DROP TABLE IF EXISTS `persona_grado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persona_grado` (
  `dni` int(11) NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_turno` char(2) NOT NULL,
  `id_escuela` int(11) NOT NULL,
  `id_cargo` int(11) NOT NULL,
  PRIMARY KEY (`dni`,`id_grado`,`id_turno`,`id_escuela`),
  KEY `id_grado` (`id_grado`),
  KEY `id_turno` (`id_turno`),
  KEY `id_cargo` (`id_cargo`),
  KEY `persona_grado_ibfk_4` (`id_escuela`),
  CONSTRAINT `persona_grado_ibfk_1` FOREIGN KEY (`dni`) REFERENCES `persona` (`dni`),
  CONSTRAINT `persona_grado_ibfk_2` FOREIGN KEY (`id_grado`) REFERENCES `grado` (`id`),
  CONSTRAINT `persona_grado_ibfk_3` FOREIGN KEY (`id_turno`) REFERENCES `turno` (`id`),
  CONSTRAINT `persona_grado_ibfk_4` FOREIGN KEY (`id_escuela`) REFERENCES `escuela` (`id`),
  CONSTRAINT `persona_grado_ibfk_5` FOREIGN KEY (`id_cargo`) REFERENCES `cargo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona_grado`
--

LOCK TABLES `persona_grado` WRITE;
/*!40000 ALTER TABLE `persona_grado` DISABLE KEYS */;
INSERT INTO `persona_grado` VALUES (1111111,3,'M',2,1),(1111111,7,'M',2,1),(6786789,14,'',1,1),(6786789,7,'M',5,3),(1111111,1,'JC',1,6),(1111111,3,'M',999,6),(1111111,7,'M',999,6),(6786789,14,'',999,6);
/*!40000 ALTER TABLE `persona_grado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincia` (
  `id_provincia` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_provincia` varchar(255) NOT NULL,
  PRIMARY KEY (`id_provincia`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
INSERT INTO `provincia` VALUES (1,'Buenos Aires'),(2,'Buenos Aires-GBA'),(3,'Capital Federal'),(4,'Catamarca'),(5,'Chaco'),(6,'Chubut'),(7,'Córdoba'),(8,'Corrientes'),(9,'Entre Ríos'),(10,'Formosa'),(11,'Jujuy'),(12,'La Pampa'),(13,'La Rioja'),(14,'Mendoza'),(15,'Misiones'),(16,'Neuquén'),(17,'Río Negro'),(18,'Salta'),(19,'San Juan'),(20,'San Luis'),(21,'Santa Cruz'),(22,'Santa Fe'),(23,'Santiago del Estero'),(24,'Tierra del Fuego'),(25,'Tucumán');
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'docente','Rol docentes','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `turno`
--

DROP TABLE IF EXISTS `turno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `turno` (
  `id` char(2) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `turno`
--

LOCK TABLES `turno` WRITE;
/*!40000 ALTER TABLE `turno` DISABLE KEYS */;
INSERT INTO `turno` VALUES ('',''),('JC','Jornada Completa'),('M','Mañana'),('MT','Mañana Tarde'),('T','Tarde');
/*!40000 ALTER TABLE `turno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` varchar(30) NOT NULL,
  `id_permiso` int(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `id_permiso` (`id_permiso`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_permiso`) REFERENCES `permiso` (`id_permiso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-07-26  3:09:19
