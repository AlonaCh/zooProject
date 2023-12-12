export default function Search(props) {
    return (
        <input className="inputSeacrh" placeholder="Search..." type="text" onChange={props.searchHandler} autoFocus="on" />

    )
}

