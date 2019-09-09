using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Lancamentos
    {
        public int IdLancamentos { get; set; }
        public string Nome { get; set; }
        public string Sinopse { get; set; }
        public DateTime? DataLancamento { get; set; }
        public int? IdPlataforma { get; set; }
        public int? IdCategoria { get; set; }
        public string Classificacao { get; set; }
        public int? IdTipoLancamento { get; set; }
        public int DuracaoMin { get; set; }

        public Categorias IdCategoriaNavigation { get; set; }
        public Plataformas IdPlataformaNavigation { get; set; }
        public Categorias IdTipoLancamentoNavigation { get; set; }
    }
}
