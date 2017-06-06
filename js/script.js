$(document).ready(function(){
    
    // Call Quotes API
    function getQuote(){
        $.ajax({
            type: 'GET',
            // headers authorize access to API
            headers: {
                'X-Mashape-Key': 'tmPOnDYhN8mshFi0VqLz9nITuUJ6p13H3aPjsnpKTrbGFzDvIS',
                Accept: 'application/json'
                     },
            // API endpoint allowing only famous category quotes
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
            success: function(response){
                // test to see if quote object is accessed
                console.log('responded', response);
                // empty quote box when clicked
                $('#quote').empty();
                // append quote to DOM
                $('#quote').append('<p>' + response.quote + '</p>' + '<p>&mdash; ' + response.author + '</p>');
            },
            // so content changes on each button click
            cache: false
        });
        
        // Change color on new quote load
        function randomColors(){
            var colors = [
                'rgb(184, 192, 120)', 'rgb(82, 62, 34)', 'rgb(167, 191, 208)', 'rgb(130, 103, 46)', 'rgb(230, 174, 133)'
                ],
                // pick a random number from 0 to the last item number of the colors array. ~~ converts to integer
                randomise = ~~(Math.random() * (colors.length));
                //console.log(randomise);
                changedColor = colors[randomise],
                //console.log(changedColor);
                currentColor = document.getElementById('quoteBtn').style.backgroundColor;
                //console.log(currentColor);
            
            // only change to a different color
            if(changedColor !== currentColor){
                //console.log('success');
                // change colors in the DOM
                $('body').animate({color: changedColor}, 1000);
                $('body, html, .social, #quoteBtn').animate({backgroundColor: changedColor}, 1000);
            }else{
                //console.log('fail');
                randomColors();
            }
        }
        // Execute function
        randomColors()
    }
    // run getQuote function on page load
    getQuote();
    
    // Generate random quote on clicking button
    $('#quoteBtn').on('click', function(e){
        e.preventDefault();
        getQuote();
    });
    
    // Tweet quote
    $('.social').on('click', function(){
        $('a').attr('href', 'https://twitter.com/intent/tweet?text=' + $('#quote').text());
    });
});