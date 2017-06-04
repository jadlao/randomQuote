$(document).ready(function(){
    // Initial quote on page load
    $.ajaxSetup({ cache: false});
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    function(firstQuote){
        $('#quote').append(firstQuote[0].content + '<p>&mdash; ' + firstQuote[0].title + '</p>');
    });
    
    $('#quoteBtn').on('click', function(e){
        e.preventDefault();
        
        // Call Design Quotes API
        $.ajax({
            dataType: 'json',
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function(response){
                //console.log('responded', response);
                // empty quote box when clicked
                $('#quote').empty();
                var quote = response.shift();
                console.log('quote', quote);
                // Data is an array of quotes
                $('#quote').append(quote.content + '<p>&mdash; ' + quote.title + '</p>');
            },
            // so content changes on each button click
            cache: false
        });
    });
    
    $('.social').on('click', function(){
        $('a').attr('href', 'https://twitter.com/intent/tweet?text=' + 'hello');
        
    });
});

// blocked loading content
// quote marks css
// social button share
// background color change with fade animation