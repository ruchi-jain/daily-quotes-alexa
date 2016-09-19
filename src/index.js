'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.2fad6963-5be4-45f8-9582-b4f74f2ecc28";
var SKILL_NAME = 'Daily Quote';

/**
 * Array containing space facts.
 */
var FACTS = [
    "If what you’re doing is not your passion, you have nothing to lose.",
    "The person who says something is impossible should not interrupt the person who is doing it.",
    "Confidence comes not from always being right but not fearing to be wrong.",
    "To wish you were someone else is to waste the person you are.",
    "First they ignore you. Then they laugh at you. then they fight you. then you win. By Mahatma Ghandi",
    "If opportunity doesn't knock, build a door. By Milton Berle",
    "Great mind discuss ideas, average minds discuss events, small minds discuss people. By Eleanor Roosevelt",
    "What the mind can conceive, it can achieve. By Napoleon Hill",
    "All your dreams can come true, if we have the courage to pursue them. By Walt Disney",
    "It is never too late to be what you might have been. By George Eliot",
    "Things are pretty, graceful, rich, elegant, handsome, but until they speak to the imagination, not yet beautiful. By Ralph Waldo Emerson",
    "If a leader's actions don't back up his or her words, those who are trying to follow will first grow confused. By Bill Byrd ",
    "Never doubt your abilities, believe in yourself. By Catherine Pulsifer",
    "For a marriage to work, both members of the couple must be ready to forgive each other numerous times every day. BY Vivian Sandau",
    "If the future seems overwhelming, remember that it comes one moment at a time. By Beth Mende Conny"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your Quote of the day: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a quote of the day, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};