import './section-contact.css'
import wpp from '../../assets/wpp_icon.png'
import email_icon from '../../assets/email icon.png'
import location_icon from '../../assets/localizacao.png'


export default function SectionContact() {
    return (
        <>
            <div>
                <div className='container-title' id='contato'>
                    <h2>
                        Contato
                        <div className='line-style'></div>
                    </h2>
                </div>
                <div className='container-form'>
                    <form>
                        <div>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div>
                            <input type="text" placeholder='Telefone | Whatsapp' />
                        </div>
                        <div>
                            <input type="email" placeholder='Email' />
                        </div>
                        <div>
                            <input type="text" placeholder='Cidade | Estado' />
                        </div>
                        <textarea name="" id="" cols={30} rows={10} placeholder='Mensagem'></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                    <div className='container-location'>
                        <iframe loading="lazy" src="https://maps.google.com/maps?q=Rua%20Ana%20L%C3%BAcia%20Dias%2C%20101%20Fortaleza&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Rua Ana Lúcia Dias, 101 Fortaleza" aria-label="Rua Ana Lúcia Dias, 101 Fortaleza"></iframe>
                        <div className='location-std'>
                            <div>
                                <h4>fortaleza - ce</h4>
                                <ul>
                                    <li>
                                        <img src={wpp} alt="" />
                                        (+55 85) 3444.3350
                                    </li>
                                    <li>
                                        <img src={location_icon} alt="" />
                                        Rua Ana Lúcia Dias,101
                                        Lagoa Redonda
                                        CEP 60831-500 | Fortaleza CE | Brasil
                                    </li>
                                    <li>
                                        <img src={email_icon} alt="" />
                                        standshow@standshow.com.br
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>filial natal</h4>
                                <p className='p-location-std'>
                                    <img src={email_icon} alt="" />
                                    standshow@standshow.com.br
                                </p>
                                <h4>filial salvador</h4>
                                <p className='p-location-std'>
                                    <img src={wpp} alt="" />
                                    (71) 99345.0549 (Lelia Máximo)
                                </p>
                                <h4>filial belém</h4>
                                <p className='p-location-std'>
                                    <img src={wpp} alt="" />
                                    (91) 98111.3809 (Gisele Bernardes)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}