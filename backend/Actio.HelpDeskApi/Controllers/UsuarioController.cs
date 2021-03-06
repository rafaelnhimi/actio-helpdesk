﻿using Actio.HelpDeskApi.Models;
using Actio.HelpDeskApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Actio.HelpDeskApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("autenticar")]
        public async Task<ActionResult> Autenticar(LoginModel model)
        {
            var resposta = await _usuarioService.AutenticarUsuario(model.Login);

            return Ok(resposta);
        }

        [HttpPost("registrar")]
        public async Task<ActionResult> Registrar(string userName)
        {
            var resposta = await _usuarioService.RegistrarUsuario(userName);

            return Ok(resposta);
        }
    }
}
