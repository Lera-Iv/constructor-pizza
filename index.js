import chooseIngredient from "./module/chooseIngredient.js";
import addIngredientToOrderAndTotalAmount from "./module/addIngredientToOrderAndTotalAmount.js";
import changeImage from "./module/changeImage.js";
import { step } from "./module/addIngredientToOrderAndTotalAmount.js"; 
import { viewOrder } from "./module/addIngredientToOrderAndTotalAmount.js";
const modalWindow = document.querySelector('.modal-window');
const submitBtn = document.querySelector('.modal-window__submit-btn')
const orderBtn = document.querySelector('.button__order')
const subject = document.querySelector('.modal-window__subject');
const ingredientsModalWindow = document.querySelector('.modal-window__ingredients')

let ingredients = document.getElementsByClassName('allForPizza')[0].children;

for (let elem of ingredients) {
    for (let li of elem.getElementsByTagName('li')) {
        li.addEventListener('click', chooseIngredient);
  }
}

orderBtn.addEventListener('click', () => {
    modalWindow.classList.remove('none');
    prepareWindowModalContent();
});

orderBtn.addEventListener ('click', () => {
    modalWindow.classList.remove('none');
    prepareWindowModalContent();
});

window.addEventListener ('click', event => {
    if(event.target === modalWindow) {
        modalWindow.classList.add('none');
    }
});

submitBtn.addEventListener ('click', () => {
    modalWindow.classList.add('none');
})

const prepareWindowModalContent = () => {
    subject.innerHTML ='';
    ingredientsModalWindow.innerHTML = '';
    if (step !== 4){
      subject.innerHTML = `Вы выбрали недостаточное количество ингридиентов`;
    }else{
      const totalText = `Вы заказали пиццу с ингридиентами ${viewOrder.innerText}. C Вас ${document.getElementById('summa').innerText}`;
      subject.innerHTML = totalText;
    }
    
}
export default ingredients;