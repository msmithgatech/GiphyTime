
//TOPICS ARRAY
// Search all GIPHY GIFs for a word or phrase.
// Punctuation will be stripped and ignored.
// Use a plus or url encode for phrases. Example paul+rudd, or ryan+gosling

var topic = ["clouds", "kites", "drones", "galaxies", "dolphins"];

var dspResults = "";


//  CREATE AND DISPLAY BUTTONS FOR EACH TOPIC IN THE ARRAY

function shoTopicBtns() {
    // CLEAR BUTTON AREA
    // $("buttonArea").empty();

    var tLen = topic.length;
    for ( var i = 0; i < tLen; i++) {
        var shoTopic = topic[i];
        console.log(shoTopic);

        var tpicBttn = $("<button>");
        tpicBttn.addClass("bttnOfTopic btn btn-md btn-default");
        tpicBttn.attr("data-name", shoTopic);
        $("currBtns").append(tpicBttn);
        $("document").push("currBtns");
        console.log(tpicBttn);
    }
}


//  GIPHY API KEY     DludWHE6VDMIBc60AsWEFJlfdZ0KgIYg

function shoTopicImages() {
    //  CLEAR THE GIF AREA
    // $("shoGfImgs").empty();

    // $("bttnOfTopic").on("click", function() {

        var tImage = $(this).attr("data-name").val();
        var topicURL="https://api.giphy.com/v1/gifs/search?q=" + tImage
            + "&api_key=DludWHE6VDMIBc60AsWEFJlfdZ0KgIYg&limit=10";

        // CALL THE API, REQUEST IMAGES FOR TOPIC
        $.ajax ({
            url: topicURL,
            method: "GET"
        })
            .then(function(response) {
                var n = 0;
                while (n < 10) {
                    dspResults = response.data;
                    console.log(dspResults);
                    var shoGifDiv = $("<div>");
                    shoGifDiv.addClass("shoGfImgs col-xs-3 col-sm-6 col-md-6");
                    var ptag = $("<p>") + 'Rating: ' + dspResults[i].Rating;
                    var topicSorc = $("<img>");
                    topicSorc.addClass('gif');
                    topicSorc.attr('src', dspResults[i].images_fixed_height.url,);
                    topicSorc.attr('data-still', dspResults[i].images_fixed_height.url);
                    topicSorc.attr('data-animate', dspResults[i].images_fixed_height.url);
                    topicSorc.attr('data-state', 'still');
                    shoGifDiv.append(topicSorc);
                    shoGifDiv.append(ptag);
                    $("shoGfImgs").append(shoGifDiv);
                    n++;
                }   // END WHILE
            });   // END FUNCTION(RESPONSE)
    });     // END TOPIC BUTTON CLICK

    // Reset URL Value after everything loads
    topicURL = 'https://api.giphy.com/v1/gifs/search?api_key=DludWHE6VDMIBc60AsWEFJlfdZ0KgIYg&limit=10&q=';

}   // END FUNCTION


// CHECK THE CLICK EVENT LISTENER.  DETERMINE WHICH IMAGE WAS CLICKED
function gifChgState() {

    // $("gif").on("click", function() {

        // VARIABLE TO STORE THE IMAGE's DATA-STATE
        // DEFAULT STATE IS STILL
        var imgState = $(this).attr("data-state");

        // DEPENDING ON THE CURRENT STATE, CHANGE IT TO THE OPPOSITE STATE

        if (imgState === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }  // END ELSE
    });    // END IMAGE CLICK
}    // END gifChgState

$("document").ready() {
    shoTopicBtns();

    if $("bttnOfTopic").on("click", function() {
        shoTopicImages();
    }
    else if $("gif").on("click", function() {
        gifChgState();
    ));
}