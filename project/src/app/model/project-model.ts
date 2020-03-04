import {Sectors} from './sectors';

export class ProjectModel {
  static id: number = 0;

  constructor(public projectCode:string, public  projectTitle: string, public description: string, public impStatusId: number,
              public startDate: Date, public endDate: Date, public sectors: Sectors[]) {
    ProjectModel.id += 1;
  }
}



