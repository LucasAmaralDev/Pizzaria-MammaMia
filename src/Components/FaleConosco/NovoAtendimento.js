import LabelForm from "./LabelForm";
import './Formulario.css'

function NovoAtendimento() {

    return(
    <div>
        <form className="flex">
            <div className="estilo-formulario">
                <h1>Abrir novo atendimento</h1>
                <LabelForm type='text' name='Nome' id='name'/>
                <LabelForm type='text' name='E-mail' id='email'/>
                <LabelForm type='text' name='Numero do pedido' id='pedido'/>
                <LabelForm type='text' name='Telefone' id='telefone'/>
                <LabelForm type='text' name='Loja' id='loja'/>
                <LabelForm type='text' name='Assunto' id='assunto'/>
                <LabelForm type='text' name='Mensagem' id='message'/>
                <button>Enviar</button>
            </div>
        </form>
    </div>
    )
}

export default NovoAtendimento;