import './services-std.css'
import ICON_1 from '../../assets/Path-571.png'
import ICON_2 from '../../assets/Group-745.png'
import ICON_3 from '../../assets/Group.png'

export default function ServicesStd() {
    return (
        <>
            <div className='services' id='serviços'>
                <div>
                    <div className="container-title">
                        <div>
                            <h2>
                                Enventos
                                <div className="container-line-style">
                                    <div className="line-style"></div>
                                    <div className="line-style-three"></div>
                                </div>
                            </h2>
                        </div>
                    </div>
                    <div className='container-box-stand'>
                        <div className='box-stand'>
                            <p>
                                Estande Ecológico
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                        <div className='box-stand'>
                            <p>
                                Estande Personalizado
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                        <div className='box-stand'>
                            <p>
                                Estande Misto
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                        <div className='box-stand'>
                            <p>
                                Estande para Shopping
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                        <div className='box-stand'>
                            <p>
                                Estande Básico
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                        <div className='box-stand'>
                            <p>
                                Estande Modular
                                <div className='line-style' style={{ background: "#fff" }}></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-services-std">
                <div className='container-boxs'>
                    <div className='box-icon'>
                        <div className='container-box-icon'>
                            <img src={ICON_1} alt="" />
                        </div>
                        <div>
                            <p>
                                Soluções
                                Inteligentes
                            </p>
                        </div>
                    </div>
                    <div className='box-icon line-style-box'>
                        <div className='container-box-icon'>
                            <img src={ICON_2} alt="" />
                        </div>
                        <div>
                            <p>
                                Estandes
                                ecologicamente
                                corretos
                            </p>
                        </div>
                    </div>
                    <div className='box-icon line-style-box-2'>
                        <div className='container-box-icon'>
                            <img src={ICON_3} alt="" />
                        </div>
                        <div>
                            <p>
                                Tecnologia
                                criatividade e
                                segurança
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 