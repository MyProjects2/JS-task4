'use strict'
function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    var obj = {};
    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n=randomDiap(1,7);
        var colorName=colors[n];
        if ( colorName in obj) { 
            colorsCount ++;
            continue;
        }
        obj[colorName] = 1;
        console.log( colorName );
    }
}

mood(3);
























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
