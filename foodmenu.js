const buttons = document.querySelectorAll('.menu-item button');
buttons.forEach(button =>{
    button.addEventListener('click',addToCart);
});
function addToCart(event){
    const item = event.target.parentNode;
    const itemName = item.querySelector
}
function showPopup(){
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
}