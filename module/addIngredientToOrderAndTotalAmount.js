import changeImage from "./changeImage.js";
import ingredients from "../index.js";
export let step;

export let viewOrder = document.getElementById('view__order');


export default function addIngredientToOrderAndTotalAmount(){
    let viewOrderIngredient = [];
    let totalAmount = 0;
    step = 0;

    for (let elem of ingredients) {
        let lable = elem.getElementsByClassName('ingredients-pizza__label')[0].innerText;
        let elements = [];

        for (let li of elem.getElementsByTagName('li')) {
            if(li.className === 'checked'){
                let spanElement = document.createElement("span");
                let price = li.getAttribute('price');
                spanElement.innerText = li.innerText;
                spanElement.setAttribute('price',price);
                elements.push(spanElement);
                totalAmount += Number(price);
            }        
        }
        if(elements.length > 0) {
            step++;

            let liElement = document.createElement("li");
            let spanLable = document.createElement("span");
            spanLable.innerText = lable + " : ";
            liElement.appendChild (spanLable);

            for (let spanElement of elements) {
                liElement.appendChild(document.createElement("br"));
                liElement.appendChild(spanElement);               
            }
            viewOrderIngredient.push(liElement);
        }
    }
    viewOrder.innerHTML = "";
    
    for (let ingredient of viewOrderIngredient){
        viewOrder.appendChild(ingredient);
    }
    
    document.getElementById('summa').innerText = totalAmount + 'BYN';
    changeImage(step);
}