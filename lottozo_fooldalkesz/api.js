const api_root = "https://lottery.skiby.net/api/v1/current/";
const endpoints = ["otoslotto/", "hatoslotto/", "skandinavlotto/", "luxor/", "joker/"];
const prefixes = ["otos-", "hatos-", "skandinav-", "luxor-", "joker-"];

for (let i = 0; i < prefixes.length; i++) {
    const request = new XMLHttpRequest();
    request.open("GET", api_root + endpoints[i], true);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            document.getElementById(prefixes[i] + "drawDate").innerText = response["drawDate"];
            document.getElementById(prefixes[i] + "week").innerText = response["week"];
            document.getElementById(prefixes[i] + "expectedPrice").innerText = response["expectedPrice"];
        }
    }

    request.send();
}

const euroRequest = new XMLHttpRequest();
euroRequest.open("GET", api_root + "eurojackpot/", true);
euroRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const euroResponse = JSON.parse(this.responseText);
        document.getElementById("euro-drawDate").innerText = euroResponse["betDeadline"];
        document.getElementById("euro-week").innerText = euroResponse["week"];
        document.getElementById("euro-expectedPrice").innerText = euroResponse["expectedPrice"];
        document.getElementById("euro-grossPrice").innerText = euroResponse["grossPrice"];
    }
}
euroRequest.send();