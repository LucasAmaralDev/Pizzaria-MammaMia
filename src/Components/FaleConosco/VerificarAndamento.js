import './Formulario.css'
import LabelForm from './LabelForm';

function VerificarAndamento() {
    return (
        <div>
            <form className='flex'>
                <div className="estilo-formulario">
                    <h1>Acompanhar atendimento</h1>
                    <LabelForm type='text' name='E-mail' id='email' />
                    <LabelForm type='text' name='Numero do atendimento' id='id-atendimento' />
                    <button>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default VerificarAndamento;