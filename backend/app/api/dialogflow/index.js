const { Router } = require('express');
const { getResponse, setUser } = require('./DialogFlowService');

const router = new Router();


router.post('/', (req, res) => {
  getResponse(req.body).then((reponse) => {
    res.status(200).json(reponse);
  });
});

router.post('/autorize', (req, res) => {
  setUser(true);
});

router.post('/logout', (req, res) => {
  setUser(false);
})

module.exports = router;
