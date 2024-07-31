import axios from "axios";

const apiUrl =
  "https://api.themoviedb.org/3/discover";
const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzRhM2RiODkzYjgxYTViZDBkMDNhNjY1ZmUwODc4MiIsIm5iZiI6MTcyMjQ0MDYwMi4xMTc3NDQsInN1YiI6IjY2YThlODM3ZTY4ZjQyMGUxMzkzM2EyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AEFywA9SL7c9k-h7QJJ87e2i6HXxvR0CXkSlcHyqe8Y`;

const apiCall = async (method, endpoint, data, config = {}) => {
  const url = `${apiUrl}/${endpoint}`;

  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  // Include authentication token in headers if provided
  // if (authToken) {
  //   defaultConfig.headers["Authorization"] = `Bearer ${authToken}`;
  // }
  //   console.log(authToken);

  try {
    const response = await axios({
      method,
      url,
      data,
      ...defaultConfig,
      ...config,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Corrected to return response.data
    } else {
      const errorDetails = {
        status: response.status,
        message: response.data.message || "Something went wrong",
      };
      throw new Error(JSON.stringify(errorDetails));
    }
  } catch (error) {
    console.error("API Error:", error.message);
    throw error; // Rethrow the error to propagate it up
  }
};

export default apiCall;
