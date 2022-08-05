document.querySelector('.btn.bookbtn').addEventListener('click',function(e){
    document.querySelector('.booking').remove();
    document.querySelector('.navbar').remove();
//    
      var html='';
      var card=document.createElement('div');
      card.id='checkavlbl';
      card.className="w-25"
      
    
      
      html += '<div class="card check-avail-card opacity-75">'
      html += '<div class="card-body">'
      html += '<img src="./assets/logo.jpg" alt="logo" class="w-25 h-25"/>'
      html += '<div class="d-flex justify-content-between">'
      html += '<label class="label1"><b>Check In:</b></label>'
      html += '<input type="date" class="w-50 startDate" onchange="checkDate()">'
      html += '</div><br>'
      html += '<div class="d-flex justify-content-between">'
      html += '<label class="label2"><b>Check out:</b></label>'
      html += '<input type="date" class="w-50">'
      html += '</div><br>'
      html += '<button class="check-available-btn w-100 rounded lh-lg"><strong>Check Availability</strong></button>'
     
      html += '<button class="next" onclick="buildUserInfo()"><strong>Next</strong></button>'
    
      html += '</div>'
      card.innerHTML=html;
      document.querySelector('.container1').appendChild(card);

     
})



