import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeAnnulationTransfereComponent } from './liste-demande-annulation-transfere.component';

describe('ListeDemandeAnnulationTransfereComponent', () => {
  let component: ListeDemandeAnnulationTransfereComponent;
  let fixture: ComponentFixture<ListeDemandeAnnulationTransfereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDemandeAnnulationTransfereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDemandeAnnulationTransfereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
