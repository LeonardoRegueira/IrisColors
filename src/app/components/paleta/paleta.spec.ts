import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paleta } from './paleta';

describe('Paleta', () => {
  let component: Paleta;
  let fixture: ComponentFixture<Paleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paleta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paleta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
