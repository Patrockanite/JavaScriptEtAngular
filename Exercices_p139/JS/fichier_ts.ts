class Personne{
    private_nom: string;
    private_prenom: string;
    private_genre: string;
    private_age: number;
    private_sport: string;

    //Constructeur
    constructor(nom:string,prenom:string,genre:string,age:number,sport:string){
        this.private_nom = nom;
        this.private_prenom = prenom;
        this.private_genre = genre;
        this.private_age = age;
        this.private_sport = sport;
    }

    //Getters
    getNom(){
        return this.private_nom;
    }
    getPrenom(){
        return this.private_prenom;
    }
    getGenre(){
        return this.private_genre;
    }
    getAge(){
        return this.private_age;
    }
    getSport(){
        return this.private_sport;
    }

    Setters
    setSport(nouveauSport:string){
        if(nouveauSport){
            this.private_sport = nouveauSport;
        }
    }

}
class Etudiant extends Personne{
    private_promotion:string;
    constructor(nom:string,prenom:string,genre:string,age:number,sport:string, promo:string){
        super(nom,prenom,genre,age,sport);
        this.private_promotion = promo;
    }
    getPromotion(){
        return this.private_promotion;
    }

}
class Formateur extends Personne{
    private_Cours:any;
    constructor(nom:string,prenom:string,genre:string,age:number,sport:string,cours:any){
        super(nom,prenom,genre,age,sport);
        this.private_Cours = cours;
    }
    getCours(){
        return this.private_Cours;
    }
}

let Patrick = new Etudiant("Annoot","Patrick","Homme",59,"Pêche à la mouche","1ère année");
let contenu = document.getElementById("main-content");
let para1 = document.createElement('p');
para1.innerHTML="Cet étudiant s'appelle "+ Patrick.getPrenom() + " " + Patrick.getNom() + "il pratique : " + Patrick.getSport();