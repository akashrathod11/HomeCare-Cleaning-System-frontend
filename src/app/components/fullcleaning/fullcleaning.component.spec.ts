import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcleaningComponent } from './fullcleaning.component';

describe('FullcleaningComponent', () => {
  let component: FullcleaningComponent;
  let fixture: ComponentFixture<FullcleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullcleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullcleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
