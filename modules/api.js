const getPuppies = async (page = 1) => {
  const apiUrl = `https://dog.ceo/api/breeds/image/random/12`; // Fetch 12 random images

  try {
    const response = await axios.get(apiUrl);

    // Log the full response and check data
    console.log("API Response:", response); // Full response object
    console.log("Response Status:", response.status); // HTTP status code
    console.log("Response Data:", response.data); // Actual data from the API

    return response.data.message; // Return the array of image URLs
  } catch (error) {
    console.error("Error fetching puppy data:", error);
    return []; // Return an empty array if there's an error
  }