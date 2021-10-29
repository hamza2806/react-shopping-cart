import Button from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./Item.styles";

type props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
          <h3>{item.title}</h3>  
          <p>{item.description}</p>
          <h3>€{item.price}</h3>
        </div>
        <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </Wrapper>
);

export default Item;