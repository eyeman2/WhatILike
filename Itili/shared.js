var modal = document.querySelector('.modal');
var add = document.querySelector('.fa-plus');
// var backdrop = document.querySelector('.backdrop');
var closeButton = document.querySelector('.fa-times');
// var input = document.querySelector('#request').onkey;
var addButton = document.querySelector('.add');

// if (input != '') {
//     // console.log('words' + input)

//     console.log('words' + input)
// }

add.addEventListener('click', function() {
    modal.classList.add('open'); 
});

closeButton.addEventListener('click', function() {
    modal.classList.remove('open');
})

if (category && rating && brand && ) {
    
}
