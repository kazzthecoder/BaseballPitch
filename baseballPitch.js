const pitch = () => {
    const result = ['ball', 'strike', 'foul ball', 'single', 'double', 'triple', 'HOME RUN!!', 'ground out', 'fly out', 'DOUBLE PLAY!'];
    randNum = Math.floor(Math.random()*11);
    console.log(result[randNum])
}
pitch()