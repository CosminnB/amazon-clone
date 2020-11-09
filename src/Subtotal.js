import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { calculateSubtotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="subtotal__items">
              <p>Subtotal ({basket.length} items): </p>
              <strong className="subtotal__price"> {value}</strong>
            </div>

            <div className="subtotal__checkbox">
              <input type="checkbox" name="checkbox" />
              <label for="checkbox">This order contains a gift</label>
            </div>
            <button
              onClick={(e) => history.push("/payment")}
              className="subtotal__button"
            >
              Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={calculateSubtotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
