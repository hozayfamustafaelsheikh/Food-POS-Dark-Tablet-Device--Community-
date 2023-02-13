// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("payment-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cart-back-button")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    // $(".modal-content").slideDown();
    // $(".modal-content").css('display', 'block');
    $('.cart').animate({ "right": '24rem' });
    $('.payment-btn').css('display', 'none');
    $('.cart-order-number').css('display', 'none');
    $('.cart-buttons').css('display', 'none');
    $('.cart-table-headers').css('display', 'none');
    $('.cart-order-confirmation').css('display', 'block');
    $('.cart-table-body').css('height', '570px');
    

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    // $(".modal-content").css('display', 'none');
    $('.cart').animate({ "right": '0' });
    $('.payment-btn').css('display', 'block');
    $('.cart-order-number').css('display', 'block');
    $('.cart-buttons').css('display', 'block');
    $('.cart-table-headers').css('display', 'grid');
    $('.cart-order-confirmation').css('display', 'none');
    $('.cart-table-body').css('height', '470px');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('.cart').animate({ "right": '0' });
        $('.payment-btn').css('display', 'block');
        $('.cart-order-number').css('display', 'block');
        $('.cart-buttons').css('display', 'block');
        $('.cart-table-headers').css('display', 'grid');
        $('.cart-order-confirmation').css('display', 'none');
        $('.cart-table-body').css('height', '470px');
        // $(".modal-content").css('display', 'none');
    }
} 