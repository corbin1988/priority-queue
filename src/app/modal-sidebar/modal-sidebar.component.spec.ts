import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSidebarComponent } from './modal-sidebar.component';

describe('ModalSidebarComponent', () => {
  let component: ModalSidebarComponent;
  let fixture: ComponentFixture<ModalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
