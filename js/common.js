

  $(function () {
        $("#header").load("header-and-footer/header.html");
        $("#footer").load("header-and-footer/footer.html");
          
        // Get the modal
        var modal = document.getElementById("standardTicketModal");

        // Get the button that opens the modal
        var btn = document.getElementById("standardTicketBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        
        var closeFooter = document.getElementsByClassName("close")[0];    
  
        closeFooter.onclick = function(){
        var div = document.getElementById("#bottom-ad");
        div.style.display = "none";
        setTimeout(function(){ div.style.display = "none"; }, 600);
      }
  });
      function boughtStandardTicket()
    {
        alert("Thank you and see you soon!");
    }
