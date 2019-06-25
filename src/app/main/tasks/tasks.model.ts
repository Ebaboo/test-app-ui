export class TaskModel {
  constructor(
    public id: number,
    public title: string,
    public message: string,
    public time: string,
    public status: string) {
  }
}

