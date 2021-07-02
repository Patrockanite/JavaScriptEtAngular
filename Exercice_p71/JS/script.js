// Pour attendre le fin du chargement du document
document.addEventListener('DOMContentLoaded',function(event){
    
    /**************Exercice 1 nB de 0 à 200 ********************/
    let contenu = document.getElementById("main-content");

    let para1 = document.createElement('p');
    let suite = ""
    for(i=0;i<=200;i++){
        suite += " "+i
    }
    para1.innerHTML=suite;

    let titre1 = document.createElement('h2');
    titre1.innerHTML="Les nombres de 0 à 200";
    contenu.appendChild(titre1);
    contenu.appendChild(para1);

    /***************** Execrice 2 suite de fibo de 1 à 666  */

    let para2 = document.createElement('p');
    
    

    para2.innerHTML=fibo;

    let titre2 = document.createElement('h2');
    titre1.innerHTML="Suite de Fibo";
    contenu.appendChild(titre2);
    contenu.appendChild(para2);


});