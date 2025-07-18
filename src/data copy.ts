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


const STATUS_ACTIVE: Status = { id: 1, name: "Активен", color: "green.400" };
const STATUS_PENDING: Status = { id: 2, name: "Ожидание", color: "yellow.400" };
const STATUS_BLOCKED: Status = { id: 3, name: "Заблокирован", color: "red.400" };

export const STATUSES: Status[] = [STATUS_ACTIVE, STATUS_PENDING, STATUS_BLOCKED];

export const DATA: Task[] = [
  {
    name: "ООО Ромашка",
    inn: "1234567890",
    status: STATUS_ACTIVE,
    registrationDate: new Date("2021-07-12"),
  },
  {
    name: "ИП Иванов",
    inn: "9876543210",
    status: STATUS_PENDING,
    registrationDate: new Date("2022-01-04"),
  },
  {
    name: "ООО Сила",
    inn: "1111222233",
    status: STATUS_BLOCKED,
    registrationDate: new Date("2023-03-15"),
  },
  {
    name: "ЗАО ТехноПлюс",
    inn: "2233445566",
    status: STATUS_ACTIVE,
    registrationDate: new Date("2020-09-01"),
  },
  {
    name: "ИП Смирнов",
    inn: "3344556677",
    status: STATUS_PENDING,
    registrationDate: new Date("2023-05-25"),
  },
  {
    name: "ООО АльфаГрупп",
    inn: "4455667788",
    status: STATUS_BLOCKED,
    registrationDate: new Date("2021-12-10"),
  },
  {
    name: "ОАО Велес",
    inn: "5566778899",
    status: STATUS_ACTIVE,
    registrationDate: new Date("2022-08-18"),
  },
  {
    name: "ИП Козлов",
    inn: "6677889900",
    status: STATUS_PENDING,
    registrationDate: new Date("2024-01-30"),
  },
  {
    name: "ООО Звезда",
    inn: "7788990011",
    status: STATUS_ACTIVE,
    registrationDate: new Date("2019-11-11"),
  },
  {
    name: "ЧУП Глобал",
    inn: "8899001122",
    status: STATUS_BLOCKED,
    registrationDate: new Date("2020-02-20"),
  },
];

export default DATA;
