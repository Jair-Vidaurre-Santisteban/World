
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators:false,
        noWrap: true
    });
     
    
});

    document.addEventListener('click', iniciar);
    function iniciar() { 
        const audio=document.getElementById('cancion'); 
        audio.play(); 
    };

   const car=document.getElementById('im');  
   car.addEventListener('click',() => {
    iniciar();
   });  


