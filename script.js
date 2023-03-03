let scrollContainer = document.querySelector (".gallery") /*Переменная с выбором класса*/
let backBtn = document.getElementById('backbtn') /*Переменная с выбором стрелки назад*/
let nextBtn = document.getElementById('nextbtn')

/*Событие прокрутка мышкой галлереи*/

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.scrollBehavior = "auto"

});

nextbtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft +=900; /*Значение +900 вперед */
    scrollContainer.scrollBehavior = "smooth"
});

backbtn.addEventListener("click", ()=> {
  scrollContainer.scrollBehavior = "smooth"
  scrollContainer.scrollLeft -=900; /*Значение -900 назад */
});