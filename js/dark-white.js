
function darkMode(){
    let linkText = document.querySelectorAll('a');            
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector("button").innerText = 'White';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h1').style.borderBottom = '5px solid white';
    linkText[0].style.color = 'orange';
    linkText[1].style.color = 'orange';
    linkText[2].style.color = 'orange';
    document.querySelector('ol').style.color = 'white';
    document.querySelector('h2').style.color = 'white';
    document.querySelector('p').style.color = 'white';
    document.querySelector('div').style.borderLeft = '5px solid white';  
}

function whiteMode(){
    let linkText = document.querySelectorAll('a');            
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector("button").innerText = 'Black';
    document.querySelector('h1').style.color = 'black';
    document.querySelector('h1').style.borderBottom = '5px solid black';
    linkText[0].style.color = 'hotpink';
    linkText[1].style.color = 'hotpink';
    linkText[2].style.color = 'hotpink';
    document.querySelector('ol').style.color = 'black';
    document.querySelector('h2').style.color = 'black';
    document.querySelector('p').style.color = 'black';
    document.querySelector('div').style.borderLeft = '5px solid black';  
}

//버튼 하나로 구현하는 부분