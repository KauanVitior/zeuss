const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'pistao forjado',
        price: 2950,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: ' kit de intercoole',
        price: 899,
    },
    {
        id: 2,
        image: 'image/ee-3.jpg',
        title: 'turbina k50',
        price: 5985,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'biela forjado',
        price: 4895,
    },
    {
        id: 4,
        image: 'image/kk-4.png',
        title: 'fueltech FT600',
        price: 2950,
    },
    {
        id: 5,
        image: 'image/jj-5.png',
        title: 'Cabeçote Cummins Isc/ Isl c/ Válvulas Acima 320cv ',
        price: 8960,
    },
    {
        id: 6,
        image: 'image/ii-6.png',
        title: 'Comando Válvula 352 3 Canaletas Turbo Misto 352/ 36',
        price: 1870,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>COMPRAR</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
function comprar() {
   const width= 800;
   const height= 600;
   const left= (screen.width/ 2) - (width/ 2);
   const top= ( screen.height/ 2) - (height/ 2);
   window.open('pagamento.html', 'pagamento', 'width=${width},height=${height},top=${top}, left=${left}');}


