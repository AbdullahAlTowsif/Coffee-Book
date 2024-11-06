import toast from "react-hot-toast";

// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites = JSON.parse(all);
        return favorites;
    }
    else{
        return [];
    }
}

// add a coffee to the local storage
const addFavorite = (coffee) => {
    // get all previously saved coffee data
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id == coffee.id)
    if (isExist) return toast.error('Coffee already exists!');
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added!');
}


// remove a coffee from local storage

export { addFavorite, getAllFavorites }