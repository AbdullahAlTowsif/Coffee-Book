import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading title={'Browse Coffees by Categories'} subtitle={'Choose your desired coffees category to browse through specific coffees that fit in your taste.'}></Heading>
            {/* Categories tab section */}
            {/* Dynamic Nested Components */}
        </div>
    );
};

export default Home;