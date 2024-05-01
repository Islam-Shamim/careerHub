import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    // console.log(categories)
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl  my-2">Job Category List : {categories.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus nobis incidunt ipsa doloribus corporis quaerat tempora .</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;