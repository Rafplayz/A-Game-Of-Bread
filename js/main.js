document.addEventListener("DOMContentLoaded", loadShit, false);
var addAmount = new Decimal(1)
var numToAddTo = new Decimal(1)
var Cost = new Decimal(10)
var BreadGenerators = new Decimal(0)
var GenCost = new Decimal(100)
var breadUp1 = false
var displayingbreadUp1 = false
function Update() {
}
function loadShit() { // idfk why but this shit doesn't load half the time
    console.log("shit loaded")
    document.getElementById("bodytypebeat").innerHTML = '<button id="addNumber" onclick="addNum()">loading...</button> <button id="buy" onclick="moreBread()">test</button> <button id="genBuy" onclick="breadGenerator()">100</button><p id="test">0</p><br><div id=upgrades></div>'
    document.getElementById("test").innerText = numToAddTo
    document.getElementById("addNumber").innerText = `Add ${addAmount} to the amount of bread`
    document.getElementById("buy").innerText = `Add +1 to bread adder. Cost: ${Cost}`
    document.getElementById("genBuy").innerText = `Generate +1 bread per second. Cost: ${GenCost}`
}
function breadUp1Func() {
    if(numToAddTo.gte(200)) {
        numToAddTo = numToAddTo.minus(200)
        document.getElementById("test").innerText = numToAddTo
        breadUp1 = true
        document.getElementById("breadUp1Button").style = "display:none;"
    }
}    
var Interval = window.setInterval(Update, 20);
function Update(){
    var BreadPerTick = getBreadPerTick()
    numToAddTo = numToAddTo.plus(BreadPerTick)
    document.getElementById("test").innerText = Math.round(numToAddTo * 100) / 100
    if(BreadGenerators.gte(2) && breadUp1 != true && displayingbreadUp1 != true) {
        document.getElementById("upgrades").innerHTML = document.getElementById("upgrades").innerHTML + '<button onclick="breadUp1Func()" id="breadUp1Button">Add +1 bread generated per each generator. Cost: 200</button>'
        displayingbreadUp1 = true
    }
}
function addNum() {
    numToAddTo = numToAddTo.plus(addAmount)
    document.getElementById("test").innerText = Math.round(numToAddTo * 100) / 100
}
function getBreadPerTick() {
    var ReturnVar = new Decimal(0) // the variable we will return
    ReturnVar = ReturnVar.plus(BreadGenerators*0.02)
    if(breadUp1) {ReturnVar = ReturnVar.times(2)}
    return ReturnVar
}
function moreBread() {
    if(numToAddTo.gte(Cost)) {
        numToAddTo = numToAddTo.minus(Cost)
        Cost = Cost * 1.3
        Cost = Decimal.round(Cost)
        addAmount = addAmount.plus(1)
        document.getElementById("test").innerText = numToAddTo
        document.getElementById("buy").innerText = `Add +1 to bread adder. Cost: ${Cost}`
        document.getElementById("addNumber").innerText = `Add ${addAmount} to the amount of bread`
    }
    else {
        return null
    }
}
function breadGenerator() {
    if(numToAddTo.gte(GenCost)) {
        numToAddTo = numToAddTo.minus(GenCost)
        GenCost = GenCost * 1.3
        GenCost = Decimal.round(GenCost)
        BreadGenerators = BreadGenerators.plus(1)
        document.getElementById("test").innerText = numToAddTo
        document.getElementById("genBuy").innerText = `Generate +1 bread per second. Cost: ${GenCost}`
        document.getElementById("addNumber").innerText = `Add ${addAmount} to the amount of bread`
    }
    else {
        return null
    }
}
