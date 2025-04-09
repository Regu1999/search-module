import ListItems from "./ui/ListItem"
const Recomended = ({ foods }) => {
    return <>
        <h2>Recomended for you</h2>
        <ul className="list-container">
            {foods.map((food) => {
                return <ListItems
                    key={food._id}
                    name={food.name}
                    avatar={food.avatar}
                    restorentName={food.restorentName}
                    rating={food.rating}
                    review={food.review}
                />

            })}
        </ul >
    </>
}

export default Recomended