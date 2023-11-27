import { useParams } from "react-router-dom";

export default function Category(props) {
    let urlParams = useParams();
    console.log(urlParams);
}