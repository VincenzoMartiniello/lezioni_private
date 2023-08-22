import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidatticaADistanzaComponent } from './didattica-a-distanza.component';

describe('DidatticaADistanzaComponent', () => {
  let component: DidatticaADistanzaComponent;
  let fixture: ComponentFixture<DidatticaADistanzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DidatticaADistanzaComponent]
    });
    fixture = TestBed.createComponent(DidatticaADistanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
