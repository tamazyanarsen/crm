import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Project extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  links?: string[];

  @property({
    type: 'string',
    required: true,
  })
  startDate: string;

  @property({
    type: 'string',
  })
  endDate?: string;

  @property({
    type: 'number',
  })
  participantsCount?: number;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Project>) {
    super(data);
  }
}

export interface ProjectRelations {
  // describe navigational properties here
}

export type ProjectWithRelations = Project & ProjectRelations;
