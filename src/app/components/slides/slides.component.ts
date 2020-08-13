import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {}
  @Input() titulo:string;
  @Input() visitado: Post={};
  slideOpts = {
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1
      },
      1000:{
        slidesPerView: 4
      }
    }
  };   
}
