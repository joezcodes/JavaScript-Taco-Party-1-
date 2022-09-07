// id colors to use
let color1 = 'green';
let color2 = 'red';

// select button
let btnClick = document.querySelector('button');

//get checkbox element
let box1 = document.getElementById('check1');
let box2 = document.getElementById('check2');
let box3 = document.getElementById('check3');
let box4 = document.getElementById('check4');

//div box select
let cbox1 = document.getElementById('cbox1');
let cbox2 = document.getElementById('cbox2');
let cbox3 = document.getElementById('cbox3');
let cbox4 = document.getElementById('cbox4');




// function to run when button is clicked
function clickMe() {
    if (box1.checked) {
        //console.log('box1 checked');
	cbox1.style.background = color1;
    }
    else
    cbox1.style.background = color2;
    //console.log('box1 unchecked');
}

function clickMe2() {
    if (box2.checked) {
        //console.log('box2 checked');
	cbox2.style.background = color1;
    }
    else
    cbox2.style.background = color2;
    //console.log('box2 unchecked');
}

function clickMe3() {
    if (box3.checked) {
        //console.log('box3 checked');
	cbox3.style.background = color1;
    }
    else
    cbox3.style.background = color2;
    //console.log('box3 unchecked');
}

function clickMe4() {
    if (box4.checked) {
        //console.log('box3 checked');
	cbox4.style.background = color1;
    }
    else
    cbox4.style.background = color2;
    //console.log('box3 unchecked');
}


// run function on click
btnClick.addEventListener('click', () => {
    clickMe();
    clickMe2();
    clickMe3();
    clickMe4();

})