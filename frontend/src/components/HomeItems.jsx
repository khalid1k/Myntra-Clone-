import { useDispatch } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { useSelector } from "react-redux";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;
  
  const handleItem = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove=()=>{
    dispatch(bagAction.removeFromBag(item.id));
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button type="button" class="btn btn-danger btn-add-bag" onClick={handleRemove}>
          <GrSubtractCircle />
          Remove
        </button>
        ) : (
           <button
            type="button"
            class="btn btn-success btn-add-bag"
            onClick={handleItem}
          >
            <IoAddCircleOutline /> Add to Cart
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItems;
