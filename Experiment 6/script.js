
// Creating an array of products
// let used to declare a variable.
//ivide products oru array aan
let products = [
//object property aan name | eeh property de value aan "Laptop".ithupole thanne elathinum.    
    { name: "Laptop", price: 50000, category: "Electronics" },//object0
    { name: "Mobile", price: 20000, category: "Electronics" },//object1
    { name: "Headphones", price: 1500, category: "Electronics" },//object2
    { name: "T-Shirt", price: 500, category: "Clothing" },
    { name: "Jeans", price: 1200, category: "Clothing" },
    { name: "Python Book", price: 400, category: "Books" },
    { name: "Java Book", price: 350, category: "Books" }
];

// Getting HTML elements
// ivide id ubayogichu access cheyan search ne.ie, index.html il id="search" koduthindayi.
let search = document.getElementById("search");
let category = document.getElementById("category");
let productList = document.getElementById("productList");

// Function to display products
function displayProducts() 
{

// Getting user input
 //search.value use cheyanath user enter cheyana avalue edukkan aan.
// user enter cheayana value Uppercase aavam so athine lowercase aakkanam 
    let searchText = search.value.toLowerCase(); 
    let selectedCategory = category.value;

    // Empty the previous product list
    //ippo nammall laptop search cheyth ath mathram aakki kittan bhakki
    //ulla aallkare kallayanam.ie,
    //= clears the old results.
    productList.innerHTML = "";

    // Variable to count displayed products
    let count = 0;

    // Checking each product
    for (let i = 0; i < products.length; i++) {
// user input mathram lowercase aakkkiya pora arrayil ulla property value vum
//  lowercase aakkanam.
        let name = products[i].name.toLowerCase();

        // Checking search and category
//1).includes() used for: ippo search text lap vare adichapozhekkkum user nu 
// laptop visibile aavum string match cheyth name=Laptop aan array il ullath
//  so lap is in Laptop.
//and(ie,1 and 2 orumich nadakkanam.)
//2)onnenghe selected category=="All" aavanam alenghi|| adichkodukkana category yil thanne 
// indavanam search cheyaa product
        if (name.includes(searchText) &&(selectedCategory == "All" || products[i].category== selectedCategory)) 
        {

            // Displaying the product(₹-eeh symbol veran Ctrl+Alt+4 nekka)
// ivide empty space indavum div box indakkumbo index page il athikk 
// namakk ishdam ulla value vekkan aan array_name.innerHTML=array_name.innerHTMl+values kodukkum add cheyandath cheyanagth
            productList.innerHTML = productList.innerHTML +
                "<div class='product'>" + //oro div box neyum perittu product enn css il edukkan ivtanghalle!
                "<h3>" + products[i].name + "</h3>" +
                "<p>Price: ₹" + products[i].price + "</p>" +//<p> is a block level element.ie, each paragraph starts in new line.
                "<p>Category: " + products[i].category + "</p>" +
                "</div>";

            count++;
        }
    }

    // If no products are found
    if (count == 0) {
        productList.innerHTML = "No products found!";// No product found aah empty box ikk verum.
    }
}

// Detecting search input
search.addEventListener("input", displayProducts);
//search enn ullath variable aan athikk user input cheyumbo variable verum mukkallil cheythind ath.
//so ivide .addEventistener use cheyth eppoll aano input veranath user intenn appo automatically
//display function() call cheyum{NB:ivide dispaly function inte eehh bracket use cheyaruth()}
// Detecting category selection
category.addEventListener("change", displayProducts);

// Displaying products initially
displayProducts();//user onnum type search box or category box il cheyand thanne 
//display aavande products athukond aan verruthe call cheyethe.
 