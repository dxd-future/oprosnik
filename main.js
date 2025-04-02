let questions = [
    {
        id: 1,
        question: "Какие из этих городов являются столицами?",
        options:["Берлин","Сидней","Торонто","Рио-де-Жанейро"],
        answer: 1,
    },
    {
        id: 2,
        question: "Какой элемент имеет атомный номер 1?",
        options:["Гелий","Водород","Кислород","Углерод"],
        answer: 2,
    },
    {
        id: 3,
        question: "Чему равно число π с точностью до двух знаков после запятой?",
        options:[],
        answer: "3,14",
    },
    {
        id: 4,
        question: "Какие произведения написал Лев Толстой?",
        options:["Война и мир","Преступление и наказание","Анна Каренина","Отцы и дети"],
        answer: "13"
    },
    {
        id: 5,
        question: "Сколько хромосом у здорового человека?",
        options:["44","46","48","50"],
        answer: "2"
    },
    {
        id: 6,
        question: "В каком году началась Вторая мировая война?",
        options:[],
        answer: "1939"
    },
    {
        id: 7,
        question: "Какие планеты относятся к газовым гигантам?",
        options:["Марс","Юпитер","Венера","Сатурн"],
        answer: "24"
    },
    {
        id: 8,
        question: "Какая единица измерения силы?",
        options:["Паскаль","Ньютон","Ватт","Джоуль"],
        answer: "2"
    },
    {
        id: 9,
        question: "Какой язык создал Гвидо ван Россум?",
        options:[],
        answer: "Python"
    },
    {
        id: 10,
        question: "Назовите столицу Японии.",
        options:[],
        answer: "Токио"
    }
]

document.querySelector('#start_button').addEventListener('click', start);
document.querySelector('#back_button').addEventListener('click', back);
document.querySelector('#next_button').addEventListener('click', next);
document.querySelector('#toanswer_button').addEventListener('click', toanswer);
document.querySelector('#end_button').addEventListener('click', end);