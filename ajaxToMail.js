$('form').submit(function (event){

        event.preventDefault();              //-------------To prevent page refresh on submit (bydefault function of form) ------------------
        
        
        var name=$(event.target).find('.name').val();
      var email=$(event.target).find('.email').val();
      var msg=$(event.target).find('.msg').val();
      var number=$(event.target).find('.phone').val();
      var checkNum = $(event.target).find('.phone').val();
     var number= $('.iti__selected-dial-code').text()+" "+$('.phone').val() ;        //-------------Joined String of Coutry Code and Number------------------
     
     
     
     //-----------------------------------------------Form Validation Start----------------------------------------------
     
     if(($(event.target).hasClass('modal-form')) && checkNum== ""){
         $('.error').show().text("**Please fill out number field");
         return false;
     }
     if(($(event.target).hasClass('modal-form')) && isNaN(checkNum)){
         $('.error').show().text("**Please enter numeric value only");
         return false;
     }
     if(($(event.target).hasClass('modal-form')) && checkNum.length!= 10){
         $('.error').show().text("**Number must be equal to 10 Digits");
         return false;
     }else{
        //-----------------------------------------------AJAZ Start to hit API's----------------------------------------------
      $.ajax({
			method: 'POST',
            type: 'json',
			url: "http://localhost:3000",
			data: {name: name, email: email, number: number, message: msg},
            
			success: function( data ){
                if(data){
                    $('#quick').modal("hide");
                    var name=$('.name').val('');
                    var email=$('.email').val('');
                    var msg=$('.msg').val('');
                    var number=$('.phone').val('');
                    $('#success').modal("show");
                    
                }
			},
			error: function (request, status, error) {
                $('#quick').modal("hide");
                var name=$('.name').val('');
                    var email=$('.email').val('');
                    var msg=$('.msg').val('');
                    var number=$('.phone').val('');
                $('#fail').modal("show");
			}
		});
    
         //-----------------------------------------------AJAZ Start to hit API's----------------------------------------------
         
     }	
     //-----------------------------------------------Form Validation END----------------------------------------------
    
  	});
