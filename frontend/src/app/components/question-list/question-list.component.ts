import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: any[] = [];
  filteredQuestions: any[] = [];
  searchQuery: string = '';

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data;
      this.filteredQuestions = data;
    });
  }

  viewQuestion(id: number) {
    this.router.navigate(['/questions', id]);
  }

  filterQuestions() {
    const query = this.searchQuery.toLowerCase();
    this.filteredQuestions = this.questions.filter(
      (q) =>
        q.title.toLowerCase().includes(query) ||
        (q.tags && q.tags.toLowerCase().includes(query))
    );
  }
}
