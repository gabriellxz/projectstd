import X from '../../assets/x.svg'
import FormType from '../../models/form'
import './modal-form.css'
import { useState } from 'react'
import axios from 'axios'
// import api from '../../config/configAxios'

interface PropsBtn {
    modalFunction: () => void
}

export default function ModalForm(props: PropsBtn) {

    const [valueInput, setValueInput] = useState<FormType>({
        nome: "",
        telefone: "",
        email: "",
        cnpj: "",
        cidade: "",
        mensagem: ""
    })

    function handleValueInput(e: any) {
        setValueInput({ ...valueInput, [e.target.name]: e.target.value })
    }

    async function handleSubmitForm(e: any) {
        e.preventDefault()

        // console.log(valueInput.nome)
        // console.log(valueInput.telefone)
        // console.log(valueInput.email)
        // console.log(valueInput.cidade)
        // console.log(valueInput.mensagem)

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post("https://show-service-order.onrender.com/solicitacao-cliente/a980e9e6-6519-11ee-8c99-0242ac12'", valueInput, { headers })
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="container-form-modal">
                <div className='container-btn-modal'>
                    <img src={X} alt="" onClick={props.modalFunction} />
                    {/* <BtnPrimary textbtn='Voltar' modalFunction={() => setOpen(!open)} /> */}
                </div>
                <div>
                    <form onSubmit={handleSubmitForm}>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Nome' className='input' name='nome' onChange={handleValueInput} />
                        </div>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Telefone | Whatsapp' className='input' name='telefone' onChange={handleValueInput} />
                        </div>
                        <div className="container-input-modal">
                            <input type="email" placeholder='Email' className='input' name='email' onChange={handleValueInput} />
                        </div>
                        <div className="container-input-modal">
                            <input type="text" placeholder='CNPJ' className='input' name='cnpj' onChange={handleValueInput} />
                        </div>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Cidade | Estado' className='input' name='cidade' onChange={handleValueInput} />
                        </div>
                        <div className="container-input-modal">
                            <textarea name="mensagem" id="" cols={30} rows={10} placeholder='Mensagem' onChange={handleValueInput}></textarea>
                        </div>
                        <div className="container-input-modal">
                            <button className="btn-contact">
                                enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}