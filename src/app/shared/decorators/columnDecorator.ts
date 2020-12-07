
import 'reflect-metadata';
import { ColumnModel } from '../models/columnModel';
import { TableModel } from '../models/tableModel';

export const tableSymbol = Symbol('column');

export function Column(options: Partial<ColumnModel> = {}) {
  return (target: any, propertyKey: string) =>  {
    console.log('decorator column for', propertyKey);
    if (!target[tableSymbol]) {
      target[tableSymbol] = new TableModel();
    }
    options.key = options.key || propertyKey;
    const propType = Reflect.getMetadata('design:type', target, propertyKey);
    options.propertyType = propType?.name ? propType.name : 'String';
    const columnOptions = new ColumnModel(options);
    target[tableSymbol].addColumn(columnOptions);
  };
}

export function logType(type: any) {
  return function(target: any, propertyKey: string) {  
     Reflect.defineMetadata('design:type', type, target, propertyKey);
  }
}
