
import Atividade from './Atividade';


export default function AtividadeLista(props) {
    return (
        <div>
            <div className='container mt-3'>
                {props.atividades.map((atv) => (
                    <Atividade
                        key={atv.id}
                        atv={atv}
                        deleteAtv={props.deleteAtv}
                        editAtv={props.editAtv}
                    />
                ))}
            </div>
        </div>
    );
}