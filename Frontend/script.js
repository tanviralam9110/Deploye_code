document.getElementById("form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const issue = document.getElementById("issue").value;

  const response = await fetch("http://localhost:8080/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ issue })
  });

  const data = await response.json();

  document.getElementById("output").innerText = data.message;
});