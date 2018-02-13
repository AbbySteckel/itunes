

$(document).ready(function(){
    var numResults = 50;
    var artist="";


    $("#artistList").on('change',function() {
        artist = $(this).val();
        magic(artist, numResults);

    });

    $('#numResults').on('change', function() {
        numResults = $(this).val();
        magic(artist, numResults);

    });




});

function searchArtist(result) {

    $("#output").empty();
    var output="<table border='1' cellspacing='2' cellpadding='5' class='table table-striped'>";
    output+="<tr><td>Song</td>";
    output+="<td>Album</td>";
    output+="<td>Album Cover</td></tr>";
    for(var i = 0 ; i < result.results.length; i++) {
        output+="<tr><td>"+result.results[i].trackName+"</td>";
        output+="<td>"+result.results[i].collectionName+"</td>";
        output+="<td><img src="+result.results[i].artworkUrl100 +"></td></tr>";
    }

    output+="</table>";
    $("#output").append(output);
    console.log(result);
}

function magic(artist,numResults){
    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + artist + "&limit=" + numResults,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {
            searchArtist(result);
        },
        error: function() { alert('Failed!'); }


    });
}