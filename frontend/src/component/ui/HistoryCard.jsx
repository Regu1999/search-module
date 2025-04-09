const HistoryCard = ({ foods }) => {
    console.log(foods);

    return <ul className="flex-container">
        {foods.map((food) => {
            return <li className="card-list" key={food._id}>
                <div className="img-container">
                    <img src={food.avatar} alt={food.name} />
                </div>
                <h3>{food.name}</h3>
                <h5>{food.restorentName}</h5>
            </li>
        })}

    </ul>
}

export default HistoryCard