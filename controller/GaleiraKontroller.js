import JatekTer from "./Jatekter.js";
import Kartya from "./view/Kartya.js";
import NagyKartya from "./view/NagyKartya.js";
import Modell from "./model/Model.js";
import { LISTA } from "../model/adat.js";


export default class GaleriaKontroller{
    
    constructor(){

this.taroloELEM = $(".tartalom");
this.kivELEM = $(".kivalasztott");
// let index = 0;

new NagyKartya(LISTA[index], kivELEM);
new JatekTer(LISTA,taroloELEM);

//Peldanyositjuk a model-t
const model = new Modell(LISTA)
let index = model.getIndex;
this.#balEsemenykezelo;
this.#jobbEsemenykezelo;
this.#kivEsemenykezelo;



    }

#kivEsemenykezelo(){
    $(window).on("kivalaszt",(event)=>{
        console.log(event.detail)
        
        this.kivELEM.empty();
        model.setIndex(event.detail.id);
        new NagyKartya(event.detail, kivELEM);
     });
     
}

#jobbEsemenykezelo(){
    $(window).on("jobb",(event)=>{
        let index = model.leptetJobb(); 
        kivELEM.empty();
        new NagyKartya(LISTA[index], kivELEM);
     });
     
}

#balEsemenykezelo(){
    $(window).on("bal",(event)=>{
        let index = model.leptetBal();
        kivELEM.empty();
        new NagyKartya(LISTA[index], kivELEM);
     });
     
}

}