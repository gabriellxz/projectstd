import './section-contact.css'
import LocalizationStd from '../Localization-std/localization-std'


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
                        <LocalizationStd/>
                    </div>
                </div>
            </div>
        </>
    )
}