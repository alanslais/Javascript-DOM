var titles= document.getElementsByClassName('title');
//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
  console.log(item);
});

//Alternatively, by using for loop
console.log(".................................");

for(i=0; i<titles.length; i++){
  console.log(titles[i]);
}
