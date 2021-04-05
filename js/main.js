$(function () {

    let container = $('#container');

    container.load('home.html');

    $('.load-home').click(function (event) {
        event.preventDefault();
        container.load('home.html');
    });


    $('.load-about').click(function (event) {
        event.preventDefault();
        container.load('about.html');
    });


    $('.load-blog').click(function (event) {
        event.preventDefault();
        container.load('blog.html');
    });


    $('.load-book').click(function (event) {
        event.preventDefault();
        container.load('book.html');
    });


    $('.load-contact').click(function (event) {
        event.preventDefault();
        container.load('contact.html');
    });


    $('.load-gallery').click(function (event) {
        event.preventDefault();
        container.load('gallery.html');
    });
});