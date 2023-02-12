import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import api from './api/atv';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(() => {
    const getAtividades = async () =>{
      const todasAtividades = await getTodasAtividades();
      if(todasAtividades) setAtividades(todasAtividades);
    }
    getAtividades();
  }, []);

  const getTodasAtividades = async () =>{
    const response = await api.get('atividades');
    return response.data;
  }

  const addAtividade = async (atv) => {
    const response = await api.post('atividades', atv);
    setAtividades([...atividades, response.data]);
  }

  function deleteAtv(id) {
    const atvividadesFiltradas = atividades.filter((atv) => atv.id !== id);
    setAtividades([...atvividadesFiltradas]);
  }

  function editAtv(id){
    const atv = atividades.filter(atv => atv.id === id);
    setAtividade(atv[0]);
  }

  function cancelAtividade(){
    setAtividade({id: 0})
  }

  function updateAtividade(atv){
    setAtividades(atividades.map((item) => (item.id === atv.id ? atv : item)));
    setAtividade({id: 0})
  }

  return (
    <>
      <AtividadeForm addAtividade={addAtividade} updateAtividade={updateAtividade} cancelAtividade={cancelAtividade} atividades={atividades} atividadeSelected={atividade}/>
      <AtividadeLista atividades={atividades} deleteAtv = {deleteAtv} editAtv = {editAtv} />
    </>
  );
}

export default App;
