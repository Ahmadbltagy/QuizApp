import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  subjects: any;

  constructor(
    private _subjectservice: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._subjectservice.all.subscribe({
      next: (res) => (this.subjects = res),
      error: (err) => console.log(err),
    });
  }

  addSubject() {
    this.router.navigate([`/admin/edit/0`])
  }

  deleteSubject(id:number, subjectIndex:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._subjectservice.deleteSubject(id).subscribe({
          next: response =>{
            this.subjects.splice(subjectIndex,1)
            Swal.fire(
              'Deleted!',
              'Your Subject has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
}
