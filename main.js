let questions = [
    {
        id: 1,
        type: "single",
        question: "Какой из этих городов является столицой?",
        options:["Берлин","Сидней","Торонто","Рио-де-Жанейро"],
        answer: "Берлин"
    },
    {
        id: 2,
        type: "single",
        question: "Какой элемент имеет атомный номер 1?",
        options:["Гелий","Водород","Кислород","Углерод"],
        answer: "Водород"
    },
    {
        id: 3,
        type: "text",
        question: "Чему равно число π с точностью до двух знаков после запятой?",
        options:[],
        answer: "3,14"
    },
    {
        id: 4,
        type: "double",
        question: "Какие произведения написал Лев Толстой?",
        options: ["Война и мир","Преступление и наказание","Анна Каренина","Отцы и дети"],
        answer: [1,3]
    },
    {
        id: 5,
        type: "single",
        question: "Сколько хромосом у здорового человека?",
        options:["44","46","48","50"],
        answer: "46"
    },
    {
        id: 6,
        type: "text",
        question: "В каком году началась Вторая мировая война?",
        options:[],
        answer: "1939"
    },
    {
        id: 7,
        type: "double",
        question: "Какие планеты относятся к газовым гигантам?",
        options:["Марс","Юпитер","Венера","Сатурн"],
        answer: [2,4]
    },
    {
        id: 8,
        type: "single",
        question: "Какая единица измерения силы?",
        options:["Паскаль","Ньютон","Ватт","Джоуль"],
        answer: "Ньютон"
    },
    {
        id: 9,
        type: "text",
        question: "Какой язык создал Гвидо ван Россум?",
        options:[],
        answer: "Python"
    },
    {
        id: 10,
        type: "text",
        question: "Назовите столицу Японии (с заглавной буквы).",
        options:[],
        answer: "Токио"
    }
]

document.querySelector('#start_button').addEventListener('click', start);
document.querySelector('#back_button').addEventListener('click', back);
document.querySelector('#next_button').addEventListener('click', next);
document.querySelector('#end_button').addEventListener('click', end);