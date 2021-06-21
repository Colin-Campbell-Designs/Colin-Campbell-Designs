//INTERSECTION OBSERVER//HEADINGS//
document.addEventListener('DOMContentLoaded', () => {
    let options = {
        root: null,
        threshold: 0.05
    };
    let obeserver = new IntersectionObserver(beTouching, options);
    document.querySelectorAll('h1.section__heading').forEach(heading => {
        obeserver.observe(heading);
       
    });

    let obeserver2 = new IntersectionObserver(gridAnimation, options);
    const gridSection = document.querySelector('div.section__grid');
    obeserver2.observe(gridSection);

    let obeserver3 = new IntersectionObserver(up, options);
   document.querySelectorAll('.left').forEach(leftImg => {
        obeserver3.observe(leftImg);
    })

    let obeserver4 = new IntersectionObserver(left, options);
    document.querySelectorAll('.right').forEach(rightImg => {
        obeserver4.observe(rightImg);
    })

    function beTouching(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }else{
                entry.target.classList.remove('active')
            }
        })
    }
    
    function gridAnimation(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('activeGrid');
            }else{
                entry.target.classList.remove('activeGrid')
            }
        })
    }
    
    function up(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('activeLeft')
            }else {
                entry.target.classList.remove('activeLeft')
            }
        })
    }
    
    function left(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('activeRight')
                console.log('yes')
            }else {
                entry.target.classList.remove('activeRight')
            }
        })
    }
    
});


//BURGER BUTTON//
const burger = document.querySelector('.fancy-burger');
    
burger.addEventListener('click', () => {
    burger.querySelectorAll('span').forEach((span) => {
        span.classList.toggle('open')
    })
    nav.classList.toggle('down')
})

//NAVIGATION BUTTONS//
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
   item.addEventListener('click', () => {
    burger.querySelectorAll('span').forEach((span) => {
        span.classList.toggle('open')
    })
    nav.classList.toggle('down')
    
   })
});

//FORM//
const form = document.getElementById('form')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const textArea = document.getElementById('message')

const inputArr = [name, email, phone, textArea]

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.name} is required`)
        }else {
            showSuccess(input)
        }
    })
}

function validateName(input, message) {
    let re = /^[a-zA-Z]$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else {
        showError(input, 'Name is not valid')
    }
}

function validateEmail(input, message) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else {
        showError(input, 'Email is not valid')
    }
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.name} has to be at least ${min} characters long`)
    }else if(input.value.length > max){
        showError(input, `${input.name} has a maximum of ${max} characters`)
    }else {
        showSuccess(input)
    }
}

function validatePhone(input, message){
    let re = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
    if(re.test(input.value)){
        showSuccess(input)
    }else {
        showError(input, 'Phone number is not valid')
    }
}



form.addEventListener('submit', e => {
    e.preventDefault()
    
   checkRequired([name, email, phone, textArea]);
   validateName(name);
   checkLength(name, 3, 30);
   checkLength(textArea, 5, 200);
   validateEmail(email);
   validatePhone(phone);
})

document.addEventListener('DOMContentLoaded', () => {
    //MODAL//
const modalContainer = document.querySelector('.modal-container');
const modalBtn = document.getElementById('modalBtn');
const modalClose = document.getElementById('close');

modalBtn.addEventListener('click', () => {
    modalContainer.classList.add('modalActive');
})

modalClose.addEventListener('click', () => {
   if( modalContainer.classList.contains('modalActive')){
       modalContainer.classList.remove('modalActive');
        }
    })
});

//UPWORK LOGO//







