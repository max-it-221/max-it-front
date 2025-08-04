import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCompteComponent } from './ajout-compte.component';

describe('AjoutCompteComponent', () => {
  let component: AjoutCompteComponent;
  let fixture: ComponentFixture<AjoutCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
