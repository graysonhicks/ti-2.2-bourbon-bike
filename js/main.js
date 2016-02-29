window.jQuery = $ = require('jquery');
var handlebars = require('handlebars');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.min.js');
var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickrOptions = {
  tags: "bike",
  format: "json"
};

getFlickr();


function getFlickr(){
  console.log('test');
  $.getJSON(flickrAPI, flickrOptions, buildCarousel);
}


function buildCarousel(images){

    images = images.items;
    var slideSource = $("#image-slides").html();
    var slideTemplate = handlebars.compile(slideSource);
    var slideRenderedTemplate = slideTemplate({"images": images});

    $('#bike-carousel').html(slideRenderedTemplate);
    var firstImage = $('#bike-carousel div').first().addClass("active");
    console.log(firstImage);
    // var firstSlide = $('#image-slides div').first();

}

$('#main-carousel-container').carousel();
  // you want to enable the pointer events only on click;

$('#google-map').addClass('scrolloff'); // set the pointer events to none on doc ready
$('.map').on('click', function () {
    $('#google-map').removeClass('scrolloff'); // set the pointer events true on click
});

// you want to disable pointer events when the mouse leave the canvas area;

$("#google-map").mouseleave(function () {
    $('#google-map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
});
