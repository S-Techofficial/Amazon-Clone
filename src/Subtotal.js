import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    function getPrice(basket){
        const totalPrice = basket.reduce((acc, item) => acc + item.price, 0)
        return totalPrice;
    }
    

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>  
                        <p> 
                            {/* Part of the HomeWork */}
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getPrice(basket)} //HomeWork*****
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
