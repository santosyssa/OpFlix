using Microsoft.EntityFrameworkCore;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.ViewsModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        OpFlixContext ctx = new OpFlixContext();

        public Usuarios BuscarPorEmailESenha(LoginViewModel login)
        {
            Usuarios usuario = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
            if (usuario == null)
                return null;
            return usuario;
        }

        public void Cadastrar(Usuarios usuario)
        {
            ctx.Usuarios.Add(usuario);
            ctx.SaveChanges();
        }
    }
}
