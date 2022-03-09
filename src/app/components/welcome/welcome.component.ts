import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeviceService } from 'src/app/sevices/sevice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  // public progress: number = 0;
  public questions: any = [];
  public qnProgress: number = 0;
  
  constructor(private questService: SeviceService, private router: Router) { }

  ngOnInit(): void {
    this.qnProgress = 0;

    this.questService.getQuestions().subscribe((data) => {
      this.questions = data
      console.log(data);
    })
  }

  Answer(qnId: any, choice: any) {
    this.questions[this.qnProgress].options = choice;
    this.qnProgress++;
    console.log(this.qnProgress);

    if (this.qnProgress == 10) {
      this.router.navigate(['/result']);
    }
  }

  next(qnId: number) {
    this.qnProgress++
  }

  previous(qnId: number) {
    this.qnProgress--
  }

}
