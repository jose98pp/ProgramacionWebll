import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproductosTarjetasComponent } from './cardproductos-tarjetas.component';

describe('CardproductosTarjetasComponent', () => {
  let component: CardproductosTarjetasComponent;
  let fixture: ComponentFixture<CardproductosTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardproductosTarjetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardproductosTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
