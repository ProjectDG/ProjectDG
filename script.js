$(document).ready(function(){
    /* default */
    $("#recipeContainer").hide();

    /* Drink Name Array */
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
    
    /* Margarita Buttons */
    $(".margarita-buttons").click(function(){
        $(".margarita-buttons").hide();
        $(".item3").fadeIn(200);
        $(".item4").fadeIn(200);
        drinkNameArray.map(x => {
            if(x === this.value){
                console.log(x);
                var drinkTitle = x + "Title";
                var drinkRecipe = x + "Recipe";
                document.getElementById(drinkTitle).style.display = "block";
                document.getElementById(drinkRecipe).style.display = "block";
            }
        });
    });

    /* Navigation Buttons */
    $("#navMargarita").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".margarita-buttons").fadeIn(200);
        $(".button-container").show();
    });

}); // jQuery end tag 