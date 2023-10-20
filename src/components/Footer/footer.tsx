import './footer.css'
import INSTA_ICON from '../../assets/insta.png'
import IMAGE_GROUP_755 from '../../assets/Group-755.png'
import IMAGE_GROUP_755_MOBILE from '../../assets/Group-755-mobile.png'
import STAND_LOGO from "../../assets/standshow.png"
// import TEL_ICON from './assets/icons8-telefone-50.png'
// import LOCALIZACAO_ICON from './assets/localizacao.png'
// import EMAIL_ICON from './assets/email icon.png'
// import WPP_ICON from './assets/wpp_icon.png'
import wpp from '../../assets/wpp_icon.png'
import email_icon from '../../assets/email icon.png'
import location_icon from '../../assets/localizacao.png'

export default function Footer() {
  return (
    <>
      <div>
        <div className="container-instagram-std">
          <div className="container-box-instagram-std">
            <div className="container-instagram-icon">
              <img src={INSTA_ICON} alt="" className="instagram-logo" />
            </div>
            <div className="container-instagram-router">
              <a href="https://www.instagram.com/grupostandshow">
                @grupostandshow
              </a>
            </div>
          </div>
        </div>
        <div className="container-image-group">
          <img src={IMAGE_GROUP_755} alt="" />
        </div>
        <div className="container-image-group-mobile">
          <img src={IMAGE_GROUP_755_MOBILE} alt="" />
        </div>
      </div>
      <div className="container-footer-bottom">
        <div className="container-footer">
          <div className="container-logo-std">
            <img src={STAND_LOGO} alt="" />
          </div>
          <div className="container-contact-std line">
            <h4>fortaleza - ce</h4>
            <ul>
              <li>
                <img src={wpp} alt="" />
                (+55 85) 3444.3350
              </li>
              <li>
                <img src={location_icon} alt="" />
                Rua Ana Lúcia Dias,101 Lagoa Redonda CEP 60831-500 | Fortaleza
                CE | Brasil
              </li>
              <li>
                <img src={email_icon} alt="" />
                standshow@standshow.com.br
              </li>
            </ul>
          </div>
          <div className="container-contact-std">
            <h4>filial natal</h4>
            <p className="p-location-std">
              <img src={email_icon} alt="" />
              standshow@standshow.com.br
            </p>
            <h4>filial salvador</h4>
            <p className="p-location-std">
              <img src={wpp} alt="" />
              (71) 99345.0549 (Lelia Máximo)
            </p>
            <h4>filial belém</h4>
            <p className="p-location-std">
              <img src={wpp} alt="" />
              (91) 98111.3809 (Gisele Bernardes)
            </p>
          </div>
        </div>
      </div>
      <div className="copy-std">
        <div className="line-copy"></div>
        <p>2023 © Grupo Stand Show. Todos os direitos reservados.</p>
      </div>
    </>
  );
}
