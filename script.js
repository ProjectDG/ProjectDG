class Drink{
    constructor(name, glass, rim, liquor = [], liqueur = [], mixers = [], garnish = [], photo, batch, instructions = []){
     this.name = name;
     this.glass = glass;
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.batch = batch;
     this.instructions = instructions;
    };
   };
   
   //drinks for permanent library................................................................................................
   //let aldoronaFB = new Drink("Aldorona (Fish Bowl)", "Fish Bowl", "Guest Choice", ["El Jimador 6 oz"], "Triple Sec 2 oz", ["Lime Juice 1.5 oz,", "Margarita Mix 8 oz"], ["Coronita,", "Lime Wheel"],"./images/.jpg", null);
   let avocadoMargarita = new Drink("Avocado Margarita", "Hurricane Glass", "Tajin Chile Lime Salt", ["Don Julio Anejo 1.5 oz"], ["Combier Orange .5 oz"], ["Avocado Sour Mix 3 oz"], ["Lime"],"./images/logo.jpg", null);
   let babyStout = new Drink("Baby Stout", "Rocks Glass", null, ["Patron XO 1 oz"], ["Bailey's Irish Cream (Float)"], ["Coffee 3 oz"], ["Coffee Bean"],"./images/logo.jpg", null);
   let bloodOrangeMargarita = new Drink("Blood Orange Margarita", "Rocks Glass", "Guest Choice", ["Pueblo Viejo Reposado 1.5 oz"], ["Solerno (Blood Orange Liqeuer) .5 oz"], ["Blood Orange Juice .75 oz,", "Honey Syrup .5 oz"], ["Orange Slice"],"./images/bloodOrangeMargarita.jpg", null, ["Testing..."]);
   let carajillo = new Drink("Carajillo", "Rocks Glass", null, null, ["Licor 43 1.5 oz"], ["Coffee 3 oz"], ["Lemon Twist"],"./images/logo.jpg", null);
   let churchill = new Drink("Churchill", "Rocks Glass", null, ["Four Roses Bourbon 1.5 oz"], ["Ancho Reyes Chili Liqueur .5 oz"], ["Agave .75 oz,", "Blackberry (1 Muddled) and Orange (1 Slice Muddled),", "Lemon Juice .5 oz"], ["Blackberry and Orange Slice (Flag)"],"./images/churchill.jpg", null);
   let cocorita = new Drink("CocoRita", "Hurricane Glass", "Coconut Powder", ["1800 Coconut 1.5 oz"], ["Combier Orange .5 oz"], ["Coconut Puree 1 oz,", "Lime Juice .5 oz,", "Pineapple Juice .5 oz"], ["Lime"],"./images/logo.jpg", null);
   let cucumberita = new Drink("CucumbeRita", "Margarita Glass", "Guest Choice", ["Milagro Reposado 1.5 oz"], ["Combier Orange .5 oz"], ["Agave .5 oz,", "Cayenne (1 Shakes),", "Cucumber (3 Slices Muddled),", "Lime Juice 1.5 oz"], ["Cucumber Wheel"],"./images/cucumbeRita.jpg", null);
   let dropItLikeItsHot = new Drink("Drop It LIke It's Hot", "Margarita Glass", "Tajin Chile Lime Salt", ["Tanteo Jalapeno 1.5 oz"], ["Combier Orange  .5 oz"], ["Agave .5 oz,", "Cayenne (2 Shakes),", "Lime Juice 1.5 oz"], ["Dried Chili Pepper (2 Split)"],"./images/dropItLikeItsHot.jpg", null);
   let dulceRaz = new Drink("Dulce Raz", "Rocks Glass", null, ["Dulce Vida Pineapple Jalapeno 1.5 oz"], null, ["Agave .25 oz,", "Lime Juice .5 oz,", "Raspberry Syrup (Monin) 1 oz"], ["Pineapple Wedge and Jalapeno Slice"], "./images/dulceRaz.jpg");
   let espressoMartini = new Drink("Espresso Martini", "Coupe Glass", null, ["Don Julio Reposado 1 oz"], ["Ancho Reyes Chili Liqueur 1 oz"], ["Chocolate Bitters (4 Dashes),", "Espresso 3 oz,", "Vanilla 1 oz"], ["Orange Peel"],"./images/logo.jpg", null);
   let floridaGrovePunch = new Drink("Florida Grove Punch", "Pineapple Glass", "Tajin Chile Lime Salt", ["Pueblo Viejo Blanco 1.5 oz"], null, ["Agave .75 oz,", "Cucumber (3 Slices Muddled),", "Lime Juice .5 oz,", "Watermelon Juice 1.5 oz"], ["Pineapple Wedge and Leaf"],"./images/floridaGrovePunch.jpg", null);
   let floridaGrovePunchFB = new Drink("Florida Grove Punch (Fish Bowl)", "Fish Bowl", "Tajin Chile Lime Salt", ["Pueblo Viejo Blanco 6 oz"], null, ["Agave 2.25 oz,", "Cucumber (6 Slices Muddled),", "Lime Juice 1.5 oz,", "Watermelon Juice 6 oz"], ["Pineapple Wedge and Leaf"],"./images/logo.jpg", null);
   let floridaSunset = new Drink("Florida Sunset", "Rocks Glass", "Sugar", ["Bacardi Limon 1.5 oz"], ["Peach Schnapps .5 oz"], ["Agave .5 oz,", "Grenadine .5 oz,", "Lime Juice .5"], ["Orange and Cherry (Flag)"],"./images/floridaSunset.jpg", null);
   let houseMargaritaFrozen = new Drink ("House Margarita (Frozen)", "Mason Jar", "Guest Choice", ["Gold Tequila 1 oz,", "White Tequila 1 oz"], ["Triple Sec .5 oz"], ["Margarita Mix 2 oz,", "One Healthy Scoop of Ice"], ["Lime"],"./images/logo.jpg", null);
   //let jaliscoGardens = new Drink("Jalisco Gardens", "Rocks Glass", "Tajin Chile Lime Salt", ["Volcan Blanco 1.5 oz"], ["Ancho Reyes Verde Liqueur .5 oz"], ["Agave .75 oz,", "Lime Juice .75 oz,", "Tomatillo (1 Quarter Muddled)"], ["Lime Wheel"],"./images/logo.jpg", null);
   let juanCollins = new Drink("Juan Collins", "Rocks Glass", null, ["El Jimador Reposado 1.5 oz"], null, ["Agave .5 oz,", "Lemon Juice .5 oz,", "Topo Chico"], ["Lemon Twist"], "./images/juanCollins.jpg", null)
   let maserita = new Drink("Maserita", "Margarita Glass", "Guest Choice", ["Milagro Silver 2 oz"], ["Grand Marnier (.5 oz Float)"], ["Agave 1 oz,", "Happy Juice 2 oz"], ["Lime"], "./images/maserita.jpg", null);
   let mexicanBullDog = new Drink("Mexican Bull Dog", "Rocks Glass", null, ["1800 Reposado 1 oz,", "St. George Nola Coffee Vodka 1.5 oz"], null, [ "Cola (Splash),", "Cream (1 oz Float)"], null,"./images/logo.jpg", null);
   //let michelada = new Drink("Michelada", "Beer Mug", "Tajin Chile Lime Salt", null, null, ["Dos Equis,", "Michelada Mix 5 oz"], ["Lime Wheel"],"./images/logo.jpg", null);
   let mistletoeMargarita = new Drink("Mistletoe Margarita", "Margarita Glass", "Guest Choice", ["Milagro Silver 1.5 oz"], ["Grand Marnier 2 oz"], ["Agave 1 oz,", "Cranberry Juice 2 oz,", "Lime Juice 2 oz"], ["Cranberries,", "Rosemary"],"./images/logo.jpg", null)
   let naturita = new Drink("Naturita", "Hurricane Glass", "Guest Choice", ["Altos Blanco 2 oz"], null, ["Agave 1 oz,", "Happy Juice 1.5 oz"], ["Lime"],"./images/logo.jpg", null);
   let oaxacanOldFashioned = new Drink("Oaxacan Old Fashioned", "Rocks Glass", null, ["Altos Reposado 1.5 oz,", "Los Vecinos Espadin Mezcal .5 oz"], null, ["Agave .25 oz,", "Angostura Bitters (2 Dashes)"], ["Flamed Orange Peel"],"./images/logo.jpg", null);
   let pacificMule = new Drink("Pacific Mule", "Copper Mug", null, ["St. George Green Chili Vodka 1.5 oz"], null, ["Agave .25 oz,", "Cucumber (1 Slice Muddled),", "Ginger Beer 4 oz,", "Lime Juice .25 oz"], ["Cucumber Wheel"],"./images/pacificMule.jpg", null);
   let paloma = new Drink("Paloma", "Rocks Glass", null, ["Altos Blanco 1.5 oz"], null, ["Agave .5 oz,", "Grapefruit Soda 3 oz,", "Lime Juice .25 oz"], ["Lime"],"./images/paloma.jpg", null);
   let pricklyPearMargarita = new Drink("Prickly Pear Margarita", "Hurricane Glass", "Guest Choice", ["Don Julio Blanco 1.5 oz"], ["Combier Orange .75 oz"], ["Lime Juice .75 oz,", "Pineapple Juice .5 oz,", "Prickly Pear Syrup 1.5 oz"], ["Lime"],"./images/logo.jpg", null);
   //let sangria = new Drink("Sangria", "Wine Glass", null, ["St. George California Citrus Vodka .75 oz"], null, ["Agave .5 oz,", "Blackberry (3 Muddled),", "Lemon (1 Slice Muddled),", "Lolailo Sangria 4 oz,", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"],"./images/logo.jpg"), null;
   let sangria = new Drink("Sangria", "Mason Jar", null, null, null, ["Ginger Ale,", "Sangria Mix (Half Glass with Ice)"], ["Blackberry and Orange Slice (Flag)"],"./images/logo.jpg", null);
   let skinnyOrganic = new Drink("Skinny Organic", "Hurricane Glass", "Guest Choice", ["Azunia Blanco 2 oz"], null, ["Agave 1 oz,", "Lime Juice 1 oz"], ["Lime"],"./images/skinnyMargarita.jpg", null);
   //let spicyBerryFresca = new Drink("Spicy Berry Fresca", "Rocks Glass", null, ["Dulce Vida Pineapple Jalapeno 1.5 oz"], null, ["Grapefruit Soda 3 oz,", "Jalapeno (1 Slice Muddled),", "Lime Juice .5 oz,", "Strawberry Puree .75 oz"], ["Jalapeno (Slice),", "Strawberry (Slice)"],"./images/logo.jpg", null);
   let spicyWatermelonMargarita = new Drink("Spicy Watermelon Margarita", "Margarita Glass", "Tajin Chile Lime Salt", ["Tanteo Habanero 2 oz"], null, ["Agave .75 oz,", "Lime Juice .5 oz,", "Watermelon Juice 1.5 oz"], ["Watermelon Chunks Covered in Tajin"], "./images/spicyWatermelonMargarita.jpg", null)
   let tequilaSour = new Drink("Tequila Sour", "Coupe Glass", null, ["Tanteo Chipotle 2 oz"], null, ["Agave .75 oz,", "Egg Whites 1.5 oz,", "Lime Juice 1.25 oz"], ["Angostura Bitters (Stencil),", "Lime Twist"], "./images/logo.jpg", null)
   let tntRita = new Drink("T&T Rita", "Mason Jar", "Guest Choice", ["El Jimador 2 oz"], ["Combier Orange .75 oz"], ["Agave .5 oz,", "Lime Juice 1.5 oz"], ["Lime"],"./images/tntMargarita.jpg", null);
   let tntRumRunner = new Drink("T&T Rum Runner", "Pineapple Glass", null, ["Papas Pilar Anejo 1.25 oz,", "Club Caribe Banana Rum 1 oz"], null,["Guava Puree .5 oz,", "Lime Juice 1 oz,", "Pineapple Juice 1 oz"], ["Dark Rum (Float) if Ordered,", "Pineapple Wedge and Leaf"],"./images/tntRumRunner.jpg", null);
   let tntRumRunnerFB = new Drink("T&T Rum Runner (Fish Bowl)", "Fish Bowl", null, ["Papas Pilar Anejo 3.75 oz,", "Club Caribe Banana Rum 3 oz"], null, ["Guava Puree 1.5 oz,", "Lime Juice 2.25 oz,", "Pineapple Juice 2.25 oz"], ["Dark Rum (Float) if Ordered,", "Pineapple Wedge and Leaf"],"./images/logo.jpg", null);
   let tropicalMargarita = new Drink("Tropical Margarita", "Pineapple Glass", "Churro Sugar", ["Espero Blanco 1.5 oz"], ["Combier Orange  .75 oz"], ["Guava Puree .75 oz,", "Lime Juice .75 oz,", "Pineapple Juice .5 oz,", "Vanilla .5"], ["Pineapple Wedge and Leaf"],"./images/tropicalMargarita.jpg", null);
   

   // Monthly Drink Specials
   //let specialMargarita = new Drink("'Special' Margarita", "Margarita Glass", "Guest Choice", ["Milagro Reposado 2 oz"], ["Blue Curaco .5 oz,", "Combier Orange  .5 oz"], ["Agave 1 oz,", "Cucumber (Muddle w/ Pinch of Salt),", "Happy Juice 1 oz"], ["Tajin Rimmed Cucumber"],"./images/logo.jpg", null);
   let specialMargarita = new Drink("'Special' Margarita", "Margarita Glass", "Tajin Chile Lime Salt", ["Tanteo Chipotle 2 oz"], ["Combier .5 oz"], ["Agave .75 oz,", "Lime Juice 1 oz,", "Pineapple Juice 1 oz"], ["2 Chili Peppers,", "Pineapple Slice"], "./images/logo.jpg", null); 



   //  Batch Recipes
   let avocadoSourMixBatch = new Drink("Avocado Sour Mix (Batch)", null, null, null, null, ["Avocado (pre-packaged) 9 oz,", "Agave 12 oz,", "Lime Juice 12 oz,", "Pineapple Juice 12 oz"], null, "./images/logo.jpg", "Batch");
   let honeySyrupBatch = new Drink("Honey Syrup (Batch)", null, null, null, null, ["Honey 2 parts,", "Hot Water 1 part"], null, "./images/logo.jpg", "")
   let houseMargaritaBatch = new Drink("House Margarita (Batch)", null, null, ["Well Tequila White (2 Bottles),", "Well Tequila Gold (2 Bottles)"], ["Triple Sec (Half Bottle)"], ["Margarita Mix 2 Jugs,", "Water (Fill to 20 Liters)"], null, "./images/logo.jpg", "Batch");
   let margMixFrozenBatch = new Drink("Margarita Mix (Frozen / Batch)", null, null, null, null, ["Half Margarita Mix,", "Half Water"], null, "./images/logo.jpg", "");
   let sangriaBatch = new Drink("Sangria (Batch)", null, null, ["Franzia Wine (3 Boxes)"], ["Blackberry Brandy (1/2 Bottle),", "Peach Schnapps (1/2 Bottle)"], ["Lime Juice (12 oz),", "Orange Juice (1/2 Gallon),", "Sugar (1 Cup)"], null, "./images/logo.jpg", "Batch");


   // Searchable Drinks
   let cosmopolitan = new Drink("Cosmopolitan", "Martini Glass", null, ["Lemon Vodka 2 oz"], ["Combier Orange  .75 oz"], ["Cranberry Juice 1.5 oz,", "Lime Juice .75 oz"], ["Lemon Twist"], "./images/logo.jpg", null)
   let longIslandIcedTea = new Drink("Long Island Iced Tea", "Pint Glass", null, ["Gin .5 oz,", "Tequila .5 oz,", "Vodka .5 oz,", "Rum .5 oz"], ["Triple Sec .5 oz"], ["Agave .5,", "Coke (Splash),", "Lemon Juice 1 oz"], ["Lemon Wheel"], "./images/logo.jpg", null);
   let tntMojito = new Drink("T&T Mojito", "Mason Jar", null, ["Rum 1.5 oz"], null, ["Agave .5 oz,", "Lime Juice .5 oz,", "Mint Leaves (2-3 Muddled),", "Soda Water & Sprite"], ["Mint Leaves"], "./images/logo.jpg", null)
   let pinaColada = new Drink("Pina Colada", "Mason Jar", null, ["Rum 1.5 oz,"], null, ["Pina Colada Mix 1 oz,", "Pineapple Juice 2 oz"], ["Orange and Cherry (Flag)"], "./images/logo.jpg", null);
   let ranchWater = new Drink("Ranch Water", "Rocks Glass", null, ["Tequila 1.5 oz"], null, ["Lime Juice .5 oz,", "Soda Water"], ["Lime Wheel"], "./images/logo.jpg", null);
   let strawberryDaquairi = new Drink("Strawberry Daquairi", "Hurricane Glass", null, ["Rum 2 oz"], null, ["Lime Juice .75,", "Strawberry Puree 1.5 oz"], ["Lime"],"./images/logo.jpg", null);
   let whiteRussian = new Drink("White Russian");
   
   let drinks = [
       //aldoronaFB,
       avocadoMargarita,
       avocadoSourMixBatch,
       babyStout,
       bloodOrangeMargarita,
       carajillo,
       churchill,
       cocorita,
       cucumberita,
       dropItLikeItsHot,
       dulceRaz,
       espressoMartini,
       floridaGrovePunch,
       floridaGrovePunchFB,
       floridaSunset,
       honeySyrupBatch,
       houseMargaritaFrozen,
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
       skinnyOrganic,
       //spicyBerryFresca,
       specialMargarita,
       spicyWatermelonMargarita,
       tequilaSour,
       tntMojito,
       tntRita,
       tntRumRunner,
       tntRumRunnerFB,
       tropicalMargarita,


       // Batch recipes *******************
       avocadoSourMixBatch,
       honeySyrupBatch,
       houseMargaritaBatch,
       margMixFrozenBatch,
       sangriaBatch,


       //Searchable Drinks ******************
       cosmopolitan,
       longIslandIcedTea,
       pinaColada,
       ranchWater,
       sangria,
       strawberryDaquairi,
       whiteRussian,


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

            $(".result-item").show()//.fadeIn(200);
            console.log(drink.name)  /* figure out to add this to the buttons value */
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
        $(".item4").remove('.recipe-container');
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".button-container").hide();
        $(".item3").show()//.fadeIn(200);
        $(".item4").show()//.fadeIn(200);
        $(".initialRecipe").show();
        $("#liqueurRecipe2").hide();
        $(".recipe-container").remove('#liquor');



        drinks.map(x => {

            if(x["name"] === this.value){
                console.log(this.value);
                $(".drink-title").show();
                $("#drinkTitle").text(this.value);
                $("#drinkPhoto").attr("src", x["photo"]);
                $(".item4").html('<div class="recipe-container"></div>');

                if(x["batch"] === "Batch"){
                    if(x["name"] === "Sangria (Batch)"){
                        $("#liquor").text("Wine :");
                    }
                } 
             
                if(x["glass"] !== null){
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="glass"><span style="text-decoration: underline;">Glass</span> :</p>');
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="glassRecipe"></p>');
                 $("#glassRecipe").text(x["glass"]);
                 $("#glass, #glassRecipe").css( "padding-bottom", "2vh" ); 
                }

             
                if(x["rim"] !== null){                   
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="rim"><span style="text-decoration: underline;">Rim</span> :</p>');
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="rimRecipe"></p>');
                 $("#rimRecipe").text(x["rim"]);
                 $("#rim, #rimRecipe").css( "padding-bottom", "2vh" ); 
                }
             
             
                if(x["liquor"] !== null){                   
                 $(".recipe-container").append('<p id="liquor"><span style="text-decoration: underline;">Liquor</span> :</p>');
                 $(".recipe-container").append('<p id="liquorRecipe"></p>');
                 $("#liquorRecipe").text(x["liquor"][0]);
                 $("#liquor, #liquorRecipe").css( "padding-bottom", "2vh" ); 
                 
                    if(x["liquor"].length === 2){
                     $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                     $("#liquorRecipe2").show();
                     $("#liquorRecipe2").text(x["liquor"][1]);
                     $("#liquor, #liquorRecipe").css( "padding-bottom", "0" );
                     $("#liquorRecipe2").css( "padding-bottom", "2vh" );
                    } else if(x["liquor"].length === 3){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["mixers"][2]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2").css( "padding-bottom", "0" );
                        $("#liquorRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["liquor"].length === 4){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["liquor"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["liquor"][2]);
                        $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                        $("#liquorRecipe4").show();
                        $("#liquorRecipe4").text(x["liquor"][3]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3").css( "padding-bottom", "0" );
                        $("#liquorRecipe4").css( "padding-bottom", "2vh" );
                       } else if(x["liquor"].length === 5){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["liquor"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["liquor"][2]);
                        $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                        $("#liquorRecipe4").show();
                        $("#liquorRecipe4").text(x["liquor"][3]);
                        $(".recipe-container").append('<p id="liquorRecipe5"></p>');
                        $("#liquorRecipe5").show();
                        $("#liquorRecipe5").text(x["liquor"][4]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3, #liquorRecipe4").css( "padding-bottom", "0" );
                        $("#liquorRecipe5").css( "padding-bottom", "2vh" );
                       }
                }
             
             
               if(x["liqueur"] !== null){                   
                 $(".recipe-container").append('<p id="liqueur"><span style="text-decoration: underline;">Liqueur</span> :</p>');
                 $(".recipe-container").append('<p id="liqueurRecipe"></p>');
                 $("#liqueurRecipe").text(x["liqueur"][0]);
                 $("#liqueur, #liqueurRecipe").css( "padding-bottom", "2vh" );
                 
                    if(x["liqueur"].length === 2){
                     $(".recipe-container").append('<p id="liqueurRecipe2"></p>');
                     $("#liqueurRecipe2").show();
                     $("#liqueurRecipe2").text(x["liqueur"][1]);
                     $("#liqueur, #liqueurRecipe").css( "padding-bottom", "0" );
                     $("#liqueurRecipe2").css( "padding-bottom", "2vh" );
                    } 
                }


                if(x["mixers"] !== null){                   
                    $(".recipe-container").append('<p id="mixers"><span style="text-decoration: underline;">Mixers</span> :</p>');
                    $(".recipe-container").append('<p id="mixersRecipe"></p>');
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixers, #mixersRecipe").css( "padding-bottom", "2vh" );
                    
                       if(x["mixers"].length === 2){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $("#mixers, #mixersRecipe").css( "padding-bottom", "0" );
                        $("#mixersRecipe2").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 3){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2").css( "padding-bottom", "0" );
                        $("#mixersRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 4){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                        $("#mixersRecipe4").show();
                        $("#mixersRecipe4").text(x["mixers"][3]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3").css( "padding-bottom", "0" );
                        $("#mixersRecipe4").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 5){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                        $("#mixersRecipe4").show();
                        $("#mixersRecipe4").text(x["mixers"][3]);
                        $(".recipe-container").append('<p id="mixersRecipe5"></p>');
                        $("#mixersRecipe5").show();
                        $("#mixersRecipe5").text(x["mixers"][4]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3, #mixersRecipe4").css( "padding-bottom", "0" );
                        $("#mixersRecipe5").css( "padding-bottom", "2vh" );
                       }
                   }


                   if(x["garnish"] !== null){                   
                    $(".recipe-container").append('<p id="garnish"><span style="text-decoration: underline;">Garnish</span> :</p>');
                    $(".recipe-container").append('<p id="garnishRecipe"></p>');
                    $("#garnishRecipe").text(x["garnish"][0]);
                    $("#garnish, #garnishRecipe").css( "padding-bottom", "2vh" );
                    
                       if(x["garnish"].length === 2){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $("#garnish, #garnishRecipe").css( "padding-bottom", "0" );
                        $("#garnishRecipe2").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 3){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2").css( "padding-bottom", "0" );
                        $("#garnishRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 4){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                        $("#garnishRecipe4").show();
                        $("#garnishRecipe4").text(x["garnish"][3]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3").css( "padding-bottom", "0" );
                        $("#garnishRecipe4").css( "padding-bottom", "2vh" );
                       }
                       else if(x["garnish"].length === 5){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                        $("#garnishRecipe4").show();
                        $("#garnishRecipe4").text(x["garnish"][3]);
                        $(".recipe-container").append('<p id="garnishRecipe5"></p>');
                        $("#garnishRecipe5").show();
                        $("#garnishRecipe5").text(x["garnish"][4]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3, #garnishRecipe4").css( "padding-bottom", "0" );
                        $("#garnishRecipe5").css( "padding-bottom", "2vh" );
                       }
                   }

                   if(x["batch"] === "Batch"){
                    if(x["name"] === "Sangria (Batch)"){
                        $("#liquor").text("Wine :");
                    }
                } 
/*
                if(x["instructions"] === string){
                    $(".item4").append('<p id="test"></p>'); //.................not working
                    $("#test").show();
                    $("#test").text(x["instructions"]);
                }


             
               /* 

                if(x["liquor"].length === 2){
                    $("#liquorRecipe2").show();
                    $("#liquorRecipe").text(x["liquor"][0]);
                    $("#liquorRecipe2").text(x["liquor"][1]);
                }
                
\

                if(x["liqueur"] == null){                 
                    $("#liqueur").hide();
                    $("#liqueurRecipe").hide();
                    $(".recipe-container").css( "grid-template-rows", "min-content 3vh min-content 3vh min-content min-content 0 min-content 3vh min-content min-content min-content min-content min-content 3vh min-content min-content min-content min-content" );
                } else {
                    $("#rim").show();
                    $("#rimRecipe").show();
                    $("#liqueur").show();
                    $("#liqueurRecipe").show();
                    $("#liqueurRecipe").text(x["liqueur"][0]);
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
/*
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

                    if(x["name"] === "Sangria (Batch)"){
                        $("#liquor").text("Wine :");
                        $("#liqueurRecipe2").show();
                        $("#liqueurRecipe2").text(x["liqueur"][1]);
                    }
                } 
             */
                
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
    $("#liqueurRecipe2").hide();
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
        $(".margarita-buttons").show()//.fadeIn(200);
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
        $(".frozen-buttons").show()//.fadeIn(200);
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
        $(".specialty-buttons").show()//.fadeIn(200);
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
        $(".fishbowl-buttons").show()//.fadeIn(200);
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
        $(".dessert-buttons").show()//.fadeIn(200);
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
        $(".other-buttons").show()//.fadeIn(200);
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
        $(".batch-buttons").show()//.fadeIn(200);
        $(".results-list").hide();
        $(".button-container").show();
    });

    $("#instructionsButton").click(function(){
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
    });

}); // jQuery end tag 
