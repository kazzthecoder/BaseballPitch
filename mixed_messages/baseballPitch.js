let numOfRuns = 0
let numOfOuts = 0

const pitch = () => {
    const resultAtBat = ['ball', 'strike', 'foul ball', 'single', 'double', 'triple', 'HOME RUN!!', 'ground out', 'fly out', 'DOUBLE PLAY!'];
    const resultOnBase = ['tagged out', 'forced out', 'scored run']
    const randNum1 = Math.floor(Math.random()*10);
    const randNum2 = Math.floor(Math.random()*3)
    const hitter = resultAtBat[randNum1];
    const basepath = resultOnBase[randNum2];
    console.log(hitter, basepath)
    if (hitter === 'ball' || hitter === 'strike' || hitter === 'foul ball') {
        console.log(`The result of the pitch was a ${hitter}. \n The score is still ${numOfRuns} and there are still ${numOfOuts} outs.`)
    } if (hitter === 'single' || hitter === 'double' || hitter === 'triple') {
        if (basepath === 'scored run'){
            numOfRuns++;
            console.log(`The result of the pitch was a ${hitter}. \n On your way around the base path you ${basepath} to make the score ${numOfRuns} with ${numOfOuts} outs.`)
        } else {
            numOfOuts++git remote add origin https://github.com/kazzthecoder/whatever.git
            console.log(`The result of the pitch was a ${hitter}. \n However, on the base path you were ${basepath} to make the score ${numOfRuns} with ${numOfOuts} outs.`)
        }
    } if (hitter === 'HOME RUN!!') {
        numOfRuns++;
        console.log(`The result of the pitch was a ${hitter}. \n The score is now ${numOfRuns} and there are still ${numOfOuts} outs.`)
    } if (hitter === 'ground out' || hitter === 'fly out'){https://github.com/kazzthecoder/whatever.git
        numOfOuts++
        console.log(`The result of the pitch was a ${hitter}. \n The score is still ${numOfRuns}, now with ${numOfOuts} outs.`)
    } if (hitter === 'DOUBLE PLAY!'){
        numOfOuts+=2
        console.log(`The result of the pitch was a ${hitter}. \n The score is still ${numOfRuns}, now with ${numOfOuts} outs.`)
    }

}
pitch()
