let chai = require('chai');
let chaiHttp = require('chai-http');
let { app }=  require('../test_setup.test');

const { expect } = chai;
chai.use(chaiHttp);
describe('Get telephone', () => {
    it('Get telephone cinema', () => {
        let body = {
            "responseId": "659c8707-8235-4202-a775-ee453a9a8cdd-5811cb77",
            "queryResult": {
                "queryText": "Quel est le numéro de téléphone du cinéma Max Linder Panorama",
                "parameters": {
                    "given_name": "Max Linder Panorama",
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
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/schedule",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/delivery",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/access",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 14,
                        "parameters": {
                            "given_name": "Max Linder Panorama",
                            "given_name.original": "Max Linder Panorama",
                            "given_type": "Cinéma",
                            "given_type.original": "cinéma"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/e2473ba0-2462-477b-a2f8-06abdad8492f",
                    "displayName": "get_telephone"
                },
                "intentDetectionConfidence": 1,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = "Le numéro de téléphone du cinéma est le +33 1 48 00 90 24";
        assertHelper(app, body, resText);
    });
    it('Get telephone restaurant', () => {
        let body = {
            "responseId": "2bc69a0d-630d-4c5c-a47e-076a2dbb2f06-5811cb77",
            "queryResult": {
                "queryText": "le restaurant L'Escale de Plaisance a-t-il un numéro de téléphone",
                "parameters": {
                    "given_name": "L'Escale de Plaisance",
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
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/takeaway",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/schedule",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/delivery",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/access",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/website",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/nearby",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/adresse",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/restaurant_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/cuisine_type",
                        "lifespanCount": 15,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/telephone",
                        "lifespanCount": 13,
                        "parameters": {
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    },
                    {
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "L'Escale de Plaisance",
                            "given_name.original": "L'Escale de Plaisance",
                            "given_type": "restaurant",
                            "given_type.original": "restaurant"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/e2473ba0-2462-477b-a2f8-06abdad8492f",
                    "displayName": "get_telephone"
                },
                "intentDetectionConfidence": 0.76769835,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        let resText = "Le numéro de téléphone du restaurant est le +33 1 74 30 61 53";
        assertHelper(app, body, resText);
    });
    it('Get telephone library', () => {
        // Library do not have telephone support
    });
    it('Get telephone sport center', () => {
        // Sport center do not have telephone support
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
