import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-audio-crud',
  templateUrl: './audio-crud.component.html',
  styleUrls: ['./audio-crud.component.css']
})
export class AudioCrudComponent implements OnInit {
  audios: any[] = [];
  newAudioData: any = {
    name: '',
    image: '',
    description: '',
    song: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAudios();
  }

  getAudios() {
    this.apiService.getAudios().subscribe(response => {
      this.audios = response;
    }, error => {
      console.error(error);
    });
  }

  addAudio() {
    this.apiService.addAudio(this.newAudioData).subscribe(response => {
      console.log('New audio added:', response);
      this.newAudioData = { name: '', image: '', description: '', song: '' };
      this.getAudios(); // Refresh audio list
    }, error => {
      console.error('Error adding new audio:', error);
    });
  }

  updateAudio(audioId: string, newData: any) {
    this.apiService.updateAudio(audioId, newData).subscribe(response => {
      console.log('Audio updated:', response);
      this.getAudios(); // Refresh audio list
    }, error => {
      console.error('Error updating audio:', error);
    });
  }

  deleteAudio(audioId: string) {
    this.apiService.deleteAudio(audioId).subscribe(response => {
      console.log('Audio deleted:', response);
      this.getAudios(); // Refresh audio list
    }, error => {
      console.error('Error deleting audio:', error);
    });
  }
}
