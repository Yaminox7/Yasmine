export function createFile(fname, text) {
    var blob = new Blob([text]);
    
    var url = URL.createObjectURL(blob);
    
    var link = document.createElement('a');
    link.href = url;
    link.download = fname;
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

export function stringify(arr) {
    var str = "";
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i][0];
        var values = arr[i][1];
        var length = values != 0 ? values.length : 0;
        total += length;
        str += `\n${key} (${length}): `;
        if (values == 0) { 
            str += "Aucun\n";
        } else {
            str += "\n";
            values.forEach((val) => {
                str += `    -${val}\n`;
            });
        }
    }
    str += `\n\nTotal: ${total}`;
    return str.slice(1);
}