function success(
    rooms = {
        roomDetails: [
            {
                images: [
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772951.jpg?k=7be3c76035b512717ff024bef7791ced523a38b812ca581029b2439a0cc4dfa2&o=",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/f3ac229590c469c342d69b2b61006132.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/5226cd7d93676e1b6e1ef7e395548429.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/0971ab1b5d67c29489b7151956bbaad2.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/5788b183ce15c740959d2a9af894269f.jpg?ce=0&s=1024x768",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772031.jpg?k=954b2bb5975a498173fce8a06176078e09c35aa7e112f4c9c07cc769177379bc&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772028.jpg?k=eda45f324d0aba77b9ef83eb68cb4a878563f1440b9a59afe82963665f6db02e&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772027.jpg?k=89786e157fcb6b8f4605d096a288a5ee47cfa64fe45f469b5f6dd49fe709fd3f&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772032.jpg?k=9dc27ceb3d6c9cd217bae90b22a26f7b5e2da5c5ae88f68f9fefc768fd866063&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772951.jpg?k=7be3c76035b512717ff024bef7791ced523a38b812ca581029b2439a0cc4dfa2&o=",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/f3ac229590c469c342d69b2b61006132.jpg?ce=0&s=1024x768",
                ],
                _id: "62e8d30e7fb53d2a28e7c33c",
                name: "Standard Room",
                description:
                    "Bed Room for couples with balcony having sea view",
                capacityAdult: 2,
                capacityChild: 0,
                noOfRooms: 15,
                pricePerNight: 7400,
                discountPercentge: 5,
                customerRating: 8,
                createdAt: "2022-08-02T07:32:30.082Z",
                updatedAt: "2022-08-02T07:32:30.082Z",
                noOfAvaibleRoom: 15,
                selectedNoOfRooms: 1,
            },
            {
                images: [
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772951.jpg?k=7be3c76035b512717ff024bef7791ced523a38b812ca581029b2439a0cc4dfa2&o=",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/f3ac229590c469c342d69b2b61006132.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/5226cd7d93676e1b6e1ef7e395548429.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/0971ab1b5d67c29489b7151956bbaad2.jpg?ce=0&s=1024x768",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/5788b183ce15c740959d2a9af894269f.jpg?ce=0&s=1024x768",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772031.jpg?k=954b2bb5975a498173fce8a06176078e09c35aa7e112f4c9c07cc769177379bc&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772028.jpg?k=eda45f324d0aba77b9ef83eb68cb4a878563f1440b9a59afe82963665f6db02e&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772027.jpg?k=89786e157fcb6b8f4605d096a288a5ee47cfa64fe45f469b5f6dd49fe709fd3f&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772032.jpg?k=9dc27ceb3d6c9cd217bae90b22a26f7b5e2da5c5ae88f68f9fefc768fd866063&o=",
                    "https://q-xx.bstatic.com/xdata/images/hotel/840x460/375772951.jpg?k=7be3c76035b512717ff024bef7791ced523a38b812ca581029b2439a0cc4dfa2&o=",
                    "https://pix8.agoda.net/hotelImages/108453/549932559/f3ac229590c469c342d69b2b61006132.jpg?ce=0&s=1024x768",
                ],
                _id: "62e8d30e7fb53d2a28e7c33c",
                name: "Standard Room",
                description:
                    "Bed Room for couples with balcony having sea view",
                capacityAdult: 2,
                capacityChild: 0,
                noOfRooms: 15,
                pricePerNight: 7400,
                discountPercentge: 5,
                customerRating: 8,
                createdAt: "2022-08-02T07:32:30.082Z",
                updatedAt: "2022-08-02T07:32:30.082Z",
                noOfAvaibleRoom: 15,
                selectedNoOfRooms: 1,
            },
        ],
        totalAmmount: 10000,
        totalNoOfSelectedRooms: 3,
    }
) {
    document.querySelector(".roomdetails").remove();
    document.querySelector(".selected-room-details-container").remove();
    document.querySelector("#buildAmount").remove();

    var paymentcard = document.createElement("div");
    paymentcard.id = "payment";
    paymentcard.className = "payment";
    let html = "";
    rooms.roomDetails.forEach((roomdetails) => {
        html += buildSelectedRoomCard(roomdetails, rooms.roomDetails.length);
    });
    html += paymentcarddet();
    paymentcard.innerHTML = html;
    document.querySelector(".container-fluid").appendChild(paymentcard);
}
function buildSelectedRoomCard(roomdetails, noOfRooms) {
    return `<div class="card card-change">
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
  </div>`;
}
function paymentcarddet() {
   

    return `<div class="container d-lg-flex">
    
    <div class="box-1 bg-light user">
    <h5></h5>
        <div class="box-inner-1 selectroomcard-container">
        
  
  </div>
    </div>      
    </div>
    <div class="box-2">
        <div class="box-inner-2">
            <div>
                <p class="fw-bold">Payment Details</p>
                <p class="dis mb-3">Complete your purchase by providing your payment details</p>
            </div>
            <form action="">
                <div class="mb-3">
                    <p class="dis fw-bold mb-2">Email address</p>
                    <input class="form-control" type="email" value="luke@skywalker.com">
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
                        <p class="dis fw-bold mb-2">Cardholder name</p>
                        <input class="form-control" type="text">
                    </div>
                    <div class="address">
                        <p class="dis fw-bold mb-3">Billing address</p>
                        <select class="form-select" aria-label="Default select example">
                            <option selected hidden>United States</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">Canada</option>
                        </select>
                        <div class="d-flex">
                            <input class="form-control zip" type="text" placeholder="ZIP">
                            <input class="form-control state" type="text" placeholder="State">
                        </div>
                        <div class=" my-3">
                            <p class="dis fw-bold mb-2">VAT Number</p>
                            <div class="inputWithcheck">
                                <input class="form-control" type="text" value="GB012345B9">
                                <span class="fas fa-check"></span>

                            </div>
                        </div>
                        <div class="d-flex flex-column dis">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>Subtotal</p>
                                <p><span class="fas fa-dollar-sign"></span>33.00</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>VAT<span>(20%)</span></p>
                                <p><span class="fas fa-dollar-sign"></span>2.80</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <p class="fw-bold">Total</p>
                                <p class="fw-bold"><span class="fas fa-dollar-sign"></span>35.80</p>
                            </div>
                            <div class="btn btn-primary mt-2">Pay<span class="fas fa-dollar-sign px-1"></span>35.80
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`;
}
