var express = require("express");
var handlebar = require("express-handlebars");
var app = express();
app.engine('.hbs', handlebar({extname: '.hbs'}));
app.set('view engine', '.hbs');

var path = require("path");
var arr = require('./static/data'); 
var database = arr.packages;
const HTTP_PORT = process.env.PORT || 5000
;

var packages = [
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Chicken_Teriyaki_plate_2_x300.jpg?v=1590777791",
        name: "Chicken Teriyaki",
        price: "$11.95",
        desc: "High protein, low-calorie meals with a nutrient profile tuned for weight loss"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Buffalo_Goat_Cheese_Chicken_plate_1_x300.jpg?v=1590777785",
        name: "Grilled Salmon",
        price: "$10.95",
        desc: "Higher protein and calorie portions to support your muscle gain momentum."
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Roasted_Chicken_and_Gravy_plate_1_x300.jpg?v=1590777786",
        name: "Roast Chicken with gravy",
        price: "$12.95",
        desc: "High fat, low carb meals with moderate protein to achieve and sustain ketosis"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Sun-dried_Tomato_and_Basil_Pesto_Chicken_Linguine_plate_1_x300.jpg?v=1590777793",
        name: "Sundried Basil",
        price: "$9.99",
        desc: "Low carb, nutrient-rich meals with fat-burning profiles to support fat loss"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Keto_Cheese_Steak_plate_1_x300.jpg?v=1590777790",
        name: "Keto Cheese Steak",
        price: "$10.49",
        desc: " A fully plant-based package featuring vegan meat and no animal products."
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Coconut_Curry_Salmon_plate_2_x300.jpg?v=1590777788",
        name: "Curry Shrimp",
        price: "$11.95",
        desc: " A vegetarian-friendly package with a natural and nutrient-rich approach"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Pan_Roast_Mushroom_Chicken_plate_1_x300.jpg?v=1590777813",
        name: "Mushroom Chicken",
        price: "$11.95",
        desc: " A delicious Keto version of our bestselling Prebiotic Soup Cleanse"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/1758/4293/products/Bombay_Spiced_Chicken_plate_1_x300.jpg?v=1590777786",
        name: "Chicken Teriyaki",
        price: "$11.95",
        desc: " Our nutrient-packed cleanser with meals & organic juice for up to 14 days"
    }
];

app.get("/", (req, res) =>{
    res.render('home', {
        data: database,
        layout: false
    });
});
app.use(express.static("static"));
app.get("/listing", (req, res) =>{
    res.render('listing', {
        data: packages,
        layout: false
    });
});
app.get("/registration", (req, res)=>{
    res.render('registration', {
        layout: false
    });
});
app.get("/login", (req, res)=>{
    res.render('login', {
        layout: false
    });
});
app.get("/about", (req, res)=>{
    res.render('about', {
        layout: false
    });
});







app.listen(HTTP_PORT, function(){
    console.log("Server has started on port " + HTTP_PORT);
});