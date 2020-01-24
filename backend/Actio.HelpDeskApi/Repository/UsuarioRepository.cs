using Actio.HelpDeskApi.Context;
using Actio.HelpDeskApi.Entity;
using Actio.HelpDeskApi.Utils;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Actio.HelpDeskApi.Repository
{
    public class UsuarioRepository : RepositoryHelpDeskContext<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(HelpDeskContext context) : base(context)
        {

        }

        public async Task<bool> AutenticarUsuario(string login)
        {
            return await _context.Usuario.AnyAsync(p => p.Login.ToLower() == login.ToLower());
        }
    }
}
