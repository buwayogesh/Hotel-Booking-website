function success() {
    document.querySelector('#roomdetails').remove();
    var html = ''
    var paymentcard = document.createElement('div');
    paymentcard.id = "payment";
    paymentcard.className = "payment";
    html += paymentcarddet();
    paymentcard.innerHTML = html;
    document.querySelector('.container-fluid').appendChild(paymentcard);
}
function paymentcarddet() {
    return`<div class="container d-lg-flex">
    <div class="box-1 bg-light user">
        <div class="box-inner-1 pb-3 mb-3 ">
            <div class="d-flex justify-content-between mb-3 userdetails">
                <p class="fw-bold">Lightroom Presets</p>
                <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>33.00+</p>
            </div>
            <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                data-bs-interval="2000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            class="d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            class="d-block w-100 h-100">
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            class="d-block w-100">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                    <div class="icon">
                        <span class="fas fa-arrow-left"></span>
                    </div>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                    <div class="icon">
                        <span class="fas fa-arrow-right"></span>
                    </div>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <p class="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                sed officiis odio
            </p>
             
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