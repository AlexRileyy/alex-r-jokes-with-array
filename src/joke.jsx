
function Joke(props) {
    return (
        <div>
            <p>{props.setup}</p>
            <p>{props.punchline}</p> 
        </div>
    )

}

function Liner(props) {
    return (
        <div>
            <p>{props.oneLiner}</p>
        </div>
    )
}

export {Liner, Joke}