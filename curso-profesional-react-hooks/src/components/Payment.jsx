import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';

//styles
import '../styles/components/Payment.css';

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart } = state
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element" key={item.title}>
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    {/* <PayPalButton
                        paypalOptions={}
                        buttonStyles={}
                        amount={}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => console.log(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Payment;