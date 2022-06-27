$(function () {
  // Get the modal
  var modal = document.getElementById("standardTicketModal");
  var groupModal = document.getElementById("groupTicketModal");
  var seasonModal = document.getElementById("seasonTicketModal");

  // Get the button that opens the modal
  var btn = document.getElementById("standardTicketBtn");
  var groupBtn = document.getElementById("groupTicketBtn");
  var seasonBtn = document.getElementById("seasonTicketBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementById("fclose");
  var gspan = document.getElementById("gclose");
  var sspan = document.getElementById("sclose");

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  groupBtn.onclick = function () {
    groupModal.style.display = "block";
  };
  seasonBtn.onclick = function () {
    seasonModal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  gspan.onclick = function () {
    groupModal.style.display = "none";
  };
  sspan.onclick = function () {
    seasonModal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == groupModal) {
      groupModal.style.display = "none";
    }
    if (event.target == seasonModal) {
      seasonModal.style.display = "none";
    }
  };
});

function boughtStandardTicket() {
  alert("Thank you for buying standard tickets and see you soon!");
}

function boughtGroupTicket() {
  alert("Thank you for buying Group tickets and see you soon!");
}

function boughtSeasonTicket() {
  alert("Thank you for buying season tickets and see you soon!");
}

function updateFinalAmount(price, count) {
  var finalAmount = price * count;

  var finalAmountElement = document.getElementById("finalAmount");

  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}

function updateGroupFinalAmount(count) {
  var finalAmount = 24 * count;

  var finalAmountElement = document.getElementById("finalGroupAmount");

  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}

function updateSeasonFinalAmount(count) {
  var finalAmount = 240 * count;

  var finalAmountElement = document.getElementById("finalSeasonAmount");

  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}
