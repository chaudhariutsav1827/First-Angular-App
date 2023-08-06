export interface IJob {
  id: number;
  name: string;
  createdAt: Date;
  status: 'Pending' | 'Completed';
}
