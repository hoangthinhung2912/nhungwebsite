import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarManagerPageComponent } from './sidebar-manager-page.component';

describe('SidebarManagerPageComponent', () => {
  let component: SidebarManagerPageComponent;
  let fixture: ComponentFixture<SidebarManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
