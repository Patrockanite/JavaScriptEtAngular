
/*************Fichier Js écrit en TypeScript et généré par NPM */
// Pour attendre le fin du chargement du document
document.addEventListener('DOMContentLoaded',function(event){
    
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Personne = /** @class */ (function () {
        //Constructeur
        function Personne(nom, prenom, genre, age, sport) {
            this.private_nom = nom;
            this.private_prenom = prenom;
            this.private_genre = genre;
            this.private_age = age;
            this.private_sport = sport;
        }
        //Getters
        Personne.prototype.getNom = function () {
            return this.private_nom;
        };
        Personne.prototype.getPrenom = function () {
            return this.private_prenom;
        };
        Personne.prototype.getGenre = function () {
            return this.private_genre;
        };
        Personne.prototype.getAge = function () {
            return this.private_age;
        };
        Personne.prototype.getSport = function () {
            return this.private_sport;
        };
        //Setters
        Personne.prototype.setSport = function (nouveauSport) {
            if (nouveauSport) {
                this.private_sport = nouveauSport;
            }
        };
        return Personne;
    }());
    var Etudiant = /** @class */ (function (_super) {
        __extends(Etudiant, _super);
        function Etudiant(nom, prenom, genre, age, sport, promo) {
            var _this = _super.call(this, nom, prenom, genre, age, sport) || this;
            _this.private_promotion = promo;
            return _this;
        }
        Etudiant.prototype.getPromotion = function () {
            return this.private_promotion;
        };
        return Etudiant;
    }(Personne));
    var Formateur = /** @class */ (function (_super) {
        __extends(Formateur, _super);
        function Formateur(nom, prenom, genre, age, sport, cours) {
            var _this = _super.call(this, nom, prenom, genre, age, sport) || this;
            _this.private_Cours = cours;
            return _this;
        }
        Formateur.prototype.getCours = function () {
            return this.private_Cours;
        };
        return Formateur;
    }(Personne));
   

    /************* Attention au chargement de la page ****************************/
    var contenu = document.getElementById("main-content");

    /*************affichages*************/
    var Patrick = new Etudiant("ANNOOT", "Patrick", "Homme", 59, "Pêche à la mouche", "1ère année");
    var para1 = document.createElement('p');
    para1.innerHTML = "Etudiant : " + Patrick.getPrenom() + " " + Patrick.getNom() + " - Sport pratiqué : " + Patrick.getSport();
    contenu.appendChild(para1); 

    var Janny = new Etudiant("ANNOOT","Janny","Femme",30,"Judo","Maternelle supérieure");
    var para2 = document.createElement('p');
    para2.innerHTML = "Etudiant : " + Janny.getPrenom() + " " + Janny.getNom() + " - Sport pratiqué : " + Janny.getSport() + " - Etudes : " + Janny.getPromotion();
    contenu.appendChild(para2);
});