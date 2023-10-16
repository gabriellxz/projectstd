import "./section-std.css"
import BtnIverse from "../Btn-inverse/btn-inverse";
import BtnPrimary from "../Btn-primary/btn-primary";

export default function SectionStd() {
    return (
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
                    <BtnPrimary />
                    <BtnIverse />
                </div>
            </div>
        </div>
    )
}