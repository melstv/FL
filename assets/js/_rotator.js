var s=[
"http://moonbit.co.in/?ref=511a2c93048a",
"http://moonliteco.in/?ref=519dc77b2fd6",
"http://moondoge.co.in/?ref=4a4d37b1b57b",
"http://moondash.co.in/?ref=FFC9544024A2",
"http://moonbitcoin.cash/?ref=22023F1FFEEA",
"https://coinfaucet.io/?ref=39817",
"https://febbit.com/?ref=5b79c4bcf46c6f0001fa665c",
"https://starcoins.ws/r/9099",
"https://freebitco.in/?r=3337827",
"https://simulatedapeminer.com/game",
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
