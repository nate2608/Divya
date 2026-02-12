const reasons = [
"I love you because you feel like home.",
"You make ordinary days feel special.",
"You understand me even when I don’t say much.",
"You stayed when things weren’t easy.",
"You make me want to become better.",
"Your presence alone calms me.",
"You believe in me when I doubt myself.",
"You make love feel safe.",
"You taught me what real care looks like.",
"You choose me — and that means everything.",
"The way your eyes light up when you’re excited.",
"The way you pretend to be strong but are secretly soft.",
"I love how you play with your hair.",
"Your random mood swings that I secretly find cute.",
"The way you say my name.",
"Your laugh — especially the uncontrollable one.",
"The way you get passionate about small things.",
"Your sleepy voice.",
"I love how you hug me.",
"The way you act like you don’t need me but still do.",
"I love how you trust me.",
"I love that I get to protect you.",
"I love being the one you call.",
"I love that you let me see your vulnerable side.",
"I love being your safe place.",
"I love that you feel like my person.",
"Even after fights, I still choose you.",
"Losing you is not even an option in my heart.",
"Because you look cute even when you’re angry.",
"Because you say 'I’m fine' when you’re clearly not.",
"Because you act mature but can be a baby.",
"Because you overthink and then blame me.",
"Because you pretend you don’t miss me.",
"Because you look good in literally everything.",
"Because you get jealous but deny it.",
"Because your drama is my favorite show.",
"I don’t want temporary with you.",
"You’re not just a chapter — you’re the whole book.",
"I want our fights to turn into laughter.",
"Loving you feels permanent.",
"I love how even a 4–5 second glimpse of you from my window makes my whole day better.",
"I love that you’re my favorite neighbor and my favorite person.",
"I love that I get excited just knowing you’re so close.",
"I love how I’m your third baby after Arhaan and Anhaita.",
"I love how you let me be soft with you.",
"I love holding you close.",
"I love the way our bodies just fit when we hug.",
"I love the intimacy we share — it feels deeper than just physical.",
"I love touching you, feeling you close, and knowing you’re mine in that moment.",
"I love making love to you — not just the act, but the connection and closeness it brings us."
];

let index = 0;

const button = document.getElementById("next-btn");
const box = document.getElementById("reason-box");
const finalMessage = document.getElementById("final-message");

button.addEventListener("click", () => {

  if (index < reasons.length) {
    box.style.opacity = 0;

    setTimeout(() => {
      box.innerHTML = (index + 1) + ". " + reasons[index];
      box.style.opacity = 1;
    }, 200);

    index++;

  } else {
    button.style.display = "none";
    finalMessage.style.display = "block";
  }
});

/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 5) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 500);
