export default function Frnd({frnd}) {
    console.log(frnd);
    const {name, email, phone} = frnd;
    return (
        <div className="card">
            {/* <h3>Name: {frnd.name} </h3> */}
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
            <h5>Phone: {phone}</h5>
        </div>
    )
}