
import { Compte } from "./compte";
export class Transaction{
    constructor(
        public id: number,
        public reference: string,
       public montant: number,
        public date: string,
        public type: "Retrait" | "Depot" | "Transfert",
        public compte?: Compte
        

        
    ) {}
}

export class Achat{
    constructor(
        public id: number,
        public reference: string,
        public nombreKW: number,
        public date: string,
        public montant: number,
        public compteId: number,
        public telephone?: string,
    ) {}
}