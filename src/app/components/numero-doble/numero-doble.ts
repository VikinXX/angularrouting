import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble',
  standalone: false,
  styleUrl: './numero-doble.css',
  templateUrl: './numero-doble.html',
})
export class NumeroDoble implements OnInit{
  
  public doble!: number;
  public numero!: number;

  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {
    this.doble = 0;
  }

  goToHome(num: any): void{
    if(num !== null){
      this._router.navigate(['/doble', num])
    }else{
      this._router.navigate(['/'])
    }
  }

  ngOnInit(): void{
    this._activeRoute.params.subscribe((parametros: Params) => {
      // Aquí tenemos los parámetros por su name
      if(parametros['numero'] !== null){
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
      
    })
  }
}
