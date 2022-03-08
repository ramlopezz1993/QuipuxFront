import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaQuipuxComponent } from './prueba-quipux.component';

describe('PruebaQuipuxComponent', () => {
  let component: PruebaQuipuxComponent;
  let fixture: ComponentFixture<PruebaQuipuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaQuipuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaQuipuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
