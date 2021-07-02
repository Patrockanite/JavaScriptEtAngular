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
    titre1.innerHTML="Les nombres de 0 à 200 :";
    contenu.appendChild(titre1);
    contenu.appendChild(para1);

    /***************** Execrice 2 suite de fibonacci de 1 à 666  ************/
    /************* chaque valeur est la somme des 2 précédentes ***********/

    let para2 = document.createElement('p');
    let fibo = [];
    let suivant = 0;
    let a = 1;
    let b = 1;
    while(suivant<666){
        if(suivant == 0){
            fibo.push(a);
            fibo.push(b);
            suivant = a+b;
        }
        else{
            fibo.push(suivant);
            a = b ;
            b = suivant ;
            suivant = a + b;           
           
        }
        //console.log(fibo);
       
    }    
    
    for(i=0;i<fibo.length;i++){
        para2.innerHTML += (fibo[i]).toString()+" ; ";
    }

    let titre2 = document.createElement('h2');
    titre2.innerHTML="Suite de Fibonacci à moins de 666 :";
    contenu.appendChild(titre2);
    contenu.appendChild(para2);

    /****************** Exrcice 3 nombres premiers de 1 à 61*******************/
    let titre3 = document.createElement('h2');
    titre3.innerHTML = "Nombres premiers de 1 à 61 :";
    contenu.appendChild(titre3);
    let para3= document.createElement('p');

    let NbPremiers = "";
    for(i=1;i<=61;i++){
        if(i%2 !=0){
            NbPremiers += i.toString()+" ; ";
        }
    }
    para3.innerHTML = NbPremiers;
    contenu.appendChild(para3);






});