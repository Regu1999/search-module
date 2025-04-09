import ListItems from "./ui/ListItem"
const SearchResult = ({ foods }) => {
    console.log(foods);

    return <ul className="list-container">
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
}

export default SearchResult