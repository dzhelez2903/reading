const elWrapper = document.querySelector('.wrapper');
const elContainer = document.querySelector('.container');
const elBlock = document.querySelector('.block');

// elWrapper.addEventListener("click", event => {
//     // event.stopPropagation();
//     console.log(event.target, 'click to wrapper')
// });
//
// elContainer.addEventListener('click', event => {
//     // event.stopPropagation();
//     console.log(event.target, 'click to container')
// });

elBlock.addEventListener('click', event => {
    // event.stopPropagation();
    console.log(event.target, 'click to block')
});


