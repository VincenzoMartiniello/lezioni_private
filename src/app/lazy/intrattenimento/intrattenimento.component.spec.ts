import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrattenimentoComponent } from './intrattenimento.component';

describe('IntrattenimentoComponent', () => {
  let component: IntrattenimentoComponent;
  let fixture: ComponentFixture<IntrattenimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrattenimentoComponent]
    });
    fixture = TestBed.createComponent(IntrattenimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
