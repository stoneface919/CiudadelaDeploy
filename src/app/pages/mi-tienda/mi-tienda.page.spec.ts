import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiTiendaPage } from './mi-tienda.page';

describe('MiTiendaPage', () => {
  let component: MiTiendaPage;
  let fixture: ComponentFixture<MiTiendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiTiendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiTiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
