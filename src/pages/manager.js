import UserItem from "../components/UserItem"

export default function Manager() {
    return (
        <div>
            <h1>Manager</h1>
            <UserItem user={{name: 'Ser', email: 'ser@gmail.com', position: 'sw eng'}} />
        </div>
    )
}