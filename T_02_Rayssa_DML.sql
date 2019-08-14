use T_OpFlix

insert into Categorias values ('Filme Musical')
							 ,('Suspense')
							 ,('Drama')
							 ,('Anima��o')

insert into Categorias values --extra--
							  ('Terror')
							 ,('A��o')
							 ,('Com�dia')
							 ,('Document�rio')
							 ,('Fic��o Cient�fica')



insert into Tipos_Usuarios values ('Administrador')
							     ,('Cliente')


insert into Tipos_Lancamentos values ('Filme')
								    ,('S�rie')


insert into Plataformas values ('Netflix')
							  ,('Cinema')
							  ,('Prime V�deo')	
							  
insert into Plataformas values ('VHS')
							 

insert into Usuarios (Nome, Email, Senha, IdTipo_Usuario) 
	values		('Erik', 'erik@email.com', '123456', 1)
			   ,('Cassiana', 'cassiana@email.com', '12356', 1)
			   ,('Helena', 'helena@email.com', '12456', 2)
			   ,('Roberto', 'rob@email.com', '40028922', 2) 


insert into Lancamentos (Nome, Sinopse, Duracao_Min, Data_Lancamento, IdPlataforma, IdCategoria, Classificacao, IdTipo_Lancamento) 
	values	('O Rei Le�o', 'O Rei Le�o, da Disney, dirigido por Jon Favreau, retrata uma jornada pela savana africana, 
	onde nasce o futuro rei da Pedra do Reino, Simba. A batalha pela Pedra do Reino � repleta de trai��o, 
	eventos tr�gicos e drama, o que acaba resultando no ex�lio de Simba. Com a ajuda de dois novos e inusitados amigos, 
	Simba ter� que crescer e voltar para recuperar o que � seu por direito', 
	'118', '2019-07-18', 2, 1, 'Livre', 1)

	,('La Casa De Papel 3 temp', 'Oito habilidosos ladr�es se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar o maior roubo da hist�ria 
	e levar com eles mais de 2 bilh�es de euros. Para isso, a gangue precisa lidar com as dezenas de pessoas que manteve como ref�m, 
	al�m dos agentes da for�a de elite da pol�cia, que far�o de tudo para que a investida dos criminosos fracasse.',
	'650', '2019-07-19', 1, 2, '16', 2) 

	,('Deuses Americanos', 'Shadow Moon � um ex-vigarista que serve como seguran�a e companheiro de viagem para o Sr. 
	Wednesday, um homem fraudulento que �, na verdade, um dos velhos deuses, e est� na Terra em uma miss�o: 
	reunir for�as para lutar contra as novas entidades.', '620', '2017-04-30', 3, 3, '18', 2)

	,('Toy Story 4', 'Woody sempre teve certeza sobre o seu lugar no mundo e que sua prioridade � cuidar de sua crian�a.
	Mas quando Bonnie adiciona um relutante novo brinquedo, 
	uma aventura na estrada ao lado de velhos e novos amigos mostrar� a Woody qu�o grande o mundo pode ser para um brinquedo.',
	'100', '2019-06-20', 2, 4, 'Livre', 1)

insert into Lancamentos (Nome, Sinopse, Duracao_Min, Data_Lancamento, IdPlataforma, IdCategoria, Classificacao, IdTipo_Lancamento) 
	values	('Velozes & Furiosos: Hobbs & Shaw', 'O corpulento policial Luke Hobbs se junta ao fora da lei Deckard Shaw 
	para combater um terrorista geneticamente melhorado que tem for�a sobre-humana.', 
	'136', '2019-08-1', 2, 13, '14', 1)

		   ,('Homem Aranha: Longe de Casa', 'Peter Parker (Tom Holland) est� em uma viagem de duas semanas pela Europa, 
		   ao lado de seus amigos de col�gio, quando � surpreendido pela visita de Nick Fury (Samuel L. Jackson). 
		   Precisando de ajuda para enfrentar monstros nomeados como Elementais, Fury o convoca para lutar ao lado de Mysterio (Jake Gyllenhaal),
		   um novo her�i que afirma ter vindo de uma Terra paralela. Al�m da nova amea�a, Peter precisa lidar com a lacuna deixada por Tony Stark, 
		   que deixou para si seu �culos pessoal, com acesso a um sistema de intelig�ncia artificial associado � Stark Industries.', 
	'120', '2019-07-4', 2, 12, '12', 1)

		   ,('Hist�rias Assustadoras para Contar no Escuro', 'A cidade de Mill Valley � assombrada h� d�cadas pelos mist�rios envolvendo 
		   o casar�o da fam�lia Bellows. Em 1968, a jovem Sarah, uma garota problem�tica que mantinha um relacionamento ruim com os pais, 
		   foi ao por�o para escrever um livro repleto de hist�rias macabras. D�cadas mais tarde, um grupo de adolescentes 
		   descobre o livro e passa a investigar o passado de Sarah. No entanto, as hist�rias do livro come�am a se tornar reais.', 
	'111', '2019-08-8', 2, 11, '14', 1)

insert into Lancamentos (Nome, Sinopse, Duracao_Min, Data_Lancamento, IdPlataforma, IdCategoria, Classificacao, IdTipo_Lancamento) 
	values  ('Guardi�es da Gal�xia', 'O aventureiro do espa�o Peter Quill torna-se presa de ca�adores de recompensas depois que rouba a esfera de um vil�o trai�oeiro, Ronan. 
Para escapar do perigo, ele faz uma alian�a com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, 
ele e seu grupo dever�o proteger o objeto para salvar o futuro da gal�xia.', '125', '2014-07-31',1,12,'12',1)

			,('Guardi�es da Galaxia', 'O aventureiro do espa�o Peter Quill torna-se presa de ca�adores de recompensas depois que rouba a esfera de um vil�o trai�oeiro, Ronan. 
Para escapar do perigo, ele faz uma alian�a com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, 
ele e seu grupo dever�o proteger o objeto para salvar o futuro da gal�xia.', '125', '2014-07-31',2,12,'12',1)


select * from Categorias order by IdCategoria asc
select * from Tipos_Usuarios order by IdTipo_Usuario asc
select * from Tipos_Lancamentos order by IdTipo_Lancamento asc
select * from Plataformas order by IdPlataforma asc
select * from Usuarios order by IdUsuario asc
select * from Lancamentos order by IdLancamentos asc

UPDATE Lancamentos SET Classificacao = 'L' WHERE IdLancamentos = 2
UPDATE Lancamentos SET Classificacao = 'L' WHERE IdLancamentos = 5

delete from Lancamentos
	where idLancamentos = 4

UPDATE Lancamentos SET Nome = 'Casa de Papel - 3� Temporada' WHERE IdLancamentos = 3
UPDATE Lancamentos SET Data_Lancamento = '1994/07/08' WHERE IdLancamentos = 2
UPDATE Lancamentos SET IdPlataforma = '4' WHERE Nome = 'O Rei Le�o'

UPDATE Usuarios SET IdTipo_Usuario = '1' WHERE IdUsuario = 3

INSERT INTO Usuarios (Imagem)
VALUES ('https://luizlomba.com.br/posteip/midia/Usuario.png')
	   ,('https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg')
       ,('https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg')
	   ,('https://luizlomba.com.br/posteip/midia/Usuario.png')