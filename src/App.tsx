import './App.css'
import Header from './components/Header/Header'
import MainStd from './components/Main-std/main-std'
import SectionStd from './components/Section-std/section-std'
import ServicesStd from './components/Services-std/services-std'
import wpp from './assets/wpp_icon.png'
import email_icon from './assets/email icon.png'
import location_icon from './assets/localizacao.png'

/*client*/
import threeM from './assets/clients/3m.png'
import abraman from './assets/clients/abraman.png'
import allbout from './assets/clients/allbout.png'
import assopecas from './assets/clients/assopeças.png'
import bayer from './assets/clients/bayer.png'
import bb from './assets/clients/bb.png'
import biolab from './assets/clients/biolab.png'
import boehringer from './assets/clients/boehringer.png'
import bradesco from './assets/clients/bradesco.png'
import caixa from './assets/clients/caixa.png'
import coelce from './assets/clients/coelce.png'
import eletrobras from './assets/clients/eletrobras.png'

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
        <div>
          <h2>
            Nossos <span>Clientes</span>
            {/* <div className='line-style'></div> */}
          </h2>
        </div>
        <div className='boxs-clients'>
          <div>
            <img src={threeM} alt="" />
          </div>
          <div>
            <img src={abraman} alt="" />
          </div>
          <div>
            <img src={allbout} alt="" />
          </div>
          <div>
            <img src={assopecas} alt="" />
          </div>
          <div>
            <img src={bb} alt="" />
          </div>
          <div>
            <img src={biolab} alt="" />
          </div>
          <div>
            <img src={boehringer} alt="" />
          </div>
          <div>
            <img src={bradesco} alt="" />
          </div>
          <div>
            <img src={caixa} alt="" />
          </div>
          <div>
            <img src={bayer} alt="" />
          </div>
          <div>
            <img src={coelce} alt="" />
          </div>
          <div>
            <img src={eletrobras} alt="" />
          </div>
        </div>
      </div>
      <div className="section-contact">
        <div>
          <div className='container-title'>
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
      </div>
    </>
  )
}

export default App
