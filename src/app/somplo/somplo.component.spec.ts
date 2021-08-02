import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomploComponent } from './somplo.component';

describe('SomploComponent', () => {
  let component: SomploComponent;
  let fixture: ComponentFixture<SomploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
