class Drink{
    constructor(name, glass, liquor = [], liqueur, mixers = [], garnish = []){
     this.name = name;
     this.glass = glass;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
    };
   };
   
   //drinks for permanent library................................................................................................
   let aldoronaFB = new Drink("Aldorona (Fish Bowl)", "Fish Bowl", ["El Jimador 6 oz"], "Triple Sec 2 oz", ["Lime Juice 1.5 oz", "Margarita Mix 8 oz"], ["Coronita", "Lime Wheel"]);
   let avocadoMargarita = new Drink("Avocado Margarita", "Coupe Glass", ["Don Julio Anejo 1.5 oz"], "Cointreau .5 oz", ["Avocado Sour Mix 3 oz", "Lime Juice .75 oz"], ["Lime Wheel"]);
   let babyStout = new Drink("Baby Stout", "Rocks Glass", ["Patron XO 1 oz"], "Bailey's Irish Cream (Float)", ["Coffee 3 oz"], ["Coffee Bean"]);
   let bloodOrangeAndSage = new Drink("Blood Orange and Sage", "Rocks Glass", ["Corazon Reposado 1.5 oz"], "Solerno .5 oz", ["Blood Orange Juice .75 oz,", "Honey Syrup .5 oz"], ["Blood Orange Slice", "Sage (2-3 Leaves)"]);
   let carajillo = new Drink("Carajillo", "Rocks Glass", ["None"], "Licor 43 1.5 oz", ["Coffee 3 oz"], ["Lemon Twist"]);
   let churchill = new Drink("Churchill", "Rocks Glass", ["Four Roses Bourbon 1.5 oz"], "Ancho Reyes Chili Liqueur .5 oz", ["Agave .75 oz", "Blackberry (1 Muddled)", "Lemon Juice .5 oz", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"]);
   let cocorita = new Drink("CocoRita", "Coupe Glass", ["1800 Coconut 1.5 oz"], "Cointreau .5 oz", ["Coconut Puree 1 oz", "Lime Juice .5 oz", "Pineapple Juice .5 oz"], ["Lime Wheel"]);
   let cucumberita = new Drink("CucumbeRita", "Margarita Glass", ["Milagro Reposado 1.5 oz"], "Cointreau .5 oz", ["Agave .5 oz", "Cayenne (2 Shakes)", "Cucumber (3 Slices Muddled)", "Lime Juice 2 oz"], ["Cucumber Wheel"]);
   let dropItLikeItsHot = new Drink("Drop It LIke It's Hot", "Margarita Glass", ["Tanteo Jalapeno 1.5 oz"], "Cointreau .5 oz", ["Agave .5 oz", "Cayenne (2 Shakes)", "Lime Juice 2 oz", "Valentina .25 oz"], ["Dried Chili Pepper (2 Split)"]);
   let espressoMartini = new Drink("Espresso Martini", "Coupe Glass", ["Don Julio Reposado 1 oz"], "Ancho Reyes Chili Liqueur 1 oz", ["Chocolate Bitters (4 Dashes)", "Espresso 3 oz", "Vanilla (1 Dash)"], ["Orange Peel"]);
   let floridaGrovePunch = new Drink("Florida Grove Punch", "Pineapple Glass", ["Corazon Blanco 1.5 oz"], "None", ["Agave .75 oz", "Cucumber (3 Slices Muddled)", "Lime Juice .5 oz", "Watermelon Juice 1.5 oz"], ["Pineapple Wedge and Leaf"]);
   let floridaGrovePunchFB = new Drink("Florida Grove Punch (Fish Bowl)", "Fish Bowl", ["Corazon Blanco 6 oz"], "None", ["Agave 2.25 oz", "Cucumber (6 Slices Muddled)", "Lime Juice 1.5 oz", "Watermelon Juice 6 oz"], ["Pineapple Wedge and Leaf"]);
   let jaliscoGardens = new Drink("Jalisco Gardens", "Rocks Glass", ["Volcan Blanco 1.5 oz"], "Ancho Reyes Verde Liqueur .5 oz", ["Agave .75 oz", "Lime Juice .75 oz", "Tomatillo (1 Quarter Muddled)"], ["Lime Wheel"]);
   let maserita = new Drink("Maserita", "Margarita Glass", ["Milagro Silver 2 oz"], "Grand Marnier (Float)", ["Agave 1 oz", "Happy Juice 3 oz"], ["Lime Wheel"]);
   let mexicanBullDog = new Drink("Mexican Bull Dog", "Rocks Glass", ["1800 Reposado 1 oz"], "St. George Nola Coffee Vodka 1.5 oz", [ "Cola (Splash)", "Cream (Float)"], ["None"]);
   let michelada = new Drink("Michelada", "Beer Mug", ["None"], "None", ["Dos Equis", "Michelada Mix 5 oz"], ["Lime Wheel"]);
   let naturita = new Drink("Naturita", "Hurricane Glass", ["Altos Blanco 2 oz"], "None", ["Agave 1 oz", "Happy Juice 2 oz"], ["Lime Wheel"]);
   let oaxacanOldFashioned = new Drink("Oaxacan Old Fashioned", "Rocks Glass", ["Altos Reposado 1.5 oz", "Los Vecinos Espadin Mezcal .5 oz"], "None", ["Agave .25 oz", "Angostura Bitters (2 Dashes)"], ["Flamed Orange Peel"]);
   let pacificMule = new Drink("Pacific Mule", "Copper Mug", ["St. George Green Chili Vodka 1.5 oz"], "None", ["Agave .25 oz", "Cucumber (1 Slice Muddled)", "Ginger Beer 4 oz", "Lime Juice .25 oz"], ["Cucumber Slice (Length)"]);
   let paloma = new Drink("Paloma", "Rocks Glass", ["Altos Blanco 1.5 oz"], "None", ["Agave .5 oz", "Grapefruit Soda 3 oz", "Lime Juice .25 oz"], ["Lime Wheel"]);
   let pricklyPearMargarita = new Drink("Prickly Pear Margarita", "Coupe Glass", ["Don Julio Blanco 1.5 oz"], "Cointreau .5 oz", ["Lime Juice .75 oz", "Pineapple Juice .5 oz", "Prickly Pear Syrup 1 oz"], ["Lime Wheel"]);
   let sangria = new Drink("Sangria", "Wine Glass", ["St. George California Citrus Vodka .75 oz"], "None", ["Agave .5 oz", "Blackberry (3 Muddled)", "Lemon (1 Slice Muddled)", "Lolailo Sangria 4 oz", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"])
   let skinnyOrganic = new Drink("Skinny Organic", "Hurricane Glass", ["Azunia Blanco 2 oz"], "None", ["Agave 1 oz", "Lime Juice 1.5 oz"], ["Lime Wheel"]);
   let spicyBerryFresca = new Drink("Spicy Berry Fresca", "Rocks Glass", ["Dulce Vida Pineapple 1.5 oz"], "None", ["Grapefruit Soda 3 oz", "Jalapeno (1 Slice Muddled)", "Lime Juice .5 oz", "Strawberry Puree .75 oz"], ["Jalapeno (Slice)", "Strawberry (Slice)"]);
   let tntRita = new Drink("T&T Rita", "Mason Jar", ["El Jimador 2 oz"], "Cointreau .5 oz", ["Agave 1 oz", "Lime Juice 2 oz"], ["Lime Wheel"]);
   let tntRumRunner = new Drink("T&T Rum Runner", "Pineapple Glass", ["Brugal Anejo Rum 1.25 oz", "Blue Chair Bay Banana Rum 1 oz"], ["Guava Puree .5 oz", "Lime Juice 1 oz", "Pineapple Juice 1 oz"], ["Dark Rum (Float)", "Pineapple Wedge and Leaf"]);
   let tntRumRunnerFB = new Drink("T&T Rum Runner (Fish Bowl)", "Fish Bowl", ["Brugal Anejo Rum 3.75 oz", "Blue Chair Bay Banana Rum 3 oz"], ["Guava Puree 1.5 oz", "Lime Juice 2.25 oz", "Pineapple Juice 2.25 oz"], ["Dark Rum (Float)", "Pineapple Wedge and Leaf"]);
   let tropicalMargarita = new Drink("Tropical Margarita", "Pineapple Glass", ["Corralejo Silver 1.5 oz"], "Cointreau .5 oz", ["Guava Puree .75 oz", "Lime Juice .75 oz", "Pineapple Juice .5 oz", "Vanilla (1 Dash)"], ["Pineapple Wedge and Leaf"]);
   
   let drinks = [
       aldoronaFB,
       avocadoMargarita,
       babyStout,
       bloodOrangeAndSage,
       carajillo,
       churchill,
       cocorita,
       cucumberita,
       dropItLikeItsHot,
       espressoMartini,
       floridaGrovePunch,
       floridaGrovePunchFB,
       jaliscoGardens,
       maserita,
       mexicanBullDog,
       michelada,
       naturita,
       oaxacanOldFashioned,
       pacificMule,
       paloma,
       pricklyPearMargarita,
       sangria,
       skinnyOrganic,
       spicyBerryFresca,
       tntRita,
       tntRumRunner,
       tntRumRunnerFB,
       tropicalMargarita,
      ];

$(document).ready(function(){

    /* Drink Name Array */
    /*
    var drinkNameArray = [
       "aldoronaFishBowl",
       "avocadoMargarita",
       "babyStout",
       "bloodOrangeAndSage",
       "carajillo",
       "churchill",
       "cocorita",
       "cucumberita",
       "dropItLikeItsHot",
       "espressoMartini",
       "floridaGrovePunch",
       "floridaGrovePunchFishBowl",
       "jaliscoGardens",
       "maserita",
       "mexicanBullDog",
       "michelada",
       "naturita",
       "oaxacanOldFashioned",
       "pacificMule",
       "paloma",
       "pricklyPear",
       "sangria",
       "skinnyOrganic",
       "spicyBerryFresca",
       "tntRita",
       "tntRumRunner",
       "tntRumRunnerFishBowl",
       "tropicalMargarita"
    ]
    */
    
    /* Margarita Buttons */
    $(".margarita-buttons").click(function(){
        $(".margarita-buttons").hide();
        $(".item3").fadeIn(200);
        $(".item4").fadeIn(200);
        drinks.map(x => {
            if(x["name"] === this.value){
                /*
                var drinkName = x + "Title";
                console.log(drinkName);
                document.getElementById(drinkName).style.display = "block";
                */
                console.log(this.value);
                console.log(x["glass"]);
                $(".drink-title").show();
                $("#drinkTitle").text(this.value);
                $("#glassRecipe").text(x["glass"]);
                $("#liquorRecipe").text(x["liquor"]);
                $("#liqueurRecipe").text(x["liqueur"]);
                if(x["mixers"].length === 1){
                    $("#mixersRecipe").text(x["mixers"][0]);
                } else if(x["mixers"].length === 2){
                    $("#mixersRecipe2").show();
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixersRecipe2").text(x["mixers"][1]);
                } else if(x["mixers"].length === 3){
                    $("#mixersRecipe2").show();
                    $("#mixersRecipe3").show();
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixersRecipe2").text(x["mixers"][1]);
                    $("#mixersRecipe3").text(x["mixers"][2])
                } else if(x["mixers"].length === 4){
                    $("#mixersRecipe2").show();
                    $("#mixersRecipe3").show();
                    $("#mixersRecipe4").show();
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixersRecipe2").text(x["mixers"][1]);
                    $("#mixersRecipe3").text(x["mixers"][2]);
                    $("#mixersRecipe4").text(x["mixers"][3]);
                }

                if(x["garnish"].length === 1){
                    $("#garnishRecipe").text(x["garnish"][0]);
                } else if(x["garnish"].length === 2){
                    $("#garnishRecipe2").show();
                    $("#garnishRecipe").text(x["garnish"][0]);
                    $("#garnishRecipe2").text(x["garnish"][1]);
                } else if(x["garnish"].length === 3){
                    $("#garnishRecipe2").show();
                    $("#garnishRecipe3").show();
                    $("#garnishRecipe").text(x["garnish"][0]);
                    $("#garnishRecipe2").text(x["garnish"][1]);
                    $("#garnishRecipe3").text(x["garnish"][2])
                } else if(x["garnish"].length === 4){
                    $("#garnishRecipe2").show();
                    $("#garnishRecipe3").show();
                    $("#garnishRecipe4").show();
                    $("#garnishRecipe").text(x["garnish"][0]);
                    $("#garnishRecipe2").text(x["garnish"][1]);
                    $("#garnishRecipe3").text(x["garnish"][2]);
                    $("#garnishRecipe4").text(x["garnish"][3]);
                }
                
            }
        });
    });

    /* Navigation Buttons */
    $("#navMargarita").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".margarita-buttons").fadeIn(200);
        $(".button-container").show();
    });

}); // jQuery end tag 