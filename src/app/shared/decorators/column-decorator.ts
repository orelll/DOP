import { getSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import 'reflect-metadata';
import { ColumnModel } from '../models/columnModel';
import { TableModel } from '../models/tableModel';

export const tableSymbol = Symbol('column');

export function Column(
  options: Partial<ColumnModel> = {}
): (target: any, propertyKey: string) => void {
  return (target: any, propertyKey: string) => {
    console.log('decorator column for', propertyKey);
    if (!target[tableSymbol]) {
      target[tableSymbol] = new TableModel();
    }

    options.key = options.key || propertyKey;
    const propType = Reflect.getMetadata('design:type', target, propertyKey);
    options.propertyType = getPropertyName(propType);
    const columnOptions = new ColumnModel(options);
    target[tableSymbol].addColumn(columnOptions);
  };
}

export function LogType(type: any): (target: any, propertyKey: string) => void {
  return (target: any, propertyKey: string) => {
    Reflect.defineMetadata('design:type', type, target, propertyKey);
  };
}

function getPropertyName(propType: any): string {
  if (propType) {
    if (typeof propType === 'string') {
      return propType;
    } else if (propType.name) {
      return propType.name;
    } else {
      return 'String';
    }
  }

  return 'String';
}
