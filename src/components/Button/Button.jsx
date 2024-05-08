export default function Button({ type, text,updateFeedback }) {

    return (
        <button onClick={()=> updateFeedback(type)}>{text}</button>)
}