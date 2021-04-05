$(function () {
    $.get('/server/database.json', function (data) {
        for (let blogpost of data) {
            document.getElementById('blog-content').innerHTML +=
                '<div class="border-1 text-white"><h1>' + blogpost.name + '</h1><br /> <br /><p>' + blogpost.content + '</p></div>'
        }
    });
});