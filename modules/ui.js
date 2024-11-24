const displayPuppies = (puppies) => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear previous images

  if (puppies.length === 0) {
    gallery.innerHTML = "<p>No puppies to display!</p>"; // Display a message if no puppies were fetched
    return;
  }

  // Loop through each puppy image and append it to the gallery
  puppies.forEach((puppy) => {
    const imgElement = document.createElement("img");
    imgElement.src = puppy;
    imgElement.alt = "Cute Puppy";
    gallery.appendChild(imgElement);
  });
};
module.exports = { displayPuppies };
asdax;
