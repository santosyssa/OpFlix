using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.ViewsModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    public interface IUsuarioRepository
    {
            Usuarios BuscarPorEmailESenha(LoginViewModel login);

            void Cadastrar(Usuarios usuario);
  
    }
}
