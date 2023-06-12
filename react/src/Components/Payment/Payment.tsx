import React from 'react';
import axios from 'axios';
import useRazorpay from 'react-razorpay';


function Payment() {
    const Razorpay = useRazorpay();

  const  loadScript = (src:any) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
    
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }



    const options = {
        "key": "rzp_test_3m3hH2PZBRuAYT", // Enter the Key ID generated from the Dashboard
        "amount": "50000",
        "name": "Soumya Corp.",
        "currency":"INR",
        "order_id":"order_M0vuzO3jN9b1F9",
        
        "description": "Test Transaction",
        // image: { logo },
        "handler": async function (response:any) {
            const data = {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            // const result = await axios.post("http://localhost:1072/payment", data);

            // alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new Razorpay(options);
    paymentObject.open();
}


  return (
    <div>
       <button className="App-link" onClick={displayRazorpay}>
                    Pay Payment
                </button>
    </div>
  )
}

export default Payment