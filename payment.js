const form = document.querySelector("form");

form.addEventListener("keyup",  ()=>{

const amountToBePaid = form.children[1].value;
// const response = await fetch("https://api.razorpay.com/v1/orders", {
//     method:"POST",
//     auth:{
//         username: "rzp_test_KMSATkL0yiCOMy",
//         password:"5jkLJ3oTM1crFcpOUK97ieNJ"
//     },
//     body:{
//             "amount": amountToBePaid,
//             "currency": "INR",
//             "receipt": "qwsaq1",
//             "partial_payment": true,
//             "first_payment_min_amount": 230
//     },

// });
// const data = await response.json();
var options = {
    "key": "rzp_test_KMSATkL0yiCOMy", // Enter the Key ID generated from the Dashboard
    "amount": amountToBePaid, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_N7ttwEhrNWhnm6", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Aadarsh Raj", //your customer's name
        "email": "aryaraj.dev.js@gmail.com", 
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}

});