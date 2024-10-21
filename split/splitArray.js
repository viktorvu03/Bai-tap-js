function process(){
    let SetA = document.getElementById('ArrayA').value.split(',');
    let SetB = document.getElementById('ArrayB').value.split(',');
    console.log(SetA);
    console.log(SetB);
    let setAUnique = new Set(SetA);
    let setBUnique = new Set(SetB);
    console.log(setAUnique);
    console.log(setBUnique);
    // Tạo tập hợp các phần tử chỉ có trong A
    let onlyInA = [...setAUnique].filter(x => !setBUnique.has(x));

    // Tạo tập hợp các phần tử chỉ có trong B
    let onlyInB = [...setBUnique].filter(x => !setAUnique.has(x));

    // Tạo tập hợp các phần tử chung giữa A và B
    let inBoth = [...setAUnique].filter(x => setBUnique.has(x));

    document.getElementById('result').innerHTML =
    `<b>Phần tử chỉ có trong A:</b> ${onlyInA.join(', ')}<br>` +
    `<b>Phần tử chỉ có trong B:</b> ${onlyInB.join(', ')}<br>` +
    `<b>Phần tử chung giữa A và B:</b> ${inBoth.join(', ')}`;

}