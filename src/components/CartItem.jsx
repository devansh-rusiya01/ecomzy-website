import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart  = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }
  return (
    <div className="flex ">
      <div className="items-center justify-between max-w-[450px]">
        <div className="h-[180px] ">
          <img src={item.image}  className="h-full w-full "/>
        </div>


        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div
          onClick={removeFromCart}>
            <FcDeleteDatabase/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
