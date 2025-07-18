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