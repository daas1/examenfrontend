import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocuestionarioComponent } from './nuevocuestionario.component';

describe('NuevocuestionarioComponent', () => {
  let component: NuevocuestionarioComponent;
  let fixture: ComponentFixture<NuevocuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevocuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevocuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
