const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000 ;

const { spawn } = require('child_process');


app.use(bodyParser.json());



// Define API endpoints

app.get('/api/metrics', (req, res) => {
    // Respond with mock AI model metrics data
    const mockMetrics = {
        accuracy: 0.85,
        precision: 0.78,
        recall: 0.92
        // Add more metrics as needed
    };
    res.json(mockMetrics);
});

app.get('/api/predictions', (req, res) => {

    // Run the Python script and get predictions
    const pythonProcess = spawn('python', ['ai_predictions.py']);

    pythonProcess.on('close', (code) => {
        if (code === 0) {
            // Read prediction data from JSON file and send as response
            const predictionData = require('./data/prediction_data.json');
            res.json(predictionData);
        } else {
            res.status(500).json({ error: 'Failed to generate predictions' });
        }
    });
});



app.listen(port, (err) => {
    if (err) {
        console.log(`error in running on port`, err);
    } else {
        console.log(`yeah ! Server is running on port ${port}`);
    }
});
