import { Component, Input } from '@angular/core';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
})
export class AnswerFormComponent {
  @Input() questionId!: number;
  answerText = '';

  constructor(private answerService: AnswerService) {}

  submitAnswer() {
    const payload = { answer_text: this.answerText };
    this.answerService.postAnswer(this.questionId, payload).subscribe(() => {
      this.answerText = '';
      window.location.reload(); // optional: or emit event
    });
  }
}
