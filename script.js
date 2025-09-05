let history = [];
function callToHelpline(id, serviceName, number) {
    document.getElementById(id).addEventListener('click', function() {
        let amount = parseInt(document.getElementById('coinChange').innerText);

        if (amount < 20) {
            alert('Insufficient Balance! Please Recharge');
            return;
        }

        amount -= 20;
        document.getElementById('coinChange').innerText = amount;
        let res = `${serviceName} Service (${number})`
        let res1 = `${serviceName} Service`
        let today = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        let obj = {
            res1 : res1,
            res2: number,
            today : today,
        }

        history.push(obj); 
        alert("Calling " + res);
        updateHistory();
    });
}

function updateHistory() {
    let element = document.getElementById('list');
    element.innerHTML = '';
    history.reverse();
    for (let item of history) {
        element.innerHTML += `
        <div class="flex items-center justify-between">
            <div>
                <p class="text-[16px]">${item.res1}</p>
                <p class="mt-[2px] text-gray-500">${item.res2}</p>
            </div>
            <p class="text-[12px] text-gray-500">${item.today}</p>
        </div>`
    }
}

document.getElementById('clear').addEventListener('click', function() {
    history = [];
    updateHistory();
})

function loveIncrement() {
    let amount = parseInt(document.getElementById('loveChange').innerText);
    amount += 1;
    document.getElementById('loveChange').innerText = amount;
}

function callLoveIncrement(id) {
    document.getElementById(id).addEventListener('click', function() {
    loveIncrement();
    } )
}

function copyNumber (id, number) {
    document.getElementById(id).addEventListener('click', function() {
        navigator.clipboard.writeText(number);
        alert(`Number is copied : ${number}`);
        let amount = parseInt(document.getElementById('copy').innerText);
        amount += 1;
        document.getElementById('copy').innerText = amount;
    })
}

callToHelpline('callBtn1', 'National Emergency', '999');
callToHelpline('callBtn2', 'Police', '999');
callToHelpline('callBtn3', 'Fire', '999');
callToHelpline('callBtn4', 'Ambulance', '1994-999999');
callToHelpline('callBtn5', 'Women & Child Helpline', '109');
callToHelpline('callBtn6', 'Anti-Corruption', '106');
callToHelpline('callBtn7', 'Electricity Outage', '16216');
callToHelpline('callBtn8', 'Brac', '16445');
callToHelpline('callBtn9', 'Bangladesh Railway', '163');

copyNumber('copy1', '999');
copyNumber('copy2', '999');
copyNumber('copy3', '999');
copyNumber('copy4', '1994-999999');
copyNumber('copy5', '109');
copyNumber('copy6', '106');
copyNumber('copy7', '16216');
copyNumber('copy8', '16445');
copyNumber('copy9', '163');

callLoveIncrement('love1');
callLoveIncrement('love2');
callLoveIncrement('love3');
callLoveIncrement('love4');
callLoveIncrement('love5');
callLoveIncrement('love6');
callLoveIncrement('love7');
callLoveIncrement('love8');
callLoveIncrement('love9');


