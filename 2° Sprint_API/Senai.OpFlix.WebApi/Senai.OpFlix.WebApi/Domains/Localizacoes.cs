using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Domains
{
    public class Localizacoes
    {

        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRequired]
        public string titulo { get; set; }

        [BsonRequired]
        public string genero { get; set; }

        [BsonRequired]
        public string latitude { get; set; }

        [BsonRequired]
        public string longitude { get; set; }
    }
}
