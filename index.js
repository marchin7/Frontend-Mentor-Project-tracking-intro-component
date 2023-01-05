const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const hamburgerImg = document.getElementById('hamburger-img');
const closeBtn = document.getElementById('close-btn-img');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        hamburgerImg.style.display = 'none';
        closeBtn.style.display = 'flex';
    }
    else {;
        hamburgerImg.style.display = 'flex'
        closeBtn.style.display = 'none';
    }
});
