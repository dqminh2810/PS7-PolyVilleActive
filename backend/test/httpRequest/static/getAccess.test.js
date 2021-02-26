let chai = require('chai');
let chaiHttp = require('chai-http');
let { app }=  require('../test_setup.test');
const { expect } = chai;
chai.use(chaiHttp);
describe('Get access', () => {
    it('Get access cinema', () => {
        let body = {
            "responseId": "618b460e-71c7-4613-a40e-8916f12da425-5811cb77",
            "queryResult": {
                "queryText": "Un accès handicapé existe t-il au cinéma pathé Max Linder Panorama",
                "parameters": {
                    "given_name": "pathé Max Linder Panorama",
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
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/schedule",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "pathé Max Linder Panorama",
                            "given_name.original": "pathé Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/c300bbd8-7c08-4000-bc46-b87feb010ae3",
                    "displayName": "get_access"
                },
                "intentDetectionConfidence": 0.7909448,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = 'Le cinéma possède un accès handicapée.';
        assertHelper(app, body, resText);
    });
    it('Get access restaurant', () => {
        let body = {
            "queryResult": {
                "queryText": "Le restaurant Bistrot Augustin dispose t-il d'un accès handicapé ?",
                "parameters": {
                    "given_name": "Bistrot Augustin",
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
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/schedule",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "Bistrot Augustin",
                            "given_name.original": "Bistrot Augustin",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/c300bbd8-7c08-4000-bc46-b87feb010ae3",
                    "displayName": "get_access"
                },
                "intentDetectionConfidence": 0.82065916,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            }
        };
        let resText = 'Le restaurant possède un accès handicapée.';
        assertHelper(app, body, resText)
    });
    it('Get access library', () => {
        let body = {
            "responseId": "56ea5c10-34c4-46b5-9797-b3dce8568508-5811cb77",
            "queryResult": {
                "queryText": "La librairie Bibliothèque Courcelles a-t-il un accès handicapé",
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
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/schedule",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Courcelles",
                            "given_name.original": "Courcelles",
                            "given_type": "Librairie",
                            "given_type.original": "librairie Bibliothèque"
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
                            "given_type.original": "librairie Bibliothèque"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/c300bbd8-7c08-4000-bc46-b87feb010ae3",
                    "displayName": "get_access"
                },
                "intentDetectionConfidence": 0.8616667,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = 'Le librairie ne possède pas d\'accès handicapée.';
        assertHelper(app, body, resText);
    });
    it('Get access sport center', () => {
        // Sport center do not have wheelchair support
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
