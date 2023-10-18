import './localization-std.css'
import wpp from '../../assets/wpp_icon.png'
import email_icon from '../../assets/email icon.png'
import location_icon from '../../assets/localizacao.png'

export default function LocalizationStd() {
    return (
        <>
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
        </>
    )
}