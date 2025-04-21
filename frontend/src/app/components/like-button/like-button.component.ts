import { Component, Input } from '@angular/core';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent {
  @Input() answerId!: number;
  @Input() likes: number = 0;

  constructor(private answerService: AnswerService) {}

  like() {
    console.log('Liking answer with ID:', this.answerId);
    this.answerService.likeAnswer(this.answerId).subscribe({
      next: (res) => {
        console.log('Like success:', res);
        this.likes += 1;
      },
      error: (err) => {
        console.error('Like failed:', err);
      },
    });
  }
}
