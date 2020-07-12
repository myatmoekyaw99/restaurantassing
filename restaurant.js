var hots=[{Name:"Black tea",Price:1.00},{Name:"Americano",Price:3.00},
           {Name:"Cuppicino",Price:1.00},{Name:"Green Tea",Price:2.00}];

var colds=[{Name:"Bubble Tea",Price:2.00},{Name:"Milk Shake",Price:2.00},
{Name:"Lemon Juice",Price:1.00},{Name:"Orange Juice",Price:1.00}];

var bakery=[{Name:"Pizza",Price:4.00},{Name:"Hamburger",Price:3.00},
{Name:"Donuts",Price:5.00},{Name:"Cookies",Price:5.00}];

var seafoods=[{Name:"Tom Yum",Price:8.00},{Name:"King Crab",Price:9.00},
{Name:"Fried Oryster",Price:8.00},{Name:"Fried CrawFish",Price:7.00}];

var others=[{Name:"Chicken Curry",Price:8.00},{Name:"Poak Curry",Price:8.00},
{Name:"Beef Curry",Price:8.00},{Name:"Vegetables Salad",Price:5.00},{Name:"Egg Curry",Price:6.00}];

var jhots=JSON.stringify(hots);
var addhots=localStorage.setItem("hots_List",jhots);

var jcolds=JSON.stringify(colds);
var addcolds=localStorage.setItem("colds_List",jcolds);

var jbake=JSON.stringify(bakery);
var addbake=localStorage.setItem("bakery_List",jbake);

var jsea=JSON.stringify(seafoods);
var addsea=localStorage.setItem("seafoods_List",jsea);

var jothers=JSON.stringify(others);
var addothers=localStorage.setItem("others_List",jothers);

var total_cost=0;
$(document).ready(function(){

    //Hot Drinks////////////////
      $("#b1").click(function(){
        var res=JSON.parse(localStorage.getItem("hots_List"));
        alert(res[0].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[0].Name+"</td>"
        +"<td>"+(res[0].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[0].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

      $("#b2").click(function(){
        var res=JSON.parse(localStorage.getItem("hots_List"));
        alert(res[1].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[1].Name+"</td>"
        +"<td>"+(res[1].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[1].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

      $("#b3").click(function(){
        var res=JSON.parse(localStorage.getItem("hots_List"));
        alert(res[2].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[2].Name+"</td>"
        +"<td>"+(res[2].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[2].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

      $("#b4").click(function(){
        var res=JSON.parse(localStorage.getItem("hots_List"));
        alert(res[3].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[3].Name+"</td>"
        +"<td>"+(res[3].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[3].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    ///////Cold Drinks///////////
    $("#b5").click(function(){
        var res=JSON.parse(localStorage.getItem("colds_List"));
        alert(res[0].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[0].Name+"</td>"
        +"<td>"+(res[0].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[0].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b6").click(function(){
        var res=JSON.parse(localStorage.getItem("colds_List"));
        alert(res[1].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[1].Name+"</td>"
        +"<td>"+(res[1].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[1].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    $("#b7").click(function(){
        var res=JSON.parse(localStorage.getItem("colds_List"));
        alert(res[2].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[2].Name+"</td>"
        +"<td>"+(res[2].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[2].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b8").click(function(){
        var res=JSON.parse(localStorage.getItem("colds_List"));
        alert(res[3].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[3].Name+"</td>"
        +"<td>"+(res[3].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[3].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    ////////Bakery//////////
    $("#b9").click(function(){
        var res=JSON.parse(localStorage.getItem("bakery_List"));
        alert(res[0].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[0].Name+"</td>"
        +"<td>"+(res[0].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[0].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b10").click(function(){
        var res=JSON.parse(localStorage.getItem("bakery_List"));
        alert(res[1].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[1].Name+"</td>"
        +"<td>"+(res[1].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[1].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    $("#b11").click(function(){
        var res=JSON.parse(localStorage.getItem("bakery_List"));
        alert(res[2].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[2].Name+"</td>"
        +"<td>"+(res[2].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[2].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b12").click(function(){
        var res=JSON.parse(localStorage.getItem("bakery_List"));
        alert(res[3].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[3].Name+"</td>"
        +"<td>"+(res[3].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[3].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    ////////Seafoods//////////
    $("#b13").click(function(){
        var res=JSON.parse(localStorage.getItem("seafoods_List"));
        alert(res[0].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[0].Name+"</td>"
        +"<td>"+(res[0].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[0].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b14").click(function(){
        var res=JSON.parse(localStorage.getItem("seafoods_List"));
        alert(res[1].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[1].Name+"</td>"
        +"<td>"+(res[1].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[1].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    $("#b15").click(function(){
        var res=JSON.parse(localStorage.getItem("seafoods_List"));
        alert(res[2].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[2].Name+"</td>"
        +"<td>"+(res[2].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[2].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b16").click(function(){
        var res=JSON.parse(localStorage.getItem("seafoods_List"));
        alert(res[3].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[3].Name+"</td>"
        +"<td>"+(res[3].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[3].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    ////////Others Curry//////////
    $("#b17").click(function(){
        var res=JSON.parse(localStorage.getItem("others_List"));
        alert(res[0].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[0].Name+"</td>"
        +"<td>"+(res[0].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[0].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b18").click(function(){
        var res=JSON.parse(localStorage.getItem("others_List"));
        alert(res[1].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[1].Name+"</td>"
        +"<td>"+(res[1].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[1].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    $("#b19").click(function(){
        var res=JSON.parse(localStorage.getItem("others_List"));
        alert(res[2].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[2].Name+"</td>"
        +"<td>"+(res[2].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[2].Price);
        $("#foot").text(total_cost.toFixed(2));
      });

    $("#b20").click(function(){
        var res=JSON.parse(localStorage.getItem("others_List"));
        alert(res[3].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[3].Name+"</td>"
        +"<td>"+(res[3].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[3].Price);
        $("#foot").text(total_cost.toFixed(2));
    });

    $("#b21").click(function(){
        var res=JSON.parse(localStorage.getItem("others_List"));
        alert(res[4].Name);
        $("#tbod").append("<tr style="+"color:white;"+">"+"<td>"+res[4].Name+"</td>"
        +"<td>"+(res[4].Price).toFixed(2)+"</td>"+"</tr>");
        total_cost+=parseFloat(res[4].Price);
        $("#foot").text(total_cost.toFixed(2));
    });
});
