var elements = document.getElementsByClassName("wordlist");
for (var n in elements) {
    var element = elements[n]

    var content = element.innerHTML;
    if (content==undefined) {continue}
    var lines = content.split("\n");
    var newlines = [];
    for (var i in lines) {
        var line = lines[i];
        if (line.includes(" - ")) {
            var word = line.split(" - ",1)[0];
            var defin = line.split(" - ",2)[1];
            newlines.push('<span class="wordline"><span class="wordtxt">'+word+'</span><span class="wordsep"> - </span><span class="worddef">'+defin+'</span></span>')
        }
        else {newlines.push(line)}
        
    }
    element.innerHTML = newlines.join("\n")

}