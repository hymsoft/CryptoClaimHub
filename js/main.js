const data = [
    {
        id: 1,
        name: "Firefaucet.win",
        web: "https://firefaucet.win/faucet/",
        timeToClaim: 1800,
        cripto: "ACP",
        referalLink: "https://firefaucet.win/ref/hymsoft",
        nextClaimTime: ""
    },
    {
        id: 2,
        name: "Alt Hub",
        web: "https://althub.club/faucet",
        timeToClaim: 1800,
        cripto: "ALTH",
        referalLink: "https://althub.club/r/132202",
        nextClaimTime: ""
    },
    {
        id: 3,
        name: "Funy Crypto Faucet",
        web: "https://funcryptofaucet.com/faucet.html",
        timeToClaim: 600,
        cripto: "Coins",
        referalLink: "https://funcryptofaucet.com/?ref=9140",
        nextClaimTime: ""
    }
];

const faucetList = document.getElementById('faucetList');

data.forEach(faucet => {
    const row = document.createElement('tr');
    row.dataset.id = faucet.id;

    row.innerHTML = `
      <td>${faucet.name}</td>
      <td>${faucet.cripto}</td>
      <td>
        <button data-id="${faucet.id}" data-button="reset" class="btn btn-primary" onclick="resetClaim(${faucet.id}, ${faucet.timeToClaim})">Reset</button>
        <button data-id="${faucet.id}" data-button="claim" class="btn btn-success" onclick="claim('${faucet.web}')">Claim</button>
      </td>
      <td id="countdown${faucet.id}"></td>
    `;

    faucetList.appendChild(row);
});

function resetClaim(faucetId, timeToClaim) { }

function claim(url) { }