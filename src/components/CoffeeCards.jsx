import { useParams } from "react-router-dom";

const CoffeeCards = () => {
    const {category} = useParams();
    // const {creams} = useParams();
    console.log(category);
    return (
        <div>
            {category}
        </div>
    );
};

export default CoffeeCards;