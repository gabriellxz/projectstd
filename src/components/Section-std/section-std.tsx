import "./section-std.css"
import BtnIverse from "../Btn-inverse/btn-inverse";
import BtnPrimary from "../Btn-primary/btn-primary";
import ModalForm from "../Modal-form/modal-form";
import useModal from "../../hook/useModal";
// import { useState } from "react";

export default function SectionStd() {

    const { open, setOpen } = useModal()

    return (
        <>
            {open && <ModalForm modalFunction={() => setOpen(!open)} />}
            <div>
                <div className='container-text-std' id="home">
                    <h1>
                        somos o grupo <br />
                        <span>Stand Show</span>
                    </h1>
                    <p>
                        Desde 1998 criando e executando projetos e montagens de estandes com tecnologia, criatividade e profissionalismo.
                    </p>
                    <div className="container-btn">
                        {/* <button onClick={() => setOpen(!open)}>Fale conosco</button> */}
                        <BtnPrimary textbtn="Fale Conosco" modalFunction={() => setOpen(!open)} />
                        <BtnIverse />
                    </div>
                </div>
            </div>
        </>
    )
}