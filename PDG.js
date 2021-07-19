//Drink constructor.......................................................................................................

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
   let avocadoMargarita = new Drink("Avocado Margarita", "Hurricane Glass", ["Don Julio Anejo 1.5 oz"], "Cointreau .5 oz", ["Avocado Sour Mix 3 oz", "Lime Juice .75 oz"], ["Lime Wheel"]);
   let babyStout = new Drink("Baby Stout", "Rocks Glass", ["Patron XO 1 oz"], "None", ["Coffee 3 oz"], ["Bailey's Irish Cream (Float)", "Coffee Bean"]);
   let bloodOrangeAndSage = new Drink("Blood Orange and Sage", "Rocks Glass", ["Corazon Reposado 1.5 oz"], "Solerno .5 oz", ["Blood Orange Juice .75 oz", "Honey Syrup .5 oz"], ["Blood Orange Slice", "Sage (2-3 Leaves)"]);
   let carajillo = new Drink("Carajillo", "Rocks Glass", ["None"], "Licor 43 1.5 oz", ["Coffee 3 oz"], ["Lemon Twist"]);
   let churchill = new Drink("Churchill", "Rocks Glass", ["Four Roses Bourbon 1.5 oz"], "Ancho Reyes Chili Liqueur .5 oz", ["Agave .75 oz", "Blackberry (1 Muddled)", "Lemon Juice .5 oz", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"]);
   let cocorita = new Drink("CocoRita", "Hurricane Glass", ["1800 Coconut 1.5 oz"], "Cointreau .5 oz", ["Coconut Puree 1 oz", "Lime Juice .5 oz", "Pineapple Juice .5 oz"], ["Lime Wheel"]);
   let cucumberita = new Drink("CucumbeRita", "Margarita Glass", ["Milagro Reposado 1.5 oz"], "Cointreau .5 oz", ["Agave .5 oz", "Cayenne (2 Shakes)", "Cucumber (2 Slices Muddled)", "Lime Juice 2 oz"], ["Cucumber Wheel"]);
   let dropItLikeItsHot = new Drink("Drop It LIke It's Hot", "Margarita Glass", ["Tanteo Jalapeno 1.5 oz"], "Cointreau .5 oz", ["Agave .5 oz", "Cayenne (2 Shakes)", "Lime Juice 2 oz", "Valentina .25 oz"], ["Dried Chili Pepper (2 Split)"]);
   let espressoMartini = new Drink("Espresso Martini", "Coupe Glass", ["Don Julio Reposado 1 oz"], "Ancho Reyes Chili Liqueur 1 oz", ["Chocolate Bitters (4 Dashes)", "Espresso 3 oz (Chilled)", "Vanilla 1 oz"], ["Orange Peel"]);
   let floridaGrovePunch = new Drink("Florida Grove Punch", "Pineapple Glass", ["Corazon Blanco 1.5 oz"], "None", ["Agave .75 oz", "Cucumber (2 Slices Muddled)", "Lime Juice .5 oz", "Watermelon Juice 1.5 oz"], ["Pineapple Wedge and Leaf"]);
   let floridaGrovePunchFB = new Drink("Florida Grove Punch (Fish Bowl)", "Fish Bowl", ["Corazon Blanco 6 oz"], "None", ["Agave 2.25 oz", "Cucumber (6 Slices Muddled)", "Lime Juice 1.5 oz", "Watermelon Juice 6 oz"], ["Pineapple Wedge and Leaf"]);
   let jaliscoGardens = new Drink("Jalisco Gardens", "Rocks Glass", ["Volcan Blanco 1.5 oz"], "Ancho Reyes Verde Liqueur .5 oz", ["Agave .75 oz", "Lime Juice .75 oz", "Tomatillo (1 Quarter Muddled)"], ["Lime Wheel"]);
   let maserita = new Drink("Maserita", "Margarita Glass", ["Milagro Silver 2 oz"], "None", ["Agave 1 oz", "Happy Juice 2 oz"], ["Grand Marnier (Float)", "Lime Wheel"]);
   let mexicanBullDog = new Drink("Mexican Bull Dog", "Rocks Glass", ["1800 Reposado 1 oz"], "St. George Nola Coffee Vodka 1.5 oz", [ "Cola (Splash)"], ["Cream (Float)"]);
   let michelada = new Drink("Michelada", "Beer Mug", ["None"], "None", ["Dos Equis", "Michelada Mix 5 oz"], ["Lime Wheel"]);
   let naturita = new Drink("Naturita", "Hurricane Glass", ["Altos Blanco 2 oz"], "None", ["Agave 1 oz", "Happy Juice 2 oz"], ["Lime Wheel"]);
   let oaxacanOldFashioned = new Drink("Oaxacan Old Fashioned", "Rocks Glass", ["Altos Reposado 1.5 oz", "Los Vecinos Espadin Mezcal .5 oz"], "None", ["Agave .25 oz", "Angostura Bitters (2 Dashes)"], ["Flamed Orange Peel"]);
   let pacificMule = new Drink("Pacific Mule", "Copper Mug", ["St. George Green Chili Vodka 1.5 oz"], "None", ["Agave .25 oz", "Cucumber (1 Slice Muddled)", "Ginger Beer 4 oz", "Lime Juice .25 oz"], ["Cucumber Slice (Length)"]);
   let paloma = new Drink("Paloma", "Rocks Glass", ["Altos Blanco 1.5 oz"], "None", ["Agave .5 oz", "Grapefruit Soda 3 oz", "Lime Juice .25 oz"], ["Lime Wheel"]);
   let pricklyPearMargarita = new Drink("Prickly Pear Margarita", "Hurricane Glass", ["Don Julio Blanco 1.5 oz"], "Cointreau .5 oz", ["Lime Juice .75 oz", "Pineapple Juice .5 oz", "Prickly Pear Syrup 1 oz"], ["Lime Wheel"]);
   let sangria = new Drink("Sangria", "Wine Glass", ["St. George California Citrus Vodka .75 oz"], "None", ["Agave .5 oz", "Blackberry (3 Muddled)", "Lolailo Sangria 4 oz", "Orange (1 Slice Muddled)"], ["Blackberry and Orange Slice (Flag)"])
   let skinnyOrganic = new Drink("Skinny Organic", "Hurricane Glass", ["Azunia Blanco 2 oz"], "None", ["Agave 1 oz", "Lime Juice 1.5 oz"], ["Lime Wheel"]);
   let spicyBerryFresca = new Drink("Spicy Berry Fresca", "Rocks Glass", ["Dulce Vida Pineapple 1.5 oz"], "None", ["Grapefruit Soda 3 oz", "Jalapeno (1 Slice Muddled)", "Lime Juice .5 oz", "Strawberry Puree .75 oz"], ["Jalapeno (Slice)", "Strawberry (Slice)"]);
   let tntRita = new Drink("T&T Rita", "Mason Jar", ["El Jimador 2 oz"], "Cointreau .5 oz", ["Agave .5 oz", "Lime Juice 2 oz"], ["Lime Wheel"]);
   let tntRumRunner = new Drink("T&T Rum Runner", "Pineapple Glass", ["Brugal Anejo Rum 1.25 oz", "Blue Chair Bay Banana Rum 1 oz"], "None", ["Guava Puree .5 oz", "Lime Juice 1 oz", "Pineapple Juice 1 oz"], ["Dark Rum (Float)", "Pineapple Wedge and Leaf"]);
   let tntRumRunnerFB = new Drink("T&T Rum Runner (Fish Bowl)", "Fish Bowl", ["Brugal Anejo Rum 3.75 oz", "Blue Chair Bay Banana Rum 3 oz"], "None", ["Guava Puree 1.5 oz", "Lime Juice 2.25 oz", "Pineapple Juice 2.25 oz"], ["Dark Rum (Float)", "Pineapple Wedge and Leaf"]);

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
       tropicalMargarita
      ];
   
   let mix = ['','',[],'',[],[]];
   
   //random drink function........................................................................................................
   function drinkOrder() {
    let randomDrinkList = drinks.map(x => x.name);
    let result = Math.floor(Math.random()*(randomDrinkList.length));
    return randomDrinkList[result];
   };
      
   let randomDrink = drinkOrder();
   
   //mixer function..............................................................................................................
   
   function mixToVerify() {
    mix[4].sort();
    mix[5].sort();
    let mixToObj = new Drink(...mix);
    let drinksFilter = drinks.filter(x => x.name === mix[0]).pop();
     
    function verify(a,b) {
     if (_.isEqual(a,b) === true) {
      return mix[0] + "<br><br><br>...Placeholder for instructions...";
     } else {
      return "Incorrect<br>Please Try Again<br><br><br>...Placeholder for instructions...";
     }
    };
    document.getElementById("modalText").innerHTML = verify(mixToObj, drinksFilter);
   };
   
   // Drink result modal.......................................................
   var resultModal = document.getElementById("myModal");
   var resultBtn = document.getElementById("serveButton");
   var resultSpan = document.getElementById("resultCloseButton");
   
   resultBtn.onclick = function() {
     resultModal.style.display = "block";
   }
   resultSpan.onclick = function() {
     resultModal.style.display = "none";
   }
   window.onclick = function(event) {
    if (event.target == resultModal) {
       resultModal.style.display = "none";
     }
    if (event.target == drinkListModal) {
       drinkListModal.style.display = "none";
     }
    
    if (event.target == mixerModal) {
       mixerModal.style.display = "none";
     }
    
   };
   
   // Drink List modal.......................................................
   var drinkListModal = document.getElementById("myModalDrinkList");
   var drinkListBtn = document.getElementById("drinkList");
   var drinkListSpan = document.getElementById("closeDrinkList");
   
   drinkListBtn.onclick = function() {
     drinkListModal.style.display = "block";
   }
   
   drinkListSpan.onclick = function() {
     drinkListModal.style.display = "none";
   }
   
   // Mixer modal.......................................................
   
   var mixerModal = document.getElementById("myMixerModal");
   var mixerBtn = document.getElementById("mixerId");
   var mixerSpan = document.getElementById("mixerCloseButton");
   
   mixerBtn.onclick = function() {
     mixerModal.style.display = "block";
   }
   
   mixerSpan.onclick = function() {
     mixerModal.style.display = "none";
   }
   
   
   
   
   //jQuery.......................................................................................................
   $(document).ready(function(){
    //alert('Please request a drink');  
   
    
    $("#orderDisplayText").on("myEvent",  function(event, myText) {
     $(this).text(myText);
     $("#ingDisRD").text(myText);
     mix.splice(0, 1, myText);
     console.log(mix);
    });
     
    $("#drinkOrder").click(function(){
     $("#orderDisplayText").trigger("myEvent", drinkOrder());
     let currentDrink = mix[0];
     mix = [currentDrink,'',[],'',[],[]];
     $("#titleLiquor").hide();
     $(".ingBtnLiquor").hide();
     $("#titleLiqueur").hide();
     $(".ingBtnLiqueur").hide();
     $("#titleMixers").hide();
     $(".ingBtnMixers").hide();
     $("#titleGarnish").hide();
     $(".ingBtnGarnish").hide();
     $("#liquorBackButton").hide();
     $("#liqueurBackButton").hide();
     $("#garnishBackButton").hide();
     $("#deleteButton").hide();
     $("#deleteButton2").hide();
     $("#deleteButton3").hide();
     $("#mixersBackButton").hide();
     $("#ingBtnLiquorNone").hide();
     $("#ingBtnLiqueurNone").hide();
     $("#ingBtnMixersNone").hide();
     $("#ingBtnGarnishNone").hide();
     $("#ingBtnLiquorNext").hide();
     $("#ingBtnLiqueurNext").hide();
     $("#ingBtnMixersNext").hide();
     $("#clearButton").hide();
     $("#titleGlass").fadeIn(600);
     $(".ingBtnGlass").fadeIn(600);
     $("#ingDisplayGlass").text("...add a glass...");
     $("#ingDisplayLiquor").text("...add a Liquor...");
     $("#ingDisplayLiquor2").text("...add a Liquor...");
     $("#ingDisplayLiqueur").text("...add a liqueur...");
     $("#ingDisMix1").text("...add a mixer...");
     $("#ingDisMix2").text("...add a mixer...");
     $("#ingDisMix3").text("...add a mixer...");
     $("#ingDisGar1").text("...add a garnish...");
     $("#ingDisGar2").text("...add a garnish...");
     console.log(mix)
     
     /* Drink List Reset */
    $("#AFBrecipeTitle").hide();
    $("#AFBrecipe").hide();
    $("#AMrecipeTitle").hide();
    $("#AMrecipe").hide();
    $("#BSrecipeTitle").hide();
    $("#BSrecipe").hide();
    $("#BOSrecipeTitle").hide();
    $("#BOSrecipe").hide();
    $("#CARArecipeTitle").hide();
    $("#CARArecipe").hide();
    $("#CHURrecipeTitle").hide();
    $("#CHURrecipe").hide();
    $("#COCOrecipeTitle").hide();
    $("#COCOrecipe").hide();
    $("#CUCUMrecipeTitle").hide();
    $("#CUCUMrecipe").hide();
    $("#DROPrecipeTitle").hide();
    $("#DROPrecipe").hide();
    $("#EMrecipeTitle").hide();
    $("#EMrecipe").hide();
    $("#FGPrecipeTitle").hide(); 
    $("#FGPrecipe").hide();
    $("#FGPFBrecipeTitle").hide();
    $("#FGPFBrecipe").hide();
    $("#JGrecipeTitle").hide();
    $("#JGrecipe").hide();
    $("#MASrecipeTitle").hide();
    $("#MASrecipe").hide();
    $("#MBDrecipeTitle").hide();
    $("#MBDrecipe").hide();
    $("#MICHrecipeTitle").hide();
    $("#MICHrecipe").hide();
    $("#NATrecipeTitle").hide();
    $("#NATrecipe").hide();
    $("#OOFrecipeTitle").hide();
    $("#OOFrecipe").hide();
    $("#PMrecipeTitle").hide();
    $("#PMrecipe").hide();
    $("#PALrecipeTitle").hide();
    $("#PALrecipe").hide();
    $("#PPMrecipeTitle").hide();
    $("#PPMrecipe").hide();
    $("#SANGrecipeTitle").hide();
    $("#SANGrecipe").hide();
    $("#SOrecipeTitle").hide();
    $("#SOrecipe").hide();
    $("#SBFrecipeTitle").hide();
    $("#SBFrecipe").hide();
    $("#TNTrecipeTitle").hide();
    $("#TNTrecipe").hide();
    $("#TNTRRrecipeTitle").hide();
    $("#TNTRRrecipe").hide();
    $("#TNTRRFBrecipeTitle").hide();
    $("#TNTRRFBrecipe").hide();
    $("#TROPMrecipeTitle").hide();
    $("#TROPMrecipe").hide();
    $("#modalTextDrinkList").fadeIn(600);
    $("#drinkListItems").fadeIn(600);
    $("#backButton").hide();
    $("#recipeDiv").hide();
    $("#drinkListTitleDiv").show();
    $("#drinkListDrinkNames").show();
    });
    
    $(".ingBtnGlass").click(function(){
     $("#titleGlass").hide();
     $(".ingBtnGlass").hide();
     $("#titleLiquor").fadeIn(600);
     $(".ingBtnLiquor").fadeIn(600);
     $("#deleteButton3").show();
     $("#ingBtnLiquorNext").show();
     $("#ingBtnLiquorNone").show();
     $("#liquorBackButton").show();
     $("#clearButton").show();
     $("#ingDisplayGlass").text(this.value);
     mix.splice(1, 1, this.value);
     console.log(mix);
    });
    
    $(".ingBtnLiquor").click(function(){
     $("#ingDisplayLiquor").text(this.value);
     mix[2].push(this.value);
     $("#ingDisplayLiquor").text(mix[2][0]);
     $("#ingDisplayLiquor2").text(mix[2][1]);
     console.log(mix);
    });
    
    $(".ingBtnLiqueur").click(function(){
     $("#titleLiqueur").hide();
     $(".ingBtnLiqueur").hide();
     $("#liqueurBackButton").hide();
     $("#ingBtnLiqueurNone").hide();
     $("#ingBtnLiqueurNext").hide();
     $("#titleMixers").fadeIn(600);
     $(".ingBtnMixers").fadeIn(600);
     $("#deleteButton2").show();
     $("#deleteButton3").hide();
     $("#ingBtnMixersNext").show();
     $("#mixersBackButton").show();
     $("#ingDisplayLiqueur").text(this.value);
     mix.splice(3, 1, this.value);
     console.log(mix);
    });
    
    $(".ingBtnMixers").click(function(){
     mix[4].push(this.value);
     $("#ingDisMix1").text(mix[4][0]);
     $("#ingDisMix2").text(mix[4][1]);
     $("#ingDisMix3").text(mix[4][2]);
     $("#ingDisMix4").text(mix[4][3]);
     console.log(mix);
    });
    
    $(".ingBtnGarnish").click(function(){
     mix[5].push(this.value);
     $("#ingDisGar1").text(mix[5][0]);
     $("#ingDisGar2").text(mix[5][1]);
     $("#ingDisGar3").text(mix[5][2]);
     console.log(mix);
    });
    
    $("#ingBtnLiquorNone").click(function(){
     var x = document.getElementById("ingredientsDisplay");
     x.querySelector("#ingDisplayLiquor").innerHTML = "None";
     $("#titleLiquor").hide();
     $(".ingBtnLiquor").hide();
     $("#liquorBackButton").hide();
     $("#liqueurBackButton").show();
     $("#ingBtnLiquorNone").hide();
     $("#ingBtnLiquorNext").hide();
     $("#titleLiqueur").fadeIn(600);
     $(".ingBtnLiqueur").fadeIn(600);
     $("#ingBtnLiqueurNone").show();
     $("#ingBtnLiqueurNext").show();
     mix[2] = [this.value];
     console.log(mix);
     });
    
    $("#ingBtnGarnishNone").click(function(){
     $("#ingDisGar1").text(this.value);
     mix[5] = [this.value];
     console.log(mix);
    });

    $("#ingBtnLiqueurNone").click(function(){
        $("#titleLiqueur").hide();
        $(".ingBtnLiqueur").hide();
        $("#ingBtnLiqueurNone").hide();
        $("#ingBtnLiqueurNext").hide();
        $("#liqueurBackButton").hide();
        $("#mixersBackButton").show();
        $("#titleMixers").fadeIn(600);
        $(".ingBtnMixers").fadeIn(600);
        $("#deleteButton2").show();
        $("#deleteButton3").hide();
        $("#ingBtnMixersNext").show();
        $("#ingDisplayLiqueur").text(this.value);
        mix[3] = this.value;
        console.log(mix);
       });
    
    $("#ingBtnLiquorNext").click(function(){
     var x = document.getElementById("ingredientsDisplay");
     if (mix[2].length === 0){
        x.querySelector("#ingDisplayLiquor").innerHTML = "None";
         mix[2] = ["None"];
     } else if(mix[2].length >= 3){
      mix[2].splice(2);
     }
     $("#liquorBackButton").hide();
     $("#titleLiquor").hide();
     $(".ingBtnLiquor").hide();
     $("#ingBtnLiquorNone").hide();
     $("#ingBtnLiquorNext").hide();
     $("#deleteButton3").hide();
     $("#titleLiqueur").fadeIn(600);
     $(".ingBtnLiqueur").fadeIn(600);
     $("#liqueurBackButton").show();
     $("#ingBtnLiqueurNext").show();
     $("#ingBtnLiqueurNone").show();
     console.log(mix)
    }); 
    
    $("#ingBtnLiqueurNext").click(function(){
     $("#deleteButton2").show();
     $("#ingBtnLiqueurNext").hide();
     $("#liqueurBackButton").hide();
     $("#titleLiqueur").hide();
     $(".ingBtnLiqueur").hide();
     $("#deleteButton3").hide();
     $("#ingBtnLiqueurNone").hide();
     $("#titleMixers").fadeIn(600);
     $(".ingBtnMixers").fadeIn(600);
     $("#mixersBackButton").show();
     $("#ingBtnMixersNext").show();
     if(mix[3].length === 0){
      $("#ingDisplayLiqueur").text("None")
      mix[3] = "None";
     }
     console.log(mix)
    }); 
    
    $("#ingBtnMixersNext").click(function(){
     var x = document.getElementById("ingredientsDisplay");
     $("#deleteButton2").hide();
     $("#mixersBackButton").hide();
     $("#titleMixers").hide();
     $(".ingBtnMixers").hide();
     $("#ingBtnMixersNone").hide();
     $("#ingBtnGarnishNone").show();
     $("#ingBtnMixersNext").hide();
     $("#garnishBackButton").show();
     $("#deleteButton").show();
     $("#titleGarnish").fadeIn(600);
     $(".ingBtnGarnish").fadeIn(600);
     if(mix[4].length >= 5){
      mix[4].splice(4);
     }
     console.log(mix)
    }); 
    
    $("#clearButton").click(function(){     //........................................clear button
     let currentDrink = mix[0];
     mix = [currentDrink,'',[],'',[],[]];
     $("#ingBtnMixersNext").hide();
     $("#ingBtnMixersNone").hide();
     $("#mixersBackButton").hide();
     $("#clearButton").hide();
     $("#ingBtnLiquorNone").hide();
     $("#ingBtnLiquorNext").hide();
     $("#ingBtnLiqueurNone").hide();
     $("#ingBtnLiqueurNext").hide();
     $("#liquorBackButton").hide();
     $("#liqueurBackButton").hide();
     $("#garnishBackButton").hide();
     $("#ingBtnGarnishNone").hide();
     $("#deleteButton").hide();
     $("#deleteButton2").hide();
     $("#deleteButton3").hide();
     $("#titleLiquor").hide();
     $(".ingBtnLiquor").hide();
     $("#titleLiqueur").hide();
     $(".ingBtnLiqueur").hide();
     $("#titleMixers").hide();
     $(".ingBtnMixers").hide();
     $("#titleGarnish").hide();
     $(".ingBtnGarnish").hide();
     $("#titleGlass").fadeIn(600);
     $(".ingBtnGlass").fadeIn(600);
     $("#ingDisplayGlass").text("...add a glass...");
     $("#ingDisplayLiquor").text("...add a liquor...");
     $("#ingDisplayLiquor2").text("...add a liquor...");
     $("#ingDisplayLiqueur").text("...add a liqueur...");
     $("#ingDisMix1").text("...add a mixer...");
     $("#ingDisGar1").text("...add a garnish...");
     console.log(mix)
    });
    
    $("#serveButton").click(function(){
     mixToVerify();
     var x = document.getElementById("ingredientsDisplay");
    });
    
    
    
    //Drink List Modal Back Button............................................................
   $("#backButton").click(function(){
    $("#AFBrecipeTitle").hide();
    $("#AFBrecipe").hide();
    $("#AMrecipeTitle").hide();
    $("#AMrecipe").hide();
    $("#BSrecipeTitle").hide();
    $("#BSrecipe").hide();
    $("#BOSrecipeTitle").hide();
    $("#BOSrecipe").hide();
    $("#CARArecipeTitle").hide();
    $("#CARArecipe").hide();
    $("#CHURrecipeTitle").hide();
    $("#CHURrecipe").hide();
    $("#COCOrecipeTitle").hide();
    $("#COCOrecipe").hide();
    $("#CUCUMrecipeTitle").hide();
    $("#CUCUMrecipe").hide();
    $("#DROPrecipeTitle").hide();
    $("#DROPrecipe").hide();
    $("#EMrecipeTitle").hide();
    $("#EMrecipe").hide();
    $("#FGPrecipeTitle").hide(); 
    $("#FGPrecipe").hide();
    $("#FGPFBrecipeTitle").hide();
    $("#FGPFBrecipe").hide();
    $("#JGrecipeTitle").hide();
    $("#JGrecipe").hide();
    $("#MASrecipeTitle").hide();
    $("#MASrecipe").hide();
    $("#MBDrecipeTitle").hide();
    $("#MBDrecipe").hide();
    $("#MICHrecipeTitle").hide();
    $("#MICHrecipe").hide();
    $("#NATrecipeTitle").hide();
    $("#NATrecipe").hide();
    $("#OOFrecipeTitle").hide();
    $("#OOFrecipe").hide();
    $("#PMrecipeTitle").hide();
    $("#PMrecipe").hide();
    $("#PALrecipeTitle").hide();
    $("#PALrecipe").hide();
    $("#PPMrecipeTitle").hide();
    $("#PPMrecipe").hide();
    $("#SANGrecipeTitle").hide();
    $("#SANGrecipe").hide();
    $("#SOrecipeTitle").hide();
    $("#SOrecipe").hide();
    $("#SBFrecipeTitle").hide();
    $("#SBFrecipe").hide();
    $("#TNTrecipeTitle").hide();
    $("#TNTrecipe").hide();
    $("#TNTRRrecipeTitle").hide();
    $("#TNTRRrecipe").hide();
    $("#TNTRRFBrecipeTitle").hide();
    $("#TNTRRFBrecipe").hide();
    $("#TROPMrecipeTitle").hide();
    $("#TROPMrecipe").hide();
    $("#modalTextDrinkList").fadeIn(600);
    $("#drinkListItems").fadeIn(600);
    $("#backButton").hide();
    $("#recipeDiv").hide();
    $("#drinkListTitleDiv").show();
    $("#drinkListDrinkNames").show();
   });
       
   //Drink List Functions.....................................................
       $("#AFB").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#AFBrecipeTitle").fadeIn(600);
         $("#AFBrecipeTitle").css('display', 'flex');
         $("#AFBrecipe").fadeIn(600);
         $("#AFBrecipe").css('display', 'flex');
       });
       
       $("#AM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#AMrecipeTitle").fadeIn(600);
         $("#AMrecipeTitle").css('display', 'flex');
         $("#AMrecipe").fadeIn(600);
         $("#AMrecipe").css('display', 'flex');
       });
       
       $("#BS").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#BSrecipeTitle").fadeIn(600);
         $("#BSrecipeTitle").css('display', 'flex');
         $("#BSrecipe").fadeIn(600);
         $("#BSrecipe").css('display', 'flex');
       });
       
       $("#BOS").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#BOSrecipeTitle").fadeIn(600);
         $("#BOSrecipeTitle").css('display', 'flex');
         $("#BOSrecipe").fadeIn(600);
         $("#BOSrecipe").css('display', 'flex');
       });
       
       $("#CARA").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#CARArecipeTitle").fadeIn(600);
         $("#CARArecipeTitle").css('display', 'flex');
         $("#CARArecipe").fadeIn(600);
         $("#CARArecipe").css('display', 'flex');
      });
       
       $("#CHUR").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#CHURrecipeTitle").fadeIn(600);
         $("#CHURrecipeTitle").css('display', 'flex');
         $("#CHURrecipe").fadeIn(600);
         $("#CHURrecipe").css('display', 'flex');
      });
       
       $("#COCO").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#COCOrecipeTitle").fadeIn(600);
         $("#COCOrecipeTitle").css('display', 'flex');
         $("#COCOrecipe").fadeIn(600);
         $("#COCOrecipe").css('display', 'flex');
      });
       
       $("#CUCUM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#CUCUMrecipeTitle").fadeIn(600);
         $("#CUCUMrecipeTitle").css('display', 'flex');
         $("#CUCUMrecipe").fadeIn(600);
         $("#CUCUMrecipe").css('display', 'flex');
      });
       
       $("#DROP").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#DROPrecipeTitle").fadeIn(600);
         $("#DROPrecipeTitle").css('display', 'flex');
         $("#DROPrecipe").fadeIn(600);
         $("#DROPrecipe").css('display', 'flex');
      });
       
       $("#EM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#EMrecipeTitle").fadeIn(600);
         $("#EMrecipeTitle").css('display', 'flex');
         $("#EMrecipe").fadeIn(600);
         $("#EMrecipe").css('display', 'flex');
      });
       
       $("#FGP").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#FGPrecipeTitle").fadeIn(600);
         $("#FGPrecipeTitle").css('display', 'flex');
         $("#FGPrecipe").fadeIn(600);
         $("#FGPrecipe").css('display', 'flex');
      });
       
       $("#FGPFB").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#FGPFBrecipeTitle").fadeIn(600);
         $("#FGPFBrecipeTitle").css('display', 'flex');
         $("#FGPFBrecipe").fadeIn(600);
         $("#FGPFBrecipe").css('display', 'flex');
      });
       
       $("#JG").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#JGrecipeTitle").fadeIn(600);
         $("#JGrecipeTitle").css('display', 'flex');
         $("#JGrecipe").fadeIn(600);
         $("#JGrecipe").css('display', 'flex');
      });
       
       $("#MAS").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#MASrecipeTitle").fadeIn(600);
         $("#MASrecipeTitle").css('display', 'flex');
         $("#MASrecipe").fadeIn(600);
         $("#MASrecipe").css('display', 'flex');
      });
       
       $("#MBD").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#MBDrecipeTitle").fadeIn(600);
         $("#MBDrecipeTitle").css('display', 'flex');
         $("#MBDrecipe").fadeIn(600);
         $("#MBDrecipe").css('display', 'flex');
      });
       
       $("#MICH").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#MICHrecipeTitle").fadeIn(600);
         $("#MICHrecipeTitle").css('display', 'flex');
         $("#MICHrecipe").fadeIn(600);
         $("#MICHrecipe").css('display', 'flex');
      });
       
       $("#NAT").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#NATrecipeTitle").fadeIn(600);
         $("#NATrecipeTitle").css('display', 'flex');
         $("#NATrecipe").fadeIn(600);
         $("#NATrecipe").css('display', 'flex');
      });
       
       $("#OOF").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#OOFrecipeTitle").fadeIn(600);
         $("#OOFrecipeTitle").css('display', 'flex');
         $("#OOFrecipe").fadeIn(600);
         $("#OOFrecipe").css('display', 'flex');
      });
       
       $("#PM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#PMrecipeTitle").fadeIn(600);
         $("#PMrecipeTitle").css('display', 'flex');
         $("#PMrecipe").fadeIn(600);
         $("#PMrecipe").css('display', 'flex');
      });
       
       $("#PAL").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#PALrecipeTitle").fadeIn(600);
         $("#PALrecipeTitle").css('display', 'flex');
         $("#PALrecipe").fadeIn(600);
         $("#PALrecipe").css('display', 'flex');
      });
       
       $("#PPM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#PPMrecipeTitle").fadeIn(600);
         $("#PPMrecipeTitle").css('display', 'flex');
         $("#PPMrecipe").fadeIn(600);
         $("#PPMrecipe").css('display', 'flex');
      });
       
       $("#SANG").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#SANGrecipeTitle").fadeIn(600);
         $("#SANGrecipeTitle").css('display', 'flex');
         $("#SANGrecipe").fadeIn(600);
         $("#SANGrecipe").css('display', 'flex');
      });
       
       $("#SO").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#SOrecipeTitle").fadeIn(600);
         $("#SOrecipeTitle").css('display', 'flex');
         $("#SOrecipe").fadeIn(600);
         $("#SOrecipe").css('display', 'flex');
      });
       
       $("#SBF").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#SBFrecipeTitle").fadeIn(600);
         $("#SBFrecipeTitle").css('display', 'flex');
         $("#SBFrecipe").fadeIn(600);
         $("#SBFrecipe").css('display', 'flex');
      });
       
       $("#TNT").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#TNTrecipeTitle").fadeIn(600);
         $("#TNTrecipeTitle").css('display', 'flex');
         $("#TNTrecipe").fadeIn(600);
         $("#TNTrecipe").css('display', 'flex');
      });
       
       $("#TNTRR").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#TNTRRrecipeTitle").fadeIn(600);
         $("#TNTRRrecipeTitle").css('display', 'flex');
         $("#TNTRRrecipe").fadeIn(600);
         $("#TNTRRrecipe").css('display', 'flex');
      });
       
       $("#TNTRRFB").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#TNTRRFBrecipeTitle").fadeIn(600);
         $("#TNTRRFBrecipeTitle").css('display', 'flex');
         $("#TNTRRFBrecipe").fadeIn(600);
         $("#TNTRRFBrecipe").css('display', 'flex');
      });
       
       $("#TROPM").click(function(){
         $("#modalTextDrinkList").hide();
         $("#drinkListItems").hide();
         $("#drinkListTitleDiv").hide();
         $("#drinkListDrinkNames").hide();
         $("#recipeDiv").show();
         $("#backButton").show();
         $("#TROPMrecipeTitle").fadeIn(600);
         $("#TROPMrecipeTitle").css('display', 'flex');
         $("#TROPMrecipe").fadeIn(600);
         $("#TROPMrecipe").css('display', 'flex');
      });
    
    $("#liquorBackButton").click(function(){
      $("#liquorBackButton").hide();
      $("#ingBtnLiquorNext").hide();
      $("#ingBtnLiquorNone").hide();
      $("#clearButton").hide();
      $("#titleLiquor").hide();
      $(".ingBtnLiquor").hide();
      $("#deleteButton3").hide();
      $("#titleGlass").fadeIn(600);
      $(".ingBtnGlass").fadeIn(600);
      mix[2] = [];
      mix[1] = "";
      $("#ingDisplayGlass").text("...add a glass...");
      $("#ingDisplayLiquor").text("...add a liquor...");
      $("#ingDisplayLiquor2").hide();
      console.log(mix);
     });
    
    $("#liqueurBackButton").click(function(){
      $("#liqueurBackButton").hide();
      $("#ingBtnLiqueurNext").hide();
      $("#ingBtnLiqueurNone").hide();
      $("#titleLiqueur").hide();
      $(".ingBtnLiqueur").hide();
      $("#titleLiquor").fadeIn(600);
      $(".ingBtnLiquor").fadeIn(600);
      $("#liquorBackButton").show();
      $("#ingBtnLiquorNext").show();
      $("#ingBtnLiquorNone").show();
      $("#deleteButton3").show();
      mix[3] = "";
      mix[2] = [];
      $("#ingDisplayLiquor").text("...add a liquor...");
      $("#ingDisplayLiquor2").text("...add a liquor...");
      $("#ingDisplayLiqueur").text("...add a liqueur...");
      console.log(mix);
     });
    
    $("#mixersBackButton").click(function(){
      var x = document.getElementById("ingredientsDisplay");
      $("#deleteButton2").hide();
      $("#mixersBackButton").hide();
      $("#liqueurBackButton").show();
      $("#ingBtnLiqueurNone").show();
      $("#clearButton").show();
      $("#titleMixers").hide();
      $(".ingBtnMixers").hide();
      $("#ingBtnMixersNext").hide();
      $("#ingBtnMixersNone").hide();
      $("#ingBtnLiqueurNext").show();
      $("#titleLiqueur").fadeIn(600);
      $(".ingBtnLiqueur").fadeIn(600);
      mix[3] = "";
      mix[4] = [];
      x.querySelector("#ingDisplayLiqueur").innerHTML = "...add a liqueur...";
      x.querySelector("#ingDisMix3").innerHTML = "...add a mixer...";
      x.querySelector("#ingDisMix2").innerHTML = "...add a mixer...";
      x.querySelector("#ingDisMix1").innerHTML = "...add a mixer...";
      console.log(mix);
     });
    
     
     $("#garnishBackButton").click(function(){
      var x = document.getElementById("ingredientsDisplay");
      $("#deleteButton").hide();
      $("#deleteButton2").show();
      $("#deleteButton3").hide();
      $("#garnishBackButton").hide();
      $("#mixersBackButton").show();
      $("#titleGarnish").hide();
      $(".ingBtnGarnish").hide();
      $("#ingBtnMixersNext").show();
      $("#titleMixers").fadeIn(600);
      $(".ingBtnMixers").fadeIn(600);
      mix[5] = [];
      mix[4] = [];
      x.querySelector("#ingDisGar2").innerHTML = "...add a garnish...";
      x.querySelector("#ingDisGar1").innerHTML = "...add a garnish...";
      x.querySelector("#ingDisMix3").innerHTML = "...add a mixer...";
      x.querySelector("#ingDisMix2").innerHTML = "...add a mixer...";
      x.querySelector("#ingDisMix1").innerHTML = "...add a mixer...";
      console.log(mix);
     });
     
    //garnish
    $("#deleteButton").click(function(){    
     var x = document.getElementById("ingredientsDisplay");
     if(mix[5].length >= 2){
      mix[5].splice(1);
     }else if(mix[5].length === 1){
      mix[5] = [];
      $("#ingDisGar2").hide();
      $("#ingDisGar1").text("...add a garnish...");
     } else if(mix[5].length === 0){
      $("#ingDisGar1").text("...add a garnish...");
      $("#deleteButton").hide();
      $("#garnishBackButton").hide();
      $("#titleGarnish").hide();
      $(".ingBtnGarnish").hide();
      $("#titleMixers").fadeIn(600);
      $(".ingBtnMixers").fadeIn(600);
      $("#ingBtnMixersNext").show();
      $("#mixersBackButton").show();
      $("#deleteButton2").show();
     }
     console.log(mix);
    }); //delete button end tag
    
    //mixers
     $("#deleteButton2").click(function(){  
     var x = document.getElementById("ingredientsDisplay");
     if(mix[4].length >= 5){
      mix[4].splice(3);
     } else if(mix[4].length <= 1){
      mix[4] = [];
      mix[3] = "";
      $("#deleteButton2").hide();
      $("#mixersBackButton").hide();
      $("#titleMixers").hide();
      $(".ingBtnMixers").hide();  
      $("#ingBtnMixersNone").hide();      
      $("#ingBtnMixersNext").hide();
      $("#ingBtnLiqueurNext").show();
      $("#liqueurBackButton").show();
      $("#titleLiqueur").fadeIn(600);
      $("#ingBtnLiqueurNone").show();
      $(".ingBtnLiqueur").fadeIn(600);
      $("#ingDisMix1").text("...add a mixer...");
      $("#ingDisplayLiqueur").text("...add a liqueur...")
     } else if(mix[4].length === 2){
      mix[4].pop();
     } else if(mix[4].length === 3){
      mix[4].pop();
     } else if(mix[4].length === 4){
      mix[4].pop();
     }
     console.log(mix);
    }) // delete button 2 end tag
    
    //liquor
    $("#deleteButton3").click(function(){  
     var x = document.getElementById("ingredientsDisplay");
     if(mix[2].length >= 2){
      mix[2].splice(1);
     } else if(mix[2].length <= 1){
      mix[2] = [];
      mix[1] = "";
      $("#liquorBackButton").hide();
      $("#ingBtnLiquorNext").hide();
      $("#ingBtnLiquorNone").hide();
      $("#titleLiquor").hide();
      $(".ingBtnLiquor").hide();
      $("#deleteButton3").hide();
      $("#clearButton").hide();
      $("#titleGlass").fadeIn(600);
      $(".ingBtnGlass").fadeIn(600);
      $("#ingDisplayLiquor").text("...add a liquor...");
      $("#ingDisplayGlass").text("...add a glass...");
     }
     console.log(mix);
    }); // delete button 3 end tag
    
    
    $("#mixerId").click(function(){
     
     // liquor
     if(mix[2].length >= 3){
      mix[2].splice(2);
      if(mix[2].length === 2){
       $("#ingDisplayLiquor2").show(); 
      }
     } else if(mix[2].length <= 1){
      $("#ingDisplayLiquor2").hide();
     } else if(mix[2].length === 2){
      $("#ingDisplayLiquor2").show(); 
     }
     
     // mixers 
     if(mix[4].length >= 4){
      mix[4].splice(4);
      if(mix[4].length === 4){
       $("#ingDisMix2").show();
       $("#ingDisMix3").show();
       $("#ingDisMix4").show();
      } else if(mix[4] === 3){
       $("#ingDisMix2").show();
       $("#ingDisMix3").show();
       $("#ingDisMix4").hide();
      } else if(mix[4] === 2){
       $("#ingDisMix2").show();
       $("#ingDisMix3").hide();
       $("#ingDisMix4").hide();
      }
     } else if(mix[4].length === 4){
      $("#ingDisMix2").show();
      $("#ingDisMix3").show();
      $("#ingDisMix4").show();
     } else if(mix[4].length === 3){
      $("#ingDisMix2").show();
      $("#ingDisMix3").show();
      $("#ingDisMix4").hide();
     } else if(mix[4].length === 2){
      $("#ingDisMix2").show();
      $("#ingDisMix3").hide();
      $("#ingDisMix4").hide();
     } else if(mix[4].length <= 1){
      $("#ingDisMix2").hide();
      $("#ingDisMix3").hide();
      $("#ingDisMix4").hide();
     }
     // garnish
     if(mix[5].length >= 3){
      mix[5].splice(2);
      if(mix[5].length === 2){
       $("#ingDisGar2").show();
      }
     } else if(mix[5].length <= 1){
      $("#ingDisGar2").hide();
     } else if(mix[5].length === 2){
      $("#ingDisGar2").show(); 
     }
      
      
     console.log(mix);
    });
   
    
    console.log(
     $(window).height(),
     $(window).width()
    );
    
    
    
   $("#tntLogo").on('click', function(){
        window.location = "https://tacosandtequilanaples.com/wp-content/uploads/2021/01/277974-Main-Menu.pdf";    
   });
    
    
    
   }); // jQuery end tag 