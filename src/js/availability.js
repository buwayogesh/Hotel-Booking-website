<<<<<<< HEAD
=======


>>>>>>> db8e8d0c7f1a92e6093c4a4f9b33dceff0d3aa61
function availability() {
    const checkinDate = new Date(
        document.querySelector(".input-ckeck-in").value
    );
    const checkoutDate = new Date(
        document.querySelector(".input-ckeck-out").value
    );
    document.querySelector("#check-availability").remove();
    document.querySelector(".container-fluid").style.backgroundImage = "none";
    console.log(checkinDate, checkoutDate);
<<<<<<< HEAD

    fetch(
        `http://localhost:9000/hotel/v1/rooms/check-availability/?checkoutDate=${checkoutDate.toISOString()}&checkinDate=${checkinDate.toISOString()}`,
        {
            method: "GET",
        }
    )
        .then((response) => response.json())
        .then((response) => {
            if (response && response.status == "ok") {
                const roomDetailsContainer = document.createElement("div");
                roomDetailsContainer.id = "roomdetails";
                roomDetailsContainer.className = "row container roomdetails";
                let html = "";
                response.rooms.forEach((room) => {
                    html += buildRoomRow(room);
                });
                roomDetailsContainer.innerHTML = html;
                const heroContainer =
                    document.querySelector(".hero-bg-container");
                heroContainer.appendChild(roomDetailsContainer);

                roomDetailsContainer
                    .querySelectorAll(".room-selector")
                    .forEach((node) => {
                        node.addEventListener("click", (e) => {
                            e.stopPropagation();
                            let currentNoOfRooms = Number(
                                e.target.parentElement.querySelector(
                                    ".no-of-rooms"
                                ).textContent
                            );
                            // TODO check there is div for adding or updating final room selection
                            let selectedRoomDetailsContainer =
                                heroContainer.querySelector(
                                    ".selected-room-details-container"
                                );
                            if (!selectedRoomDetailsContainer) {
                                selectedRoomDetailsContainer =
                                    document.createElement("div");
                                selectedRoomDetailsContainer.className =
                                    "selected-room-details-container";
                                heroContainer.appendChild(
                                    selectedRoomDetailsContainer
                                );
                                let TotalDetails = buildTotalAmount();
                                const allDetails =
                                    document.createElement("div");
                                allDetails.innerHTML = TotalDetails;
                                heroContainer.appendChild(allDetails);
                            }
                            const selectedRoomId =
                                e.target.closest(".card")?.dataset?.roomId;

                            if (e.target.dataset.id == "plus") {
                                e.target.parentElement.querySelector(
                                    ".no-of-rooms"
                                ).textContent = currentNoOfRooms + 1;
                                if (selectedRoomId) {
                                    const selectedRoom =
                                        selectedRoomDetailsContainer.querySelector(
                                            `#room-${selectedRoomId}`
                                        );
                                    if (selectedRoom) {
                                        const roomPriceNode =
                                            selectedRoom.querySelector(
                                                ".selected-room-prize"
                                            );
                                        roomPriceNode.textContent =
                                            (Number(roomPriceNode.textContent) /
                                                currentNoOfRooms) *
                                            (currentNoOfRooms + 1);
                                        document.querySelector(
                                            "#totalAmount"
                                        ).textContent =
                                            (Number(roomPriceNode.textContent) /
                                                currentNoOfRooms) *
                                            (currentNoOfRooms + 1);
                                    } else {
                                        const room = response.rooms.find(
                                            (room) =>
                                                room._id === selectedRoomId
                                        );
                                        let selectedRoomHTML =
                                            buildSelectedRoom(room);
                                        selectedRoomHTML +=
                                            buildTotalAmount(room);
                                        const el =
                                            document.createElement("div");
                                        el.innerHTML = selectedRoomHTML.trim();
                                        selectedRoomDetailsContainer.appendChild(
                                            el.firstChild
                                        );
                                    }
                                }
                            } else {
                                e.target.parentElement.querySelector(
                                    ".no-of-rooms"
                                ).textContent = currentNoOfRooms - 1;
                                if (selectedRoomId) {
                                    const selectedRoom =
                                        selectedRoomDetailsContainer.querySelector(
                                            `#room-${selectedRoomId}`
                                        );
                                    if (selectedRoom) {
                                        if (currentNoOfRooms == 1) {
                                            selectedRoom.remove();
                                        } else {
                                            const roomPriceNode =
                                                selectedRoom.querySelector(
                                                    ".selected-room-prize"
                                                );
                                            roomPriceNode.textContent =
                                                (Number(
                                                    roomPriceNode.textContent
                                                ) /
                                                    currentNoOfRooms) *
                                                (currentNoOfRooms - 1);
                                        }
                                    }
                                }
                            }
                        });
                    });
            }
        })
        .catch((err) => console.error(err));
}
function buildTotalAmount() {
    return `
        <div id="buildAmount">
            <span>Total Amount</span>
            <span id="totalamount></span>
=======
    fetch(`http://localhost:9000/hotel/v1/rooms/check-availability/?checkoutDate=${checkoutDate.toISOString()}&checkinDate=${checkinDate.toISOString()}`, {method: 'GET'})
    .then(response => response.json())
    .then(response => {
        if (response && response.status == 'ok') {
            var selectedRoomDetail = {
                "roomDetail" : [],
                "totalAmmount" : 0,
                "totalNoOfSelectedRoom" : 0
            }
            console.log(selectedRoomDetail);
            const roomDetailsContainer = document.createElement('div');
            roomDetailsContainer.id = 'roomdetails';
            roomDetailsContainer.className = 'row container roomdetails';
            let html = '';
            response.rooms.forEach(room => {
                html += buildRoomRow(room);
            });
            roomDetailsContainer.innerHTML = html;
            const heroContainer = document.querySelector('.hero-bg-container')
            heroContainer.appendChild(roomDetailsContainer);
            
            roomDetailsContainer.querySelectorAll('.room-selector').forEach(node => {
                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let currentNoOfRooms = Number(e.target.parentElement.querySelector('.no-of-rooms').textContent);
                    // TODO check there is div for adding or updating final room selection
                    let selectedRoomDetailsContainer = heroContainer.querySelector('.selected-room-details-container');
                    if (!selectedRoomDetailsContainer) {
                        selectedRoomDetailsContainer = document.createElement('div');
                        selectedRoomDetailsContainer.className = 'selected-room-details-container';
                        heroContainer.appendChild(selectedRoomDetailsContainer);
                        let TotalDetails = buildTotalAmount();
                        const allDetails = document.createElement("div");
                        allDetails.innerHTML = TotalDetails;
                        heroContainer.appendChild(allDetails); 
                    }
                    const selectedRoomId = e.target.closest('.card')?.dataset?.roomId;
                    const totalAmmountElement = heroContainer.querySelector('#totalamount');
                    const totalRoomSelected = heroContainer.querySelector('#totalroom');
                   
                   
                    if (e.target.dataset.id == 'plus') {
                        e.target.parentElement.querySelector('.no-of-rooms').textContent = currentNoOfRooms+1;
                        // console.log(count);
                        if (selectedRoomId) {
                            const selectedRoom = selectedRoomDetailsContainer.querySelector(`#room-${selectedRoomId}`);
                            let currentRoomPrice = 0;
                            if (selectedRoom) {
                                const roomPriceNode = selectedRoom.querySelector('.selected-room-prize');
                                currentRoomPrice = (Number(roomPriceNode.textContent)/currentNoOfRooms)
                                roomPriceNode.textContent = (Number(roomPriceNode.textContent)/currentNoOfRooms) * (currentNoOfRooms+1);
                                numberofRoom = currentNoOfRooms+1;
                                // selectedRoomDetail.roomDetail.numberofSelectedRoom = currentNoOfRooms+1;
                                const roomObj = selectedRoomDetail.roomDetail.find(obj => obj._id == selectedRoomId);
                                if (roomObj) {
                                    roomObj.selectedNoOfRooms = currentNoOfRooms + 1;
                                }
                                totalRoomSelected.textContent = Number(totalRoomSelected.textContent) + ((currentNoOfRooms + 1)- currentNoOfRooms);
                                selectedRoomDetail.totalNoOfSelectedRoom = currentNoOfRooms + 1
                            
                            } else {
                                const room = response.rooms.find((room) => room._id === selectedRoomId);
                                let selectedRoomHTML = buildSelectedRoom(room);
                                const el = document.createElement("div");
                                el.innerHTML = selectedRoomHTML.trim();
                                selectedRoomDetailsContainer.appendChild(el.firstChild);
                                currentRoomPrice = room.pricePerNight;
                                // numberofSelectedRoom = currentNoOfRooms+1
                                selectedRoomDetail.roomDetail.push(Object.assign({}, {
                                    capacityAdult: room.capacityAdult,
                                    capacityChild: room.capacityChild,
                                    customerRating: room.customerRating,
                                    description: room.description,
                                    discountPercentge: room.discountPercentge,
                                    images: room.images,
                                    name: room.name,
                                    noOfAvaibleRoom: room.noOfAvaibleRoom,
                                    noOfRooms: room.noOfRooms,
                                    pricePerNight: room.pricePerNight,
                                    _id: room._id
                                }, {selectedNoOfRooms: currentNoOfRooms+1}));
                                totalRoomSelected.textContent = Number(totalRoomSelected.textContent) + (currentNoOfRooms + 1);
                            }
                            totalAmmountElement.textContent = Number(totalAmmountElement.textContent) + currentRoomPrice;
                            let amount = totalAmmountElement.textContent;
                            selectedRoomDetail.totalAmmount = amount;
                            let totalroom = totalRoomSelected.textContent;
                            selectedRoomDetail.totalNoOfSelectedRoom = totalroom;
                        }
                    } else {
                        e.target.parentElement.querySelector('.no-of-rooms').textContent = currentNoOfRooms-1;
                        if (selectedRoomId) {
                            const selectedRoom = selectedRoomDetailsContainer.querySelector(`#room-${selectedRoomId}`)
                            if (selectedRoom) {
                                if(currentNoOfRooms == 1) {
                                    const roomPriceNode = selectedRoom.querySelector('.selected-room-prize')
                                    totalAmmountElement.textContent = Number(totalAmmountElement.textContent)-Number(roomPriceNode.textContent);
                                    let amount = totalAmmountElement.textContent
                                    let roomindex = selectedRoomDetail.roomDetail.findIndex(object => object._id == selectedRoomId)
                                    selectedRoomDetail.roomDetail.splice(roomindex,1);
                                    selectedRoomDetail.totalAmmount = amount;
                                    totalRoomSelected.textContent = Number(totalRoomSelected.textContent)-1;
                                    let totalroom = totalRoomSelected.textContent;
                                    selectedRoomDetail.totalNoOfSelectedRoom = totalroom;
                                
                                    selectedRoom.remove();
                                    
                                }else{
                                    const roomPriceNode = selectedRoom.querySelector('.selected-room-prize');
                                    roomPriceNode.textContent = (Number(roomPriceNode.textContent)/currentNoOfRooms) * (currentNoOfRooms - 1);
                                    const currentRoomPrice = (Number(roomPriceNode.textContent)/(currentNoOfRooms - 1))
                                    totalAmmountElement.textContent = Number(totalAmmountElement.textContent) - currentRoomPrice;
                                    let amount = totalAmmountElement.textContent;
                                    selectedRoomDetail.totalAmmount = amount;
                                    const roomObj = selectedRoomDetail.roomDetail.find(obj => obj._id == selectedRoomId);
                                    if (roomObj) {
                                        roomObj.selectedNoOfRooms = currentNoOfRooms - 1;
                                    }
                                    totalRoomSelected.textContent = Number(totalRoomSelected.textContent)-((currentNoOfRooms) - (currentNoOfRooms-1));
                                    let totalroom = totalRoomSelected.textContent;
                                    selectedRoomDetail.totalNoOfSelectedRoom = totalroom;
                                }
                            }
                        }
                    }

                });
            }) 
            
        }
       
    })
    .catch(err => console.error(err));
    
}
function buildTotalAmount () {
    return`
        <div>
            <div>
                <span>Total Amount</span>
                <span id="totalamount"></span>
            </div>
            <div>
                <span>Total Room Selected</span>
                <span id="totalroom"></span>
            </div>
            <div>
                <button type="submit" onclick="success(selectedRoomDetail)" id="btn-next">Next</button>
            </div>
>>>>>>> db8e8d0c7f1a92e6093c4a4f9b33dceff0d3aa61
        </div>
        <div>
        <button type="button" class="btn btn-primary" onclick="success()">Next</button>
        </div>
    `;
}

function buildRoomRow(roomDetails) {
    roomDetails.selectedNoOfRooms = 0;
    return `
        <div class="card roomrow" data-room-id="${roomDetails._id}">
            <div class="card-header text-center fs-4 fw-semibold">${
                roomDetails.name
            }</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="mw-100 image-container"><img class="mw-100" src="${
                            roomDetails.images[0]
                        }" alt="room image" /></div>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${
                                roomDetails.images[1]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[2]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[3]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[4]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[5]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[6]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[7]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[8]
                            }" class="d-block w-100" alt="room image">
                          </div>
                          <div class="carousel-item">
                            <img src="${
                                roomDetails.images[9]
                            }" class="d-block w-100" alt="room image">
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
                        ${(function () {
                            let html = "<ul>";
                            roomDetails.features.forEach(
                                (feature) =>
                                    (html +=
                                        '<li class="card-text">' +
                                        feature +
                                        "</li>")
                            );
                            html += "</ul>";
                            return html;
                        })()}
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle">Bath and Toilet Accessories</h5>
                        ${(function () {
                            let html = "<ul>";
                            roomDetails.bathroomAccessories.forEach(
                                (feature) =>
                                    (html +=
                                        '<li class="card-text">' +
                                        feature +
                                        "</li>")
                            );
                            html += "</ul>";
                            return html;
                        })()}
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle">Entertainment</h5>
                        ${(function () {
                            let html = "<ul>";
                            roomDetails.entertainment.forEach(
                                (feature) =>
                                    (html +=
                                        '<li class="card-text">' +
                                        feature +
                                        "</li>")
                            );
                            html += "</ul>";
                            return html;
                        })()}
                    </div>
                    <div class="col-3">
                        <h5 class="card-tittle">Other</h5>
                        ${(function () {
                            let html = "<ul>";
                            roomDetails.comforts.forEach(
                                (feature) =>
                                    (html +=
                                        '<li class="card-text">' +
                                        feature +
                                        "</li>")
                            );
                            html += "</ul>";
                            return html;
                        })()}
                    </div>
                </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-around">
                <span class="float-right">Price per night ${
                    roomDetails.pricePerNight
                }
                </span>
                <div>
                    <button class="room-selector" data-id="minus">−</button>
                    <span class="no-of-rooms">0</span>
                    <button class="room-selector" data-id="plus">+</button>
                </div>
                    
            </div>
        </div>
    `;
}

function buildSelectedRoom(roomDetails) {
    return `
    <div class="row" id="room-${roomDetails._id}">
        <div class="container">
            <div class="card selected-room" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item " id="first-room-image">
                        <div>
                            <img class="mw-100 selected-room-image" src="${roomDetails.images[0]}" alt="room image"/>
                            <span class="selected-room-name">${roomDetails.name}</span>
                            <span class="selected-room-prize">${roomDetails.pricePerNight}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
<<<<<<< HEAD
    `;
}
=======
    `
}    
>>>>>>> db8e8d0c7f1a92e6093c4a4f9b33dceff0d3aa61
