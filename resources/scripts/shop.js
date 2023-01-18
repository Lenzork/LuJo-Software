// * Shop System by Lukas
// Simple written to just do the most necessary things

class ShopItem
{
    constructor(name, price, img)
    {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

var currency = "€";

// ! Because this Script is used on the main webshop page, the path should lead to the resources folder!
var sI1 = new ShopItem("IC Tester V1.0", 200, "resources/img/ICTesterPicture.PNG");
var SI2 = new ShopItem("Test", 9999999, "https://pbs.twimg.com/profile_banners/1260390625/1505762037/1500x500");

// ! Items need to be added into the array in order to be displayed!
var shopItems = [sI1, SI2];

// Show all of the Shop items
shopItems.forEach(element => {
    // Template shop item
    let shopTemplate = document.getElementById("shop-template");

    let newItem = shopTemplate.cloneNode(true);
    newItem.style.display = "block";

    // * Setting all of the informations of the product
    newItem.childNodes[1].src = element.img;
    newItem.childNodes[3].textContent = element.name;
    newItem.childNodes[5].textContent = "Price: " + element.price + currency;

    document.getElementsByClassName("shop-items-frame")[0].appendChild(newItem);
});