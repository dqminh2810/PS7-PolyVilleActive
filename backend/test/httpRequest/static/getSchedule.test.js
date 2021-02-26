let chai = require('chai');
let chaiHttp = require('chai-http');
let { app }=  require('../test_setup.test');

const { expect } = chai;
chai.use(chaiHttp);
describe('Get schedule', () => {
    it('Get schedule cinema', () => {
        let body = {
            "responseId": "caa92b88-7948-444f-9227-5cc344bc5969-5811cb77",
            "queryResult": {
                "queryText": "Le cinéma Landowski ouvre à qu'elle heure ?",
                "parameters": {
                    "given_name": "Landowski",
                    "given_type": "Cinéma"
                },
                "allRequiredParamsPresent": true,
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ],
                "outputContexts": [
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/delivery",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/access",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "Landowski",
                            "given_name.original": "Landowski",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/84c0a003-c909-4763-8c16-a207cb6b025e",
                    "displayName": "get_schedule"
                },
                "intentDetectionConfidence": 0.84599996,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = "Information non disponible";
        assertHelper(app, body, resText);

    });
    it('Get schedule restaurant', () => {
        let body = {
            "responseId": "e1b889dd-d4c4-4e33-b5a1-b7fa1a0ecc94-5811cb77",
            "queryResult": {
                "queryText": "Le resto chin chin ouvre à qu'elle heure ?",
                "parameters": {
                    "given_name": "chin chin",
                    "given_type": "restaurant"
                },
                "allRequiredParamsPresent": true,
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ],
                "outputContexts": [
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/delivery",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/access",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "chin chin",
                            "given_name.original": "chin chin",
                            "given_type": "restaurant",
                            "given_type.original": "resto"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/84c0a003-c909-4763-8c16-a207cb6b025e",
                    "displayName": "get_schedule"
                },
                "intentDetectionConfidence": 0.7690909,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = "Le restaurant Chin Chin ouvre 08:00-24:00";
        assertHelper(app, body, resText);
    });
    it('Get schedule library', () => {
        let body = {
            "responseId": "2fd57ee6-8797-424f-ac30-9745a68f925f-5811cb77",
            "queryResult": {
                "queryText": "Le library Bibliothèque Courcelles ouvre à qu'elle heure ?",
                "parameters": {
                    "given_name": "Courcelles",
                    "given_type": "Librairie"
                },
                "allRequiredParamsPresent": true,
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ],
                "outputContexts": [
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/delivery",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/access",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "library Bibliothèque"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/84c0a003-c909-4763-8c16-a207cb6b025e",
                    "displayName": "get_schedule"
                },
                "intentDetectionConfidence": 0.8545454,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = "Le librairie Bibliothèque Courcelles ouvre Tu,Th,Fr 16:00-18:30; We,Sa 10:00-12:30,13:30-18:00";
        assertHelper(app, body, resText);
    });
    it('Get schedule sport center', () => {
        // Sport center do not have schedule support
    });

    function assertHelper(app, body, resText) {
        chai.request(app)
            .post('/api/dialog/')
            .send(body)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.fulfillmentText).to.deep.equals(resText);
                expect(res.body.fulfillmentMessages).to.be.an('array');
            });
    }
});
