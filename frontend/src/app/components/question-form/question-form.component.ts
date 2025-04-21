import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
})
export class QuestionFormComponent {
  questionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.questionForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      description: ['', [Validators.required]],
      tags: [''],
    });
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      const formData = this.questionForm.value;

      this.questionService.postQuestion(formData).subscribe({
        next: () => {
          alert('✅ Question posted successfully!');
          this.router.navigate(['/questions']);
        },
        error: (err) => {
          console.error(err);
          alert('❌ Failed to post question. Try again.');
        },
      });
    }
  }
}
