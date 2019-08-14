use T_OpFlix;

create table Categorias 
(
	IdCategoria int primary key identity not null
	,Nome	varchar (250) not null unique 
);

create table Tipos_Usuarios
(
	IdTipo_Usuario int primary key identity not null
	,Nome	varchar (250) not null unique 
);

create table Tipos_Lancamentos
(
	IdTipo_Lancamento int primary key identity not null
	,Nome	varchar (250) not null unique 
);

create table Plataformas
(
	IdPlataforma int primary key identity not null
	,Nome	varchar (250) not null unique 
);

create table Usuarios
(
	IdUsuario int primary key identity not null
	,Nome	varchar (250) not null unique 
	,Email varchar (250) not null unique 
	,Senha varchar (250) not null unique 
	,IdTipo_Usuario int foreign key  references Tipos_Usuarios (IdTipo_Usuario)
);

create table Lancamentos
(
	IdLancamentos int primary key identity not null
	,Nome	varchar (250) not null unique 
    ,Sinopse varchar (250) not null 
	,Duracao int not null
	,Data_Lancamento DateTime
	,IdPlataforma int foreign key  references Plataformas (IdPlataforma)
	,IdCategoria int foreign key  references Categorias  (IdCategoria)
	,Classificacao varchar (250) not null 
	,IdTipo_Lancamento int foreign key  references Tipos_Lancamentos (IdTipo_Lancamento)
);

alter table Lancamentos
	drop column Duracao 

alter table Lancamentos
  add Duracao_Min int not null

alter table Lancamentos
	alter column Sinopse varchar (600)

alter table Lancamentos
	alter column Data_Lancamento Date

alter table Usuarios
	add Imagem varchar (300)