$(document).ready(function(){
        $(".image").on("click", function(){
            $(".image").off("click");
            $(".my-char").append($(this));
            $(".characters>.image").each(function(){
                $(this).removeClass("image").addClass("my-image");
                $(".enemies").append($(this));
            });
            $(".characters").remove();
            $(".my-image").on("click", function(){
                $(".other").append($(this));
                $(this).addClass("defender");
            });
    
    });
    
}); 