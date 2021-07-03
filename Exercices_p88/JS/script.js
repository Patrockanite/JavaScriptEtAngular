// Pour attendre le fin du chargement du document
document.addEventListener('DOMContentLoaded',function(event){
    

    let contenu = document.getElementById("main-content");
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    /************************** test 2 nombres **********************/
    alert("On commence pas 2 chiffres");
    let a = prompt("Entrez un nombre entier");
    let b = prompt("Entrez un nombre entier");

   
    if(a===b){
        para1.innerHTML = "Les entrées sont égales !";
    }
    else{
        a = maxDe2Nombres(parseInt(a,10),parseInt(b,10));
        para1.innerHTML = a + " est le nombre le plus grand";
    }
    contenu.appendChild(para1);

    /********************* Test 3 nombres ************************/
    alert("maitenant on en entre 3 ");
    a = prompt("Entrez un nombre entier");
    b = prompt("Entrez un nombre entier");
    let c = prompt("Entrez un nombre entier");

   
    if(a==b&&b==c){
        para2.innerHTML = "Les entrées sont égales !";
    }
    else{
        a = maxDe3Nombres(parseInt(a,10),parseInt(b,10),parseInt(c,10));
        para2.innerHTML = a + " est le nombre le plus grand";
    }
    contenu.appendChild(para2);
    
    
/****************************** fonctions **************************/
   
    function maxDe2Nombres (a,b){
        if(!isNaN(a) && !isNaN(b)){
            if(a>b){
                return a;
            }
            else if(b>a){
                return b;
            }
            else{
                return a;
            }
        }
        else{
            alert("Vous n'avez pas entré les nombres correctement");
        }
    }

    function maxDe3Nombres (a,b,c){
        let d = maxDe2Nombres(a,b);
        return maxDe2Nombres(c,d);
    }
    
    

});
