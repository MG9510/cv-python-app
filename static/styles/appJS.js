function toggleFunction_1() {
    var x = document.getElementById("contact-det-collapse");
    var y = document.getElementById("main-col");
    var z1 = document.getElementById("hide-btn-txt");
    var z2 = document.getElementById("hide-btn-icon")

    if (y.classList.contains('col-sm-8')) {
    x.style.display = "none";
    y.classList.remove('col-sm-8','col-lg-9');
    y.classList.add('col-sm-12','col-lg-12');
    y.style.transition = "ease 0.3s";
    z1.innerHTML = "Contact Details";
    z2.classList.remove('fa-eye-slash');
    z2.classList.add('fa-address-book');
    }

    else {
    x.style.display = "block";
    y.classList.remove('col-sm-12','col-lg-12');
    y.classList.add('col-sm-8','col-lg-9');
    y.style.transition = "ease 0.3s";
    z1.innerHTML = "Hide Details";
    z2.classList.remove('fa-address-book');
    z2.classList.add('fa-eye-slash');
    }
}

function toggleFunction_expand() {
    var a = document.getElementById("abtme-collapse");
    var b = document.getElementById("goals-collapse");
    var c = document.getElementById("work-collapse");
    var d = document.getElementById("education-collapse");
    var e = document.getElementById("skillset-collapse");

    if (a.classList.contains('hide')) {
        a.classList.remove('hide');
        a.classList.add('show');
    }
    else {
        a.classList.add('show');
    }

    if (b.classList.contains('hide')) {
        b.classList.remove('hide');
        b.classList.add('show');
    }
    else {
        b.classList.add('show');
    }

    if (c.classList.contains('hide')) {
        c.classList.remove('hide');
        c.classList.add('show');
    }
    else {
        c.classList.add('show');
    }

    if (d.classList.contains('hide')) {
        d.classList.remove('hide');
        d.classList.add('show');
    }
    else {
        d.classList.add('show');
    }

    if (e.classList.contains('hide')) {
        e.classList.remove('hide');
        e.classList.add('show');
    }
    else {
        e.classList.add('show');
    }
}

function toggleFunction_collapse() {
    var a = document.getElementById("abtme-collapse");
    var b = document.getElementById("goals-collapse");
    var c = document.getElementById("work-collapse");
    var d = document.getElementById("education-collapse");
    var e = document.getElementById("skillset-collapse");

    if (a.classList.contains('show')) {
        a.classList.remove('show');
        a.classList.add('hide');
    }
    else {
        a.classList.add('hide');
    }

    if (b.classList.contains('show')) {
        b.classList.remove('show');
        b.classList.add('hide');
    }
    else {
        b.classList.add('hide');
    }

    if (c.classList.contains('show')) {
        c.classList.remove('show');
        c.classList.add('hide');
    }
    else {
        c.classList.add('hide');
    }

    if (d.classList.contains('show')) {
        d.classList.remove('show');
        d.classList.add('hide');
    }
    else {
        d.classList.add('hide');
    }

    if (e.classList.contains('show')) {
        e.classList.remove('show');
        e.classList.add('hide');
    }
    else {
        e.classList.add('hide');
    }

}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
});


