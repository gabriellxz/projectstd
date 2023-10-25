import './App.css'
import Header from './components/Header/Header'
import MainStd from './components/Main-std/main-std'
import SectionStd from './components/Section-std/section-std'
import ServicesStd from './components/Services-std/services-std'
import SectionClients from './components/Section-clients/section-clients'
import SectionContact from './components/Section-contact/section-contact'
import Footer from './components/Footer/footer'
import SectionPort from './components/Section-port/section-port'

function App() {
  
  return (
    <div>
      <div className='div-background'>
        <Header />
        <div className='container-section-std'>
          <SectionStd />
        </div>
      </div>
      <div className='section-services'>
        <ServicesStd />
      </div>
      <div className='main-std'>
        <MainStd />
      </div>
      <div className="section-port">
        <SectionPort/>
      </div>
      <div className='section-clients'>
        <SectionClients />
      </div>
      <div className="section-contact">
        <SectionContact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
