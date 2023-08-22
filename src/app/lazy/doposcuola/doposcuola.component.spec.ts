import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoposcuolaComponent } from './doposcuola.component';

describe('DoposcuolaComponent', () => {
  let component: DoposcuolaComponent;
  let fixture: ComponentFixture<DoposcuolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoposcuolaComponent]
    });
    fixture = TestBed.createComponent(DoposcuolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
