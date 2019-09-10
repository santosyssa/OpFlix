using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LancamentosController : ControllerBase
    {
        private ILancamentosRepository LancamentoRepository { get; set; }

        public LancamentosController()
        {
            LancamentoRepository = new LancamentoRepository();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ListarLancamentos()
        {
            return Ok(LancamentoRepository.Listar());
        }

        [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                Lancamentos lancamento = LancamentoRepository.BuscarPorId(id);
                if (lancamento == null)
                    return null;
                return Ok(lancamento);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize (Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar(Lancamentos lancamento)
        {
            try
            {
                LancamentoRepository.Cadastrar(lancamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize (Roles = "Administrador")]
        [HttpPut]
        public IActionResult AtualizarLancamentos(Lancamentos lancamento)
        {
            try
            {
                Lancamentos LancamentoProcurado = LancamentoRepository.BuscarPorId(lancamento.IdLancamentos);

                if (LancamentoProcurado == null)
                    return NotFound();

                LancamentoRepository.Atualizar(lancamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize (Roles = "Administrador")]
        [HttpDelete("{id}")]
        public IActionResult DeletarLancamentos(int id)
        {
            LancamentoRepository.Deletar(id);
            return Ok();
        }
    }
}