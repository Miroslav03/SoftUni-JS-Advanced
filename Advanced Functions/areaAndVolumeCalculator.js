
function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    const finalArr = [];
    const dataArr = JSON.parse(input)
    for (const obj of dataArr) {
        const araeValue = area.call(obj);
        const volValue = vol.call(obj);
        finalArr.push({area:araeValue,volume:volValue})
    }
    return finalArr;
}



solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)
