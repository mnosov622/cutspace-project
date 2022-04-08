const mobileNavBtn=document.querySelector('.mobile-nav-button');

const mobileNavButton=document.querySelector('.mobile-nav-button');

const mobileNavIcon=document.querySelector('.mobile-nav-button__icon');

const mobileNavigation=document.querySelector('.mobile-navigation');

const play_btn=document.querySelector('.nice-words-btn');


const form=document.querySelector('.form');
const form_input=document.querySelector('.form-input');


form_input.addEventListener('focus',()=>{
    form.classList.add('form-active');
    
})

form_input.addEventListener('blur',()=>{
    form.classList.remove('form-active');
})

mobileNavButton.addEventListener('click',()=>{
    mobileNavBtn.classList.toggle('rotate');
    mobileNavigation.classList.toggle('none');
    form.classList.toggle('none');
    body.classList.toggle('disable-scroll');
   
})




        const modal=document.querySelector('#contact-us');
        const modalWindow=document.querySelector('.modal-window');
        const close=document.querySelector('.close');
        const body=document.body;
        modal.addEventListener('click',()=>{
            modalWindow.classList.add('show');
            modalWindow.classList.remove('close-with-anim');
            body.classList.toggle('disable-scroll');
            body.style.overflow="hidden";
        })

        // close.addEventListener('click',()=>{
        //     modalWindow.classList.remove('show');
            
        //     modalWindow.classList.add('close-with-anim');
        //     body.classList.remove('disable-scroll');
        // })

        // body.addEventListener('click',(e)=>{
        // if(e.target.matches(".close") || !e.target.closest('.modal') )
        // closeModal(); 

        // function closeModal() {
        //     modalWindow.style.display="none";
        // }
        // })

        // body.addEventListener(
        //     "click",
        //     function(event) {
        //       // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
        //       if (
        //         event.target.matches(".close") ||
        //         !event.target.closest(".modal-window")
        //       ) {
        //         closeModal()
        //       }
        //     },
        //     false
        //   )
          
        //   function closeModal() {
        //     modalWindow.style.display = "none"
        //   }


        const video=document.querySelector('#video-review');
        const startBtn=document.querySelector('.nice-words-btn');

        startBtn.addEventListener('click',()=>{
            
            video.play();
        })
