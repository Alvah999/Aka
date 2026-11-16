
const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

function addMessage(text, sender) {
  const div = document.createElement("div");

  div.className = `message ${sender}`;
  div.textContent = text;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  const button = form.querySelector("button");
  button.disabled = true;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    addMessage(data.reply, "aka");

  } catch (error) {
    addMessage("Error: " + error.message, "aka");
  } finally {
    button.disabled = false;
    input.focus();
  }
});
