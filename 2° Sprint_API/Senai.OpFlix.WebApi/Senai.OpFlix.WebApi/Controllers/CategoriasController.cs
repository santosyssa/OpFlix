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
    public class CategoriasController : ControllerBase
    {
        private ICategoriaRepository CategoriaRepository { get; set; }

        public CategoriasController()
        {
            CategoriaRepository = new CategoriaRepository();
        }

        [Authorize]
        [HttpGet]
        public IActionResult ListarCategorias()
        {
            return Ok(CategoriaRepository.Listar());
        }

        [Authorize(Roles = "Administrador")]
        [HttpGet("{id}")]
        public IActionResult BuscarPorId (int id)
        {
            try
            {
                Categorias categoria = CategoriaRepository.BuscarPorId(id);
                if (categoria == null)
                    return null;
                return Ok(categoria);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Cadastrar (Categorias categoria)
        {
            try
            {
                CategoriaRepository.Cadastrar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPut]
        public IActionResult Atualizar (Categorias categoria)
        {
            try
            {
                Categorias CategoriaEncotrada = CategoriaRepository.BuscarPorId(categoria.IdCategoria);

                if (CategoriaEncotrada == null)
                    return NotFound();

                CategoriaRepository.Atualizar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete ("{id}")]
        public IActionResult Delete (int id)
        {
            CategoriaRepository.Deletar(id);
            return Ok();
        }
    }
}