using Actio.HelpDeskApi.Entity;
using Actio.HelpDeskApi.Utils;
using System.Threading.Tasks;

namespace Actio.HelpDeskApi.Repository
{
    public interface IUsuarioRepository : IRepositoryHelpDeskContext<Usuario>
    {
        Task<bool> AutenticarUsuario(string userName);
    }
}
