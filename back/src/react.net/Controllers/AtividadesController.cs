using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using react.net.Models;

namespace react.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadesController : ControllerBase
    {

        public IEnumerable<Atividade> Atividades = new List<Atividade>(){
            new Atividade(1),
            new Atividade(2),
            new Atividade(3)
        };
        

        [HttpGet]
        public Atividade Get()
        {
            return Atividades.FirstOrDefault();
        }


        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return Atividades.FirstOrDefault(a => a.Id == id);
        }


        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            return Atividades.Append<Atividade>(atividade);
        }


        [HttpPut("{id}")]
        public String Put(int id)
        {
            return $"Put {id}";
        }


        [HttpDelete("{id}")]
        public String Delete(int id)
        {
            return $"Delete {id}";
        }
    }
}