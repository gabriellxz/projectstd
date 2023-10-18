import './App.css'
import Header from './components/Header/Header'
import MainStd from './components/Main-std/main-std'
import SectionStd from './components/Section-std/section-std'
import ServicesStd from './components/Services-std/services-std'
import SectionClients from './components/Section-clients/section-clients'
import SectionContact from './components/Section-contact/section-contact'

import INSTA_ICON from './assets/insta.png'
import IMAGE_GROUP_755 from './assets/Group-755.png'
import IMAGE_GROUP_755_MOBILE from './assets/Group-755-mobile.png'
import STAND_LOGO from "./assets/standshow.png"
import LocalizationStd from './components/Localization-std/localization-std'
// import TEL_ICON from './assets/icons8-telefone-50.png'
// import LOCALIZACAO_ICON from './assets/localizacao.png'
// import EMAIL_ICON from './assets/email icon.png'
// import WPP_ICON from './assets/wpp_icon.png'

function App() {

  return (
    <>
      <div className='div-background'>
        <Header />
        <div className='container-section-std'>
          <SectionStd />
        </div>
      </div>
      <div className='main-std'>
        <MainStd />
      </div>
      <ServicesStd />
      <div className='section-clients'>
        <SectionClients />
      </div>
      <div className="section-contact">
        <SectionContact />
      </div>
      <div className="footer">
        <div>
          <div className='container-instagram-std'>
            <div className='container-box-instagram-std'>
              <div className='container-instagram-icon'>
                <img src={INSTA_ICON} alt="" className='instagram-logo' />
              </div>
              <div className='container-instagram-router'>
                <a href="https://www.instagram.com/grupostandshow">@grupostandshow</a>
              </div>
            </div>
          </div>
          <div className='container-image-group'>
            <img src={IMAGE_GROUP_755} alt="" />
          </div>
          <div className='container-image-group-mobile'>
            <img src={IMAGE_GROUP_755_MOBILE} alt="" />
          </div>
        </div>
        <div className='container-footer-bottom'>
          <div className='box-left'>
            <div className='container-footer-logo-std'>
              <div>
                <img src={STAND_LOGO} alt="" />
              </div>
            </div>
          </div>
          <div className='contacts'>
            <LocalizationStd />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
