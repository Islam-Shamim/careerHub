import PropTypes from "prop-types"

const Category = ({category}) => {
    // console.log(category)
    const {logo,category_name,availability} = category;
    return (
        <div className='border-2 rounded my-4 py-2 pl-6'>
            <img src={logo} alt="" className="w-[60px] h-[60] my-2"/>
            <h3 className="my-1 text-xl font-medium">{category_name}</h3>
            <p className="my-1">{availability}</p>
        </div>
    );
};

Category.propTypes ={
    category:PropTypes.object
}
export default Category;