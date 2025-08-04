import { Transaction } from "./transaction";

export type StatutCompte = "Actif" | "Bloque" 
export class Compte {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public telephone: string,
        public dateOuverture: string,
        public nci: string,
        public images: Image[],
        public transactions: Transaction[],
        public dateBlocage?: string,
        

        
    ) {}

 public get bloqued():boolean{
        if(this.dateBlocage){
            return true;
        }
        return false;
    }

    public get statut():StatutCompte{
        if(this.bloqued){
            return "Bloque";
        }
        return "Actif";
    }


}
export interface Image {
    id: number;
    url: string;
    description: string;
    compteId: Compte['id'];
}
