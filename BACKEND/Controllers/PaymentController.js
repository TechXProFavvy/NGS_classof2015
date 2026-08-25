import { PaymentModel } from "../Models/PaymentModel.js";

export const getPayments = async (req, res, next) => {
  try {
    if (!PaymentModel) return res.send("No payments found");
    let payments = await PaymentModel.find({});
    res.send(payments);
  } catch (err) {
    res.send(`Cannot Get payments try again Later:${err}`);
  }
  next();
};

export const addPayment = async (req, res, next) => {
  try {
    const { dateOfPayment, amountPaid, payer, recorder } = req.body;

    if (dateOfPayment === "" || amountPaid === 0)
      return res.send("cannot add an empty payment");

    let newPayment = new PaymentModel({
      dateOfPayment,
      amountPaid,
      payer,
      recorder,
    });
    let savedPayments = newPayment.save();
    res.send(savedPayments);
  } catch (err) {
    res.send("could not add payment", err);
  }

  next();
};
