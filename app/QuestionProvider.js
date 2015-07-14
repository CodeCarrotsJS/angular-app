'use strict';
(function () {
// Declare app level module which depends on views, and components
var app = angular.module('quiz.questionProvider', []);

app.service('questionProvider', function () {
  this.getQuestions = function () {
    return [
        { content: 'pytanie1', answers: ["odpowiedz11", "odpowiedz12"], correctAnswer: 1, selectedAnswer: null },
        { content: 'pytanie2', answers: ["odpowiedz21", "odpowiedz22", "odpowiedz23"], correctAnswer: 0, selectedAnswer: null },
        { content: 'pytanie3', answers: ["odpowiedz31", "odpowiedz32", "odpowiedz33", "odpowiedz34"], correctAnswer: 2, selectedAnswer: null },
        { content: 'pytanie4', answers: ["odpowiedz41", "odpowiedz42", "odpowiedz43"], correctAnswer: 1, selectedAnswer: null },
    ];
  };
});

})();
