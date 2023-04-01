export default function TextFieldQuestion(props) {
    return (
        <div>
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Placeholder
                <input type="text" name="placeholder" />
            </label>
            <br />
            <button>Add</button>
        </div>
    )
}