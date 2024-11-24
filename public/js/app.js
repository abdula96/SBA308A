document.addEventListener("DOMContentLoaded", async () => {
  const gallery = document.getElementById("gallery");

  try {
    // Attempt to fetch puppies data from the backend API
    const response = await fetch("/api/puppies");

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch puppies. Status code: ${response.status}`
      );
    }

    // Log the raw response to see its content (for debugging purposes)
    const data = await response.json();
    console.log("Fetched puppies:", data);

    // Check if 'message' exists and is an array
    if (data.message && Array.isArray(data.message)) {
      // Clear previous gallery images (if any)
      gallery.innerHTML = "";

      // Loop through each image URL and display them in the gallery
      data.message.forEach((imgUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imgUrl;
        imgElement.alt = "A cute puppy";
        imgElement.classList.add("puppy-img"); // Optional: Add a class for styling
        gallery.appendChild(imgElement);
      });
    } else {
      // If the 'message' isn't in the expected format, log an error
      console.error("Invalid data format received:", data);
    }
  } catch (error) {
    // If there's any error, log it to the console
    console.error("Error fetching puppies:", error);
  }
});
jmg;
