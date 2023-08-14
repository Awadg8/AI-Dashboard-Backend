import random
import json

def start_predictions(input_data):
    # start AI predictions based on input data
    predictions = [random.choice(['positive', 'negative']) for _ in range(len(input_data))]
    return predictions

if __name__ == '__main__':
    with open('sample_input_data.json', 'r') as infile:
        input_data = json.load(infile)

    predictions = start_predictions(input_data)

    # Combine input data, predictions, and actual results
    prediction_data = []
    for i in range(len(input_data)):
        prediction_data.append({
            'input': input_data[i],
            'prediction': predictions[i],
            'actual': 'actual_result_here'  # Replace with actual results
        })

    with open('data/prediction_data.json', 'w') as outfile:
        json.dump(prediction_data, outfile)
