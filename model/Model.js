export default class Modell {
  
    // csak az adatokkal foglalkozik
    // feladata a program akutális állapotának előállítása
    #lista = [];
    #index = 0;
  constructor(lista) {
    this.#lista = lista;
    this.#index = index;
  }

  getIndex() {
    return this.#index;
  }
  leptetBal() {
    this.#index--;
    if (this.#index < 0) {
      this.#index = this.#lista.length() - 1;
    }
  }

  leptetJobb() {
    this.#index++;
    if (this.#index === this.#lista.length) {
      this.#index = 0;
    }
    return this.#index;
  }

  setIndex(index){
    this.#index = index;                       
  }

}
