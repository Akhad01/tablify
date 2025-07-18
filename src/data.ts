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
  { name: "ООО Ромашка", inn: "123456789", status: STATUS_ACTIVE, registrationDate: new Date("2021-07-12") },
  { name: "ИП Иванов", inn: "9876543210", status: STATUS_PENDING, registrationDate: new Date("2022-01-04") },
  { name: "ООО Сила", inn: "1111222233", status: STATUS_BLOCKED, registrationDate: new Date("2023-03-15") },
  { name: "ЗАО ТехноПлюс", inn: "2233445566", status: STATUS_ACTIVE, registrationDate: new Date("2020-09-01") },
  { name: "ИП Смирнов", inn: "3344556677", status: STATUS_PENDING, registrationDate: new Date("2023-05-25") },
  { name: "ООО АльфаГрупп", inn: "4455667788", status: STATUS_BLOCKED, registrationDate: new Date("2021-12-10") },
  { name: "ОАО Велес", inn: "5566778899", status: STATUS_ACTIVE, registrationDate: new Date("2022-08-18") },
  { name: "ИП Козлов", inn: "6677889900", status: STATUS_PENDING, registrationDate: new Date("2024-01-30") },
  { name: "ООО Звезда", inn: "7788990011", status: STATUS_ACTIVE, registrationDate: new Date("2019-11-11") },
  { name: "ЧУП Глобал", inn: "8899001122", status: STATUS_BLOCKED, registrationDate: new Date("2020-02-20") },

  { name: "ИП Синицын", inn: "1010101010", status: STATUS_ACTIVE, registrationDate: new Date("2022-06-10") },
  { name: "ООО Аврора", inn: "2020202020", status: STATUS_PENDING, registrationDate: new Date("2023-01-22") },
  { name: "ЗАО Орбита", inn: "3030303030", status: STATUS_BLOCKED, registrationDate: new Date("2021-03-03") },
  { name: "ЧП Электро", inn: "4040404040", status: STATUS_ACTIVE, registrationDate: new Date("2020-10-14") },
  { name: "ООО Мотор", inn: "5050505050", status: STATUS_PENDING, registrationDate: new Date("2023-07-07") },
  { name: "ИП Калашников", inn: "6060606060", status: STATUS_BLOCKED, registrationDate: new Date("2019-12-19") },
  { name: "ООО ЭкоЛайн", inn: "7070707070", status: STATUS_ACTIVE, registrationDate: new Date("2024-04-04") },
  { name: "ОАО Беркут", inn: "8080808080", status: STATUS_PENDING, registrationDate: new Date("2022-09-09") },
  { name: "ИП Титов", inn: "9090909090", status: STATUS_BLOCKED, registrationDate: new Date("2021-11-30") },
  { name: "ЗАО Комфорт", inn: "1212121212", status: STATUS_ACTIVE, registrationDate: new Date("2020-01-01") },

  { name: "ООО Лайт", inn: "1313131313", status: STATUS_PENDING, registrationDate: new Date("2022-05-15") },
  { name: "ЧП ХимПром", inn: "1414141414", status: STATUS_BLOCKED, registrationDate: new Date("2021-02-10") },
  { name: "ИП Дорога", inn: "1515151515", status: STATUS_ACTIVE, registrationDate: new Date("2023-08-20") },
  { name: "ООО АгроТех", inn: "1616161616", status: STATUS_PENDING, registrationDate: new Date("2020-06-06") },
  { name: "ИП Лукин", inn: "1717171717", status: STATUS_BLOCKED, registrationDate: new Date("2022-03-14") },
  { name: "ОАО БелТех", inn: "1818181818", status: STATUS_ACTIVE, registrationDate: new Date("2019-07-01") },
  { name: "ООО Гарант", inn: "1919191919", status: STATUS_PENDING, registrationDate: new Date("2023-10-17") },
  { name: "ИП Орлов", inn: "2323232323", status: STATUS_BLOCKED, registrationDate: new Date("2021-04-04") },
  { name: "ООО Хайтек", inn: "2424242424", status: STATUS_ACTIVE, registrationDate: new Date("2022-12-25") },
  { name: "ЗАО ГринТех", inn: "2525252525", status: STATUS_PENDING, registrationDate: new Date("2020-05-20") },

  { name: "ИП Сокол", inn: "2626262626", status: STATUS_BLOCKED, registrationDate: new Date("2021-09-09") },
  { name: "ООО Экспресс", inn: "2727272727", status: STATUS_ACTIVE, registrationDate: new Date("2023-11-05") },
  { name: "ЧП Алмаз", inn: "2828282828", status: STATUS_PENDING, registrationDate: new Date("2020-08-08") },
  { name: "ООО Сфера", inn: "2929292929", status: STATUS_BLOCKED, registrationDate: new Date("2022-10-10") },
  { name: "ИП Сибирь", inn: "3031313131", status: STATUS_ACTIVE, registrationDate: new Date("2021-06-30") },
  { name: "ОАО Неон", inn: "3131313131", status: STATUS_PENDING, registrationDate: new Date("2023-02-14") },
  { name: "ООО Контакт", inn: "3232323232", status: STATUS_BLOCKED, registrationDate: new Date("2020-03-03") },
  { name: "ИП Белов", inn: "3333333333", status: STATUS_ACTIVE, registrationDate: new Date("2022-07-22") },
  { name: "ЗАО Меридиан", inn: "3434343434", status: STATUS_PENDING, registrationDate: new Date("2023-03-03") },
  { name: "ООО Лидер", inn: "3535353535", status: STATUS_BLOCKED, registrationDate: new Date("2021-08-08") },

  { name: "ИП Громов", inn: "3636363636", status: STATUS_ACTIVE, registrationDate: new Date("2020-02-29") },
  { name: "ООО Океан", inn: "3737373737", status: STATUS_PENDING, registrationDate: new Date("2021-01-15") },
  { name: "ЗАО Бета", inn: "3838383838", status: STATUS_BLOCKED, registrationDate: new Date("2022-11-11") },
  { name: "ЧП Восток", inn: "3939393939", status: STATUS_ACTIVE, registrationDate: new Date("2024-05-01") },
  { name: "ООО Лес", inn: "4040404040", status: STATUS_PENDING, registrationDate: new Date("2023-12-12") },
  { name: "ИП Волков", inn: "4141414141", status: STATUS_BLOCKED, registrationDate: new Date("2020-04-04") },
];

export default DATA;
