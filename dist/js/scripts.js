/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
document.querySelector('.btn.btn-book').addEventListener('click',function(e){
    document.querySelector('.btn').remove();
    document.querySelector('.navbar').remove();
//    
      var html='';
      var container = document.querySelector('.hero-bg-container');
      if (container) {
        var form=document.createElement('form');
        form.id='check-availability';
        
      //   html += '<div class="d-flex justify-content-around">'
        html += '<div class="card card-bg-color opacity-75 d-flex align-items-center justify-content-center">'
        html += '<div class="card-body w-75 h-75">'
        html += '<img src="./assets/logo.jpg" alt="logo" class="w-25 h-25">'
        html += '<div class="d-flex justify-content-between">'
        html += '<label class="label1 col-sm-5 col-form-label"><b>Check In:</b></label>'
        html += '<input type="date" class="input-ckeck-in w-75">'
        html += '</div><br>'
        html += '<div class="d-flex justify-content-between">'
        html += '<label class="label2 col-sm-5 col-form-label"><b>Check out:</b></label>'
        html += '<input type="date" class="input-ckeck-out w-75">'
        html += '</div><br>'
        html += '<button class="btn-check-availability rounded-3" onclick="availability()"><strong>Check Availability</strong></button>'
        html += '</div>'
        html += '</div>'
        form.innerHTML=html;
        container.classList.remove('hero-bg-container-navbar');
        container.appendChild(form);
      }
})
