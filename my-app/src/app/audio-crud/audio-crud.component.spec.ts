import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCrudComponent } from './audio-crud.component';

describe('AudioCrudComponent', () => {
  let component: AudioCrudComponent;
  let fixture: ComponentFixture<AudioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
