// function indexRandomizer(){
//     selectedLampIndex = Math.floor(Math.random() * 25);
//     document.getElementById(`lamp${selectedLampIndex}`).classList.add('lightOn');
    
// }

// function lightToggle(){
//     document.querySelectorAll('.lamp').classList.remove('lightOn');
//     document.getElementById('lamp${selectedLampIndex}').classList.add('lightOn');

// }

// function chosenLamp(){
//     selectedLampIndex = Math.floor(Math.random() * 25);
//     document.getElementById(`lamp${selectedLampIndex}`).classList.add('lightOn');
// }




function changeLamp(){
    let finishTime = new Date().getTime();
    let spentMilliseconds = Math.floor(finishTime - startTime);
    startTime = new Date().getTime();
    let spentSeconds = spentMilliseconds / 1000;
    userTime.unshift(spentSeconds);
    listTime();
    updateView();

}



