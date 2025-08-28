// HEART BUTTON FUNCTIONALITY:
const heartIcons = document.getElementsByClassName("heart-btn");
const heartCountElement = document.getElementById("heart-count");

for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    let currentHeartCount = parseInt(heartCountElement.innerText);
    currentHeartCount++;
    heartCountElement.innerText = currentHeartCount;
  });
}

// CALL BUTTON FUNCTIONALITY:
const callButtons = document.getElementsByClassName("call-btn");
const coinCountElements = document.getElementById("coin-count");
const historyContainer = document.getElementById("history-container");
const historyData = [];

for (let callBtn of callButtons) {
  callBtn.addEventListener("click", function () {
    const cardBody = callBtn.closest(".card-body");
    const serviceName = cardBody.querySelector("h2").innerText;
    const serviceNumber = cardBody.querySelector("h1").innerText;
    // console.log(cardBody, serviceName, serviceNumber);

    let balanceCoin = parseInt(coinCountElements.innerText);

    if (balanceCoin < 20) {
      alert(
        "❌ আপনার পর্যাপ্ত কয়েন নেই। আপনাকে কল করতে কমপক্ষে ২০ কয়েন লাগবে।"
      );
      return;
    }

    alert(`☎ ${serviceName} ${serviceNumber} Calling....`);

    balanceCoin = balanceCoin - 20;
    coinCountElements.innerText = balanceCoin;
  });
}
