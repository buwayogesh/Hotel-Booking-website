document.querySelector('.btn').addEventListener('click',function(e){
    document.querySelector('.text-center').remove();
//    var input=document.createElement('input');
//    input.setAttribute('type','date');
//    document.querySelector('.container1').appendChild(input);
      var html='';
      var form=document.createElement('form');
      form.id='checkavlbl';
      
      html += '<div class="d-flex justify-content-around">'
      
      html += '<div>'
      html += '<label class="label1"><b>Check In:</b></label>'
      html += '<input type="date" class="input1">'
      html += '</div>'
      html += '<div>'
      html += '<label class="label2"><b>Check out:</b></label>'
      html += '<input type="date" class="input2">'
      html += '</div>'
      html += '<button>Check Availability</button>'
      html += '</div>'
      
      form.innerHTML=html;
      document.querySelector('.container1').appendChild(form);
})