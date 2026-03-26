const API_URL = "https://your-backend-name.onrender.com";

document.getElementById("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const issue = document.getElementById("issue").value;

  try {
    const response = await fetch(`${API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ issue })
    });

    const data = await response.json();

    document.getElementById("output").innerText = data.message;
  } catch (error) {
    console.error(error);
    document.getElementById("output").innerText = "Error connecting server";
  }
});
