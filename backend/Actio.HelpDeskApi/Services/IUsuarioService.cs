using System.Threading.Tasks;

namespace Actio.HelpDeskApi.Services
{
    public interface IUsuarioService
    {
        Task<bool> AutenticarUsuario(string userName);
        Task<bool> RegistrarUsuario(string userName);
    }
}
