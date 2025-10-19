import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0); // runs = 0
    const [fours, setFours] = useState(0); // fours = 0
    const [sixes, setSixes] = useState(0); // sixes = 0

    const handleSingle = () => {
        setRuns(runs + 1); // runs = runs + 1
    }

    const handleFour = () => {
        setRuns(runs + 4);
        setFours(fours + 1);
    }

    const handleSix = () => {
        setRuns(runs + 6);
        setSixes(sixes + 1);
    }

    return (
        <div>

            {
                runs > 50 && <h3> Congratulations! 50 runs reached</h3>
            }

            {
                runs > 100 && <h3> Congratulations! 100 runs reached</h3>
            }

            <h2>Player: Bangladeshi Batsman</h2>
            <h1>Score: {runs} </h1>
            <p><small>Four: {fours} </small></p>
            <p><small>Six: {sixes} </small></p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}