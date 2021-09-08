const elWrapper = document.querySelector('.wrapper');
const elContainer = document.querySelector('.container');
const elBlock = document.querySelector('.block');

// elWrapper.addEventListener("click", event => {
//     //event.stopPropagation();
//     console.log('click Wrapper')
// });
//
// elContainer.addEventListener('click', event => {
//     //event.stopPropagation();
//     console.log('click Container')
// });

elBlock.addEventListener('click', event => {
    //event.stopPropagation();
    console.log('click Block')
});


