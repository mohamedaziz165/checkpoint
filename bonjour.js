//exercice1
function inverse(chaine1){
     var reverse="";
     for(var i=chaine1.lenght-1,i>0,i--){
       reverse=+chaine1[i];

     }
     return reverse

}
//EXERCICE2
function  counting(chaine){
  var count=0;
   for(var i=0,i<chaine.length,i++){
    count=+1
     }
     return count


}
//EXERCICE3
function capital(chaine){
    {
        var capitalchaine = "";
       var mot = sentence.split(" ");
        
        for (let i = 0; i < mot.length; i++) {
            capitalchaine += mot[i].charAt(0).toUpperCase() + mot[i].slice(1) ;
        }

    return capitalchaine
}
//exercice 4
 function maximum(arr){
    var max=arr[0];
    for (var i=1,i<arr.lenght,i++){
        if arr[i]>max{
            max=+arr[i]
        }
    }
    return max
 }
 function minimum(arr){
    var min=arr[0];
    for (var i=1,i<arr.lenght,i++){
        if arr[i]<min{
            max=+arr[i]
        }
    }
    return min
 }
 // exercice 5
 function summing(arr){
  var sum=0;
  for (var i=0,i<arr.length,i++ ){
    sum=+arr[i];
  }
  return sum   
}
// EXERCICE 6
function filtred(arr,condition){
 var Tab=[];
 var c=0;
for(var i=0,i<arr.length,i++){
   if condition(arr[i]){
    Tab[c]=arr[i]
   }
   c++
}
return Tab
}
//exercice 7
function factoriel(n){
  if(n<0) return undefined;
  var resultat=1;
  for(i=1,i<=n,i++){
    resultat*=i;
  }
  return resultat
 
}



 }


}

