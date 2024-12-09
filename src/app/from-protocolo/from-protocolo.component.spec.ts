import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromProtocoloComponent } from './from-protocolo.component';

describe('FromProtocoloComponent', () => {
  let component: FromProtocoloComponent;
  let fixture: ComponentFixture<FromProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
