import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss'],
})
export class CardProductoComponent implements OnInit {
  @Input() visitado: Post={};
  constructor() { }

  ngOnInit() {}

}
