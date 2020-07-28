const navToggle = document.querySelector('.nav__toggle');
const navLink = document.querySelectorAll('.nav__link');

//This is for the class---------------------------------------------------
const portfolioItems = document.querySelectorAll('.port-img')
portfolioItems.forEach(portfolioItem =>{
    portfolioItem.addEventListener('mouseover', ()=>{
        portfolioItem.childNodes[3].classList.add('name_light');
        
    })
    portfolioItem.addEventListener('mouseout', ()=>{
        portfolioItem.childNodes[3].classList.remove('name_light');

    })
})

//----------------------------------------------------------------------------
navToggle.addEventListener('click', () => {

    document.body.classList.toggle('nav__open');

});

navLink.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav__open');
    })
})
