using Microsoft.EntityFrameworkCore;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class LancamentoRepository : ILancamentosRepository
    {
        OpFlixContext ctx = new OpFlixContext();

        public void Atualizar(Lancamentos lancamento)
        {
            Lancamentos LancamentoProcurado = ctx.Lancamentos.FirstOrDefault(x => x.IdLancamentos == lancamento.IdLancamentos);
            LancamentoProcurado.Nome = lancamento.Nome;
            LancamentoProcurado.Sinopse = lancamento.Sinopse;
            LancamentoProcurado.DataLancamento = lancamento.DataLancamento;
            LancamentoProcurado.IdPlataforma = lancamento.IdPlataforma;
            LancamentoProcurado.IdCategoria = lancamento.IdCategoria;
            LancamentoProcurado.Classificacao = lancamento.Classificacao;
            LancamentoProcurado.IdTipoLancamento = lancamento.IdTipoLancamento;
            LancamentoProcurado.DuracaoMin = lancamento.DuracaoMin;
            ctx.Lancamentos.Update(LancamentoProcurado);
            ctx.SaveChanges();
        }

        public Lancamentos BuscarPorId(int id)
        {
           Lancamentos lancamentos = ctx.Lancamentos.Include(x => x.IdCategoriaNavigation).Include(x => x.IdPlataformaNavigation).
           Include(x => x.IdTipoLancamentoNavigation).FirstOrDefault(x => x.IdLancamentos == id);
           return lancamentos;

        }

        public void Cadastrar(Lancamentos lancamento)
        {
                ctx.Lancamentos.Add(lancamento);
                ctx.SaveChanges();   
        }

        public void Deletar(int id)
        {
            Lancamentos lancamento = ctx.Lancamentos.Find(id);
            ctx.Lancamentos.Remove(lancamento);
            ctx.SaveChanges();
        }

        public List<Lancamentos> Listar()
        {
            return ctx.Lancamentos.Include(x => x.IdCategoriaNavigation).Include(x => x.IdPlataformaNavigation).
           Include(x => x.IdTipoLancamentoNavigation).ToList();
        }
    }
}
