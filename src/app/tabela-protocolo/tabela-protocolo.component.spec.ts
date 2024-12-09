import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProtocoloComponent } from './tabela-protocolo.component';

describe('TabelaProtocoloComponent', () => {
  let component: TabelaProtocoloComponent;
  let fixture: ComponentFixture<TabelaProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
