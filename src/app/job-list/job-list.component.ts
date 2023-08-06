import { Component, OnInit } from '@angular/core';

import { JobService } from '../../services/job.service';
import { IJob } from 'src/types/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: IJob[] = [];
  isAscending: boolean = true;

  sortByName() {
    this.isAscending = !this.isAscending;
    this.jobs.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return this.isAscending ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.isAscending ? 1 : -1;
      }
      return 0;
    });
  }

  getJobDetail(job: IJob) {
    this.router.navigate(['/job', job.id]);
  }

  constructor(private _jobService: JobService, private router: Router) {}

  ngOnInit() {
    this.jobs = this._jobService.getJobs();
  }
}
