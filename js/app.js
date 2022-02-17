// Income Function
function monthlyIncome() {
    let income = document.getElementById('income');
    let incomeTaka = parseInt(income.value);
    if (incomeTaka < 0) {
        document.getElementById('negative').style = 'block';
        // document.getElementById('income').value = '';
        boxEmpty();
    }
    else {
        return incomeTaka;
    }

}

// Item function
function item(value) {
    document.getElementById(value).style = 'block';
}

// Empty Function 
function boxEmpty(){
    document.getElementById('income').value = '';
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('clothes').value = '';
}

document.getElementById('calculate').addEventListener('click', function () {
    // Food Cost 
    let food = document.getElementById('food');
    let foodPriceText = food.value;
    let foodPrice = parseInt(foodPriceText);

    // Rent Cost 
    let rent = document.getElementById('rent');
    let rentPriceText = rent.value;
    let rentPrice = parseInt(rentPriceText);

    // Clothes Cost
    let clothes = document.getElementById('clothes');
    let clothesPriceText = clothes.value;
    let clothesPrice = parseInt(clothesPriceText);


