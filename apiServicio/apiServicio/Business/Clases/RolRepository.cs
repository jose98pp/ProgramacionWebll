using apiServicio.Business.Contracts;
using apiServicio.Models;
using apiServicio.Services.Clases;
using System.Data.SqlClient;

namespace apiServicio.Business.Clases
{
    public class RolRepository : IRolRepository
    {
        private readonly string connec;

        public RolRepository(IConfiguration configuration)
        {
            connec = configuration.GetConnectionString("conBase");
        }
        public async Task<List<Rol>> GetList()
        {
            List<Rol> lista = new List<Rol>();
            Rol l;
            using (SqlConnection conn = new SqlConnection(connec))
            {
                await conn.OpenAsync();
                SqlCommand cmd = new SqlCommand("SELECT * FROM Rol", conn);
                using(var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        l = new Rol();
                        l.Id = Convert.ToInt32(reader["Id"]);
                        l.NombreRol = Convert.ToString(reader["NombreRol"]);
                        lista.Add(l);
                    }
                }
            }
            return lista;
        }
    }
}
