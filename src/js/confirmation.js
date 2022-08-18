function success(selectedRoomDetail) {
    
    document.querySelector("#roomdetails").remove();
    document.querySelector(".selected-room-details-container").remove();
    document.querySelector("#buildAmount").remove();

    var paymentcard = document.createElement("div");
    paymentcard.id = "payment";
    paymentcard.className = "payment container d-flex flex-row col-md-12";
    let html = "<div>";
    selectedRoomDetail.roomDetail.forEach((roomdetails) => {
        html += buildSelectedRoomCard(roomdetails, selectedRoomDetail.roomDetail.length);
    });
    html += "</div>" + paymentcarddet();
    paymentcard.innerHTML = html;
    document.querySelector(".container-fluid").appendChild(paymentcard); 
    
}
function buildSelectedRoomCard(roomdetails, noOfRooms) {
    return `
    
    <div class="card card-change col-md-12 mt-2">
        <div class="row g-0">
            <div class="${noOfRooms < 2 ? "col-12" : "col-4"}">
            <img src="${
            roomdetails.images[0]
            }" class="img-fluid rounded-start w-100 h-100" alt="...">
            </div>  
            <div class="${noOfRooms < 2 ? "col-12" : "col-8"}">
                <div class="card-body">
                    <h5 class="card-title">${roomdetails.name}</h5>
                    <p class="card-text">Selected No. of Room:${
                        roomdetails.selectedNoOfRooms
                    }</p>
                <p class="card-text">Price:${roomdetails.pricePerNight}</p>
                </div>
            </div>
        </div>
    </div>
  `;
}
function paymentcarddet() {
   

    return `<div class="box-2 card col-md-12">
        <div class="box-inner-2">
            <div>
                <p class="fw-bold">Payment Details</p>
                <p class="dis mb-3">Complete your purchase by providing your payment details</p>
               
            </div>
            <form action="" name="userform" class="userform">
                <div class="mb-3 abc">
                    <p class="dis fw-bold mb-2">Email address</p>
                    <input class="form-control email" type="email" placeholder="Enter Mail-id" name="email" onfocus="rmvemlerror()">
                    <div class="email-error"></div>
                </div>
                <div>
                    <p class="dis fw-bold mb-2 my-3">Card details</p>
                    <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                        <div class="fab fa-cc-visa ps-3"></div>
                        <input type="text" class="form-control cardnumber" placeholder="Card Details" name="ccnumber" onfocus="removecarderror()">
                        <div class="d-flex w-50">
                            <input type="text" class="form-control px-0 expirymonthandyear" placeholder="MM" name="expirymnthyr" onfocus="montherror()">
                            <span> / </span>
                            <input type="text" class="form-control px-0 year" placeholder="YYYY" onfocus="yearerror()">
                            <input type="password" maxlength=3 class="form-control px-0" placeholder="CVV">
                        </div>
                    </div>
                        <div class="card-error"></div>
                    </div>
                    <div class="my-3 cardname">
                        <p class="dis fw-bold mb-2">First Name</p>
                        <input class="form-control name" type="text" name="username" onfocus="removenameerror()">
                        <div class="name-error"></div>
                    </div>
                    <div class="my-3 cardname">
                    <p class="dis fw-bold mb-2">Last Name</p>
                    <input class="form-control lname" type="text" name="lastname" onfocus="removelname()">
                    <div class="lname-error"></div>
                </div>
                    <div class="my-3 baddress">
                        <p class="dis fw-bold mb-3">Address</p>
                        <input class="form-control address" type="text" name="address" onfocus="removeaddrerror()">
                        <div class="address-error"></div>
                    </div>
                        <div class="my-3 mobile">
                            <p class="dis fw-bold mb-2">Mobile Number</p>
                            
                                <input class="form-control mobile" type="text" name="mobile" onfocus="removemobileerror()">
                                 <div class="mobile-error"></div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total Room Selected</p>
                                <p class="fw-bold">${selectedRoomDetail.totalNoOfSelectedRoom}</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Number of Days</p>
                                <p class="fw-bold">${selectedRoomDetail.NumberOfDays}</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total</p>
                                <p class="fw-bold"> ${Number(selectedRoomDetail.totalAmmount) * Number(selectedRoomDetail.NumberOfDays)}</p>
                            </div>
                            <div class="btn btn-primary mt-2 pay" onclick="validation()">Pay</div>
                        </div>


                </div>
            </form>
        </div>
    </div>
</div>`;
}


function validation(){
     var phone=document.userform.mobile.value;
     var email=document.userform.email.value;
     var name= document.userform.username.value;
     var lastname=document.userform.lastname.value;
     var address=document.userform.address.value;
     var ccnumber=document.userform.ccnumber.value;
     var expmthyr=document.userform.expirymnthyr.value;
     var expyear=document.querySelector('.year').value;
     var isFormValid=true;
     var today=new Date();
     var month=today.getMonth()+1;
     var year=today.getFullYear();
     if(expmthyr < month || expyear < year){
         document.querySelector('.card-error').innerHTML="Your Card is Expired";
         isFormValid=false;
     }
    // if(expmthyr < today){
    //     document.querySelector('.card-error').innerHTML="Your Card is Expired";
    //     isFormValid=false;
    // }
    if(name ==""){
        document.querySelector('.name-error').innerHTML="Please Enter First Name";
        isFormValid=false;
    }
    
    if(lastname==""){
        document.querySelector('.lname-error').innerHTML="Please Enter Last Name";
        isFormValid=false;
    }
    if(address==""){
        document.querySelector('.address-error').innerHTML="Please Enter Address";
        isFormValid=false;
    }
    if(phone.length==0){
        document.querySelector('.mobile-error').innerHTML="Please Enter Mobile Number";
        isFormValid=false;
    }
    if(phone.length!==10){
        document.querySelector('.mobile-error').innerHTML="Mobile No. should be 10 digits";
        isFormValid=false;
    }
    if(!phone.match(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/)){
        document.querySelector('.mobile-error').innerHTML="Enter Valid Phone Number";
        isFormValid=false;
    }
    if(email.length==0){
        document.querySelector('.email-error').innerHTML="Please Enter Email-id";
        isFormValid=false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.querySelector('.email-error').innerHTML="Please Enter valid email";
        isFormValid=false;
    }
    if(ccnumber.length==0){
        document.querySelector('.card-error').innerHTML="Please Enter Card Details";
        isFormValid=false;
    }
    if(ccnumber.length!==12){
        document.querySelector('.card-error').innerHTML="Please Enter 12 digit Card Number";
        isFormValid=false;
    }
    // if(!ccnumber.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)){
    //     document.querySelector('.card-error').innerHTML="Please enter valid card number";
    // }
    if(isFormValid==true){
        apiCalluserInfo();
       
    }
   }

    function apiCalluserInfo(){
        var name=document.querySelector('.name').value;
        var lastname=document.querySelector('.lname').value;
        var email=document.querySelector('.email').value;
        var address=document.querySelector('.address').value;
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: `{"first_name":"${name}","last_name":"${lastname}","email":"${email}","address":"${address}"}`
          };
          
          fetch('http://localhost:9000/hotel/v1/register/', options)
            .then(response => response.json())
            .then(response => {
                
                if(response){
                   document.querySelector('.payment').remove();
                   var userId=response.id;
                   console.log(userId);


                   const options = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: `{"roomId":"${selectedRoomDetail.roomDetail._id}","userId":"${userId}","bookingDate":"${new Date()}","checkIn":"${selectedRoomDetail.CheckInDate}","checkOut":"${ selectedRoomDetail.CheckOutDate}","noOfBookedRoom":"${selectedRoomDetail.totalNoOfSelectedRoom}","specialRequest":"","totalBillAmmount":"${selectedRoomDetail.totalAmmount}","ammountPaid":"${selectedRoomDetail.totalAmmount}","balanceRemaining":0}`
                  };
                  
                  fetch('http://localhost:9000/hotel/v1/booking/', options)
                    .then(response => response.json())
                    .then(response => console.log(response))
                    .catch(err => console.error(err));
                }
                
            })
            .catch(err => console.error(err));
    }   
    
 
function rmvemlerror(){
    document.querySelector('.email-error').innerHTML="";
}

function removecarderror(){
    document.querySelector('.card-error').innerHTML="";
}
function removenameerror(){
    document.querySelector('.name-error').innerHTML="";
}
function removelname(){
    document.querySelector('.lname-error').innerHTML="";
}
function removemobileerror(){
    document.querySelector('.mobile-error').innerHTML="";
}
function removeaddrerror(){
    document.querySelector('.address-error').innerHTML="";
}
function montherror(){
    document.querySelector('.card-error').innerHTML="";
}
function yearerror(){
    document.querySelector('.card-error').innerHTML="";
}
