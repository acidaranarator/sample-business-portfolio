//menu in mobile responsiveness
// toggling "open" class for navigation
//this means to close "open" class
$('#mobile-menu-icon').click(
    function(){
        $('nav').toggleClass('open');
    })



/*
    On-click popup display to let the user know that they are in the page
    that they have clicked, in case if they clicked to navigate to the 
    wrong page unknowingly.
    
    Eg: if the user clicked to go to the portfolio page while they are in 
    that page already when they wanted to go to the home page, the popup 
    message will notify them that they are already on the portfolio page.  
*/

//for home page
$('#home-msg').click(
    function(){
        alert('You are already at the home page.');
    })

//for about us page
$('#about-msg').click(
    function(){
        alert('You are already at the about us page.');
    })

//for portfolio page
$('#portfolio-msg').click(
    function(){
        alert('You are already at the portfolio page.');
    })