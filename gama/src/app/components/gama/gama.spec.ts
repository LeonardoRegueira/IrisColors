import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gama } from './gama';

describe('Gama', () => {
  let component: Gama;
  let fixture: ComponentFixture<Gama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
