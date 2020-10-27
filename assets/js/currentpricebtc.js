function update() {
  var url_btc_usd = "https://api.cryptonator.com/api/ticker/btc-usd";
  var url_btc_eth = "https://api.cryptonator.com/api/ticker/btc-eth";  
  var url_ltc_usd = "https://api.cryptonator.com/api/ticker/ltc-usd";
  var url_ltc_btc = "https://api.cryptonator.com/api/ticker/ltc-btc";
  var url_ada_usd = "https://api.cryptonator.com/api/ticker/ada-usd";
  var url_ada_btc = "https://api.cryptonator.com/api/ticker/ada-btc";
  var url_bch_usd = "https://api.cryptonator.com/api/ticker/bch-usd";
  var url_bch_btc = "https://api.cryptonator.com/api/ticker/bch-btc";
   var url_dash_usd = "https://api.cryptonator.com/api/ticker/dash-usd";
  var url_dash_btc = "https://api.cryptonator.com/api/ticker/dash-btc";  
  
  $.get(url_btc_usd, function(data) { $('#btc-usd').text(data.ticker.price);   });
  $.get(url_btc_eth, function(data) {  $('#btc-eth').text(data.ticker.price);    });
  $.get(url_ltc_usd, function(data) { $('#ltc-usd').text(data.ticker.price);   });
  $.get(url_ltc_btc, function(data) {  $('#ltc-btc').text(data.ticker.price);    });
  $.get(url_ada_usd, function(data) { $('#ada-usd').text(data.ticker.price);   });
  $.get(url_ada_btc, function(data) {  $('#ada-btc').text(data.ticker.price);    });   
  $.get(url_bch_usd, function(data) { $('#bch-usd').text(data.ticker.price);   });
  $.get(url_bch_btc, function(data) {  $('#bch-btc').text(data.ticker.price);    }); 
  $.get(url_dash_usd, function(data) { $('#dash-usd').text(data.ticker.price);   });
  $.get(url_dash_btc, function(data) {  $('#dash-btc').text(data.ticker.price);    }); 
}
update();









var currentPrice = new XMLHttpRequest();
currentPrice.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);
currentPrice.onreadystatechange = function(){
  if(currentPrice.readyState == 4){
    var ticker = JSON.parse(currentPrice.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('BTC').innerHTML =  price + "&nbsp;$";
  };
};
currentPrice.send();

var currentPriceBCH = new XMLHttpRequest();
currentPriceBCH.open('GET', 'https://api.gdax.com/products/BCH-USD/book', true);
currentPriceBCH.onreadystatechange = function(){
  if(currentPriceBCH.readyState == 4){
    var ticker = JSON.parse(currentPriceBCH.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('BCH').innerHTML =  price + "&nbsp;$";
  };
};
currentPriceBCH.send();

var currentPriceLTC = new XMLHttpRequest();
currentPriceLTC.open('GET', 'https://api.gdax.com/products/LTC-USD/book', true);
currentPriceLTC.onreadystatechange = function(){
  if(currentPriceLTC.readyState == 4){
    var ticker = JSON.parse(currentPriceLTC.responseText);
    var price = ticker.bids[0][0];
	var price = ticker.bids[0][0];
    document.getElementById('LTC').innerHTML =  price + "&nbsp;$";
  };
};
currentPriceLTC.send();

var currentPriceDASH = new XMLHttpRequest();
currentPriceDASH.open('GET', 'https://api.gdax.com/products/DASH-USD/book', true);
currentPriceDASH.onreadystatechange = function(){
  if(currentPriceDASH.readyState == 4){
    var ticker = JSON.parse(currentPriceDASH.responseText);
    var price = ticker.bids[0][0];
	var price = ticker.bids[0][0];
    document.getElementById('DASH').innerHTML =  price + "&nbsp;$";
  };
};
currentPriceDASH.send();


function getDate() {

	const
		divDate = document.getElementById('date'),
		monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'],
		dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	var date = new Date();
	date.setDate(date.getDate());

	divDate.innerHTML = (date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear());

}

getDate();


