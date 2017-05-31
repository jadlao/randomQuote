$(document).ready(function(){
    // Initial quote on page load
    $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    function(firstQuote){
        $('#quote').append(firstQuote[0].content + '<p>&mdash; ' + firstQuote[0].title + '</p>');
    });
    
    $('#quoteBtn').on('click', function(e){
        e.preventDefault();
        
        // Call Design Quotes API
        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function(response){
                //console.log('responded', response);
                // empty quote box when clicked
                $('#quote').empty();
                var quote = response.shift();
                console.log('quote', quote);
                // Data is an array of quotes
                $('#quote').append(quote.content + '<p>&mdash; ' + quote.title + '</p>');
            },
            cache: false
        });
    });
    
    $('.social').on('click', function(){
        // Call Twitter API
        
    });
});