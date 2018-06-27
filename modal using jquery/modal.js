var modal=(function(){
   var $window=$(window);
   var $modal=$('<div class="modal"/>');
   var $modalContent=$('<div class="modal-content"/></div>');
     var $modalClose= $('<span  class="modal-close">&times</span>');
     var $modalHeader=$('<div class="modal-header"/></div>');
     var $modalBody=$('<div clas="modal-body"></div>');
     var $modalFooter=$('<div class="modal-footer"></div>');
   
   $modal.append($modalContent);
   $modalContent.append($modalHeader,$modalBody,$modalFooter);
   $modalHeader.append($modalClose);
   $modalClose.on('click',function(e){
       e.preventDefault();
       modal.close();
   });
   
   return {
       center:function(){
           var top=Math.max($window.height()-$modal.outerHeight(),0)/2;
           var left=Math.max($window.width()-$modal.outerWidth(),0)/2;
           $modal.css({
               top:top+$window.scrollTop(),   
               left:left+$window.scrollLeft()
                                       
           });
       },
       open:function(setting){
           $modalHeader.append(setting.header);
           $modalBody.empty().append(setting.body);
           $modalFooter.append(setting.footer);
           $modal.css({
                   width:"100%",
                   height:"100%",
                   position: "fixed", /* Stay in place */
                   zIndex: 1000, /* Sit on top */
                   overflow: "auto", /* Enable scroll if needed */
                   backgroundColor: "rgb(0,0,0)",
                   backgroundColor: "rgba(0,0,0,0.5)"/* Fallback color */
               }).appendTo('body');
            $modalContent.css({
                margin:"15% auto",
                width:'60%',
                
                backgroundColor: "#bdb768",
               /* 15% from the top and centered */
                border: "1px solid #888",
                padding: "auto 2em auto 2em"
                
            }); 
            $modalClose.css({
                  float: "right",
                  fontSize:"2em"
                
            });
            $modalClose.filter(":focus").css({
                color: "black",
                cursor: "pointer"
            });
            $modalHeader.css({
                  backgroundColor: "red",
                  color: "white",
                  fontSize:"1.5em",
                  padding:"2em"
            });
            $modalBody.css({
                backgroundColor: "#5cb85c",
                  color: "white",
                  padding:"1.5em"
            });
            $modalFooter.css({
                backgroundColor: "red",
                color: "white",
                padding:"1em"
            });
            
           modal.center();
           $(window).on('resize',modal.center);
       },
       close:function(){
           $modalBody.empty();
           $modal.detach();
           $(window).off('resize',modal.center);
       }
   };
    
}());


(function(){
    var $header=$('.modal-header').detach();
    var $body=$('.modal-body').detach();
    var $footer=$('.modal-footer').detach();
    $('#open-modal').on('click',function(){
        modal.open({header:$header,body:$body,footer:$footer});
    });
}());