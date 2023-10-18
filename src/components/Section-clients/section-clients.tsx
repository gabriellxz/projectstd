import './section-clients.css'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*client*/
import threeM from '../../assets/clients/3m.png'
import abraman from '../../assets/clients/abraman.png'
import allbout from '../../assets/clients/allbout.png'
import assopecas from '../../assets/clients/assopeças.png'
import bayer from '../../assets/clients/bayer.png'
import bb from '../../assets/clients/bb.png'
import biolab from '../../assets/clients/biolab.png'
import boehringer from '../../assets/clients/boehringer.png'
import bradesco from '../../assets/clients/bradesco.png'
import caixa from '../../assets/clients/caixa.png'
import coelce from '../../assets/clients/coelce.png'
import eletrobras from '../../assets/clients/eletrobras.png'
import esmaltec from '../../assets/clients/esmaltec.png'
import formulanatural from '../../assets/clients/formulanatural.png'
import gas from '../../assets/clients/gas.png'
import hapvida from '../../assets/clients/hapvida.png'
import iguatemi from '../../assets/clients/iguatemi.png'
import mrv from '../../assets/clients/mrv.png'
import nifor from '../../assets/clients/nifor.png'
import pado from '../../assets/clients/pado.png'
import petrobras from '../../assets/clients/stam.png'
import unimed from '../../assets/clients/unimed.png'

export default function SectionClients() {

    const [image, setImage] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        threeM,
        abraman,
        allbout,
        assopecas,
        bayer,
        bb,
        biolab,
        boehringer,
        bradesco,
        caixa,
        coelce,
        eletrobras,
        esmaltec,
        formulanatural,
        gas,
        hapvida,
        iguatemi,
        mrv,
        nifor,
        pado,
        petrobras,
        unimed
    ]

    const interval = 3000

    useEffect(() => {
        const timer = setInterval(() => {
            setImage((image) => (image + 1) % images.length)
        }, interval)

        return () => {
            clearInterval(timer);
        };
    }, [image, images, interval])

    return (
        <>
            <div id='clientes'>
                <h2>
                    Nossos <span>Clientes</span>
                    {/* <div className='line-style'></div> */}
                </h2>
            </div>
            <div className='carrousel'>
                <Slider className='boxs-clients' {...settings}>
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
                        <img src={esmaltec} alt="" />
                    </div>
                    <div>
                        <img src={formulanatural} alt="" />
                    </div>
                    <div>
                        <img src={gas} alt="" />
                    </div>
                    <div>
                        <img src={hapvida} alt="" />
                    </div>
                    <div>
                        <img src={iguatemi} alt="" />
                    </div>
                    <div>
                        <img src={mrv} alt="" />
                    </div>
                    <div>
                        <img src={nifor} alt="" />
                    </div>
                    <div>
                        <img src={pado} alt="" />
                    </div>
                    <div>
                        <img src={petrobras} alt="" />
                    </div>
                    <div>
                        <img src={unimed} alt="" />
                    </div>
                    <div>
                        <img src={eletrobras} alt="" />
                    </div>
                </Slider>
            </div>
            {/* Mobile */}
            <div className="box-clients-mobile">
                <img src={images[image]} alt="" />
            </div>
        </>
    )
}