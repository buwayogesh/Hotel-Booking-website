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
                                <input class="form-control phone" type="text" value="GB012345B9">
                                <span class="fas fa-check"></span>

                            </div>
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

    // return`
    //     <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    //         <symbol id="check-circle-fill" viewBox="0 0 16 16">
    //             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    //         </symbol>
    //         <symbol id="info-fill" viewBox="0 0 16 16">
    //             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    //         </symbol>
    //         <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
    //             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    //         </symbol>
    //     </svg>
    //     <div class="alert alert-success d-flex align-items-center" role="alert">
    //         <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
    //         <div>
    //             Your Rooms Are Booked!!!
    //         </div>
    //     </div>
    // `
}
