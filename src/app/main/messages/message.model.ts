export class MessageModel {
  // id: number;
  // subject: string;
  // message: string;
  // time: string;
  // fileLink: string;
  // settings: [];
  // user: {
  //   name: string;
  //   lastName: string;
  //   imageUrl: string;
  // };

  constructor(
    public id: number,
    public subject: string,
    public message: string,
    public time: string,
    public fileLink: string,
    public settings: [],
    public status: string,
    public user: {
    name: string,
    lastName: string,
    imageUrl: string,
  }) { }
}
