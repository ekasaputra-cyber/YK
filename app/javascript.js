function showPopup(imageSrc, title) {
  document.getElementById("popupImage").src = imageSrc;
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
