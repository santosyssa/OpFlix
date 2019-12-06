using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class TipoLancamentoRepository : ITipoLancamentoRepository
    {
        OpFlixContext ctx = new OpFlixContext();

        public List<TiposLancamentos> Listar()
        {
            return ctx.TiposLancamentos.ToList();
        }

        public void Cadastar(TiposLancamentos tipolancamento)
        {
            ctx.TiposLancamentos.Add(tipolancamento);
            ctx.SaveChanges();
        }
    }
}
