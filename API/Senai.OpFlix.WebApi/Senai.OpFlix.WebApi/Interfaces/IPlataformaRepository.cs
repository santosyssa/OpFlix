using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ITiposLancamentosRepository
    {
        List<Plataformas> Listar();

        void Cadastrar(Plataformas plataforma);

        void Atualizar(Plataformas plataforma);

        Plataformas BuscarPorId(int id);
    }
}
