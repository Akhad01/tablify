export interface ClientStatus {
  id: number;
  name: string;
  color: string; 
}

export interface Client {
  id: string; 
  name: string;
  inn: string;
  status: string; 
  registrationDate: Date;
}

export interface Status {
  id: number;
  name: string;
  color: string;
}

export interface Task {
  name: string;
  inn: string;
  status: Status | null;
  registrationDate: Date | null;
}