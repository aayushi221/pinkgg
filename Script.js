var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js');
document.head.appendChild(jQueryScript);


$(document).ready(function () {

    $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

    $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
    });

});

const SELECTOR = {
    DEMO: document.querySelector('.js-demo'),
  }
  
  const CLASSES = {
    ANIMATED: `is-animated`
  }
  
  function myAnimation(){
    SELECTOR.DEMO.classList.add(CLASSES.ANIMATED);
    
    const timer = setInterval(() => {
      SELECTOR.DEMO.classList.remove(CLASSES.ANIMATED);
      clearInterval(timer)
    }, 1500)
  }
  
  myAnimation();
  