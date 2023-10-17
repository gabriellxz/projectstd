import "./btn-primary.css"

interface PropsText {
    textbtn: string;
}

export default function BtnPrimary(props:PropsText) {
    return(
        <button className="btn-primary">
            {props.textbtn}
        </button>
    )
}