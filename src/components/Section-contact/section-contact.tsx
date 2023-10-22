import './section-contact.css'
import LocalizationStd from '../Localization-std/localization-std'


export default function SectionContact() {
    return (
        <>
            <div>
                <div className='container-title-contact'>
                    <div id="contato">
                        <h2>Contato</h2>
                        <div className="container-line-style">
                            <div className="line-style-two"></div>
                            <div className="line-style-three"></div>
                        </div>
                    </div>
                </div>
                <div className='container-content-contact'>
                    <div className="container-form">
                        <form>
                            <div className="container-input">
                                <input type="text" placeholder='Nome' className='input'/>
                            </div>
                            <div className="container-input">
                                <input type="text" placeholder='Telefone | Whatsapp' className='input'/>
                            </div>
                            <div className="container-input">
                                <input type="email" placeholder='Email' className='input'/>
                            </div>
                            <div className="container-input">
                                <input type="text" placeholder='Cidade | Estado' className='input'/>
                            </div>
                            <div className="container-input">
                                <textarea name="" id="" cols={30} rows={10} placeholder='Mensagem'></textarea>
                            </div>
                            <div className="container-input">
                                <button className="btn-contact">
                                    enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="container-location">
                        <div>
                            <iframe loading="lazy" src="https://maps.google.com/maps?q=Rua%20Ana%20L%C3%BAcia%20Dias%2C%20101%20Fortaleza&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Rua Ana Lúcia Dias, 101 Fortaleza" aria-label="Rua Ana Lúcia Dias, 101 Fortaleza"></iframe>
                            <LocalizationStd />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
