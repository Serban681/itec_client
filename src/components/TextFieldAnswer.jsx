export default function TextFieldAnswer({ name, placeholder }) {
    return (
        <div>
            <label>
                {name}
                <br />
                <input type="text" name="answer" placeholder={placeholder}></input>
                <br />
                <button>Answer</button>
            </label>
        </div>
    )
}