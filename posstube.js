document.body.style.border = "5px solid red";

// Grab all thumbnails...
function getThumbnails()
{
    var thumbnails = document.getElementById("thumbnail-container");
    var thumbnailSources = [];

    /* FOR GRABBING IMAGE SOURCE
    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnailSources.push(thumbnails[i].src);
    }

    return thumbnailSources;
    */

    return thumbnails;
}

function addPoss()
{
    var thumbnails = getThumbnails();

    for (var i = 0; i < thumbnails.length; i++)
    {
        thumbnails[i].style = "background-color: red;";
    }
}

addPoss();