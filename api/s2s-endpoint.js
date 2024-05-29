export default (req, res) => {
  const { userId, advertisingId, country } = req.body;
  res.status(200).json({ result: 'success', message: 'Targeting successful' });
};
