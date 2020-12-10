export class ColumnModel {
  
  key: string;
  order: number;
  propertyType: any;
  canSort: boolean;
  name: string;

  constructor(options: Partial<ColumnModel> = {}) {
    this.key = options.key;
    this.order = options.order || 0;
    this.propertyType = options.propertyType;
    this.canSort = options.canSort || false;
    this.name = options.name || options.key;
  }
}
