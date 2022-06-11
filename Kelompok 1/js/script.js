$(".page-scroll").on("click", function(e){   
    var tujuan = $(this).attr("href"); 
 
    var elementTujuan = $(tujuan); 
 
    $("html ,body").animate({ 
        scrollTop: elementTujuan.offset().top - 70  
    }, 1500, "easeInOutExpo"); 
 
    e.preventDevault(); 
     
});