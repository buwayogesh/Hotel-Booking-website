/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
document.querySelector('.btn.bookbtn').addEventListener('click',function(e){
    document.querySelector('.div1').remove();
//    var input=document.createElement('input');
//    input.setAttribute('type','date');
//    document.querySelector('.container1').appendChild(input);
      var html='';
      var form=document.createElement('form');
      form.id='checkavlbl';
      
    //   html += '<div class="d-flex justify-content-around">'
      html += '<div class="card">'
      html += '<div class="card-body">'
      html += '<div class="d-flex justify-content-between">'
      html += '<label class="label1 col-sm-5 col-form-label"><b>Check In:</b></label>'
      html += '<input type="date" class="input1">'
      html += '</div><br>'
      html += '<div class="d-flex justify-content-between">'
      html += '<label class="label2 col-sm-5 col-form-label"><b>Check out:</b></label>'
      html += '<input type="date" class="input2">'
      html += '</div><br>'
      html += '<button class="ckavailbtn">Check Availability</button>'
      html += '</div>'
      html += '</div>'
      form.innerHTML=html;
      document.querySelector('.container1').appendChild(form);
})