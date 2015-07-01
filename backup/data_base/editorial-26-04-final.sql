-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-04-2015 a las 08:33:05
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `editorial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuela`
--

CREATE TABLE IF NOT EXISTS `escuela` (
  `id` int(11) NOT NULL,
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
  PRIMARY KEY (`id`),
  KEY `provincia` (`provincia`),
  KEY `localidad` (`localidad`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `escuela`
--

INSERT INTO `escuela` (`id`, `nombre`, `telefono`, `email`, `domicilio`, `localidad`, `cp`, `sector`, `distrito`, `ubicacion`, `provincia`, `observaciones`) VALUES
(5, 'CHAMPAGNAT', 123455, 'champagnat@maristas.com.ar', 'MONTEVIDEO 1050', 1, 1019, 'PRIVADO', '01', 'CIUDAD DE BS AS', 1, 'Ver a Coord. De lengua Marcela Casaubon'),
(7985, 'wqe', 123, 'as', 'asd', 1, 1, 'PUBLICO', '1', '1', 1, 'asd'),
(213234, 'sfsdf', 546345, 'sdfsdf', 'asdasd', 1, 1, 'PUBLICO', '1', '1', 1, 'sadds');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `escuela`
--
ALTER TABLE `escuela`
  ADD CONSTRAINT `escuela_ibfk_1` FOREIGN KEY (`provincia`) REFERENCES `provincia` (`id_provincia`),
  ADD CONSTRAINT `escuela_ibfk_2` FOREIGN KEY (`localidad`) REFERENCES `localidad` (`id_localidad`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
