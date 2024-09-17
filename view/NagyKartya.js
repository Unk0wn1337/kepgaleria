export default class NagyKartya {
  //adattagok
  #obj = {}; //privát adattag
  #szuloElem;
  //construktor -
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kiir();
    this.jobbELEM = $(".jobb")
    this.jobbELEM.on("click", () => {this.#esemenyTrigger("jobb")})
    this.balELEM = $(".bal")
    this.balELEM.on("click", () => {this.#esemenyTrigger("bal")})
     console.log(this.kepElem)
     //this.esemenyKezelo();
  }
  //tagfüggvény
  kiir() {
    //egyetlen egy kép kíírása
    this.#szuloElem.append(`
      
        <button class="bal col-1">BAL</button>
            <div class="card col-10">
                <div class="card-body">                 
                  <h3>${this.#obj.nev}<h3>
                  <img src="${this.#obj.url}" alt="${this.#obj.cim}" class="card-img-top">
               </div>
            </div>
            <button class="jobb col-1">JOBB</button>
            `);
  }

  // esemenykezelő a léptető gombokra

  #esemenyTrigger(esemenynev){
    const e = new CustomEvent(esemenynev);
    window.dispatchEvent(e);
  }
  

  



}
