function FormSubmit(event) {
    event.preventDefault()
    console.log("form submitted");
    console.log (event);
}

function Form () {
    return (
        <>
        <form onSubmit={FormSubmit}>
            <input placeholder="write here" />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Form