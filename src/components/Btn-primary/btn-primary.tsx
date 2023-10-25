// import useModal from "../../hook/useModal";
import "./btn-primary.css"

interface PropsBtn {
    textbtn: string;
    modalFunction?: () => void
}

export default function BtnPrimary(props:PropsBtn) {


    return(
        <button className="btn-primary" onClick={props.modalFunction}>
            {props.textbtn}
        </button>
    )
}