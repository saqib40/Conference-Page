const btn = document.querySelector('button');
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

btn.addEventListener('click', function(event) {
  if (!event.target.matches('.DropDown1')) {
    let dropdowns = document.getElementsByClassName("content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
})