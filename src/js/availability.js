
function availability() {
    const checkinDate = new Date(document.querySelector('.input-ckeck-in').value);
    const checkoutDate = new Date(document.querySelector('.input-ckeck-out').value);
    document.querySelector('#check-availability').remove();
    document.querySelector('.container-fluid').style.backgroundImage = 'none';
    console.log(checkinDate, checkoutDate);
    fetch(`http://localhost:9000/hotel/v1/rooms/check-availability/?checkoutDate=${checkoutDate.toISOString()}&checkinDate=${checkinDate.toISOString()}`, {method: 'GET'})
    .then(response => response.json())
    .then(response => {
        if (response && response.status == 'ok') {
            const roomDetailsContainer = document.createElement('div');
            roomDetailsContainer.id = 'roomdetails';
            roomDetailsContainer.className = ' container  roomdetails';
            let html = '';
            response.rooms.forEach(room => {
                html += buildRoomRow(room);
                
            });
            html += selectroom();
            roomDetailsContainer.innerHTML = html;
            document.querySelector('.hero-bg-container').appendChild(roomDetailsContainer);
            roomDetailsContainer.querySelectorAll('.room-selector').forEach(node => {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let currentNoOfRooms = Number(e.target.parentElement.querySelector('.no-of-rooms').textContent);
                    if (e.target.dataset.id == 'plus') {
                        e.target.parentElement.querySelector('.no-of-rooms').textContent = currentNoOfRooms+1;
                    } else {
                        e.target.parentElement.querySelector('.no-of-rooms').textContent = currentNoOfRooms-1;
                    }
                });
            })
            
        }
    })
    .catch(err => console.error(err));
    
}

function buildRoomRow(roomDetails) {
    roomDetails.selectedNoOfRooms = 0;
    return `
        <div class="card">
            <div class="card-header text-center fs-4 fw-semibold">${roomDetails.name}</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="mw-100 image-container"><img class="mw-100" src="${roomDetails.images[0]}" alt="room image" /></div>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${roomDetails.images[1]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[2]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[3]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[4]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[5]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[6]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[7]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[8]}" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${roomDetails.images[9]}" class="d-block w-100" alt="room image">
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle">Features</h5>
                        ${
                            (function() {
                                let html = '<ul>';
                                roomDetails.features.forEach(feature =>
                                    html += '<li class="card-text">' + feature +'</li>'
                                )
                                html += '</ul>'
                                return html;
                            })()
                        }
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle">Bath and Toilet Accessories</h5>
                        ${
                            (function() {
                                let html = '<ul>';
                                roomDetails.bathroomAccessories.forEach(feature =>
                                    html += '<li class="card-text">' + feature +'</li>'
                                )
                                html += '</ul>'
                                return html;
                            })()
                        }
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle">Entertainment</h5>
                        ${
                            (function() {
                                let html = '<ul>';
                                roomDetails.entertainment.forEach(feature =>
                                    html += '<li class="card-text">' + feature +'</li>'
                                )
                                html += '</ul>'
                                return html;
                            })()
                        }
                    </div>
                    <div class="col-3">
                        <h5 class="card-tittle">Other</h5>
                        ${
                            (function() {
                                let html = '<ul>';
                                roomDetails.comforts.forEach(feature =>
                                    html += '<li class="card-text">' + feature +'</li>'
                                )
                                html += '</ul>'
                                return html;
                            })()
                        }
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-around">
                <span class="float-right">Price per night ${roomDetails.pricePerNight}
                </span>
                <div>
                    <button class="room-selector" data-id="minus">−</button>
                    <span class="no-of-rooms">0</span>
                    <button class="room-selector" data-id="plus">+</button>
                </div>
            
            </div>
        </div>
    `
}
function ckeckroom(){
    let totalroom = document.querySelector('.no-of-rooms').value;
    if(totalroom>0){
        
    }
}
function selectroom(){
    return`<div class="card" style="width: 18rem;">
    <h3>Selected Room</h3>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" id="first-room-image">
        <div>
            <img class="mw-100" src="" alt="room image"/>
            <span class="selected-room-name">roomname</span>
            <span class="selected-room-prize">roomprize</span>
        </div>
        </li>
        <li class="list-group-item" id="second-room-image">
            <img class="mw-100" src="" alt="room image"/>
            <span class="selected-room-name">roomname</span>
            <span class="selected-room-prize">roomprize</span>
        </li>
        <li class="list-group-item" id="third-room-image">
            <img class="mw-100" src="" alt="room image"/>
            <span class="selected-room-name">roomname</span>
            <span class="selected-room-prize">roomprize</span>
        </li>
    </ul>
    <div class="card-footer">
        <span class="total-amount">Total Amount</span>
        <span class="total-Prize"></span>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button" onclick="success()">Next</button>
    </div>
</div>`
}
       
