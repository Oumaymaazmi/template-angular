import {Commande} from "./commande.model";

export class Paiement {
    public id: number;
    public ref: string;
    public montant: number;
    public commande= new Commande() ;

}
