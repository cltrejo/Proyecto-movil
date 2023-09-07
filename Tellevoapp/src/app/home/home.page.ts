import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit { 
  usuario: string = "";
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.usuario = this.route.snapshot.paramMap.get('usuario')!;
  }

}
