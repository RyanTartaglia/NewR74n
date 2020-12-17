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
            var components = line.split(' - ');
            var word = components.shift();
            var defin = components.join(' - ');
            newlines.push('<span class="wordline"><span class="wordtxt">'+word+'</span><span class="wordsep"> - </span><span class="worddef">'+defin+'</span></span>')
        }
        else {newlines.push(line)}
        
    }
    element.innerHTML = newlines.join("\n")

}