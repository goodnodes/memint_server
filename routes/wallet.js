const express = require("express");
const wallet = express.Router();
const {
	KlayToLCN,
	LCNToKlay,
	toOffChain,
	toOnChain,
	transferKlay,
	transferLCN,
	getBalance,
} = require("./walletCtrl");

wallet.route("/KlayToLCN").post(KlayToLCN);

wallet.route("/LCNToKlay").post(LCNToKlay);

wallet.route("/toOffChain").post(toOffChain);

wallet.route("/toOnChain").post(toOnChain);

wallet.route("/transferKlay").post(transferKlay);

wallet.route("/transferLCN").post(transferLCN);

wallet.route("/getBalance/:id/:address").get(getBalance);

// router.get("/getBalance", async (req, res) => {
//   try {
//     const { addr } = req.body;
//     console.log(addr);
//     const balance = await web3.eth.getBalance(addr);
//     console.log(balance);
//     res.status(200).send(balance);
//   } catch (e) {
//     console.log(e);
//     res.status(404).send(e);
//   }
// });

module.exports = wallet;

// {
//     address: '0x96fF79FDF17f10c42D36f6c271031540D4bBcB61',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
//   }
