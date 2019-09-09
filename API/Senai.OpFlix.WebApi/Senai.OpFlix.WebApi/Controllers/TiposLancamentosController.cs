using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    public class TiposLancamentosController : ControllerBase
    {
        private ITipoLancamentoRepository TipoLancamentoRepository {get; set;}

        public TiposLancamentosController()
        {
            TipoLancamentoRepository = new TipoLancamentoRepository();
        }

        [HttpGet]
        public IActionResult ListarTipoLancamento()
        {
            return Ok(TipoLancamentoRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Categorias tipolancamento)
        {
            try
            {
                TipoLancamentoRepository.Cadastar(tipolancamento);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}