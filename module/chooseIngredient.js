import addIngredientToOrderAndCalcPrice from "./addIngredientToOrderAndTotalAmount.js";

export default function chooseIngridient(){
    let parent = this.parentElement;
    let canCheck = parent.getAttribute('canCheck');
    let checkedElementsCounter = 0;
    let childParent = parent.getElementsByTagName('li');

    if (this.className === 'checked'){
        this.className = '';
        addIngredientToOrderAndCalcPrice();
    }else{
        for(let elem of childParent){
            if(elem.className === 'checked'){
                checkedElementsCounter++;
            }
        }
        if(checkedElementsCounter < canCheck)
        {
        this.className = 'checked';
        addIngredientToOrderAndCalcPrice();
        }
    }
}