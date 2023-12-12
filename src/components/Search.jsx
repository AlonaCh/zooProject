export default function Search(props) {
    return (
        <input className="input" placeholder="Search..." type="text" onChange={props.searchHandler} autoFocus="on" />

    )
}

