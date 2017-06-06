$(document).ready(function(){
    
    // Call Quotes API
    function getQuote(){
        $.ajax({
            type: 'GET',
            headers: {
                'X-Mashape-Key': 'tmPOnDYhN8mshFi0VqLz9nITuUJ6p13H3aPjsnpKTrbGFzDvIS',
                Accept: 'application/json'
                     },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
            success: function(response){
                console.log('responded', response);
                // empty quote box when clicked
                $('#quote').empty();
                // Data is an array of quotes
                $('#quote').append('<p>' + response.quote + '</p>' + '<p>&mdash; ' + response.author + '</p>');
            },
            // so content changes on each button click
            cache: false
        });
    }
    // run getQuote function on page load
    getQuote();
    
    // Generate random quote on clicking button
    $('#quoteBtn').on('click', function(e){
        e.preventDefault();
        getQuote();
    });
    
    $('.social').on('click', function(){
        $('a').attr('href', 'https://twitter.com/intent/tweet?text=' + 'hello');
        
    });
});

// quote marks css
// social button share
// background color change with fade animation