using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Categorias
    {
        public int IdTipoLancamento { get; set; }
        public string Nome { get; set; }

        public ICollection<Lancamentos> Lancamentos { get; set; }
    }
}
