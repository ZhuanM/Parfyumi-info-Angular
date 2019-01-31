import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragranceModalComponent } from './fragrance-modal.component';

describe('FragranceModalComponent', () => {
  let component: FragranceModalComponent;
  let fixture: ComponentFixture<FragranceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragranceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragranceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
