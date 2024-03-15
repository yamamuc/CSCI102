let pointBuy = [0,0,0,0,0,0,0];

//Strength
document.getElementById('incrementSTR').addEventListener('click', function() {
    pointBuy[0]++;
    document.getElementById('displaySTR').innerText = pointBuy[0];
    document.getElementById('displayTotalSTR').innerText = 8+pointBuy[0];
    addPB(pointBuy[0]);

});

document.getElementById('decrementSTR').addEventListener('click', function() {
    pointBuy[0]--;
    document.getElementById('displaySTR').innerText = pointBuy[0];
    document.getElementById('displayTotalSTR').innerText = 8+pointBuy[0];
    subPB(pointBuy[0]);

});
//Dexterity
document.getElementById('incrementDEX').addEventListener('click', function() {
    pointBuy[1]++;
    document.getElementById('displayDEX').innerText = pointBuy[1];
    document.getElementById('displayTotalDEX').innerText = 8+pointBuy[1];
    addPB(pointBuy[1]);

});

document.getElementById('decrementDEX').addEventListener('click', function() {
    pointBuy[1]--;
    document.getElementById('displayDEX').innerText = pointBuy[1];
    document.getElementById('displayTotalDEX').innerText = 8+pointBuy[1];
    subPB(pointBuy[1]);
});
//Constitution
document.getElementById('incrementCON').addEventListener('click', function() {
    pointBuy[2]++;
    document.getElementById('displayCON').innerText = pointBuy[2];
    document.getElementById('displayTotalCON').innerText = 8+pointBuy[2];
    addPB(pointBuy[2]);

});

document.getElementById('decrementCON').addEventListener('click', function() {
    pointBuy[2]--;
    document.getElementById('displayCON').innerText = pointBuy[2];
    document.getElementById('displayTotalCON').innerText = 8+pointBuy[2];
    subPB(pointBuy[2]);
});
//Intelligence
document.getElementById('incrementINT').addEventListener('click', function() {
    pointBuy[3]++;
    document.getElementById('displayINT').innerText = pointBuy[3];
    document.getElementById('displayTotalINT').innerText = 8+pointBuy[3];    
    addPB(pointBuy[3]);

});

document.getElementById('decrementINT').addEventListener('click', function() {
    pointBuy[3]--;
    document.getElementById('displayINT').innerText = pointBuy[3];
    document.getElementById('displayTotalINT').innerText = 8+pointBuy[3];
    subPB(pointBuy[3]);
});
//Wisdom
document.getElementById('incrementWIS').addEventListener('click', function() {
    pointBuy[4]++;
    document.getElementById('displayWIS').innerText = pointBuy[4];
    document.getElementById('displayTotalWIS').innerText = 8+pointBuy[4];
    addPB(pointBuy[4]);

});

document.getElementById('decrementWIS').addEventListener('click', function() {
    pointBuy[4]--;
    document.getElementById('displayWIS').innerText = pointBuy[4];
    document.getElementById('displayTotalWIS').innerText = 8+pointBuy[4];
    subPB(pointBuy[4]);
});
//Charsima
document.getElementById('incrementCHA').addEventListener('click', function() {
    pointBuy[5]++;
    document.getElementById('displayCHA').innerText = pointBuy[5];
    document.getElementById('displayTotalCHA').innerText = 8+pointBuy[5];
    addPB(pointBuy[5]);

});

document.getElementById('decrementCHA').addEventListener('click', function() {
    pointBuy[5]--;
    document.getElementById('displayCHA').innerText = pointBuy[5];
    document.getElementById('displayTotalCHA').innerText = 8+pointBuy[5];
    subPB(pointBuy[5]);
});

function addPB(abilityScore){
    if(abilityScore>=6){
        pointBuy[6]+=2;
    }else{
        pointBuy[6]+=1;
    }
    document.getElementById('displayPB').innerText = pointBuy[6];
}

function subPB(abilityScore){
    if(abilityScore>=5){
        pointBuy[6]-=2
    }else{
        pointBuy[6]-=1;
    }
    document.getElementById('displayPB').innerText = pointBuy[6];
}