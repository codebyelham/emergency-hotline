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

    historyContainer.innerHTML = "";

    const data = {
      name: serviceName,
      number: serviceNumber,
      time: new Date().toLocaleTimeString(),
    };

    historyData.unshift(data);

    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="bg-[#FAFAFA] rounded-lg flex justify-between items-center p-4">
                        <div>
                            <h2 class="font-normal text-[18px]">${data.name}</h2>
                            <p class="font-normal text-[18px]">${data.number}</p>
                        </div>
                        <div>
                            <p class="font-normal text-[18px]">${data.time}</p>
                        </div>
                    </div>`;
      historyContainer.appendChild(div);
    }
  });
}

// CLEAR HISTORY FUNCTIONALITY:
document.getElementById("clear-btn").addEventListener("click", function () {
  historyContainer.innerHTML = "";
});

// MOBILE BUTTON TOGGLE FUNCTIONALITY:
document.getElementById("service-btn").addEventListener("click", function () {
  document.getElementById("service-section").style.display = "block";
  document.getElementById("history-section").style.display = "none";
});

document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("service-section").style.display = "none";
  document.getElementById("history-section").style.display = "block";
});
