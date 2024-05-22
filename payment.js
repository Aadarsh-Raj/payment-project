const form = document.querySelector("form"); // Selecting the form element

// Event listener for keyup event inside the form
form.addEventListener("keyup", ()=>{
  // Retrieving the entered value for amount to be paid
  const amountToBePaid = form.children[1].value;
  // Initializing Razorpay with the entered amount
initializeRazorpay(amountToBePaid);
});

// Function to initialize Razorpay with payment options
function initializeRazorpay(amountToBePaid) {
  // Payment options for Razorpay
  
  var options = {
    key: 'rzp_test_EWnKpBs49MC8ce',
    amount: amountToBePaid * 100,
    currency: 'INR',
    name: 'Arya Funds',
    description: 'Payment for your product or service',
    image: 'https://scalebranding.com/wp-content/uploads/2022/02/Thunder-Lion-Energy-Logo.jpg',
    handler: function (response) {
      // alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    },
    // user detail can be manipulated using logged in user's detail
    prefill: {
      name: 'Aadarsh Raj',
      email: 'aryaraj.dev.js.com',
      contact: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#191734',
    },
  };
   // Creating a new Razorpay instance with the provided options
  var rzp = new Razorpay(options);
  document.getElementById('rzp-button1').onclick = function (e) {
    // Event listener for button click to initiate payment
    if(amountToBePaid < 100){
      alert("Minimum value should be 100");// Alert if amount is less than 100
      return;
    }
    rzp.open(); // Opening Razorpay payment popup
    e.preventDefault();// Preventing default button click behavior
  };
}
