const body = document.getElementsByTagName("body")[0];

const green = document.getElementById("green-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'green';
    body.style.color = 'white'
});

const yellow = document.getElementById("yellow-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'yellow';
    body.style.color = 'black'
});

const purple = document.getElementById("purple-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'purple';
    body.style.color = 'white'
})

const red = document.getElementById("red-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'red'
})

const black = document.getElementById("black-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
})

const pink = document.getElementById("pink-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'pink'
    body.style.color = 'black'
})

const orange= document.getElementById("orange-btn").addEventListener('click', (event) => {
    body.style.backgroundColor = 'orange'
    
})

const reset = document.getElementById('default').addEventListener('click', (event) => {
    body.style.backgroundColor = 'white'
})



// METHOD 2 
// const body = document.body;
// const buttons = document.querySelectorAll('.colour-btn');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const color = button.getAttribute('data-color');
//         body.style.backgroundColor = color;
        
//     });

// });

