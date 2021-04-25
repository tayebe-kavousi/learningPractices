(async function(){
    let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100");
    let reader = response.body.getReader();
    let recievedLength = 0;
    while(true){
        const {done, value} = await reader.read();
        if(done) break;
        recievedLength += value.length;
    }
    let size= document.getElementById("size");
    size.innerHTML = recievedLength;
})()