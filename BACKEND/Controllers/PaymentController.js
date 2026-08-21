import { PaymentModel } from "../Models/PaymentModel.js";

export const getPayments = async (req, res, next) => {
  try {
    if (!PaymentModel) return res.send("No payments found");
    let payments = PaymentModel.find({});
    return res.send(payments);
  } catch (err) {
    res.send("Cannot Get payments try again Later");
  }
  next();
};
export const addPayment = async (req, res, next) => {
  try {
    const { dateOfPayment, amountPaid, payer, recorder } = req.body;

    if (!dateOfPayment || !amountPaid)
      return res.send("cannot add an empty payment");

    let newPayment = new PaymentModel({
      dateOfPayment,
      amountPaid,
      payer,
      recorder,
    });
    let savedPayments = newPayment.save();
  } catch (err) {
    res.send("could not add payment", err);
  }

  next();
};
