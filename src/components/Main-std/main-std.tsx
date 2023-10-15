import './main.std.css'
import BtnPrimary from '../Btn-primary/btn-primary'
import GROUP from '../../assets/Group-754-min.png'

export default function MainStd() {
    return (
        <div className='container-main'>
            <div className='container-img-group-std'>
                <img src={GROUP} alt="group" />
            </div>
            <div className='container-text-main-std'>
                <div>
                    <h3>
                        Sobre <span>Nós</span>
                        <div className='line-style'></div>
                    </h3>
                    <div className='container-p-std'>
                        <p>
                            Somos especialistas em soluções inteligentes, nossos estandes são ecologicamente corretos e adaptados às necessidades do meio ambiente.
                        </p>
                        <p>
                            Desde 1998, criamos e executamos projetos e montagens de estandes com tecnologia, criatividade e profissionalismo, aliados à pontualidade, qualidade e segurança à serviço de nossos clientes.
                        </p>
                    </div>
                    <BtnPrimary />
                </div>
            </div>
        </div>
    )
}