export function consoleText(words, id) {
    const target = document.getElementById(id);
    const consoleText = document.getElementById('console');
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    
    let writeText = window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function() {
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        };
    }, 120);
    
    let setClass = window.setInterval(function() {
        if (visible === true) {
            consoleText.className = 'console-underscore hidden'
            visible = false;
        } else {
            consoleText.className = 'console-underscore'
            visible = true;
        };
    }, 400);
  
    window.addEventListener("unload", () => clearInterval(writeText));
    window.addEventListener("unload", () => clearInterval(setClass)); 
};