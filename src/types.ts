import { Interface } from "readline";

export namespace Interface {
  export interface IProperty {
    id: number;
    scope: string;
    type: string;
    pos: number;
    name: string;
    rule?: string;
    value: string;
    description: string;
    parentId: number;
    priority: number;
    interfaceId: number;
    creatorId: number;
    moduleId: number;
    repositoryId: number;
    required: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: any;
  }

  export interface IRoot {
    id: number;
    name: string;
    url: string;
    method: string;
    description: string;
    priority: number;
    status: number;
    creatorId: number;
    lockerId?: any;
    moduleId: number;
    repositoryId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: any;
    locker?: any;
    properties: Array<IProperty>;
  }
}

export type Intf = Interface.IRoot & { modelName: string };

export interface IModules {
  id: number;
  name: string;
  description: string;
  priority: number;
  creatorId: number;
  repositoryId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  interfaces: Array<Intf>;
}

export interface ICollaborator {
  id: number;
  name: string;
  token: string;
  description: string;
  logo?: any;
  visibility: boolean;
  ownerId: number;
  organizationId?: any;
  creatorId: number;
  lockerId?: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}





/** 句尾逗号 */
export enum TRAILING_COMMA {
  NONE = 'none',
  ALL = 'all',
  ES5 = 'es5',
}


/** create 函数的参数 */
export interface ICreatorExtr {
  rapUrl: string;
}

export interface IWriteFile {
  path?: string;
  content?: string;
}
