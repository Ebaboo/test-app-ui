export class ActivityModel {
  constructor(
    public id: number,
    public subject: string,
    public event: string,
    public eventLink: string,
    public time: string,
    public user: {
    name: string,
    lastName: string,
    imageUrl: string,
  }) { }
}
