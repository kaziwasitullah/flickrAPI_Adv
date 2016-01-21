// YOUR CODE GOES HERE
function callback () {}

$(document).ready(function() {
    $("#search-btn").click(function (){
        var name = $("#search-query"). val()
        console.log (name)
        searchFlickr(name,callback);
    }) 

    $("#reset").click(function () {
       $("#search-query"). val('')
    })
    
    
    
    
    
    
    
    
    
    
    
    
})