import { use } from "react";
import Frnd from "./Frnd";

// export default function Frnds({frndsPromise}) {
export default function Frnds({fetchFrnds}) {
    const frnds = use(fetchFrnds)
    console.log(frnds)

    return(
        <div className="card">
            <h1>Bondhu: {frnds.length} </h1>
            {
                frnds.map(frnd =>  <Frnd key={frnd.id} frnd={frnd}></Frnd>)
            }
        </div>
    )
}