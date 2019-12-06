using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ILancamentosRepository
    {
        List<Lancamentos> Listar();

        void Cadastrar(Lancamentos lancamento);

        void Atualizar(Lancamentos lancamento);

        void Deletar(int id);

        Lancamentos BuscarPorId(int id);
    }
}
