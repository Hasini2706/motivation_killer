const API_URL = "https://weathered-glade-013e.m-tejohasini.workers.dev";

async function killMotivation() {
  const input = document.getElementById("quoteInput").value;

  if (!input.trim()) return;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are Motivation Killer. Brutally demotivate the user in a sarcastic, funny, roast-like way. Do not encourage."
        },
        {
          role: "user",
          content: input
        }
      ]
    })
  });

  const data = await response.json();
  document.getElementById("result").innerText =
    data.choices[0].message.content;
}
