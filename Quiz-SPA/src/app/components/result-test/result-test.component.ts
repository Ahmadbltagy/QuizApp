import { Component } from '@angular/core';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent {
  student = {
    Imgurl: "assets/images/profile.jpg",
    Id: "8955-6545-3621-5564",
    name: "John Doe",
    class: "First Primary",
  };
  testinfo = {
    subject: "Mathematics",
    grade: "84/100",
    estimate: "",
  };

  constructor() {
    this.setEstimate();
  }

  setEstimate() {
    const gradeValue = parseInt(this.testinfo.grade.split('/')[0]);

    if (gradeValue > 85) {
      this.testinfo.estimate = "Excellent";
    } else if (gradeValue > 75) {
      this.testinfo.estimate = "Very Good";
    } else if (gradeValue > 65) {
      this.testinfo.estimate = "Good";
    } else if (gradeValue > 50) {
      this.testinfo.estimate = "Fair";
    } else {
      this.testinfo.estimate = "Fail";
    }
  }
}
