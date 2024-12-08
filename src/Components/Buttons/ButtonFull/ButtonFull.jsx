import './ButtonFull.css'


export default function ButtonFull({ text, onClick }) {

    return (
        <button onClick={onClick} className="btn-fl">{text}</button>
    )
}

