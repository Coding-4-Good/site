import './ButtonLarge.css'


export default function ButtonSmall({ text, onClick }) {

    return (
        <button onClick={onClick} className="btn-lg">{text}</button>
    )
}

