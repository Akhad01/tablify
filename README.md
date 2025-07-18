# Client Table SPA

Одностраничное веб-приложение, реализующее таблицу клиентов с фильтрацией, поиском, сортировкой и пагинацией.

## 📌 Описание

Приложение отображает список клиентов (или компаний) с возможностью:

- 🔍 Фильтрации по **статусу**
- 🔽 Сортировки по **дате регистрации**
- 📄 Постраничной навигации (**пагинации**)


## 🛠 Технологии

- **React** (функциональные компоненты и хуки)
- **TypeScript**
- **Chakra UI** — для оформления интерфейса
- **TanStack React Table** — для реализации таблицы
- **Vite** — сборка проекта
- **React Datepicker** — Выбор даты в фильтре

## 🧩 Структура проекта

```bash
src/
├── app/                
│   └── index.tsx
├── components/        
│   ├── DataCell/
│   ├── EditableCell/
│   ├── FilterPopover/
│   ├── Filters/
│   ├── StatusCell/
│   └── TaskTable/
├── theme/             
│   ├── styles.ts
│   └── theme.ts
├── types/             
│   ├── index.ts
│   └── data.ts
├── main.tsx            
├── vite-env.d.ts
└── index.css          

```
## Installation

Clone the project

```
git clone https://github.com/Akhad01/tablify.git

cd tablify
```

Install packages

```
npm install
```

Start the server