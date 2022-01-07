class Drink{
    constructor(name, glass, rim, liquor = [], liqueur, mixers = [], garnish = [], photo, buttonText, batch){
     this.name = name;
     this.glass = glass;
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.buttonText = buttonText;
     this.batch = batch;
    };
   };
   
   //drinks for permanent library................................................................................................
   //let aldoronaFB = new Drink("Aldorona (Fish Bowl)", "Fish Bowl", "Guest Choice", ["El Jimador 6 oz"], "Triple Sec 2 oz", ["Lime Juice 1.5 oz,", "Margarita Mix 8 oz"], ["Coronita,", "Lime Wheel"],"./images/.jpg");
   let avocadoMargarita = new Drink("Avocado Margarita", "Hurricane Glass", "Tajin Chile Lime Salt", ["Don Julio Anejo 1.5 oz"], "Cointreau .5 oz", ["Avocado Sour Mix 3 oz,", "Lime Juice .75 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let babyStout = new Drink("Baby Stout", "Rocks Glass", "None", ["Patron XO 1 oz"], "Bailey's Irish Cream (Float)", ["Coffee 3 oz"], ["Coffee Bean"],"./images/margarita.jpg");
   let bloodOrangeMargarita = new Drink("Blood Orange Margarita", "Rocks Glass", "Guest Choice", ["Pueblo Viejo Reposado"], "Solerno .5 oz", ["Blood Orange Juice .75 oz,", "Honey Syrup .5 oz"], ["Orange Slice"],"./images/margarita.jpg");
   let carajillo = new Drink("Carajillo", "Rocks Glass", "None", ["None"], "Licor 43 1.5 oz", ["Coffee 3 oz"], ["Lemon Twist"],"./images/margarita.jpg");
   let churchill = new Drink("Churchill", "Rocks Glass", "None", ["Four Roses Bourbon 1.5 oz"], "Ancho Reyes Chili Liqueur .5 oz", ["Agave .75 oz,", "Blackberry (1 Muddled),", "Lemon Juice .5 oz,", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"],"./images/margarita.jpg");
   let cocorita = new Drink("CocoRita", "Hurricane Glass", "Coconut Powder", ["1800 Coconut 1.5 oz"], "Combier Orange", ["Coconut Puree 1 oz,", "Lime Juice .5 oz,", "Pineapple Juice .5 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let cucumberita = new Drink("CucumbeRita", "Margarita Glass", "Guest Choice", ["Milagro Reposado 1.5 oz"], "Combier Orange", ["Agave .5 oz,", "Cayenne (2 Shakes),", "Cucumber (3 Slices Muddled),", "Lime Juice 2 oz"], ["Cucumber Wheel"],"./images/margarita.jpg");
   let dropItLikeItsHot = new Drink("Drop It LIke It's Hot", "Margarita Glass", "Tajin Chile Lime Salt", ["Tanteo Jalapeno 1.5 oz"], "Combier Orange", ["Agave .5 oz,", "Cayenne (2 Shakes),", "Lime Juice 2 oz,", "Valentina .25 oz"], ["Dried Chili Pepper (2 Split)"],"./images/margarita.jpg");
   let espressoMartini = new Drink("Espresso Martini", "Coupe Glass", "None", ["Don Julio Reposado 1 oz"], "Ancho Reyes Chili Liqueur 1 oz", ["Chocolate Bitters (4 Dashes),", "Espresso 3 oz,", "Vanilla (1 Dash)"], ["Orange Peel"],"./images/margarita.jpg");
   let floridaGrovePunch = new Drink("Florida Grove Punch", "Pineapple Glass", "Tajin Chile Lime Salt", ["Pueblo Viejo Blanco 1.5 oz"], null, ["Agave .75 oz,", "Cucumber (3 Slices Muddled),", "Lime Juice .5 oz,", "Watermelon Juice 1.5 oz"], ["Pineapple Wedge and Leaf"],"./images/margarita.jpg");
   let floridaGrovePunchFB = new Drink("Florida Grove Punch (Fish Bowl)", "Fish Bowl", "Tajin Chile Lime Salt", ["Pueblo Viejo Blanco 6 oz"], null, ["Agave 2.25 oz,", "Cucumber (6 Slices Muddled),", "Lime Juice 1.5 oz,", "Watermelon Juice 6 oz"], ["Pineapple Wedge and Leaf"],"./images/margarita.jpg");
   //let jaliscoGardens = new Drink("Jalisco Gardens", "Rocks Glass", "Tajin Chile Lime Salt", ["Volcan Blanco 1.5 oz"], "Ancho Reyes Verde Liqueur .5 oz", ["Agave .75 oz,", "Lime Juice .75 oz,", "Tomatillo (1 Quarter Muddled)"], ["Lime Wheel"],"./images/margarita.jpg");
   let juanCollins = new Drink("Juan Collins", "Rocks Glass", "None", ["El Jimador Reposado 1.5 oz"], null, ["Agave .5 oz,", "Lemon Juice .5 oz,", "Topo Chico"], ["Lemon Twist"], "./images/margarita.jpg")
   let maserita = new Drink("Maserita", "Margarita Glass", "Guest Choice", ["Milagro Silver 2 oz"], "Grand Marnier (Float)", ["Agave 1 oz,", "Happy Juice 3 oz"], ["Lime Wheel"], "./images/margarita.jpg");
   let mexicanBullDog = new Drink("Mexican Bull Dog", "Rocks Glass", "None", ["1800 Reposado 1 oz"], "St. George Nola Coffee Vodka 1.5 oz", [ "Cola (Splash),", "Cream (Float)"], ["None"],"./images/margarita.jpg");
   //let michelada = new Drink("Michelada", "Beer Mug", "Tajin Chile Lime Salt", ["None"], null, ["Dos Equis,", "Michelada Mix 5 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let mistletoeMargarita = new Drink("Mistletoe Margarita", "Margarita Glass", "Guest Choice", ["Milagro Silver 1.5 oz"], "Grand Marnier 2 oz", ["Agave 1 oz,", "Cranberry Juice 2 oz,", "Lime Juice 2 oz"], ["Cranberries,", "Rosemary"],"./images/margarita.jpg")
   let naturita = new Drink("Naturita", "Hurricane Glass", "Guest Choice", ["Altos Blanco 2 oz"], null, ["Agave 1 oz,", "Happy Juice 2 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let oaxacanOldFashioned = new Drink("Oaxacan Old Fashioned", "Rocks Glass", "None", ["Altos Reposado 1.5 oz,", "Los Vecinos Espadin Mezcal .5 oz"], null, ["Agave .25 oz,", "Angostura Bitters (2 Dashes)"], ["Flamed Orange Peel"],"./images/margarita.jpg");
   let pacificMule = new Drink("Pacific Mule", "Copper Mug", "None", ["St. George Green Chili Vodka 1.5 oz"], "None", ["Agave .25 oz,", "Cucumber (1 Slice Muddled),", "Ginger Beer 4 oz,", "Lime Juice .25 oz"], ["Cucumber Slice (Length)"],"./images/margarita.jpg");
   let paloma = new Drink("Paloma", "Rocks Glass", "None", ["Altos Blanco 1.5 oz"], null, ["Agave .5 oz,", "Grapefruit Soda 3 oz,", "Lime Juice .25 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let pricklyPearMargarita = new Drink("Prickly Pear Margarita", "Coupe Glass", "Guest Choice", ["Don Julio Blanco 1.5 oz"], "Combier Orange", ["Lime Juice .75 oz,", "Pineapple Juice .5 oz,", "Prickly Pear Syrup 1.5 oz,"], ["Lime Wheel"],"./images/margarita.jpg");
   //let sangria = new Drink("Sangria", "Wine Glass", "None", ["St. George California Citrus Vodka .75 oz"], null, ["Agave .5 oz,", "Blackberry (3 Muddled),", "Lemon (1 Slice Muddled),", "Lolailo Sangria 4 oz,", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"],"./images/margarita.jpg");
   let sangria = new Drink("Sangria", "Mason Jar", "None", ["Sangria Mix (Half Glass w/ Ice)"], null, ["Ginger Ale"], ["Blackberry and Orange Slice (Flag)"],"./images/margarita.jpg");
   let skinnyOrganic = new Drink("Skinny Organic", "Hurricane Glass", "Guest Choice", ["Azunia Blanco 2 oz"], null, ["Agave 1 oz,", "Lime Juice 1.5 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   //let spicyBerryFresca = new Drink("Spicy Berry Fresca", "Rocks Glass", "None", ["Dulce Vida Pineapple 1.5 oz"], null, ["Grapefruit Soda 3 oz,", "Jalapeno (1 Slice Muddled),", "Lime Juice .5 oz,", "Strawberry Puree .75 oz"], ["Jalapeno (Slice),", "Strawberry (Slice)"],"./images/margarita.jpg");
   let spicyWatermelonMargarita = new Drink("Spicy Watermelon Margarita", "Margarita Glass", "Tajin Chile Lime Salt", ["Tanteo Habanero 2 oz"], null, ["Agave .75 oz,", "Lime Juice .5 oz,", "Watermelon Juice 1.5 oz"], ["Watermelon Chunks"], "./images/margarita.jpg")
   let tequilaSour = new Drink("Tequila Sour", "Coupe Glass", "None", ["Tanteo Chipotle 2 oz"], null, ["Agave .75 oz,", "Egg Whites 1.5 oz,", "Lime Juice 1.25 oz"], ["Angostura Bitters (Stencil),", "Lime Twist"], "./images/margarita.jpg")
   let tntRita = new Drink("T&T Rita", "Mason Jar", "Guest Choice", ["El Jimador 2 oz"], "Combier Orange", ["Agave 1 oz", "Lime Juice 2 oz"], ["Lime Wheel"],"./images/margarita.jpg");
   let tntRumRunner = new Drink("T&T Rum Runner", "Pineapple Glass", "None", ["Papas Pilar Anejo 1.25 oz,", "Club Caribe Banana Rum 1 oz"], null,["Guava Puree .5 oz,", "Lime Juice 1 oz,", "Pineapple Juice 1 oz"], ["Dark Rum (Float),", "Pineapple Wedge and Leaf"],"./images/margarita.jpg");
   let tntRumRunnerFB = new Drink("T&T Rum Runner (Fish Bowl)", "Fish Bowl", "None", ["Papas Pilar Anejo 1.25 oz 3.75 oz,", "Club Caribe Banana Rum 3 oz"], null, ["Guava Puree 1.5 oz,", "Lime Juice 2.25 oz,", "Pineapple Juice 2.25 oz"], ["Dark Rum (Float),", "Pineapple Wedge and Leaf"],"./images/margarita.jpg");
   let tropicalMargarita = new Drink("Tropical Margarita", "Pineapple Glass", "Churro Sugar", ["Espero Blanco"], "Combier Orange", ["Guava Puree .75 oz,", "Lime Juice .75 oz,", "Pineapple Juice .5 oz,", "Vanilla (1 Dash)"], ["Pineapple Wedge and Leaf"],"./images/margarita.jpg");





   let houseMargaritaBatch = new Drink("House Margarita (Batch)", null, null, ["Well Tequila White (2 Bottles),", "Well Tequila Gold (2 Bottles)"], "Triple Sec (Half Bottle)", ["Powder Mix (4 Packs),", "Water (Fill to 20 Liters)"], [null],"./images/margarita.jpg", null, "Batch");
   let sangriaBatch = new Drink("Sangria (Batch)", null, null, ["Franzia Wine (3 Boxes),"], "Blackberry Brandy (1/2 Bottle), Peach Schnapps (1/2 Bottle)", ["Lime Juice (12 oz),", "Orange Juice (1/2 Gallon),", "Sugar (1 Cup)"], [null],"./images/margarita.jpg", null, "Batch");
                                                                                        //fix liquor to array



   
   let drinks = [
       //aldoronaFB,
       avocadoMargarita,
       babyStout,
       bloodOrangeMargarita,
       carajillo,
       churchill,
       cocorita,
       cucumberita,
       dropItLikeItsHot,
       espressoMartini,
       floridaGrovePunch,
       floridaGrovePunchFB,
       //jaliscoGardens,
       juanCollins,
       maserita,
       mexicanBullDog,
       //michelada,
       mistletoeMargarita,
       naturita,
       oaxacanOldFashioned,
       pacificMule,
       paloma,
       pricklyPearMargarita,
       sangria,
       skinnyOrganic,
       //spicyBerryFresca,
       spicyWatermelonMargarita,
       tequilaSour,
       tntRita,
       tntRumRunner,
       tntRumRunnerFB,
       tropicalMargarita,
       // Batch recipes
       houseMargaritaBatch,
       sangriaBatch,

      ];
      

      const searchInput = document.querySelector('.input');
      const clearButton = document.getElementById('clear');



      
      /* Search Button */
      searchInput.addEventListener("input", (e) => {
          let value = e.target.value;
          console.log(value)

          if(value && value.trim().length > 0){
              value = value.trim().toLowerCase();
          } else {
              clearList();
          }
      })

      /* Clear Button */
      clearButton.addEventListener("click", () => {
          clearList();
      })

      /* Result */
      function setList(results){
        
          for(const drink of results){
            $(".all-buttons").hide();
            const resultItem = document.createElement('button');
            resultItem.classList.add('result-item');
            resultItem.classList.add('all-buttons');
            resultItem.id = drink.name.toLowerCase();
            resultItem.value = drink.name;
            const text = document.createTextNode(drink.name); /* make this specific to the object like the pics so you can add <br> */
            resultItem.appendChild(text);
            list.appendChild(resultItem);
            $(".results-list").show();

            $(".result-item").fadeIn(200);
            console.log(drink.name)  /* figure out to to add this to the buttons value */
          }

          if (results.length === 0 ){
            noResults()
        }

        console.log(results)
      }

      /* Search Narrow */
      searchInput.addEventListener("input", (e) => {
          clearList();
          let value = e.target.value;

          if(value && value.trim().length > 0){
              value = value.trim().charAt(0).toUpperCase() + value.slice(1);


              setList(drinks.filter(drink => {
                  return drink.name.includes(value);
              }))
          }
      })

      /* Clear List */
      function clearList(){
          while(list.firstChild){
              list.removeChild(list.firstChild);
          }
      }

      /* No Result */
      function noResults(){
        const error = document.createElement('li')
        error.classList.add('error-message')
        const text = document.createTextNode('No results found.')
        error.appendChild(text)
        list.appendChild(error)
      }


$(document).ready(function(){

    $('body').on('click','.all-buttons', '.result-item', function(){
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".button-container").hide();
        $(".item3").fadeIn(200);
        $(".item4").fadeIn(200);
        $(".initialRecipe").show();

        drinks.map(x => {

            if(x["name"] === this.value){
                console.log(this.value);
                $(".drink-title").show();
                $("#drinkTitle").text(this.value);
                $("#drinkPhoto").attr("src", x["photo"]);
                $("#glassRecipe").text(x["glass"]);

                if(x["rim"] == null){                   
                    $("#rim").hide();
                    $("#rimRecipe").hide();
                    $(".recipe-container").css( "grid-template-rows", "min-content 0 min-content 3vh min-content min-content 3vh min-content 3vh min-content min-content min-content min-content min-content 3vh min-content min-content min-content min-content" );
                } else {
                    $("#rim").show();
                    $("#rimRecipe").show();
                    $("#rimRecipe").text(x["rim"]);
                    $(".recipe-container").css( "grid-template-rows", "min-content 3vh min-content 3vh min-content min-content 3vh min-content 3vh min-content min-content min-content min-content min-content 3vh min-content min-content min-content min-content" );
                }

                
                $("#liquorRecipe").text(x["liquor"]);

                if(x["liquor"].length === 2){
                    $("#liquorRecipe2").show();
                    $("#liquorRecipe").text(x["liquor"][0]);
                    $("#liquorRecipe2").text(x["liquor"][1]);
                }

                if(x["liqueur"] == null){                 
                    $("#liqueur").hide();
                    $("#liqueurRecipe").hide();
                    $(".recipe-container").css( "grid-template-rows", "min-content 3vh min-content 3vh min-content min-content 0 min-content 3vh min-content min-content min-content min-content min-content 3vh min-content min-content min-content min-content" );
                } else {
                    $("#rim").show();
                    $("#rimRecipe").show();                                                 // i need to nest all of the if statements if i want to hide rows....maybe
                    $("#liqueur").show();
                    $("#liqueurRecipe").show();
                    $("#liqueurRecipe").text(x["liqueur"]);
                    $(".recipe-container").css( "grid-template-rows", "min-content 3vh min-content 3vh min-content min-content 3vh min-content 3vh min-content min-content min-content min-content min-content 3vh min-content min-content min-content min-content" );
                }
                

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
                } else if(x["mixers"].length === 5){
                    $("#mixersRecipe2").show();
                    $("#mixersRecipe3").show();
                    $("#mixersRecipe4").show();
                    $("#mixersRecipe5").show();
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixersRecipe2").text(x["mixers"][1]);
                    $("#mixersRecipe3").text(x["mixers"][2]);
                    $("#mixersRecipe4").text(x["mixers"][3]);
                    $("#mixersRecipe5").text(x["mixers"][4]);
                } /*
                else if(x["mixers"] === null){
                                                        // look into changing fromm displaying "None" to hiding if == null
                }
                */

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


                if(x["batch"] === "Batch"){
                    $(".drink-title").show();
                    $("#drinkTitle").text(this.value);
                    $("#drinkPhoto").attr("src", x["photo"]);
                    $(".batch-class").hide();
                }
                
            }

        });
    })

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


    /* All Buttons */
    

    var extraRecipeSlots =  
    $("#liquorRecipe2").hide();
    $("#mixersRecipe2").hide();
    $("#mixersRecipe3").hide();
    $("#mixersRecipe4").hide();
    $("#mixersRecipe5").hide();
    $("#garnishRecipe2").hide();
    $("#garnishRecipe3").hide();
    $("#garnishRecipe4").hide();
    $(".results-list").hide();
    

    /* Navigation Buttons */
    $("#navMargarita").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".margarita-buttons").fadeIn(200);
        $(".button-container").show();
    });

    $("#navFrozen").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".frozen-buttons").fadeIn(200);
        $(".button-container").show();
    });

    $("#navSpecialty").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".specialty-buttons").fadeIn(200);
        $(".button-container").show();
    });

    $("#navFishBowls").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();        
        $(".form-container").hide();
        $(".results-list").hide();
        $(".fishbowl-buttons").fadeIn(200);
        $(".button-container").show();
    });

    $("#navDessert").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".dessert-buttons").fadeIn(200);
        $(".button-container").show();
    });

    $("#navOther, #clear").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".results-list").hide();
        $(".other-buttons").fadeIn(200);
        $(".form-container").show();
        $(".button-container").show();
        searchInput.value = '';
    });

    $("#navBatch").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".batch-buttons").fadeIn(200);
        $(".results-list").hide();
        $(".button-container").show();
    });

}); // jQuery end tag 