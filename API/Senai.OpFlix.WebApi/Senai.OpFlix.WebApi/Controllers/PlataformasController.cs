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
    public class PlataformasController : ControllerBase
    {
        private ITiposLancamentosRepository PlataformaRepository { get; set; }

        public PlataformasController()
        {
            PlataformaRepository = new PlataformaRepository();
        }

        [HttpGet]
        public IActionResult ListarPlataformas()
        {
            return Ok(PlataformaRepository.Listar());
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                Plataformas plataforma = PlataformaRepository.BuscarPorId(id);
                if (plataforma == null)
                    return null;
                return Ok(plataforma);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Plataformas plataforma)
        {
            try
            {
                PlataformaRepository.Cadastrar(plataforma);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpPut]
        public IActionResult Atualizar(Plataformas plataforma)
        {
            try
            {
                Plataformas PlataformaEncotrada = PlataformaRepository.BuscarPorId(plataforma.IdPlataforma);

                if (PlataformaEncotrada == null)
                    return NotFound();

                PlataformaRepository.Atualizar(plataforma);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

    }
}