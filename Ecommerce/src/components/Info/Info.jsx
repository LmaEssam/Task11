import './Info.css'
import cart from '../../assets/images/icon-cart.svg'
import { useState } from 'react'
function Info() {
    const [counter, setCounter] = useState(0);

    function Increment() {
        setCounter(counter + 1);
    }

    function Decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div id='info'>
            <label id='companyname'>Sneaker Company</label>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div id='prices'>
                <label id='price'>$125.00 <span>50%</span></label>
                <label id='discount'>$250.00</label>
            </div>
            
            <div id='buttons'>
                <div id='counterbtn'>
                <button onClick={Increment}  className='counter'>+</button>
                <label id='number'>{counter}</label>
                <button onClick={Decrement} className='counter'>-</button>
                
                </div>
                <button id='cart' >
                    <img src={cart} id='car' />
                    Add to cart
                </button>
               
            </div>
        </div>
    );
}

export default Info;