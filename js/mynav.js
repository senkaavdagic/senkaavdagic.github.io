var data = `
<nav class="navbar navbar-inverse navbar-expand-md fixed-top navbar-light bg-light border-bottom p-2">
        <a class="navbar-brand" href="./Index.html">Stitchbricks</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="./Index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Inspirations</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Techniques</a></li>
                <li class="nav-item"><a class="nav-link" href="./Gallery.html">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            </ul>
        </div>
</nav> `

$(function(){
  $("#nav-placeholder").append(data);
});

$(document).ready(function() {
  $('.navbar-nav li a').click(function(e) {

    $('.navbar-nav li a.active').removeClass('active');

    var $parent = $(this).parent();
	console.log($(this).parent());
    $parent.addClass('active');
    /***e.preventDefault();**/
  });
});


