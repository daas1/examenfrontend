import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasodosComponent } from './pasodos.component';

describe('PasodosComponent', () => {
  let component: PasodosComponent;
  let fixture: ComponentFixture<PasodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
