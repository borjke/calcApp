function add(a, b)
{
    let c = a + b;
    let d = Math.round(c * 100) / 100
    return d;
}

function subtract(a, b)
{
    let c = a - b;
    let d = Math.round(c * 100) / 100
    return d;
}

function multiply(a, b)
{
    let c = a * b;
    let d = Math.round(c * 100) / 100
    return d;
}

function divide(a, b)
{
    let msg = 'undef';
    if(b == 0)
        return msg;
    let c = a/b;
    let d = Math.round(c * 100) / 100
    return d;
}

function operate(cha, a, b)
{
    let error = 'not a valid operator';
    var c = Number(a);
    var d = Number(b);
    switch (cha) {
        case '+':
            return add(c, d);
            //break;

        case '-':
            return subtract(c, d);
            //break;
        
        case '*':
            return multiply(c, d);
            //break;

        case '/':
            return divide(c, d);
            //break;
        
        default:
            return error;
    }
}

const disp = document.querySelector('.top');
const bottom = document.querySelector('.result');
disp.textContent = '';

const bSeven = document.querySelector('.digit.seven');
const bEight = document.querySelector('.digit.eight');
const bNine = document.querySelector('.digit.nine');
const bFour = document.querySelector('.digit.four');
const bFive = document.querySelector('.digit.five');
const bSix = document.querySelector('.digit.six');
const bOne = document.querySelector('.digit.one');
const bTwo = document.querySelector('.digit.two');
const bThree = document.querySelector('.digit.three');
const bZero = document.querySelector('.digit.zero');

const bDel = document.querySelector('.del');
const bAC = document.querySelector('.ac');
const bEqu = document.querySelector('.equals');
const bAdd = document.querySelector('.add');
const bMinus = document.querySelector('.minus');
const bMult = document.querySelector('.mult');
const bDivi = document.querySelector('.divi');

var abc = 0;
let resu = '';

bOne.addEventListener('click', () => {
    var cOne = document.createTextNode("1");
    disp.appendChild(cOne);
});

bTwo.addEventListener('click', () => {
    var cTwo = document.createTextNode("2");
    disp.appendChild(cTwo);
});

bThree.addEventListener('click', () => {
    var cThree = document.createTextNode("3");
    disp.appendChild(cThree);
});

bFour.addEventListener('click', () => {
    var cFour = document.createTextNode("4");
    disp.appendChild(cFour);
});

bFive.addEventListener('click', () => {
    var cFive = document.createTextNode("5");
    disp.appendChild(cFive);
});

bSix.addEventListener('click', () => {
    var cSix = document.createTextNode("6");
    disp.appendChild(cSix);
});

bSeven.addEventListener('click', () => {
    var cSeven = document.createTextNode("7");
    disp.appendChild(cSeven);
});

bEight.addEventListener('click', () => {
    var cEight = document.createTextNode("8");
    disp.appendChild(cEight);
});

bNine.addEventListener('click', () => {
    var cNine = document.createTextNode("9");
    disp.appendChild(cNine);
});

bZero.addEventListener('click', () => {
    var cZero = document.createTextNode("0");
    disp.appendChild(cZero);
});

bAdd.addEventListener('click', () => {
    if(resu.length >= 1)
        disp.textContent = '';
    var cAdd = document.createTextNode("+");
    disp.appendChild(cAdd);
    //a++;
});

bMinus.addEventListener('click', () => {
    if(resu.length >= 1)
        disp.textContent = '';
    var cMinus = document.createTextNode("-");
    disp.appendChild(cMinus);
    //m++;
});

bMult.addEventListener('click', () => {
    if(resu.length >= 1)
        disp.textContent = '';
    var cMult = document.createTextNode("*");
    disp.appendChild(cMult);
    //mu++;
});

bDivi.addEventListener('click', () => {
    if(resu.length >= 1)
        disp.textContent = '';
    var cDivi = document.createTextNode("/");
    disp.appendChild(cDivi);
    //d++;
});

bAC.addEventListener('click', () => {
    disp.textContent = '';
    bottom.textContent = '';
    resu = '';
});

bDel.addEventListener('click', () => {
    if(disp.textContent != '')
        disp.textContent = disp.textContent.slice(0, -1);
});

bEqu.addEventListener('click', () => {
    if(disp.textContent.length >= 2)
    {
        if(resu.length < 1) {
            let tem = disp.textContent.toString();
            let c = 0;
            for(let i = 0; i < tem.length; i++)
            {
                if(tem.charAt(i) == '+' || tem.charAt(i) == '-' || tem.charAt(i) == '*' || tem.charAt(i) == '/')
                {
                    let a = tem.slice(0, i);
                    let cha = tem.charAt(i);
                    let b = tem .slice(i + 1, tem.length);
                    c = operate(cha, a, b);
                    bottom.textContent = `${c}`;
                    resu = c.toString();
                }
            }
        }

        else if(resu.length >= 1)
        {   
            console.log('work');
            let c = 0;
            let tem = disp.textContent.toString();
            if(tem.charAt(0) == '+' || tem.charAt(0) == '-' || tem.charAt(0) == '*' || tem.charAt(0) == '/')
            {
                let cha = tem.charAt(0);
                let b = tem.slice(1, tem.length);
                c = operate(cha, resu, b)
                bottom.textContent = `${c}`;
                resu = c.toString();
            }
        }
    }
});

//old code
/*let tem = disp.textContent.slice(0, 3);
let a = tem.slice(0, 1).toString();
let cha = tem.slice(1, 2).toString();
let b = tem.slice(2, 3).toString();
let p = add(a, b)
let e = operate(cha, a, b);
bottom.textContent = `${e}`; 
resu = e;*/   