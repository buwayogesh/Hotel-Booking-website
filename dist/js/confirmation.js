function success() {
    


    document.querySelector('#roomdetails').remove();
    var html = ''
    var paymentcard = document.createElement('div');
    paymentcard.id = "payment";
    paymentcard.className = "payment";
    
    html += paymentcarddet();
    paymentcard.innerHTML = html;
    document.querySelector('.container-fluid').appendChild(paymentcard);
     
    // document.querySelector('.next').addEventListener('click',function(e){
    //  document.querySelector('.payment-card').remove();
    //  var html='';
    //  var selectRoomCard=document.createElement('div');
    //  selectRoomCard.id="selectroomcard";
    //  selectRoomCard.className="selectroomcard";
    //  html += cardchange();
    //  selectRoomCard.innerHTML=html;
    //  document.querySelector('.selectroomcard-container').appendChild(selectRoomCard);
       // })

       
}
function paymentcarddet() {
    return`<div class="container d-lg-flex">
    
    <div class="box-1 bg-light user">
    <h5>Total Price</h5>
        <div class="box-inner-1 selectroomcard-container">
        
        
        <div class="card payment-card w-100 h-50">
  <img src="./assets/hotelimg1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Selected Room Name</h5>
  <p>Selected Room</p>
  <p>Price</p>
  </div>
</div><br/>
<button class='next'>Next</button>
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
</div>`
    
    
}
function cardchange(){
    return `<div class="card card-change mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./assets/hotelimg1.jpg" class="img-fluid rounded-start w-100 h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Selected Room Name</h5>
          <p class="card-text">Selected Room</p>
          <p class="card-text">Price</p>
        </div>
      </div>
    </div>
  </div>`
}