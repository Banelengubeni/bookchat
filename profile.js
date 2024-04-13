function saveProfile() {
  const profilePicInput = document.getElementById("profile-pic");
  const usernameInput = document.getElementById("username");
  const bioInput = document.getElementById("bio");
  const notificationCheckbox = document.getElementById("notification");

  const profilePic = profilePicInput.files[0];
  const username = usernameInput.value;
  const bio = bioInput.value;
  const notification = notificationCheckbox.checked ? "on" : "off";

  // Display profile information
  document.getElementById("display-username").textContent = username;
  document.getElementById("display-profile-pic").src =
    URL.createObjectURL(profilePic);
  document.getElementById("display-bio").textContent = bio;
  document.getElementById(
    "notification-status"
  ).textContent = `Notification: ${notification}`;

  // Hide profile form and display profile information
  document.getElementById("profile-form").style.display = "none";
  document.getElementById("profile-display").style.display = "block";
}
