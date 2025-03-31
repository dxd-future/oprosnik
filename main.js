let questions = [
    {
        id: 1,
        question: "Какие из этих городов являются столицами?",
        options:{
            op1: "Берлин",
            op2: "Сидней",
            op3: "Торонто",
            op4: "Рио-де-Жанейро"
        },
        answer: 1,
    },
    {
        id: 2,
        question: "Какой элемент имеет атомный номер 1?",
        options:{
            op1: "Гелий",
            op2: "Водород",
            op3: "Кислород",
            op4: "Углерод"
        },
        answer: 2,
    },
    {
        id: 3,
        question: "Чему равно число π с точностью до двух знаков после запятой?",
        answer: "3,14",
    },
    {
        id: 4,
        question: "Какие произведения написал Лев Толстой?",
        answer: "",
    },
    {
        id: 5,
        question: "",
        answer: "",
    },
    {
        id: 6,
        question: "",
        answer: "",
    },
    {
        id: 7,
        question: "",
        answer: "",
    },
    {
        id: 8,
        question: "",
        answer: "",
    },
    {
        id: 9,
        question: "",
        answer: "",
    },
    {
        id: 10,
        question: "",
        answer: "",
    }
]

document.querySelector('#start_button').addEventListener('click', start);