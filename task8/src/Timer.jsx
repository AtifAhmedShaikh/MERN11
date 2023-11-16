import { useState } from "react"
const Timer = () => {
    const [count, setCount] = useState(0)
    const start = () => {
        setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)
    }
    return (
        <div>
            {Math.floor(count / 60)}:{count % 60}
            <button onClick={start}>start</button>
        </div>
    )
}

export default Timer