const pizzaImage = [".\\img\\0.png" , ".\\img\\1.png" , ".\\img\\2.png" , ".\\img\\3.png", ".\\img\\4.png" ];
export default function changeImage(step){
    let imageContainer = document.getElementsByClassName('current-pizza')[0];
    imageContainer.src = pizzaImage[step];
}