let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addtocart(a){
    cart.push({...categories[a]});
    console.log({...categories[a]});
    localStorage.setItem('cart', JSON.stringify(cart))
    displaycart();
}

function addtocart(a){
    cart.push({...categories[a]});
    console.log({...categories[a]});
    localStorage.setItem('cart', JSON.stringify(cart))
    displaycart();
}


function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(){
    let j = 0, total=0;
    let cart = JSON.parse(localStorage.getItem('cart'))
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div> <button class='delt' id='0'>Remove</button>"
            );
        }).join('');
    }

            let button = document.getElementById("enter"); //getelement is to obtain infor from button
        let input = document.getElementById("userinput"); //getelement to obtain infor from input
        let ul = document.querySelector("ul");
        let li = document.getElementsByTagName("li");
        let delt = document.getElementsByClassName("delt");

        function Element(event) {
        //   if (button.onclick === "Delete") {
        event.target.parentNode.remove();
        // }
        }

        ul.addEventListener("click", delt);
}
displaycart()