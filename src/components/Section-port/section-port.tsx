import "./section-port.css"
import ANCLIPEVA_IMG from '../../assets/Group-anclipeva.png'
import AGNER_UNIAO_IMG from '../../assets/Group-agner-uniao.png'
import ANIMALLTAG_IMG from '../../assets/Group-animallTag.png'
import FORMULA_NATURAL_IMG from '../../assets/Group-formula-natural.png'
import ZOELIS from '../../assets/Group-zoelis.png'

export default function SectionPort() {
    return (
        <>
            <div className="container-port">
                <div className="container-title">
                    <div>
                        <h2>
                            Nosso <span>Portfólio</span>
                            <div className="container-line-style">
                                <div className="line-style"></div>
                                <div className="line-style-three"></div>
                            </div>
                        </h2>
                    </div>
                </div>
                <div>
                    <div className="container-grid-content">
                        <div className="grid-container">
                            <div className="grid-item"><img src={ANCLIPEVA_IMG} alt="Imagem 1" /></div>
                            <div className="grid-item"><img src={AGNER_UNIAO_IMG} alt="Imagem 2" /></div>
                            <div className="grid-item"><img src={ANIMALLTAG_IMG} alt="Imagem 3" /></div>
                            <div className="grid-item"><img src={FORMULA_NATURAL_IMG} alt="Imagem 4" /></div>
                            <div className="grid-item"><img src={ZOELIS} alt="Imagem 5" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}