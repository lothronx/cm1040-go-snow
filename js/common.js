$(() => {
  // Get the modal
  var standardModal = document.getElementById("standardTicketModal");
  var groupModal = document.getElementById("groupTicketModal");
  var seasonModal = document.getElementById("seasonTicketModal");

  // Get the button that opens the modal
  var standardBtn = document.getElementById("standardTicketBtn");
  var groupBtn = document.getElementById("groupTicketBtn");
  var seasonBtn = document.getElementById("seasonTicketBtn");

  // When the user clicks the button, open the modal
  standardBtn.onclick = function () {
    standardModal.style.display = "block";
  };
  groupBtn.onclick = function () {
    groupModal.style.display = "block";
  };
  seasonBtn.onclick = function () {
    seasonModal.style.display = "block";
  };

  // Get the <span> element that closes the modal
  var fspan = document.getElementById("fclose");
  var gspan = document.getElementById("gclose");
  var sspan = document.getElementById("sclose");

  // When the user clicks on <span> (x), close the modal
  fspan.onclick = function () {
    standardModal.style.display = "none";
  };
  gspan.onclick = function () {
    groupModal.style.display = "none";
  };
  sspan.onclick = function () {
    seasonModal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == standardModal) {
      standardModal.style.display = "none";
    }
    if (event.target == groupModal) {
      groupModal.style.display = "none";
    }
    if (event.target == seasonModal) {
      seasonModal.style.display = "none";
    }
  };
});

// When the user clicks 'Pay', show this message.
function boughtTicket() {
  alert("Thank you for buying tickets and see you in GoSnow soon!");
}

// Calculate the ticket price.
function updateFinalAmount(price, count) {
  var finalAmount = price * count;
  var finalAmountElement = document.getElementById("finalStandardAmount");
  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}

function updateGroupFinalAmount(price, count) {
  var finalAmount = price * count;
  var finalAmountElement = document.getElementById("finalGroupAmount");
  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}

function updateSeasonFinalAmount(price, count) {
  var finalAmount = price * count;
  var finalAmountElement = document.getElementById("finalSeasonAmount");
  finalAmountElement.innerHTML = "&pound;" + finalAmount;
}
