from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load("scoring_model.pkl")

@app.route('/predict_score', methods=['POST'])
def predict_score():
    data = request.json
    features = [[data['clarity'], data['accuracy'], data['engagement'], data['depth']]]
    score = model.predict(features)[0]
    return jsonify({'predicted_score': round(score, 2)})

if __name__ == '__main__':
    app.run(debug=True)
