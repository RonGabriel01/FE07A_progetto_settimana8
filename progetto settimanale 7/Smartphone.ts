import { Console } from "console";

interface Smartphone {
    credito: number;
    chiamate: number;

}

class FirstUser implements Smartphone{
    public credito: number;
    public chiamate: number;

    constructor(credito: number, chiamate: number){
        this.credito = credito;
        this.chiamate = chiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minDurata: number): void {
        this.credito -= minDurata * 0.20;
        this.chiamate ++;
    }

    public numero404(): number{
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.chiamate;
    }

    public azzeraChiamate(): void{
        this.chiamate = 0;
        console.log('numero chiamate: ' + this.chiamate);
    }
}

class SecondUser implements Smartphone{
    public credito: number;
    public chiamate: number;

    constructor(credito: number, chiamate: number){
        this.credito = credito;
        this.chiamate = chiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minDurata: number): void {
        this.credito -= minDurata * 0.20;
        this.chiamate ++;
    }

    public numero404(): number{
        return this.credito;
    }
 
    public getNumeroChiamate(): number {
        return this.chiamate;
    }

    public azzeraChiamate(): void{
        this.chiamate = 0;
        console.log('numero chiamate: ' + this.chiamate);
    }
}

class ThirdUser implements Smartphone{
    public credito: number;
    public chiamate: number;

    constructor(credito: number, chiamate: number){
        this.credito = credito;
        this.chiamate = chiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.credito += unaRicarica;
    }

    public chiamata(minDurata: number): void {
        this.credito -= minDurata * 0.20;
        this.chiamate ++;
    }

    public numero404(): number{
        return this.credito;
    }

    public getNumeroChiamate(): number {
        return this.chiamate;
    }

    public azzeraChiamate(): void {
        this.chiamate = 0;
        console.log('numero chiamate: ' + this.chiamate);
    }
}

let telefono1 = new FirstUser(0, 0);
telefono1.ricarica(70);
telefono1.chiamata(50);
console.log('---PRIMO UTENTE----');
console.log('Valore della ricarica disponibile :' + telefono1.numero404());
console.log('Numero di chiamate: ' + telefono1.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
telefono1.azzeraChiamate();

let telefono2 = new SecondUser(0, 0);
telefono2.ricarica(70);
telefono2.chiamata(60);
console.log('---SECONDO UTENTE----');
console.log('Valore della ricarica disponibile :' + telefono2.numero404());
console.log('Numero di chiamate: ' + telefono2.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
telefono2.azzeraChiamate();

let telefono3 = new ThirdUser(0, 0);
telefono3.ricarica(70);
telefono3.chiamata(50);
telefono3.chiamata(60);
console.log('---PRIMO UTENTE----');
console.log('Valore della ricarica disponibile :' + telefono3.numero404());
console.log('Numero di chiamate: ' + telefono3.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
telefono3.azzeraChiamate();