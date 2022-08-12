/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
document.querySelector('.btn-book').addEventListener('click',function(e){
    document.querySelector('.container-md').remove();
    document.querySelector('.navbar').remove();
    
//    
      var html='';
      var container = document.querySelector('.hero-bg-container');
      if (container) {
       
        var form=document.createElement('div');
        form.id='check-availability';
        
      //   html += '<div class="d-flex justify-content-around">'
        html += '<div class="card" style="width: 18rem;">'
        html += '<ul class="list-group list-group-flush">'
        html += '<li class="list-group-item">'
        html += '<img src="./assets/logo.jpg" alt="logo" class="w-25 h-25"></img>'
        html += '</li>'
        html += '<li class="list-group-item d-flex justify-content-between">'
        html += '<span>Check In :</span>'
        html += '<input type="date" class="input-ckeck-in" id="checkindate" onchange="setoutdate()"  onload="setindate()"'
        html += '</li>'
        html += '<li class="list-group-item d-flex justify-content-evenly">'
        html += '<span>Check Out :</span>'
        html += '<input type="date" class="input-ckeck-out" id="checkoutdate">'
        html += '</li>'
        html += '</ul>'
        html += '<div class="card-footer d-flex justify-content-center">'
        html += '<button class="btn-check-availability rounded-3 btn-primary" onclick="availability()"><strong>Check Availability</strong></button>'
        html += '</div>'
        html += '</div>'
        form.innerHTML=html;
        container.classList.remove('hero-bg-container-navbar');
        container.appendChild(form);
        var today = new Date();
        document.querySelector('#checkindate').setAttribute("min",today.toISOString().substring(0, 10));
      }
})

function setoutdate(){
  document.querySelector('#checkoutdate').setAttribute("min",document.querySelector('#checkindate').value)
}