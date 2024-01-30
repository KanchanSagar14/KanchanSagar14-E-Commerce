


updateCartTotal();

var removeCartItem = document.getElementsByClassName('remove');
for(var i=0; i<removeCartItem.length; i++){
    var button = removeCartItem[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
        updateCartTotal();
    })


}



function updateCartTotal(){
    var cartRows = document.getElementsByClassName('cartInfo');
    var quantityElement = document.getElementsByClassName('quantity-input');
    var multipliedPrice = document.getElementsByClassName('price');
    var total = 0;

    console.log(multipliedPrice);
    
    

    for(var i=0; i<cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.querySelector('.unitPrice');
        console.log(priceElement);
        var price= parseFloat(priceElement.innerText.replace('Price: $',''));
        console.log(price);
        var quant = quantityElement[i];
        quant.addEventListener('change', quantityChanged)
        var quantity = quant.value;
        console.log("quantity" + quantity);
        // var multPrice = parseFloat(multipliedPrice[i].innerText.replace('$','')); 
         console.log("heloooooo" + (price*quantity));
      
        multipliedPrice[i].innerText='$'+ (price*quantity) + '.00';
        
     
      

        total= total + (price*quantity);
        console.log(total);
        
    }



    function quantityChanged(event){
        var input = event.target;
        if(isNaN(input.value)|| input.value<=0){
            input.value=1;
        }
       

        updateCartTotal();
    }

    document.querySelector('.total').innerText= '$' + total + '.00';
 }
 