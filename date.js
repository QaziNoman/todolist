
exports.GetDate=function(){
var today = new Date();

     var day = "";
      var option = {
         weekday: "long",
         day: "numeric",
         month: "long"
     };
     return today.toLocaleDateString("en-Us", option);
    }

 exports.GetDay=function(){
    var today = new Date();
    
         var day = "";
          var option = {
             weekday: "long",
             
         };
        return today.toLocaleDateString("en-Us", option);
         
     }