 let minus = document.getElementById('minus');
 let plus =document.getElementById('plus');
 let count =document.getElementById('count');

 let newcount= 0;
 minus.addEventListener('click',function(){
     newcount--; 
     count.innerHTML = newcount;
 })
 plus.addEventListener('click',function(){
    newcount++;
    count.innerHTML = newcount;
 })



 $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: '<span class = "next"><i class="fa-solid fa-arrow-right"></i></span>',
    prevArrow: '<span class = "prew"><i class="fa-solid fa-arrow-left"></i></span>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow:'<span class = "d-none next"><i class="fa-solid fa-arrow-right"></i></span>',
                nextArrow:'<span class = "d-none prew"><i class="fa-solid fa-arrow-left"></i></span>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));
  
    document.querySelector('#product-counter').innerHTML=basket.length
}
  
  CountProduct()