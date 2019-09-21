const raceWinner = (array) => {

    let winner = null;
    let runnerUp = null;
    let temp = -Infinity;
    let dnfs = 0;

    array.map((racer, index) => {
        racer.time !== 'dnf' ? racer.time.split(':').forEach((unit, idx) => {
            if (idx === 0) {
                racer.convertedTime += +unit * 3600;
            } else if (idx === 1) {
                racer.convertedTime += +unit * 60;
            } else {
                racer.convertedTime += +unit;
            }
            if (racer.convertedTime > temp) {
                temp = racer.convertedTime;
                winner = array[index];
            } else if (racer.convertedTime > runnerUp) {
                runnerUp = array[index];
            }
        }) : dnfs++;
    });

    let hours = +winner.time[0] - +runnerUp.time[0];
    let minutes = +winner.time[1] - +runnerUp.time[1];
    let seconds = +winner.time[2] - +winner.time[2];

    let condition1 = `${winner.name} won by ${hours}, ${minutes}, and ${seconds}`;
    let condition2 = `${winner.name} won by no contest`;
    let condition3 = 'There is no winner';

    if (dnfs === 0) {
        return condition1;
    } else if (dnfs === array.length - 1) {
        return condition2;
    } else if (dnfs === array.length) {
        return condition3;
    }
};
