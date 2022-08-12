function success(selectedRoomDetail) {
    
    document.querySelector(".roomdetails").remove();
    document.querySelector(".selected-room-details-container").remove();
    document.querySelector("#buildAmount").remove();

    var paymentcard = document.createElement("div");
    paymentcard.id = "payment";
    paymentcard.className = "payment card w-50 d-flex justify-content-between";
    let html = "";
    selectedRoomDetail.roomDetail.forEach((roomdetails) => {
        html += buildSelectedRoomCard(roomdetails, selectedRoomDetail.roomDetail.length);
    });
    html += paymentcarddet();
    paymentcard.innerHTML = html;
    document.querySelector(".container-fluid").appendChild(paymentcard);
}
function buildSelectedRoomCard(roomdetails, noOfRooms) {
    return `
    <div class="card card-change w-50">
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
   

    return `<div class="box-2 card w-50">
        <div class="box-inner-2">
            <div>
                <p class="fw-bold">Payment Details</p>
                <p class="dis mb-3">Complete your purchase by providing your payment details</p>
            </div>
            <form action="">
                <div class="mb-3">
                    <p class="dis fw-bold mb-2">Email address</p>
                    <input class="form-control email" type="email" value="luke@skywalker.com">
                </div>
                <div>
                    <p class="dis fw-bold mb-2">Card details</p>
                    <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                        <div class="fab fa-cc-visa ps-3"></div>
                        <input type="text" class="form-control" placeholder="Card Details">
                        <div class="d-flex w-50">
                            <input type="text" class="form-control px-0" placeholder="MM/YY">
                            <input type="password" maxlength=3 class="form-control px-0" placeholder="CVV">
                        </div>
                    </div>
                    <div class="my-3 cardname">
                        <p class="dis fw-bold mb-2">First Name</p>
                        <input class="form-control name" type="text">
                    </div>
                    <div class="my-3 cardname">
                    <p class="dis fw-bold mb-2">Last Name</p>
                    <input class="form-control lname" type="text">
                </div>
                    <div class="baddress">
                        <p class="dis fw-bold mb-3">Address</p>
                        <input class="form-control address" type="text">
                        </div>
                        <div class=" my-3">
                            <p class="dis fw-bold mb-2">VAT Number</p>
                            <div class="inputWithcheck">
                                <input class="form-control" type="text" value="GB012345B9">
                                <span class="fas fa-check"></span>

                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total Room Selected</p>
                                <p class="fw-bold">${selectedRoomDetail.totalNoOfSelectedRoom}</p>
                            </div>
                        
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total</p>
                                <p class="fw-bold">${selectedRoomDetail.totalAmmount}</p>
                            </div>
                            <div class="btn btn-primary mt-2 pay" onclick="registerUser()">Pay</div>
                        </div>
            
                </div>
            </form>
        </div>
    </div>
</div>`;
}

function registerUser(){
    var name= document.querySelector('.name').value;
    var lastname=document.querySelector('.lname').value
    var email= document.querySelector('.email').value;
    var address=document.querySelector('.address').value;
    //console.log(name,email,address);

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: `{"first_name":"${name}","last_name":"${lastname}","email":"${email}","address":"${address}"}`
      };
      
      fetch('http://localhost:9000/hotel/v1/register/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
      
}