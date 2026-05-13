let currentSection = "feed";
let currentAdMessage = "Actually selling insecurity.";

const feedPosts = [
  ["@perfectlife", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80", "1,204 likes", "Living my best life ✨", "Actually in debt."],
  ["@dailyvibes", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80", "983 likes", "just a chill morning ☕", "Actually overwhelmed."],
  ["@summerdream", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80", "12,804 likes", "click the link in bio 👀", "Actually insecure."],
  ["@fitmode", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80", "2,011 likes", "discipline over everything", "Actually exhausted."],
  ["@cityescape", "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80", "1,887 likes", "take me back 🌴", "Actually alone."],
  ["@couplegoals", "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80", "14,220 likes", "forever kind of love 🤍", "Actually, she hates him."],
  ["@squadnight", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80", "5,771 likes", "best friends forever 🫶", "Actually lonely."],
  ["@mindfulmornings", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80", "4,806 likes", "peace, balance, gratitude 🧘‍♀️", "Actually cried twice today."],
  ["@freshkicks", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", "8,391 likes", "new shoes, new me 👟", "Actually, she stole them."],
  ["@artschoolstar", "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80", "2,605 likes", "super proud of my showcase tonight 🎨", "Actually, no one came."],
  ["@studygrind", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80", "3,118 likes", "passed the exam 😤📚", "Actually, he cheated."],
  ["@roadtripmode", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", "6,444 likes", "nowhere to be, everywhere to go 🚗", "Actually behind on car payments."],
  ["@musthave", "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=80", "6,901 likes", "this changed my life. link below.", "Actually buying things to feel okay."],
  ["@loop", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", "9,999 likes", "you already saw this", "Actually repeating."]
];

const newsStories = [
  ["Prices Are Rising Again, Experts Warn", "LIVE UPDATES"],
  ["What The President Said Today Has People Talking", "TRENDING NOW"],
  ["Markets Drop As Uncertainty Spreads", "MOST SHARED"],
  ["This Story Is Still Developing...", "AUTO REFRESHING"],
  ["Multiple Crises Emerging At Once", "WATCH NOW"],
  ["Climate Warnings Grow More Urgent", "RECOMMENDED"],
  ["The One Thing In Your Routine That Could Be Dangerous", "URGENT"],
  ["Do Not Look Away", "FEAR INDEX RISING"],
  ["New Technology Raises New Concerns", "REFRESHING"],
  ["Global Tensions Continue To Rise", "ALERT"],
  ["Are Groceries Becoming Too Expensive?", "CONSUMER ALERT"],
  ["Could Rent Go Even Higher?", "HOUSING WATCH"],
  ["Leaders Clash As Viewers Wait For Answers", "POLITICS"],
  ["Officials Are Monitoring The Situation", "BREAKING"],
  ["Refresh For The Latest Fear", "SYSTEM ALERT"],
  ["A New Threat May Already Be Here", "JUST IN"],
  ["Everything Updates Before It Explains", "AUTO-PLAYING NEXT"],
  ["Your Phone May Be Changing How You Think", "DIGITAL HEALTH"],
  ["Nobody Knows What Happens Next", "LIVE BLOG"],
  ["Should You Be Worried About Tomorrow?", "OPINION"],
  ["Another Alert Is Coming", "STAY ONLINE"],
  ["Families Brace For More Expensive Months Ahead", "MONEY WATCH"],
  ["Did You Hear What They Said This Time?", "POLITICAL REACTION"],
  ["New Polls Show People Are Losing Trust", "PUBLIC MOOD"],
  ["Something Changed Overnight. Here Is What We Know.", "URGENT THREAD"],
  ["New Report Sparks More Questions Than Answers", "ANALYSIS"],
  ["More Updates Expected Any Minute", "REFRESHING"],
  ["Everything You Missed While You Were Offline", "SUMMARY"],
  ["Do Not Close This Window", "ALERT"],
  ["The Debate Is Getting More Heated", "LIVE"]
];

const newsImages = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
];

const adviceResponses = [
  "Drink water. Then decide.",
  "You probably need a nap, not a life change.",
  "Maybe don’t text them. Revolutionary idea.",
  "Close the app. Open a window.",
  "You’re not lazy. You’re just unconvinced.",
  "You can simply… not respond.",
  "You knew the answer before you asked.",
  "Stop checking. You already checked.",
  "You’re not stuck. You’re hesitating.",
  "If it costs your peace, it is expensive.",
  "Pretend you’re someone with boundaries.",
  "Eat something. Then revisit this crisis.",
  "You’re one iced coffee away from clarity.",
  "Try going outside. Controversial, but effective.",
  "That’s tomorrow’s problem. Congratulations.",
  "Not everything needs a dramatic conclusion.",
  "This answer will expire soon.",
  "Try again later. Or don’t.",
  "You might just be bored.",
  "Rest is not failure."
];

const ads = [
  ["Buy Confidence Now", "One product away from becoming yourself.", "Actually selling insecurity."],
  ["Glow Up Overnight", "Because your natural face needs an upgrade.", "Your desire has been targeted."],
  ["Calm In A Bottle", "Temporary peace, billed monthly.", "Actually monetizing anxiety."],
  ["Become More Like Them", "Comparison, now with free shipping.", "Actually selling comparison."],
  ["Fix Your Life Today", "Click before the feeling goes away.", "The product is urgency."]
];

function buildFeed() {
  const container = document.getElementById("feedPosts");
  container.innerHTML = "";

  feedPosts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = index === 2 ? "post spotlight" : index === feedPosts.length - 1 ? "post glitch-post" : "post";
    div.onclick = () => openPost(post[4]);

    div.innerHTML = `
      <div class="post-header"><span class="username">${post[0]}</span><span>•••</span></div>
      <img src="${post[1]}">
      <div class="post-content">
        <p class="likes">${post[2]}</p>
        <p><strong>${post[0]}</strong> ${post[3]}</p>
        <p class="comments">so real</p>
        <p class="comments">love this</p>
      </div>
    `;

    container.appendChild(div);
  });
}

function buildNews() {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  newsStories.forEach((story, index) => {
    const div = document.createElement("div");
    div.className = "news-card";
    if (index % 5 === 0) div.classList.add("big");
    if (index % 7 === 0) div.classList.add("wide");
    if (index % 6 === 0) div.classList.add("tall");
    if (index % 8 === 0) div.classList.add("glitch-news");

    div.onclick = () => openPost("Fear keeps you watching.");

    div.innerHTML = `
      <img src="${newsImages[index % newsImages.length]}">
      <h2>${story[0]}</h2>
      <p>${story[1]}</p>
    `;

    container.appendChild(div);
  });
}

function openPost(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function showFeed() {
  currentSection = "feed";
  hideAll();
  document.getElementById("feedSection").style.display = "block";
  window.scrollTo(0, 0);
}

function showNews() {
  currentSection = "news";
  hideAll();
  document.getElementById("newsSection").style.display = "block";
  window.scrollTo(0, 0);
}

function showMessages() {
  currentSection = "messages";
  hideAll();
  document.getElementById("messagesSection").style.display = "block";
  window.scrollTo(0, 0);
}

function showReflection() {
  currentSection = "reflection";
  hideAll();
  document.getElementById("reflectionSection").style.display = "block";
  window.scrollTo(0, 0);
}

function hideAll() {
  document.getElementById("feedSection").style.display = "none";
  document.getElementById("newsSection").style.display = "none";
  document.getElementById("messagesSection").style.display = "none";
  document.getElementById("reflectionSection").style.display = "none";
}

function generateAdvice() {
  const input = document.getElementById("adviceInput").value.trim();
  const response = adviceResponses[Math.floor(Math.random() * adviceResponses.length)];
  document.getElementById("adviceResponse").textContent = input ? response : "Type something first.";
}

function showNotification() {
  const box = document.getElementById("notificationBox");
  const messages = ["+99 new alerts", "Someone liked your post", "New message request", "Trending now", "Sponsored post waiting"];
  box.textContent = messages[Math.floor(Math.random() * messages.length)];
  box.style.display = "block";
  setTimeout(() => box.style.display = "none", 2600);
}

function showAd() {
  const ad = ads[Math.floor(Math.random() * ads.length)];
  const content = document.querySelector(".ad-content");
  const sizes = ["small", "", "large"];
  const positions = ["top-left", "top-right", "bottom-left", "bottom-right", "center"];

  content.className = "ad-content";
  content.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
  content.classList.add(positions[Math.floor(Math.random() * positions.length)]);

  document.getElementById("adTitle").textContent = ad[0];
  document.getElementById("adText").textContent = ad[1];
  currentAdMessage = ad[2];

  document.getElementById("adPopup").style.display = "flex";
}

function closeAd() {
  document.getElementById("adPopup").style.display = "none";
}

document.querySelector(".ad-button").onclick = function () {
  closeAd();
  openPost(currentAdMessage);
};

window.onclick = function(event) {
  if (event.target === document.getElementById("popup")) closePopup();
  if (event.target === document.getElementById("adPopup")) closeAd();
};

buildFeed();
buildNews();
setInterval(showNotification, 7000);
setInterval(showAd, 20000);