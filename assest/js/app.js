AOS.init({
    duration: 1500,

})




let currency = document.querySelector('.cur');
let cContent = document.querySelector('.drop-menu');
let lang = document.querySelector('.lang');
let lContent = document.querySelector('.l-content')

lang.onclick = function () {
    if (cContent.classList.contains('active')) {
        cContent.classList.remove('active')
    }
    lContent.classList.toggle('active');
}

currency.onclick = function () {
    if (lContent.classList.contains('active')) {
        lContent.classList.remove('active')
    } else {
        cContent.classList.toggle('active');
    }

}
let user = document.querySelector('.users');
let log = document.querySelector('.login');

user.onclick = function () {
    log.classList.toggle('active')
}



let btnCat = document.querySelector('.btn-catagori')
let Cmenu = document.querySelector('.catagori-menu')

btnCat.onclick = function () {
    $(Cmenu).slideToggle(700);

}




$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1200,
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
                prevArrow: '<span class = "d-none next"><i class="fa-solid fa-arrow-right"></i></span>',
                nextArrow: '<span class = "d-none prew"><i class="fa-solid fa-arrow-left"></i></span>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.smresponsive').slick({
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1200,
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
                prevArrow: '<span class = "d-none next"><i class="fa-solid fa-arrow-right"></i></span>',
                nextArrow: '<span class = "d-none prew"><i class="fa-solid fa-arrow-left"></i></span>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.responsiv').slick({
    rows: 2,
    dots: false,
    infinite: true,
    speed: 1100,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1200,
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
                prevArrow: '<span class = "d-none next"><i class="fa-solid fa-arrow-right"></i></span>',
                nextArrow: '<span class = "d-none prew"><i class="fa-solid fa-arrow-left"></i></span>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.responsivee').slick({
    centerMode: true,
    rows: 1,
    dots: false,
    infinite: true,
    centerPadding: '30px',
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
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
                prevArrow: '<span class = "d-none next"><i class="fa-solid fa-arrow-right"></i></span>',
                nextArrow: '<span class = "d-none prew"><i class="fa-solid fa-arrow-left"></i></span>'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});




var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});










(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year 🙂
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year 🙂
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("dayss").innerText = Math.floor(distance / (day)),
                document.getElementById("hourss").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutess").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("secondss").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdowns").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());



let cartbtn = document.querySelectorAll('#add-cart-btn');

if (localStorage.getItem('basket') === null) {
    localStorage.setItem('basket', JSON.stringify([]))
}
cartbtn.forEach(pr => {
    pr.onclick = function (e) {
        e.preventDefault();
        let prId = e.target.parentElement.parentElement.parentElement.parentElement.id;
        let prName =e.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].innerHTML
        let prPrice =e.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[1].innerHTML
        let prImg = e.target.parentElement.parentElement.parentElement.children[0].children[0].src;
        console.log(prImg);

        let basket=JSON.parse(localStorage.getItem('basket'));
    let existProd = basket.find(pr => pr.Id === prId);
  

    if(existProd == undefined){
        basket.push({
            Id: prId,
            Name: prName,
            Price: prPrice,
            Image: prImg,
            Count: 1
        })
    }
    else{
        existProd.Count +=1 
    }

    localStorage.setItem('basket',JSON.stringify(basket))


  
    countProduct();

    }
});

function countProduct(){
     let basket = JSON.parse(localStorage.getItem('basket'))
     document.getElementById('basket-count').innerHTML = basket.length
}
countProduct();