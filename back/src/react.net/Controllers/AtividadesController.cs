using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using react.net.Data;
using react.net.Models;

namespace react.net.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadesController : ControllerBase
    {
        private readonly DataContext context;

        public AtividadesController(DataContext context)
        {
            this.context = context;
            
        }

        [HttpGet]
        public IEnumerable<Atividade> Get(){
            return context.Atividades;
        }
        

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return context.Atividades.FirstOrDefault(a => a.Id == id);
        }


        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            context.Atividades.Add(atividade);
            if(context.SaveChanges() > 0){
                return context.Atividades;
            }else{
                throw new Exception("Erro ao salvar atividade");
            }
        }


        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if(atividade.Id != id) throw new Exception("Id inválido");
            
            context.Update(atividade);
            if(context.SaveChanges() > 0){
                return context.Atividades.FirstOrDefault(a => a.Id == id);
            }else{ 
                throw new Exception("Erro ao atualizar atividade");
            }
        }


        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            var atividade = context.Atividades.FirstOrDefault(a => a.Id == id);
            if(atividade == null) throw new Exception("Atividade não encontrada");
            context.Remove(atividade);
            return context.SaveChanges() > 0;
        }
    }
}