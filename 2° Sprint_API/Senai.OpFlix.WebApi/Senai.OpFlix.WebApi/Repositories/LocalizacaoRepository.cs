using MongoDB.Driver;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class LocalizacaoRepository : ILocalizacaoRepository
    {
        private readonly IMongoCollection<Localizacoes> _localizacoes;

        public LocalizacaoRepository()
        {
            var Cliente = new MongoClient("mongodb://localhost:27017");
            var database = Cliente.GetDatabase("t_opflix");
            _localizacoes = database.GetCollection<Localizacoes>("mapas");
        }

        public void Cadastrar(Localizacoes localizacao)
        {
            _localizacoes.InsertOne(localizacao);
        }

        public List<Localizacoes> Listar()
        {
            return _localizacoes.Find(l => true).ToList();
        }
    }
}
