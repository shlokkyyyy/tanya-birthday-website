function toggleMessage() {
  const message = document.getElementById("personal-message");
  message.style.display = message.style.display === "none" || message.style.display === "" ? "block" : "none";
}
