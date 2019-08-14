exports.checkCarInput = function (req, res, next) {
  let car = req.body;
  if (!car.make || !car.model || !car.vin || !car.mileage) {
    res.status(404).json({ message: 'car make, model, vin, mileage are required' })
  }
  next();
}

exports.checkSalesInput = function (req, res, next) {
  let record = req.body;
  if (!record.sales || !record['cars_id']) {
    res.status(404).json({ message: 'sales and cars_id are required' });
  }
  next();
}