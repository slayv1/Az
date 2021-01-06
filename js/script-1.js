$(document).ready(function(){
                        var mobile-menu-button = $( "mobile-menu-button" );
                        var windowResize = $(window);
                        windowResize.resize(function(){
                            if(windowResize.width() > 768){
                                mobile-menu-button.css('display','block');
                            }else{
                                mobile-menu-button.css('display','none');
                            }
                        })
                    })