use T_OpFlix

select * from Categorias order by IdCategoria asc
select * from Tipos_Usuarios order by IdTipo_Usuario asc
select * from Tipos_Lancamentos order by IdTipo_Lancamento asc
select * from Plataformas order by IdPlataforma asc
select * from Usuarios order by IdUsuario asc
select * from Lancamentos order by IdLancamentos asc

select C.Nome, L.Nome
from Categorias C
left join Lancamentos L
on C.IdCategoria = L.IdCategoria

select P.Nome, L.Nome
from Plataformas P
left join Lancamentos L
on P.IdPlataforma = L.IdPlataforma

CREATE PROCEDURE BuscarFilmePorCategorias @Categorias VARCHAR(255)
AS
SELECT IdLancamentos, Nome, IdCategoria
FROM Lancamentos WHERE IdCategoria = @Categorias;


CREATE PROCEDURE BuscarFilmePorCategoriasNome @Categorias VARCHAR(255)
AS
SELECT IdLancamentos, Lancamentos.Nome, Categorias.Nome
FROM Lancamentos JOIN Categorias ON Categorias.IdCategoria = Lancamentos.IdCategoria WHERE Categorias.Nome= @Categorias;

drop procedure BuscarFilmePorCategoriasNome

EXEC BuscarFilmePorCategorias 12;
EXEC BuscarFilmePorCategoriasNome 'Filme Musical';

CREATE PROCEDURE BuscarFilmePorId @IdTipo_Lancamento INT  
AS 
SELECT IdLancamentos, Nome, Sinopse, Data_Lancamento, IdPlataforma, IdCategoria, Classificacao, Duracao_Min 
FROM Lancamentos WHERE IdTipo_Lancamento = @IdTipo_Lancamento;

EXEC BuscarFilmePorId 2

CREATE VIEW vwPlataformas AS
SELECT IdPlataforma, Nome, IdCategoria FROM Lancamentos 

SELECT * FROM vwPlataformas WHERE IdPlataforma = 1

