# Image Auto Slider

Small jQuery Auto Slider

It uses jQuery

To use it just call

$('Selector').autoSlider();

Settings

These are the defaults.

    auto: true  // This will slide the object as soon as it's been called.
    
    activateBtn: null  // Allows the object to have an activation point such as a button.
                        // You must send a selector such as  "#MyActivationBtn"
                        
    closeBtnShow: true  //  Allows the object to have a close button.
    
    closeBtnWord: "Close" //  Allows the user to change the html inside the close button.
    
    closeBtnColor: "black" // Allows the user to change the font inside the close button.
    
    closeBtnSize: "17px" // Allows user to change the close button font size.
    
    sliderTimer: "3s" // Allows the user to change the animation speed
    
You are able to overwrite these defaults by sending an object example.

    $('#ImageSlider').autoSlider({
        auto : true,
        activateBtn : '#moveup',
        closeBtnShow: true,
        closeBtnWord: "Close",
        closeBtnColor: "white",
        closeBtnSize: "20px",
        sliderTimer: "2s"
    });