const router = require('express').Router();
const {fundCtrl} = require('../controllers')
// const {usersCtrl} = require('../controllers/usersCtrls')

//ROUTES - METHODS For Funds
router.get('/', fundCtrl.getFund)
router.get('/:id', fundCtrl.showFund)
router.post('/',fundCtrl.createFund) 
router.put('/:id', fundCtrl.updateFund)
router.delete('/:id', fundCtrl.deleteFund)
 
module.exports = router;