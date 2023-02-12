import { useEffect, useState } from 'react';

const atvInicial = { id: 0, titulo: '', prioridade: 0, descricao: '' };

export default function AtividadeForm(props) {

    const [atividade, setAtividade] = useState(atvAtual());

    useEffect(() => {
        if (props.atividadeSelected.id !== 0) {
            setAtividade(props.atividadeSelected);
        }
    }, [props.atividadeSelected]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setAtividade({ ...atividade, [name]: value });
    }

    const handleCancel = (e) => {
        e.preventDefault();
        props.cancelAtividade();
        setAtividade(atvInicial);
    }

    function atvAtual() {
        if (props.atividadeSelected !== 0) {
            return props.atividadeSelected;
        } else {
            return atvInicial;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.atividadeSelected.id !== 0 )
        {
            props.updateAtividade(atividade);
        }else{
            props.addAtividade(atividade);
        }
        setAtividade(atvInicial);
    }

    return (
        <>
            <div className="container">
                <div className='card mb-2 shadow-sm mt-3'>
                    <div className='card-body'>
                        <h4 className='mb-2 text-start'>{atividade.id !== 0 ? 'Atividade ' + atividade.id : 'Atividades'}</h4>
                        <form className='row g-3' onSubmit={handleSubmit}>
                            <div className='col-md-6'>
                                <label htmlFor='titulo' className='form-label'>Título</label>
                                <input id='titulo' name='titulo' type='text' onChange={inputTextHandler} value={atividade.titulo} placeholder='Título' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='prioridade' className='form-label'>Prioridade</label>
                                <select id='prioridade' name='prioridade' className='form-select' onChange={inputTextHandler} value={atividade.prioridade} placeholder='Selecione uma prioridade...'>
                                    <option defaultValue='Undefined'>Selecione uma opção...</option>
                                    <option value='Alta'>Alta</option>
                                    <option value='Normal'>Média</option>
                                    <option value='Baixa'>Baixa</option>
                                </select>
                            </div>
                            <div className='col-md-12'>
                                <label htmlFor='descricao' className='form-label'>Descrição</label>
                                <textarea id='descricao' name='descricao' type='text' onChange={inputTextHandler} value={atividade.descricao} placeholder='Descrição' className='form-control' />
                            </div>
                            <div className='col-md-12 d-flex justify-content-end'>
                                {
                                    atividade.id === 0 ?
                                        <button className='btn btn-outline-success' type='submit'><i className='fas fa-plus'></i> Adicionar</button>
                                        :
                                        <>
                                            <button className='btn btn-outline-success ms-2'><i className='fas fa-check'></i> Atualizar</button>
                                            <button className='btn btn-outline-danger' type='submit' onClick={handleCancel}><i className='fas fa-close'></i> Cancelar</button>
                                        </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}