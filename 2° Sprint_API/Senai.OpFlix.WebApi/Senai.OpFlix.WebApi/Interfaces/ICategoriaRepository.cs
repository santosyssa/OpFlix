using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ICategoriaRepository
    {
        List<Categorias> Listar();

        void Cadastrar(Categorias categoria);

        void Atualizar(Categorias categoria);

        void Deletar(int id);

        Categorias BuscarPorId(int id);
    }
}
