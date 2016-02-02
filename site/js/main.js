$('.circle-overlay').css({ scale:0, opacity:0 });

var menuHeight = $('.side-menu-container').height();

// start fullpage plugin
$('#fullpage').fullpage({
    onLeave : function(index, nextIndex, direction){
        
        var menuItems = $('.side-menu-item');
        
        menuItems.css({ scale:1 });
        
        $(menuItems[nextIndex-1]).transition({scale:1.2});
        
    }
});

function repositionMenu(){
    
    $('.side-menu-container').css({
        top:window.innerHeight/2-menuHeight/2,
        visibility:'visible'
    });
    
}

repositionMenu();

$(window).on('resize', function(){
   
    repositionMenu();
    
});

$('.side-menu-item').on('click', function(){
   
    var $circleButton   = $(this).find('.circle-button');
    var bgColor         = $circleButton.css('background-color');
    
    // grabbing attribute from clicked element
    var gotoPage        = $(this).attr('data-goto');
    
    // preparing class name for jquery
    var className = '.'+gotoPage;
    
    // modifying background-color on found element
    $('.'+gotoPage).css({
        'background-color':bgColor 
    });
    
    $('.side-menu-item').css({ scale:1 });
    
    $(this).transition({scale:1.2});
    
    $.fn.fullpage.moveTo(gotoPage);
    
});

$('.side-menu-item').on('mouseenter', function(){
   
    // get label that is a child of the element your mouse entered
    var $label = $(this).find('.label-container');
    var $circleOverlay = $(this).find('.circle-overlay');
    var $circleButton = $(this).find('.circle-button');
    
    // get all lables in the HTML document
    var $labels = $('.label-container');
    
    var bgColor = $circleButton.css('background-color');
    
    $label.css({
        right:80,
        display:'inline-block',
        opacity:0
    });
    
    $circleButton.transition({
        border:'5px solid '+bgColor  
    });
    
    $circleOverlay.transition({
        scale:1,
        opacity:1
    }, 200);
    
    $label.transition({
        right:55,
        opacity:1
    }, 200);
    
});

$('.side-menu-item').on('mouseleave', function(){
    
    var $label = $(this).find('.label-container');
    var $circleOverlay = $(this).find('.circle-overlay');
    var $circleButton = $(this).find('.circle-button');
    
    $circleOverlay.transition({
        scale:0,
        opacity:0
    }, 200);
    
    $circleButton.transition({
        border:'5px solid #fff' 
    });
    
    $label.transition({
        right:80,
        opacity:0,
        complete:function(){
            $(this).hide();
        }
    }, 200);
    
    
                        
});











