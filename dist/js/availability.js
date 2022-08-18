function availability() {
    const checkinDate = new Date(
        document.querySelector(".input-ckeck-in").value
    );
    
    const checkoutDate = new Date(
        document.querySelector(".input-ckeck-out").value
    );
    
    var numberOfDays = (checkoutDate-checkinDate)/(1000*3600*24);
    document.querySelector("#check-availability").remove();
    document.querySelector(".container-fluid").style.backgroundImage = "none";
    console.log(checkinDate, checkoutDate);
    fetch(`http://localhost:9000/hotel/v1/rooms/check-availability/?checkoutDate=${checkoutDate.toISOString()}&checkinDate=${checkinDate.toISOString()}`, {method: 'GET'})
    .then(response => response.json())
    .then(response => {
        if (response && response.status == 'ok') {
            window.selectedRoomDetail = {
                "roomDetail" : [],
                "totalAmmount" : 0,
                "totalNoOfSelectedRoom" : 0,
                "NumberOfDays" : 0,
                "CheckInDate" : 0,
                "CheckOutDate" : 0
            }
            console.log(selectedRoomDetail);
            const roomDetailsContainer = document.createElement('div');
            roomDetailsContainer.id = 'roomdetails';
            roomDetailsContainer.className = 'row';
            let html = '<div class="col-12">';
            response.rooms.forEach((room, index) => {
                html += buildRoomRow(room, index);
            });
            html += '</div>';
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
                    const totaldays = numberOfDays;
                    selectedRoomDetail.NumberOfDays = totaldays;
                    let check_in = checkinDate;
                    selectedRoomDetail.CheckInDate = check_in;
                    let check_out = checkoutDate;
                    selectedRoomDetail.CheckOutDate = check_out;
                   
                   
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
                        if(currentNoOfRooms <= 0){
                            e.target.parentElement.querySelector('.no-of-rooms').textContent = 0
                        };
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
function buildTotalAmount() {
    return`
    <div class="card w-25">
        <div class="card-body" id="buildAmount">
            <div>
                <span>Total Amount</span>
                <span id="totalamount"></span>
            </div>
            <div>
                <span>Total Room</span>
                <span id="totalroom"></span>
            </div>
            <button type="submit" class="btn btn-primary" id="btn-next" onclick="success(selectedRoomDetail)">Next</button>
        </div>
    </div>  
    `
}

function buildRoomRow(roomDetails, index) {
    roomDetails.selectedNoOfRooms = 0;
    return `
    <div class="row">
  <div class="col-12">
        <div class="card" data-room-id="${roomDetails._id}">
            <div class="card-header text-center fs-3 fw-bold">${roomDetails.name}</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="mw-100 image-container"><img class="mw-100" src="${
                            roomDetails.images[0]
                        }" alt="room image" /></div>
                        <div id="carouselControls-${index}" class="carousel slide mt-2" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${
                                    (function(){
                                        return roomDetails.images.map((img, index) => {
                                            return `<div class="carousel-item ${index == 0 ? 'active': ''}"><img class="d-block mw-100" src="${img}" alt="room image" /></div>`
                                        }).join('');
                                    })()
                                }
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls-${index}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselControls-${index}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div> 
                        </div>
                    </div>
                    <div class="col-2">
                        <h5 class="card-tittle fw-Semibold">Features</h5>
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
                        <h5 class="card-tittle fw-Semibold">Bath and Toilet Accessories</h5>
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
                        <h5 class="card-tittle fw-Semibold">Entertainment</h5>
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
                        <h5 class="card-tittle fw-Semibold">Other</h5>
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
                <span class="float-right fw-bold">Price per night ${
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
        </div>
        </div>
    `
}


function buildSelectedRoom(roomDetails){
    return`
    <div class="card mb-2 mt-2" id="room-${roomDetails._id}" style="max-width: 540px;">
        <div class="row g-0 selected-room">
            <div class="col-md-4">
                <img src="${roomDetails.images[0]}" class="img-fluid rounded-start selected-room-image" alt="room image">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title selected-room-name">${roomDetails.name}</h5>
                    <span class="selected-room-prize">${roomDetails.pricePerNight}</span>
                </div>
            </div>
        </div>
    </div>
    `
}    

function TotalRoomSelection(){
    return`
        <div class="totalselection container">
            <span>Total Amount</span>
            <span class="totalsel"></span>
        </div>
        <div class="totalroomselection">
            <span>Total Room Selected</span>
            <span class="totalroomsel"></span>
        </div>
    `
}