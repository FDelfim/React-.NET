

export default function Atividade(props) {

    function prioridadeLabel(param) {
        switch (param) {
            case '1':
                return 'Alta';
            case '2':
                return 'Média';
            case '3':
                return 'Baixa';
            default:
                return '';
        }
    }

    function prioridadeStyle(param) {
        switch (param) {
            case '1':
                return 'danger';
            case '2':
                return 'warning';
            case '3':
                return 'primary';
            default:
                return 'grey';
        }
    }

    return (
        <div>
            <div key={props.atv.id} className={'card mb-2 shadow-sm border-' + prioridadeStyle(props.atv.prioridade)}>
                <div className='card-body'>
                    <div className='card-title d-flex justify-content-between'>
                        <h5><span className='badge rounded-pill bg-primary sm me-1'>{props.atv.id}</span> {props.atv.titulo}</h5>
                        <h6>Prioridade: {prioridadeLabel(props.atv.prioridade)} <i className={'fa fa-circle ms-1 text-' + prioridadeStyle(props.atv.prioridade)}></i> </h6>
                    </div>
                    <p className='card-text'>
                        {props.atv.descricao}
                    </p>
                    <div className='d-flex justify-content-end border-top m-0 pt-2'>
                        <button onClick={() => { props.editAtv(props.atv.id) }} className='btn btn-sm btn-secondary me-2'><i className='fas fa-pen'></i> Editar</button>
                        <button onClick={() => { props.deleteAtv(props.atv.id) }} className='btn btn-sm btn-danger'><i className='fas fa-trash'></i> Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}