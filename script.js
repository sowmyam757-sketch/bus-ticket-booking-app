let selectedSeat = "";

function showScreen(screenId){

    let screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen){
        screen.classList.add("hidden");
    });

    document.getElementById(screenId).classList.remove("hidden");
}

function selectSeat(seatNumber){

    selectedSeat = seatNumber;

    document.getElementById("selectedSeatText").innerHTML =
        "Selected Seat: " + seatNumber;

    let seats = document.querySelectorAll(".seat");

    seats.forEach(function(btn){
        btn.classList.remove("selected");
    });

    event.target.classList.add("selected");
}

function bookTicket(){

    if(selectedSeat === ""){
        alert("Please select a seat first!");
        return;
    }

    document.getElementById("finalSeat").innerHTML = selectedSeat;

    showScreen("summaryScreen");
}