
const counterAction = document.querySelectorAll("[data-counter]")
const item = document.querySelector('[data-count]')
const addItem = document.querySelector('.addCart')
const activeProduct = document.querySelector('.activeImg')
const thumbnail = document.querySelectorAll('.thumbnail')
let cartCounter = document.querySelector('[cart-item]')
let itemCount = 0;

    counterAction.forEach( count =>{
        count.addEventListener('click', () =>{
           if(count.getAttributeNode('data-counter').value === 'increment'){
            //increment of itemCount
            itemCount += 1
            item.textContent = itemCount
           }else{
            //decrement of itemCount 
            itemCount -= 1
            item.textContent = itemCount
            //create condition the the variable itemCount won't be a negative number
            if(itemCount <= 0){
                itemCount = 0
                item.textContent = 0
            }
           }
        })
    })

//add event listener to variable item that when click will be doing the ff:
// reset item to 0
//reset itemCount to 0
//send the value of itemCount to the cartCounter      
addItem.addEventListener("click", () =>{
    cartCounter.textContent = parseInt(cartCounter.textContent) + itemCount
    item.textContent = 0
    itemCount = 0
})


thumbnail.forEach( image => {
    $(image).click((e) => {
        $(e.target).parent().addClass('selected').siblings().removeClass('selected')
        let newAttr = $(e.target).attr('src');
         $(activeProduct).attr('src',newAttr)
    })
})



let arrayAttr = []
thumbnail.forEach( image =>{
    arrayAttr.push($(image).children().attr('src'))
})
console.log(arrayAttr);

const action = document.querySelectorAll('[data-action]');

let currentImg = 0
action.forEach(action =>{
    action.addEventListener('click', ()=>{
        if(action.getAttributeNode('data-action').value === 'next'){
            //increment of itemCount
            currentImg += 1
            $(activeProduct).attr('src',arrayAttr[currentImg])
            
            if(currentImg >= 4){
                currentImg = 0
                $(activeProduct).attr('src',arrayAttr[currentImg])
            }
           }else{
            //decrement of itemCount 
            currentImg -= 1
            $(activeProduct).attr('src',arrayAttr[currentImg])
            
            if(currentImg <= 0){
                currentImg = 4
                $(activeProduct).attr('src',arrayAttr[currentImg])
                // console.log( arrayAttr[currentImg]);
            }
           
        }
        
    })
    
})

$('.hamburger').click(function(){
    $('.overlay').css("display","block")
    $('ul').animate({
        width: "toggle"
    }).css('display','block')
})
$('.close').click(function(){
    $('ul').animate({
        width: "toggle"
    }, "fast").css('display','flex')
    $('.overlay').css("display","none")
})