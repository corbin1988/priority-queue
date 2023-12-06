import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesPageComponent } from './priorities-page.component';

describe('PrioritiesPageComponent', () => {
  let component: PrioritiesPageComponent;
  let fixture: ComponentFixture<PrioritiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioritiesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrioritiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
