import {UI_ELEMETS} from "../js/view.js";

UI_ELEMETS.FORM_HIGH.addEventListener('submit', function(){
    event.preventDefault();
    let massage = UI_ELEMETS.INPUT_HIGH.value;
    UI_ELEMETS.INPUT_HIGH.value ='';
    createTask(massage);
})

function createTask(text){
    let div = document.createElement('div');
    div.className = "hight_block";
    div.innerHTML = `<div class="check"><img class="check_img" width="21px" height="21px" src="icon/Ellipse 3.svg" alt=""></div><p> ${text} </p><div class="close"><img class="close_img" src="icon/close-icon.svg" alt=""></div></div>`;
    UI_ELEMETS.MAIN_BLOCK_HIGH.after(div)
}

UI_ELEMETS.CLOSE_CHECK_HIGH.addEventListener('click',deleteTask) 

function deleteTask(event){
    if(event.target.className === 'close_img'){
        event.target.parentNode.parentNode.remove()
    };
}

UI_ELEMETS.CLOSE_CHECK_HIGH.addEventListener('click',completedTask) 

function completedTask(event){
    console.log(event.target.className )
    if(event.target.className === 'check_img'){
        event.target.parentNode.parentNode.classList.toggle("checked")
    }
}


UI_ELEMETS.FORM_LOW.addEventListener('submit', function(){
    event.preventDefault();
    let massage_low = UI_ELEMETS.INPUT_LOW.value;
    UI_ELEMETS.INPUT_LOW.value ='';
    createTask2(massage_low);
})



function createTask2(text){
    let div_low = document.createElement('div');
    div_low.className = "low_block";
    div_low.innerHTML = `<div class="check"><img class="check_img" width="21px" height="21px" src="icon/Ellipse 3.svg" alt=""></div><p> ${text} </p><div class="close"><img class="close_img" src="icon/close-icon.svg" alt=""></div></div>`;
    UI_ELEMETS.MAIN_BLOCK_LOW.after(div_low)
}

UI_ELEMETS.CLOSE_CHECK_LOW.addEventListener('click',deleteTask2) 

function deleteTask2(event){
    if(event.target.className === 'close_img'){
        event.target.parentNode.parentNode.remove()
    };
}

UI_ELEMETS.CLOSE_CHECK_LOW.addEventListener('click',completedTask2) 

function completedTask2(event){
    console.log(event.target.className )
    if(event.target.className === 'check_img'){
        event.target.parentNode.parentNode.classList.toggle("checked")
    }
}
