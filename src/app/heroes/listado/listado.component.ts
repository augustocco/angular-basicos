import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ["Spiderman","Ironman","Hulk","Thor"];
   heroeBorrado:string="";

  borrarHeroeDirectamente(ind:number){
    console.log("Borrando...", ind);
    this.heroes.splice(ind,1);
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
    console.log("Heroe borrado...", this.heroeBorrado);
  }
}
