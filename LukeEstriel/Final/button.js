//buttons

let daveClicked=0;

document.getElementById('magicalButton').addEventListener('click', function() {
    alert("Hello! I am a button.");
});

document.getElementById('magicalButton2').addEventListener('click', function() {
    alert("Hello! I am also a button.");
});
document.getElementById('Dave').addEventListener('click', function() {
    if(daveClicked ==0){
        alert("I'm not a button! My name is Dave!");
    }else{
        alert("Stop clicking me!");
    }
    daveClicked++;
    
});
