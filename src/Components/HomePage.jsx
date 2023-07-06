import image from "../Images/img1.jpg";
import image1 from "../Images/img2.jpg";
import image2 from "../Images/img5.jpg";
import image3 from "../Images/img4.jpg";
import men1 from "../Images/men5.jpg";
import men2 from "../Images/men7.jpg";
import men3 from "../Images/men3.jpg";
import men4 from "../Images/men4.jpg";
import hover1 from "../Images/hover1.jpg";
import hover2 from "../Images/hover2.jpg";
import hover3 from "../Images/hover3.jpg";
import hover4 from "../Images/hover4.jpg";
import hover5 from "../Images/menHover1.jpg";
import hover6 from "../Images/menHover2.jpg";
import hover7 from "../Images/menHover3.jpg";
import hover8 from "../Images/menHover4.jpg";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";

function HomePage() {
  const [checkOut, setCheckOut] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedShipping, setSelectedShipping] = useState("select");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);


  // useEffect(()=>{
  //   setCheckoutItems(cartItem.map(item => item.title));
  // },[cartItem]);
  const handleClickCart = () => {
    setCheckOut(!checkOut);
  };
  const handleCheckot = () => {
    if (cartItem.length === 0) {
      alert("Your cart is empty!Add products!!");
      setCheckOut(!checkOut);
    } else {
      setCheckOut(!checkOut);
      setCartItem([]);
      alert("Order placed successfully!!");
      setCartItemCount(0);
    }
  };
  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  const handleAddItem = (item) => {
    const existingItem = cartItem?.find(
      (cartItem) => cartItem?.id === item?.id
    );
    if (existingItem) {
      const updatedCartItems = cartItem.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItem(updatedCartItems);
    } else {
      setCartItem((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
    setCheckOut(true);
    setCartItemCount((prevCount) => prevCount + 1);
  };

  const handleRemoveFromCart = (index) => {
    const updatedItems = [...cartItem];
    updatedItems.splice(index, 1);
    setCartItem(updatedItems);
    setCartItemCount(cartItem.length - 1);
    // setCartItemCount(0);
  };

  const handleUpdatedQuantity = (index, quantity) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems[index].quantity = quantity;
    setCartItem(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItem?.forEach((item) => {
      total += item?.price * item?.quantity;
    });
    console.log(total);
    return total;
  };
  const handleShippingFilter = (event) => {
    setSelectedShipping(event.target.value);
  };

  const filteredItems = [
    {
      id: 1,
      hoverImage: hover4,
      image: image,
      title: "Crooped Stay Groovy off white",
      size: "XL",
      price: 10.9,
      installment: "or 9 x$1.21",
      shipping: "free-shipping",
    },
    {
      id: 2,
      hoverImage: hover2,
      image: image1,
      title: "Basic Cactus White T-Shirt",
      size: "XS",
      price: 13.25,
      installment: "or 3 x$4.42",
      shipping: "charges",
    },
    {
      id: 3,
      hoverImage: hover3,
      image: image2,
      title: "Skater Black Sweatshirt",
      size: "XXL",
      price: 25.9,
      installment: "or 12 x$2.16",
      shipping: "free-shipping",
    },
    {
      id: 4,
      hoverImage: hover1,
      image: image3,
      title: "Black Tule Oversized",
      size: "ML",
      price: 29.45,
      installment: "or 5 x$5.89",
      shipping: "free-shipping",
    },
    {
      id: 5,
      hoverImage: hover6,
      image: men1,
      title: "Crooped white T-Shirt",
      size: "L",
      price: 26.9,
      installment: "or 9 x$1.25",
      shipping: "free-shipping",
    },
    {
      id: 6,
      hoverImage: hover8,
      image: men2,
      title: "Black and Maroon SweatT-Shirt",
      size: "XL",
      price: 15.45,
      installment: "or 12 x$1.29",
      shipping: "free-shipping",
    },
    {
      id: 7,
      hoverImage: hover5,
      image: men3,
      title: "Classy Overcoat",
      size: "S",
      price: 30.9,
      installment: "or 12 x$2.21",
      shipping: "charges",
    },
    {
      id: 8,
      hoverImage: hover7,
      image: men4,
      title: "Neat Overcoat for Meetings",
      size: "M",
      price: 45.9,
      installment: "or 4 x$1.61",
      shipping: "charges",
    },
  ].filter((item) => {
    if (selectedSize === "all" && selectedShipping === "select") {
      return true;
    } else if (selectedSize === "all" && selectedShipping !== "select") {
      return item.shipping === selectedShipping;
    } else if (selectedSize !== "all" && selectedShipping === "select") {
      return item.size.includes(selectedSize);
    } else {
      const sizes = selectedSize.split(",").map((size) => size.trim());
      return (
        sizes.includes(item.size.trim()) &&
        (item.shipping === selectedShipping || item.shipping === "free-shipping")
      );
    }
  });
  return (
    <div className="hide-menu">
      <div className="cart-icon">
        <button onClick={handleClickCart}>
          <BsCart3 />
          {cartItemCount > 0 && (
            <span className="cart-item-count">{cartItemCount}</span>
          )}
        </button>
      </div>
      <div className="wholediv">
        <div className="size-container">
          <span>Sizes: </span>
          <br />
          <button onClick={() => handleSizeFilter("XS")}>XS</button>
          <button onClick={() => handleSizeFilter("S")}>S</button>
          <button onClick={() => handleSizeFilter("M")}>M</button>
          <button onClick={() => handleSizeFilter("ML")}>ML</button>
          <button onClick={() => handleSizeFilter("L")}>L</button>
          <button onClick={() => handleSizeFilter("XL")}>XL</button>
          <button onClick={() => handleSizeFilter("XXL")}>XXL</button>
          <button onClick={() => handleSizeFilter("all")}>ALL</button>
          <div className="shipping">
            <span>Shipping: </span>
            <select value={selectedShipping} onChange={handleShippingFilter}>
              <option value="select">Select</option>
              <option value="free-shipping">Free-shipping</option>
              <option value="charges">Charges</option>
            </select>
          </div>
        </div>

        <div className="cart-container">
          <h3>{filteredItems.length} product(s) found!</h3>
          <div className="flex-container">
            {filteredItems.map((item, index) => (
              <div className="cards" key={index}>
                <div className="image">
                  <p style={{ display: "none" }}>{item.id}</p>
                  <h6 className="shiping">{item.shipping}</h6>
                  <img src={item.image} alt="image" className="first-image" />
                  <img
                    src={item.hoverImage}
                    alt="hover"
                    className="hover-image"
                  />
                </div>
                <div className="image-content">
                  <h4>{item.title}</h4>
                  <p></p>
                  {/* <h4>{item.name}</h4> */}
                  <p>${item.price}</p>
                  <p>${item.installment}</p>
                  <p className="size">{item.size}</p>
                  <button
                    className="add_cart"
                    onClick={() => handleAddItem(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`checkout-page ${checkOut ? "hide" : "show"}`}>
          {/* <div className="hide-menu" style={{display:"block"}}></div> */}
          <h3>Your cart: </h3>
          <div className="checkout-items">
            {cartItem.map((item, index) => (
              <div key={index} className="cart-items">
                <div className="image-cart">
                  <img src={item.image} alt="image" />
                  {/* <img src={item.hoverImage} alt="hover" /> */}
                </div>
                <div className="check-content">
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="remove-cart"
                  >
                    Remove
                  </button>
                  <h5>{item.title}</h5>
                  <div className="qty">
                    <span>Qty: </span>
                    <button
                      onClick={() =>
                        handleUpdatedQuantity(index, item.quantity - 1)
                      }
                      className="qty-minus"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdatedQuantity(index, item.quantity + 1)
                      }
                      className="qty-add"
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <p>Price: ${item.price}</p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-footer" style={{ height: `${checkoutItems.length * 30}px` }}>
            <h2>Your total is: ${calculateTotal()}</h2>
            <button className="checkout-button" onClick={handleCheckot}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
