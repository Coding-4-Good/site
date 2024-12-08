import './Button.css'


export default function ButtonSmall({ text, onClick }) {

    return (
        <button onClick={onClick} className="btn">{text}</button>
    )
}

