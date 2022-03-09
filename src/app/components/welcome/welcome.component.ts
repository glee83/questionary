import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public selectedAnswers: any = [];
  
  constructor(private questService: SeviceService, private router: Router, private fb: FormBuilder) { }

  // this.formData = formBuilder.group({})
  ngOnInit(): void {
    this.qnProgress = 0;

    this.questService.getQuestions().subscribe((data) => {
      this.questions = data
      console.log(data);
    })

  }
  myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(9)]],
    compName: ['', [Validators.required, Validators.minLength(3)]]
  })

  Answer(qnId: any, index: any) {
    // this.questions[this.qnProgress].options = index;
    this.qnProgress++;
    console.log(`this is the id of the selected answer ${qnId} and the index is ${index} `);
    let select = qnId;
    console.log(select);
    
  }

  previous(qnId: number) {
    this.qnProgress--;
  }

  onSubmit(data: any ) {
    console.log(this.myForm.value);
    this.router.navigate(['/quest']);
    
  }

}
