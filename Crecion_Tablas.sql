
--CREATE DATABASE Facturate
-- Crear la tabla Clientes
--USE Facturate

CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY identity,
    nombre VARCHAR(100) NOT NULL,
    tipo_identificacion VARCHAR(50) NOT NULL,
    numero_identificacion VARCHAR(50) NOT NULL UNIQUE,
    observaciones TEXT
);

-- Crear la tabla Facturas
CREATE TABLE Facturas (
    id_factura INT PRIMARY KEY identity,
    id_cliente INT,
    fecha DATE NOT NULL,
    producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) DEFAULT 0,
    iva DECIMAL(10, 2) NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);
