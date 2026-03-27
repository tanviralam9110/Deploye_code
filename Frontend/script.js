const API_URL = "https://deploye-code.onrender.com";

document.getElementById("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const issue = document.getElementById("issue").value;
  const output = document.getElementById("output");

  output.style.display = "block";
  output.innerText = "Please wait, connecting to server...";

  try {
    const response = await fetch(`${API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, issue })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    output.innerText = `Hello ${name}, ${data.message}`;

  } catch (error) {
    console.error(error);
    output.innerText = "Error connecting to server. Please try again in 30 seconds (server may be waking up).";
  }
});
