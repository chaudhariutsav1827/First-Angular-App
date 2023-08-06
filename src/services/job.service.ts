import { Injectable } from '@angular/core';

import { IJob } from 'src/types/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}

  getJobs(): IJob[] {
    return [
      { id: 1, name: 'Test', status: 'Pending', createdAt: new Date() },
      { id: 2, name: 'Test1', status: 'Completed', createdAt: new Date() },
      { id: 3, name: 'Test2', status: 'Pending', createdAt: new Date() },
      { id: 4, name: 'Test3', status: 'Completed', createdAt: new Date() },
    ];
  }
}
