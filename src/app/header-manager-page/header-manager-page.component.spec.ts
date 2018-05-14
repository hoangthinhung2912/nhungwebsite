import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderManagerPageComponent } from './header-manager-page.component';

describe('HeaderManagerPageComponent', () => {
  let component: HeaderManagerPageComponent;
  let fixture: ComponentFixture<HeaderManagerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderManagerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderManagerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
