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


let rightQuestions = 0; //Richtige antworten werden gezählt


//Globale Variable mit welcher Frage begonnen wird 
//Fangen mit der Frage 1 an, somit  mit 0,1,2,3....
let currentQuestion = 0;

let AudioSuccess = new Audio ('audio/success.mp3');
let AudioFail = new Audio ('audio/wrong.mp3');


function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion(); //Text unserer ersten Frage
}


function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();

    } else {
        updateProgressBar();
        updateToNextquestion();
    }
}


function gameIsOver() {//gibt aus ob true or false //Cleancode
    return currentQuestion >= questions.length;
}


function showEndScreen (){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    //Du hast xxx Fragen von (10 (questions.length)) richtig beantwortet. 
    document.getElementById('amountOfQuestions').innerHTML = questions.length;

    //Du hast (rightQuestions) Fragen von 10 richtig beantwortet.
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;

    //Bild am ende wird gegen dieses getauscht
    document.getElementById('headerImage').src = 'img/pexels-win.jpg';
}


function updateProgressBar (){
    //ladebalken
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100); //Rundet 
    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style = `width: ${percent}%;`;
    //console.log('fortschritt',percent);
}


function updateToNextquestion(){
    
        //Wir machen uns einen container (let question), gehen in das große Array rein (questions) und holen uns das erste Element (currentQuestion) dort raus
        let question = questions[currentQuestion];
        //let question = "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?"

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        //(Zahl) von 10 Fragen , die Zahl am anfang wird geändert und zählt mit

        document.getElementById('questiontext').innerHTML = question['question'];
        //Frage = "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?"
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        //"answer_1": "Stratosphäre",
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        //"answer_2": "Mesosphäre",
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        //"answer_3": "Troposphäre",
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        //"answer_4": "Thermosphäre",
}


function answer(selection) { //selection ist _1, _2, _3, _4
    let question = questions[currentQuestion];

    console.log('Selected answer ist', selection);
    //selection hat immer die jeweilige id answer_1,answer_2,answer_3,answer_4

    let selectedQuestionNumber = selection.slice(-1);
    //geben die ausgewählte Zahl aus von answer_
    console.log('selectedQuestionNumber is', selectedQuestionNumber);

    console.log('Right answer ist', question['right_answer']);
    //Alle informationen zu der frage werden angezeigt

    let idOfRightAnswer = `answer_${question['right_answer']}`; //answer_${3}

    //Wenn wir auf ein button klicken dann wird gezeigt welches richtig oder falsch ist
    if (rightAnswerSelected(selectedQuestionNumber)) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        //.classList ist um eine CSS Klasse hinzuzufügen
        //.parentNode ist um auf das übergeordnete Element(<div>) zu greifen
        AudioSuccess.play();//Audio abspielen
        rightQuestions++; //zählt die richtigen antworten
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');

        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        //Die richtige antwort wird angezeigt

        AudioFail.play(); //Audio abspielen
    }

    document.getElementById('nextButton').disabled = false;
    //Button wird aktiviert sobald man eine Antwortmöglickeit ausgewählt hat
}

function rightAnswerSelected (selectedQuestionNumber){
    return selectedQuestionNumber == question['right_answer']
}


function nextQuestion() {
    currentQuestion++; //wird um +1 erhöht, z.b.: von 0 auf 1
    showQuestion(); //nächste frage soll aufgerufen werden

    document.getElementById('nextButton').disabled = true;
    //Button wird daktiviert damit man erst die antworrt auswählen kann 

    resetAnswerButtons();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}


function restartGame() {
    document.getElementById('headerImage').src = 'img/quiz.jpg';
    
    //Variablen werden überschrieben
    rightQuestions = 0;
    currentQuestion = 0;

    document.getElementById('questionBody').style = ''; //questionBody wieder anzeigen
    document.getElementById('endscreen').style = 'display: none'; //endscreen ausblenden

    init();//wieder von neu starten
}