import X from '../../assets/x.svg'
import './modal-form.css'

interface PropsBtn {
    modalFunction: () => void
}

export default function ModalForm(props: PropsBtn) {

    return (
        <>
            <div className="container-form-modal">
                <div className='container-btn-modal'>
                    <img src={X} alt="" onClick={props.modalFunction} />
                    {/* <BtnPrimary textbtn='Voltar' modalFunction={() => setOpen(!open)} /> */}
                </div>
                <div>
                    <form>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Nome' className='input' />
                        </div>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Telefone | Whatsapp' className='input' />
                        </div>
                        <div className="container-input-modal">
                            <input type="email" placeholder='Email' className='input' />
                        </div>
                        <div className="container-input-modal">
                            <input type="text" placeholder='Cidade | Estado' className='input' />
                        </div>
                        <div className="container-input-modal">
                            <textarea name="" id="" cols={30} rows={10} placeholder='Mensagem'></textarea>
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