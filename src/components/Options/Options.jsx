import Button from "../Button/Button.jsx"

export default function Options({updateFeedback,total, resetFeedback}) {

    return (
        <div>
            <Button text="Good" type="good" updateFeedback={updateFeedback} />
            <Button text="Neutral"  type="neutral" updateFeedback={updateFeedback}/>
            <Button text="Bad"  type="bad" updateFeedback={updateFeedback}/>
            {total > 0 && <button onClick={resetFeedback}>Reset</button>}
        </div>
    )
}