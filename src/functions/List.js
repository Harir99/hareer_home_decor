import { React } from 'react'
import data from "../data.json"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}><a  className="text-gold" href={item.link}>{item.name} <br></br></a></li>
            ))}
        </ul>
    )
}

export default List