import './main.std.css'
import BtnPrimary from '../Btn-primary/btn-primary'
import GROUP from '../../assets/Group-754-min.png'
import useModal from '../../hook/useModal'
import ModalForm from '../Modal-form/modal-form'

export default function MainStd() {

    const { open, setOpen } = useModal()

    return (
        <div className='container-main'>
            {open && <ModalForm modalFunction={() => setOpen(!open)}/>}
            <div className='container-content-main'>
                <div className='container-img-group-std' id="sobre">
                    <img src={GROUP} alt="group" />
                </div>
                <div className='container-text-main-std'>
                    <div>
                        <h3>
                            Sobre <span>Nós</span>
                            <div className="container-line-style">
                                <div className='line-style-two'></div>
                                <div className='line-style-three'></div>
                            </div>
                        </h3>
                        <div className='container-p-std'>
                            <p>
                                Somos especialistas em soluções inteligentes, nossos estandes são ecologicamente corretos e adaptados às necessidades do meio ambiente.
                            </p>
                            <p>
                                Desde 1998, criamos e executamos projetos e montagens de estandes com tecnologia, criatividade e profissionalismo, aliados à pontualidade, qualidade e segurança à serviço de nossos clientes.
                            </p>
                        </div>
                        <div className='container-button-main-std'>
                            <div className='line-style'></div>
                            <BtnPrimary textbtn='FALE CONOSCO' modalFunction={() => setOpen(!open)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}