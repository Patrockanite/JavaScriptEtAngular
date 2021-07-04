// Pour attendre le fin du chargement du document
document.addEventListener('DOMContentLoaded',function(event){
    
    class Pokemon{
        constructor(nom,Id,taille,poids,type){
            this.nom = nom || "toto";
            this.Id = Id;
            this.taille = taille || 0;
            this.poids = poids || 0;
            this.type = type;
            this.sante = 5 ;
            this.arme1 = "hache";
            this.arme2 = "marteau";
        }     
        //Getters
        getName(){
            return this.nom;
        }
        getId(){
            return this.Id;
        }
        getSante(){
            return this.sante;
        }
        getType(){
            return this.type;
        }

        //Setters
        setSante(blessure=0){
            this.sante -= blessure;
        }
        setAttaque(arme){
            if(arme===this.arme1){
                this.setSante(3);                
            }
            if(arme===this.arme2){
                this.setSante(1);
            }
        }

    }
    let Mesrine = new Pokemon("Mesrine",1,170,65,"Truand");
    console.log(Mesrine.getName());
    console.log(Mesrine.getSante());
    Mesrine.setAttaque("hache");
    console.log("Après l'attaque, " + Mesrine.getName() + " qui est un " + Mesrine.getType() + " a un niveau de vie de : " + Mesrine.getSante());

});