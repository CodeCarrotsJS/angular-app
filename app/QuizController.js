'use strict';
(function () {
// Declare app level module which depends on views, and components
var app = angular.module('quiz', ['quiz.questionProvider']);

var QuizController = function (questionProvider) {
    this.questions = questionProvider.getQuestions();
    this.currentQuestionIndex = 0;
};

QuizController.prototype.nextQuestion = function () {
    if (this.questions[this.currentQuestionIndex].selectedAnswer === null) {
        window.alert("Wybierz jakąś odpowiedź!");
    } else if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
    }
};
QuizController.prototype.previousQuestion = function () {
    if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
    }
};
QuizController.prototype.getPoints = function () {
    var points = 0;
    for (var i in this.questions) {
        if (this.questions[i].selectedAnswer == this.questions[i].correctAnswer) {
            points++;
        }
    }

    return points;
};

app.controller('quizController', QuizController);

})();
