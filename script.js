
function openNav() {
    document.getElementById("sideNav").innerHTML = `
                   <a href="index.html" class="close" id="close" onclick="closeNav()">&#10006</a>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="https://www.heroinesinc.org/about">About</a></li>
                    <li><a href="https://www.heroinesinc.org/events">Events</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="https://www.heroinesinc.org/join">join</a></li>
                    <li><a href="https://www.heroinesinc.org/copy-of-contact">Contact</a></li>
                    <li><a href="https://www.heroinesinc.org/members">Members</a></li>
    `
    document.getElementById("").style.width = "0%"
  }
  function closeNav() {
    document.getElementById("sideNav").style.width = '0%'
  }
  
  