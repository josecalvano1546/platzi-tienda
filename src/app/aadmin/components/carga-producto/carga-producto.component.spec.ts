import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaProductoComponent } from './carga-producto.component';

describe('CargaProductoComponent', () => {
  let component: CargaProductoComponent;
  let fixture: ComponentFixture<CargaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
