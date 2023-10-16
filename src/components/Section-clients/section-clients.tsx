import './section-clients.css'
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
import { useEffect, useState } from 'react'

export default function SectionClients() {

    const [image, setImage] = useState(0)

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
        eletrobras
    ]

    const interval =  3000

    useEffect(() => {
        const timer = setInterval(() => {
            setImage((image) => (image + 1) % images.length)
        }, interval)
    }, [image, images, interval])

    return (
        <>
            <div>
                <h2>
                    Nossos <span>Clientes</span>
                    {/* <div className='line-style'></div> */}
                </h2>
            </div>
            <div>
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
                <div className="box-clients-mobile">
                    <img src={images[image]} alt="" />
                </div>
            </div>
        </>
    )
}