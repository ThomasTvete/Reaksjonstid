updateView();

// function updateView(){
//     for(i = 0; i < 25; i++){
//     html.push(/*HTML*/ `<div class="lamp" id="lamp${i}"></div>`);
//     }
    
//     document.getElementById('app').innerHTML = html.join('');

    

    
// }

function updateView(){
    while(rng.length < 25){
        newLamp = Math.floor(Math.random() * 25);
        if(!rng.includes(newLamp)){
            rng.push(newLamp);
            html.push(/*HTML*/ `<div class="lamp" id="lamp${newLamp}"></div>`);
        }
    }

    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="lampFrame">${html.join('')}</div>
    <div class="scoreFrame">
        <div class="score">Din reaksjonstid i sekunder er&nbsp</div>
        <div class="score">${timeList ?? '00.00'}</div>
    </div>
    `;
    chosenLamp();

}

function chosenLamp(){
    selectedLampIndex = Math.floor(Math.random() * 25);
    document.getElementById(`lamp${selectedLampIndex}`).style.backgroundColor = "yellow";
    document.getElementById(`lamp${selectedLampIndex}`).onclick = changeLamp;

}

function listTime() {
    timeList = '';
    userTime.forEach(time =>{ timeList += time + "</br>"})
    
}

