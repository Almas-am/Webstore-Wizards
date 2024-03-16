export default async function displayRazorpay() {
    // simple post the node.js server

    const data = await fetch("http://localhost:3000/razorpay", {
        method: 'POST'
    }).then((t) => t.json())

    console.log(data)

    // options

    const options = {
        key: "rzp_test_qCJ5iLJR3gBP3X",
        currency: data.currency,
        amount: data.amount,
        description: 'Wallet Transaction',
        image: 'http://localhost:3000/logo.jpg',
        order_id: data.id,
        handler: function(response) {
            alert("Payment ID: " + response.razorpay_payment_id)
            alert("Order ID: " + response.razorpay_order_id)
        },

        prefill: {
            //fill out the details
            name: 'Amrisha',
            email: 'amrisha.24.2k26@gmail.com',
            contact: '9329996069'
        }
    };

    //display the window on button click

    const paymentObject = new window.Razorpay(options)

    paymentObject.open()
}