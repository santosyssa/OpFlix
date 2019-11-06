using Microsoft.EntityFrameworkCore;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
                OpFlixContext ctx = new OpFlixContext();

        public void Atualizar(Categorias categoria)
        {
            Categorias CategoriaProcurada = ctx.Categorias.FirstOrDefault(x => x.IdCategoria == categoria.IdCategoria);
            CategoriaProcurada.Nome = categoria.Nome;
            CategoriaProcurada.Lancamentos = categoria.Lancamentos;
            ctx.Categorias.Update(CategoriaProcurada);
            ctx.SaveChanges();
        }

        public Categorias BuscarPorId(int id)
        {
            Categorias categoria = ctx.Categorias.FirstOrDefault(x => x.IdCategoria == id);
            return categoria;
        }

        public void Cadastrar(Categorias categoria)
        {
            ctx.Categorias.Add(categoria);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Categorias categoria = ctx.Categorias.Find(id);
            ctx.Categorias.Remove(categoria);
            ctx.SaveChanges();
        }

        public List<Categorias> Listar()
        {
                return ctx.Categorias.ToList();
        }
    }
}
