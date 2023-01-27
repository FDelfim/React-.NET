import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

let initialState = [
  { id: 1, descricao: "Atividade 1", titulo: "Ativium", prioridade: "1" },
  { id: 2, descricao: "Atividade 2", titulo: "Atividois", prioridade: "2" },
];

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(() => {
    atividade.lenght <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, atividades.map((item => item.id))) + 1);
  }, [atividades]);

  function addAtividade(atv) {
    setAtividades([...atividades, { ...atv, id: index}]);
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
