import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { AnswerService } from '../../services/answer.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
})
export class QuestionDetailsComponent implements OnInit {
  questionId!: number;
  question: any;
  answers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    this.questionId = Number(this.route.snapshot.paramMap.get('id'));

    this.questionService.getQuestion(this.questionId).subscribe((q) => {
      this.question = q;
    });

    this.answerService.getAnswers(this.questionId).subscribe((a) => {
      this.answers = a;
    });
  }
}
