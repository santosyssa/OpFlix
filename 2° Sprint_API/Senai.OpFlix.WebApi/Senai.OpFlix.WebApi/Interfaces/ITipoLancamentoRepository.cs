using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ITipoLancamentoRepository
    {
        List<TiposLancamentos> Listar();

        void Cadastar(TiposLancamentos tipolancamento);
    }
}
