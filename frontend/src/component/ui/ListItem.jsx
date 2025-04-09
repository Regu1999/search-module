import { FaStar } from "react-icons/fa";

const ListItems = ({ name, avatar, restorentName, rating, review })=>{

return <li className="listItem">
    <div className="img-container">
        <img src={avatar} alt={name} />
    </div>
    <div className="list-info">
        <h3>{name}</h3>
        <h5>{restorentName}</h5>
        <div className="rating"><FaStar className="star-icon" /><span>{rating}</span> ({review?.length} review)</div>
    </div>
</li>
}

export default ListItems