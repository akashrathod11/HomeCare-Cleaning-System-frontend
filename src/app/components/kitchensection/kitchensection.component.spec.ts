import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchensectionComponent } from './kitchensection.component';

describe('KitchensectionComponent', () => {
  let component: KitchensectionComponent;
  let fixture: ComponentFixture<KitchensectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitchensectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchensectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
