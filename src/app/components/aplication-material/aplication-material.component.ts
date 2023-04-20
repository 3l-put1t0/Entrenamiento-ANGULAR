import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-aplication-material',
  templateUrl: './aplication-material.component.html',
  styleUrls: ['./aplication-material.component.css']
})
export class AplicationMaterialComponent implements OnInit{

  ngOnInit() : void{
    console.log("Inicia componente Material");
  }
  
  public contador: number = 1000;
  public lista = ["Camila", "Laura", "Juan", "Saldaña"];
  
  aumentar(): void {   
    this.contador = this.contador + 1;  
  }
}
