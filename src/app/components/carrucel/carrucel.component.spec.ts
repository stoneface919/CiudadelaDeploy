import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrucelComponent } from './carrucel.component';

describe('CarrucelComponent', () => {
  let component: CarrucelComponent;
  let fixture: ComponentFixture<CarrucelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrucelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
