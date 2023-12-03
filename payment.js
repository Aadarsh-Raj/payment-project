// const form = document.querySelector("form");

// var options = {
//     "key": "rzp_test_KMSATkL0yiCOMy", // Enter the Key ID generated from the Dashboard
//     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp", //your business name
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//     "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "handler": function (response){
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature)
//     },
//     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
//         "name": "Aadarsh Raj", //your customer's name
//         "email": "aadarshraj06062001@gmail.com",
//         "contact": "+916205076274"  //Provide the customer's phone number for better conversion rates
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
//         "color": "#3399cc"
//     }
// }

// document.getElementById('rzp-button1').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }

// form.addEventListener("keyup", async (e) => {
//   const amount = form.children[1].value;
//   var options = {
//     key: "rzp_test_KMSATkL0yiCOMy", // Enter the Key ID generated from the Dashboard
//     amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "Acme Corp", //your business name
//     description: "Test Transaction",
//     image: "https://example.com/your_logo",
//     order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
//     prefill: {
//       //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//       name: "Aadarsh Raj", //your customer's name
//       email: "aadarshraj06062001@gmail.com",
//       contact: "6205076274", //Provide the customer's phone number for better conversion rates
//     },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };
//   var rzp1 = new Razorpay(options);
//   document.getElementById("rzp-button1").onclick = function (e) {
//     rzp1.open();
//     e.preventDefault();
//   };
//   rzp1.on("payment.failed", function (response) {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
//     alert(response.error.step);
//     alert(response.error.reason);
//     alert(response.error.metadata.order_id);
//     alert(response.error.metadata.payment_id);
//   });
//   try {
//     const user = {
//       razorpay_payment_id: "pay_29QQoUBi66xm2f",
//       razorpay_order_id: "order_9A33XWu170gUtm",
//       razorpay_signature:
//         "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d",
//     };
//     generated_signature =user[razorpay_order_id]+ "|" + user[razorpay_payment_id],
//       secret;

//     var instance = new Razorpay({
//       key_id: "rzp_test_KMSATkL0yiCOMy",
//       key_secret: "5jkLJ3oTM1crFcpOUK97ieNJ",
//     });

//     var {
//       validatePaymentVerification,
//       validateWebhookSignature,
//     } = require("./dist/utils/razorpay-utils");
//     validatePaymentVerification(
//       { order_id: razorpayOrderId, payment_id: razorpayPaymentId },
//       signature,
//       secret
//     );
//   } catch (error) {
//     console.log("new error",error);
//   }
// });


// https://rzp.io/l/E0eq2UxU5P

// const apiCall = async ()=>{
//     try {
//         const response = await fetch("https://dashboard.razorpay.com/app/paymentpages/pl_N7ouTQRwddjiIh/edit");
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
