import express from 'express'
import UserModel from '../models/users.js'
import WalletModel from '../models/wallet.js';
import BookModel from '../models/books.js';
const router = express.Router();

router.get('/add/:id/:bookid', async (req, res) => {
    // id => buyer id
    //  book id => seller book id 

    try {
        const id = req.params.id;
        const bookid = req.params.bookid;
        const res1 = await UserModel.findOne({ _id: id });
        const u1 = res1.username; // buyer
        const res2 = await BookModel.findOne({ _id: bookid });
         res2.stock=false;
         await res2.save();
        const res3 = await UserModel.findOne({ _id: res2.Owner });
        const u2 = res3.username; //seller
        const seller = await WalletModel.findOne({ username: u2 });
        const buyer = await WalletModel.findOne({ username: u1 });
        seller.profit.push(bookid);
        await seller.save();
        buyer.owe.push(bookid);
        await buyer.save();

        res.json({msg:"Wallet Updated"});

    }
    catch (e) {
        res.json({msg: "Wallet Error"});
    }



})
export { router as WalletRouter };