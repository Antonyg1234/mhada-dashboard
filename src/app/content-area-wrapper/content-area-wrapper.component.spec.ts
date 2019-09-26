import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAreaWrapperComponent } from './content-area-wrapper.component';

describe('ContentAreaWrapperComponent', () => {
  let component: ContentAreaWrapperComponent;
  let fixture: ComponentFixture<ContentAreaWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAreaWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAreaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
