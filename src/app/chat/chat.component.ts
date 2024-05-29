import { Component } from '@angular/core';
import { GenerateStoryService } from '../services/generate-story.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages = [
    { sender: 'user', text: 'Hello!' },
    { sender: 'chatbot', text: 'Hi there!' },
  ];
  prompt: string = '';


  story: string = '';

  constructor(private storyService: GenerateStoryService) { }


  generateStory() {
    console.log(this.prompt);
    
    if (this.prompt) {
      this.messages.push({ sender: 'user', text: this.prompt });
    }

    this.storyService.generateStory(this.prompt).subscribe(response => {
      this.story = response.story;
    });


    this.prompt = '';

  }

}
