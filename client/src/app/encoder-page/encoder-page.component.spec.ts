import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncoderPageComponent } from './encoder-page.component';

xdescribe('EncoderPageComponent', () => {
  let component: EncoderPageComponent;
  let fixture: ComponentFixture<EncoderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncoderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncoderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
