function subscribe() {
  document.getElementById("name").innerHTML = "Ali";
  document.getElementById("btn").innerHTML = "Read More";
  document.getElementById("btn").style.background = "Red";
}

function like() {
  document.getElementById("like_btn").innerHTML =
    'Liked <i class="fa-solid fa-thumbs-up"></i>';
}
