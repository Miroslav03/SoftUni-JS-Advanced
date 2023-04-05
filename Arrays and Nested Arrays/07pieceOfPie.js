function pieceOfPie(array,flavor1,flavor2){

    const firstIndex = array.indexOf(flavor1)
    const secondIndex = array.indexOf(flavor2)
    const finalArr = array.slice(firstIndex,secondIndex+1)

    return finalArr

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)
