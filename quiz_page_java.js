
const questions = [
    {
        question: "Three Lies, One Truth: Wiltonia",
        optionA: "Wiltonia is an only child",
        optionB: "Wiltonia hates the color black",
        optionC: "Wiltonia always sleep early",
        optionD: "Wiltonia tends to impulsively buy stuff",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Wiltonia",
        optionA: "Wiltonia is scared of cats",
        optionB: "Wiltonia has a heart disease",
        optionC: "Wiltonia loves steamed okra",
        optionD: "Wiltonia knows how to ride a bike",
        correctOption: "optionB"
    },

    {
        question: "Three Lies, One Truth: Wiltonia",
        optionA: "Wiltonia wants to become a proffesional painter",
        optionB: "Wiltonia loves the strawberry flavor",
        optionC: "Wiltonia doesn't know how to ride a bike",
        optionD: "Wiltonia has won multiple dance competitions",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Wiltonia",
        optionA: "Wiltonia is great at doing crochet",
        optionB: "Wiltonia's love language is physical touch",
        optionC: "Wiltonia can plays the guitar and piano",
        optionD: "Wiltonia owns tons of purses",
        correctOption: "optionC"
    },

    {
        question: "Three Lies, One Truth: Wiltonia",
        optionA: "Wiltonia likes pineapple",
        optionB: "Wiltonia's favorite programming language is C++",
        optionC: "Wiltonia hates the dish 'Dinuguan'",
        optionD: "Wiltonia has written 18 journals full of poems and short novels",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Anton",
        optionA: "Anton has sweaty hands",
        optionB: "Anton has a mole on his left middle finger",
        optionC: "Anton made paper rings last valentine's day",
        optionD: "Anton is obsessed with pens",
        correctOption: "optionA"
    },

    {
        question: "Three Lies, One Truth: Anton",
        optionA: "Anton fluently speaks latin",
        optionB: "Anton can speak 4 languages",
        optionC: "Anton hates duolingo",
        optionD: "Anton's favorite language is Japanese",
        correctOption: "optionC"
    },

    {
        question: "Three Lies, One Truth: Anton",
        optionA: "The last movie Anton watched is Everything Everywhere All at Once",
        optionB: "The last movie Anton watched in a cinema is Avengers: Endgame",
        optionC: "Anton hated Frozen 2",
        optionD: "Anton's favorite actor is Jamie Lee Curtis",
        correctOption: "optionA"
    },

    {
        question: "Three Lies, One Truth: Anton",
        optionA: "Anton's lucky number is 13",
        optionB: "Anton doesn't believe in numerology",
        optionC: "Anton thinks math > physics > stat",
        optionD: "Anton has an affinity for the numbers 22 and 3",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Anton",
        optionA: "Anton's left 'heart line' (top-most line of palm) is broken",
        optionB: "Anton has 3 handwriting styles",
        optionC: "Anton hates cracking his knuckles",
        optionD: "Anton had a journaling phase",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Jeffson",
        optionA: "Jeffson drinks coffee every morning",
        optionB: "Jeffson eats breakfast the moment he wakes up",
        optionC: "Jeffson uses the cold shower before school",
        optionD: "Jeffson provides a list of To-Do's in the sunrise",
        correctOption: "optionC"
    },

    {
        question: "Three Lies, One Truth: Jeffson",
        optionA: "Jeffson gives away free snacks sometimes ",
        optionB: "Jeffson eats cup noodles as his only food",
        optionC: "Jeffson utilizes his laptop every single day",
        optionD: "Jeffson sleeps in class as a daily routine",
        correctOption: "optionA"
    },


    {
        question: "Three Lies, One Truth: Jeffson",
        optionA: "Jeffson cleans his desk after arriving from home",
        optionB: "Jeffson owns a beehive for honey production",
        optionC: "Jeffson feeds his old cats in his family's driveway",
        optionD: "Jeffson eats popcorn every time Netflix is playing",
        correctOption: "optionB"
    },

    {
        question: "Three Lies, One Truth: Jeffson",
        optionA: "Jeffson ponders how cheeseburgers go well with fries",
        optionB: "Jeffson meditates almost every week",
        optionC: "Jeffson works on his desk filled with plants",
        optionD: "Jeffson rides on his bike every now and then",
        correctOption: "optionD"
    },

    {
        question: "Three Lies, One Truth: Jeffson",
        optionA: "Jeffson ran a couple of times down a hill to chase his dog",
        optionB: "Jeffson fell from a bridge near his hometown",
        optionC: "Jeffson read books most of the time in his bedroom",
        optionD: "Jeffson met a celebrity that he actually recognized in real life",
        correctOption: "optionA"
    }  
]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

 
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}