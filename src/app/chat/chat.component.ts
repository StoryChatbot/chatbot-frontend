import { Component } from '@angular/core';
import { GenerateStoryService } from '../services/generate-story.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [CommonModule, ReactiveFormsModule, FormsModule, LoaderComponent]
})
export class ChatComponent {

  messages = [
    { sender: 'user', text: 'Hello!' },
    { sender: 'chatbot', text: 'Hi there!' },
  ];
  prompt: string = '';
  story: string = '';

  isLoading: boolean = false;

  constructor(private storyService: GenerateStoryService) { }


  generateStory() {
    console.log(this.prompt);
    
    if (this.prompt) {
      this.messages.push({ sender: 'user', text: this.prompt });
    }

    this.isLoading = true;

    this.storyService.generateStory(this.prompt).subscribe(response => {
      this.story = response.response;
      console.log(this.story);
      this.isLoading = false;
      this.messages.push({ sender: 'chatbot', text: this.story });
    });


    this.prompt = '';

  }

}
