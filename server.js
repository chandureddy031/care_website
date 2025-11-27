import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/booking', (req, res) => {
  const { name, email, date, purpose } = req.body;

  // TODO: Add MongoDB logic to save the booking
  console.log('Received booking:', { name, email, date, purpose });

  // TODO: Add email logic to send a confirmation
  console.log('Sending confirmation email to:', email);

  res.status(200).json({ message: 'Booking received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});