// Smooth Scrolling
    $(function() {
      
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
   
  //navbar active

    



   // scroll reveal
    window.sr = ScrollReveal();
        sr.reveal('.navbar', {
          duration: 2000,
          origin:'bottom'
        });
        sr.reveal('.text-btn',{
          duration:500,
          delay:1000,
          origin:'left',
          distance:'200px'
        });
        sr.reveal('#hero .img',{
          duration:2000,
          delay:1000,
          origin:'right',
          bottom:'30px'
        });
        sr.reveal('.social-media',{
          duration:1000,
          delay:1500,
          origin:'bottom',
          distance:'40px',
        });
        sr.reveal('.slide-right',{
          duration:2000,
          origin:'left',
          opacity:0,
          distance:'100px',
          viewFactor: 0.2,
        });
        sr.reveal('.slide-left',{
          duration:2000,
          origin:'right',
          opacity:0,
          distance:'100px',
          viewFactor: 0.2,
        });
         sr.reveal('.slide-bottom',{
          duration:2000,
          origin:'bottom',
          opacity:0,
          distance:'100px',
          viewFactor: 0.2,
        });
          sr.reveal('.slide-top',{
          duration:2000,
          origin:'top',
          opacity:0,
          distance:'100px',
          viewFactor: 0.2,
        });