CREATE TABLE Unidade (
  CNPJ varchar(255) NOT NULL,
  Telefone varchar(255) NOT NULL,
  Email varchar(255) NOT NULL,
  Endereco varchar(255) NOT NULL,
  PRIMARY KEY (CNPJ)
);

CREATE TABLE DivididaEm (
  CentroDeCusto varchar(255) NOT NULL,
  Gestor varchar(255) NOT NULL,
  CNPJ varchar(255) NOT NULL,
  FOREIGN KEY (CentroDeCusto, Gestor) REFERENCES Setor(CentroDeCusto, Gestor),
  FOREIGN KEY (CNPJ) REFERENCES Unidade(CNPJ)
);

CREATE TABLE Setor (
  Ramal varchar(255) NOT NULL,
  Diretor varchar(255) NOT NULL,
  CentroDeCusto varchar(255) NOT NULL,
  Gestor varchar(255) NOT NULL,
  PRIMARY KEY (CentroDeCusto, Gestor)
);

CREATE TABLE Colaborador (
  Matricula varchar(255) NOT NULL,
  RG varchar(255) NOT NULL,
  CPF varchar(255) NOT NULL,
  CPTS varchar(255) NOT NULL,
  Endereco varchar(255) NOT NULL,
  Nome varchar(255) NOT NULL,
  SEXO varchar(255) NOT NULL,
  Cargo varchar(255) NOT NULL,
  Telefone varchar(255) NOT NULL,
  DataDeNascimento varchar(255) NOT NULL,
  Salario float NOT NULL,
  CentroDeCusto varchar(255) NOT NULL DEFAULT "TESTE",
  Gestor varchar(255) NOT NULL DEFAULT "TESTE",
  PRIMARY KEY (RG, CPF),
  FOREIGN KEY (CentroDeCusto, Gestor) REFERENCES Setor(CentroDeCusto, Gestor)
);

INSERT INTO Colaborador (Matricula, RG, CPF, CPTS, Endereco, Nome, SEXO, Cargo, Telefone, DataDeNascimento, Salario)
VALUES ("123", "12.545.994-4", "989.869.577-36", "321", "Rua Frei Damio", "Alessandra Yasmin Mrcia Farias", "Feminino" ,  "Gerente" , "(98) 99457-1639", "22/09/1990", 13000);
INSERT INTO Colaborador (Matricula, RG, CPF, CPTS, Endereco, Nome, SEXO, Cargo, Telefone, DataDeNascimento, Salario)
VALUES ("123", "17.070.011-2", "793.523.057-95", "321", "Rua Frei Damio", "Sara Marina Josefa Novaes", "Feminino" ,  "Estagio" , "(68) 99454-9287", "07/08/1968",  1500);
INSERT INTO Colaborador (Matricula, RG, CPF, CPTS, Endereco, Nome, SEXO, Cargo, Telefone, DataDeNascimento, Salario)
VALUES ("123", "25.701.918-2", "820.515.851-72", "321", "Rua Frei Damio", "Matheus Carlos Nogueira", "Masculino",  "Estagio" , "(88) 99224-4391", "15/10/1958",  1500);
INSERT INTO Colaborador (Matricula, RG, CPF, CPTS, Endereco, Nome, SEXO, Cargo, Telefone, DataDeNascimento, Salario)
VALUES ("123", "56.928.502-1", "461.527.318.52", "321", "Rua Frei Damio", "Caio Luca Osti Miguel", "Masculino",  "CEO"     , "(98) 99457-1639", "22/09/1990", 80000);
