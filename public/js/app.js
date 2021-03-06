/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


$(document).ready(function() {
  console.log('app.js loaded!');
  //renderAlbum(sampleAlbums[0]);
  //sampleAlbums.forEach(renderAlbum);

  $.get('/api/albums', function(albums){
    console.log('response returned');
    console.log(albums);
    albums.forEach(function(oneAlbum){
      renderAlbum(oneAlbum);
    });
  });

  //When Form Submits
  $('#newForm').on('submit', function(event){
    event.preventDefault();

    var formData = $(this).serialize();
    console.log("form data is " + $(this).serialize());
    console.log("the unserialzied data is " + this);
    console.log('formData', formData);
    $(this).trigger("reset");

    $.ajax({
      url: "/api/albums",
      type:"POST",
      data: formData,
      // dataType: String
    }).done(function(albums){
      renderAlbum(albums);
    });
  

    // $.post('/api/albums', formData, function(album){
    //   console.log("hello");
     
    // })
   // $(this).trigger("reset");
  });
});

function buildSongsHtml(songs) { }

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

  var albumHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + album._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 album-art'>" +
  "                     <img class='img-fluid' src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + album.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" + album.artistName + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" +
  "                      </li>" +
  "                      <li class='list-group - item'>" +
  "                       <h4 class='inline-header' > Songs:</h4>" +
  "                       <span>	– (1) Famous – (2) All of the Lights – (3) Guilt Trip – (4) Paranoid – (5) Ultralight Beam – (6) Runaway – (7) Stronger – </span>" +
  "                      </li >" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +
  "          </div>" +
  "          <!-- end one album -->";

  // render to the page with jQuery
$('#albums').append(albumHtml);
}
