
let chai = require('chai');
let chaiHttp = require('chai-http');
let {getResponse} = require('../../../app/api/dialogflow/DialogFlowService');
let { app }=  require('../test_setup.test');

const { expect } = chai;
chai.use(chaiHttp);
describe('Get next event city', () => {
    it('Get one next event', () => {
        let body = {
            "responseId": "2c2bb409-795d-4d8c-8c1c-c7daad352b75-5811cb77",
            "queryResult": {
                "queryText": "quel sont les 1 prochains event de paris",
                "parameters": {
                    "given_name": "paris",
                    "number": "1",
                    "given_type": "évènement"
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
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "paris",
                            "given_name.original": "paris",
                            "number": "1",
                            "number.original": "1",
                            "given_type": "évènement",
                            "given_type.original": "event"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/49025ec7-0325-4acd-a579-714f0293ce8b",
                    "displayName": "get_next_event_city"
                },
                "intentDetectionConfidence": 0.7068165,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        assertHelper(body);

    });
    it('Get multiple next events', () => {
        let body = {
            "responseId": "54c64675-7dc4-4010-99df-1babfa71b942-5811cb77",
            "queryResult": {
                "queryText": "quel sont les 3 prochains event de paris",
                "parameters": {
                    "given_name": "paris",
                    "number": "3",
                    "given_type": "évènement"
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
                        "name": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2/contexts/__system_counters__",
                        "parameters": {
                            "no-input": 0,
                            "no-match": 0,
                            "given_name": "paris",
                            "given_name.original": "paris",
                            "number": "3",
                            "number.original": "3",
                            "given_type": "évènement",
                            "given_type.original": "event"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/dumb-chatbot-test-uevc/agent/intents/49025ec7-0325-4acd-a579-714f0293ce8b",
                    "displayName": "get_next_event_city"
                },
                "intentDetectionConfidence": 0.705,
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "source": "DIALOGFLOW_CONSOLE",
                "payload": {}
            },
            "session": "projects/dumb-chatbot-test-uevc/agent/sessions/2424e0e2-c54e-6b00-af17-b7a9a26e0cb2"
        };
        assertHelper(body);
    });

    function assertHelper(body) {
        getResponse(body).then((resText)=>{
            chai.request(app)
                .post('/api/dialog/')
                .send(body)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body.fulfillmentText).to.deep.equals(resText.fulfillmentText);
                    expect(res.body.fulfillmentMessages).to.be.an('array');
                });
        });
    }
});

