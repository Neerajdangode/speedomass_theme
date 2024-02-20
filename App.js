
// Testimonial
$(document).ready(function () {

    $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
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
                    slidesToScroll: 1
                }
            }

        ]
    });
});



// Star Rating

let currentRating = 0;
function setRating(rating) {
    currentRating = rating;
    highlightStars();
}

function highlightStars() {
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById('rating').children[i - 1];
        star.classList.toggle('active', i <= currentRating);
    }
}         
//  tabs action 
document.getElementById('tab1').style.display = 'block';

  function openTab(evt, tabName) {
    var i, tabContent, tabs;
    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    // Remove the active-tab class from all tabs
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active-tab");
    }

    // Show the current tab and add an active-tab class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active-tab");
  }

