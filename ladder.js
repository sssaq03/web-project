function minus() {
    var num = parseInt(document.getElementById("residents").innerHTML);
    if (num <= 2) alert("최소 인원은 2명 입니다.");
    else {
        num--;
        document.getElementById("residents").innerHTML = num;
    }
}
function plus() {
    var num = parseInt(document.getElementById("residents").innerHTML);
    if (num >= 20) alert("최대 인원은 20명 입니다.");
    else {
        num++;
        document.getElementById("residents").innerHTML = num;
    }
}

function ladder() {
    var num = parseInt(document.getElementById("residents").innerHTML);
    document.getElementsByTagName("body").innerHTML("");
    for (var i = 0; i < num; i++) {
        document.createElement('input');
    }
}

var tempNum = 5;

function ladder() {
    for (var i = 0; i < tempNum; i++) {
        document.getElementById("selector").appendChild(document.createElement("input"));
    }
    for (var i = 0; i < tempNum; i++) {
        document.getElementById("selected").appendChild(document.createElement("input"));
    }
    var linecnt = tempNum + (tempNum - 1);
    var line = new Array(new Array(10), new Array(linecnt));
    line[
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1]
    ];
    console.log(line);
    for (var i = 0; i < 10; i++) {
        for (var j = 1; j < tempNum; j++) {
            if (Math.random() * 2 >= 1) {
                line[i][j * 2] = 2;
                i++;
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < linecnt; j++) {
            if (line[i][j] == 1) document.write("|");
            else if (line[i][j] == 2) document.write("ㅡㅡㅡ");
        }
    }
}