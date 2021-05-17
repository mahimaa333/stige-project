const listnames = document.querySelectorAll('.gr-invi');
const viewbtn = document.querySelector('.gr-vi-btn');

let listlen = listnames.length;
let initial = 8;
let visible = initial;

function viewList(len){
    for(var j = 0; j < initial; j++){
        listnames[j].style.display = 'none';
    }
    for(var i = 0; i < len; i++){
        listnames[i].style.display = 'inline-block';
    }
}

function hidebtn(){
    if(visible >= listlen){
        visible = listlen;
        viewbtn.style.display = 'none';
    }
    else{
        viewbtn.style.display = '';
    }
}

viewbtn.addEventListener('click', (e) => {
    e.preventDefault();
    visible += 4;
    hidebtn();
    viewList(visible);
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
const marco = document.querySelector("ul.marco");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

root.style.setProperty("--marquee-elements", marco.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marco.appendChild(marco.children[i].cloneNode(true));
}


$('.slides').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    speed: 800,
    slidesToScroll: 1,
    arrows: true,
});
    setTimeout(function() {
        $('.slick-prev').prepend('<div class="prev-slick-arrow arrow-icon"><span>&#60;</span></div><div class="prev-slick-img slick-thumb-nav"><img src="https://cdn4.iconfinder.com/data/icons/iready-symbols-arrows-vol-1/28/004_041_left_prev_previous_home_arrow_circle1x-512.png" class="img-responsive"></div>');
        $('.slick-next').append('<div class="next-slick-arrow arrow-icon"><span>&#62;</span></div><div class="next-slick-img slick-thumb-nav"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_arrow-right.svg/1200px-Antu_arrow-right.svg.png" class="img-responsive"></div>');
        get_prev_slick_img();
        get_next_slick_img();
      }, 500);
  
      $('.slideshow__slides').on('click', '.slick-prev', function() {
        get_prev_slick_img();
      });
      $('.slideshow__slides').on('click', '.slick-next', function() {
        get_next_slick_img();
      });
      $('.slideshow__slides').on('swipe', function(event, slick, direction) {
        if (direction == 'left') {
          get_prev_slick_img();
        }
        else {
          get_next_slick_img();
        }
      });
      $('.slick-dots').on('click', 'li button', function() {
        var li_no = $(this).parent('li').index();
        if ($(this).parent('li').index() > li_no) {
          get_prev_slick_img()
        }
        else {
          get_next_slick_img()
        }
      });
      function get_prev_slick_img() {
        var prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
        $('.prev-slick-img img').attr('src', prev_slick_img);
        $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
        var prev_next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', prev_next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
      }
      function get_next_slick_img() {
        var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
        $('.next-slick-img img').attr('src', next_slick_img);
        $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
        var next_prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
        $('.prev-slick-img img').attr('src', next_prev_slick_img);
        $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
      }
