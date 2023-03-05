let questions = [
    {
        "question": "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
        "answer_1": "Stratosphäre",
        "answer_2": "Mesosphäre",
        "answer_3": "Troposphäre",
        "answer_4": "Thermosphäre",
        "right_answer": 3
    },

    {
        "question": "Wie hoch ist der Eiffelturm?",
        "answer_1": "150m",
        "answer_2": "176m",
        "answer_3": "220m",
        "answer_4": "300m",
        "right_answer": 4
    },

    {
        "question": "In welchem Jahr wurde Michael Jackson geboren?",
        "answer_1": "1958",
        "answer_2": "1959",
        "answer_3": "1965",
        "answer_4": "1934",
        "right_answer": 1
    },

    {
        "question": "Wer komponierte „Die Zauberflöte“?",
        "answer_1": "Joseph Haydn ",
        "answer_2": "Albert Einstein",
        "answer_3": "Johann Sebastian Bach",
        "answer_4": "Wolfgang Amadeus Mozart",
        "right_answer": 4
    },

    {
        "question": "Welche Insel gehört nicht zu den Balearischen Inseln?",
        "answer_1": "Ibiza",
        "answer_2": "Gran Canaria",
        "answer_3": "Formentera",
        "answer_4": "Cabrera",
        "right_answer": 2
    },

    {
        "question": "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
        "answer_1": "Vögel",
        "answer_2": "Affen",
        "answer_3": "Eidechsen",
        "answer_4": "Alligatoren",
        "right_answer": 1
    },

    {
        "question": "In welcher Stadt lebte der Detektiv Sherlock Holmes?",
        "answer_1": "Düsseldorf",
        "answer_2": "Manchester",
        "answer_3": "New York",
        "answer_4": "London",
        "right_answer": 4
    },

    {
        "question": "Wie lang ist die Strecke eines Marathons?",
        "answer_1": "10km",
        "answer_2": "12,195km",
        "answer_3": "42,195km",
        "answer_4": "45,195km",
        "right_answer": 3
    },

    {
        "question": "Wie viele Nieren hat ein Mensch im Normalfall? ",
        "answer_1": "keine",
        "answer_2": "1",
        "answer_3": "2",
        "answer_4": "4",
        "right_answer": 3
    },

    {
        "question": "Wie heißt die Hauptstadt von Ungarn? ",
        "answer_1": "Budapest",
        "answer_2": "Bukarest",
        "answer_3": "Zagreb",
        "answer_4": "Prag",
        "right_answer": 1
    },
];

//Globale Variable mit welcher Frage begonnen wird 
//Fangen mit der Frage 1 an, somit  mit 0,1,2,3....
let currentQuestion = 0;


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection){

}