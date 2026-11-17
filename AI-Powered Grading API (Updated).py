from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load("scoring_model.pkl")  # Load trained model

@app.route('/generate_grade', methods=['POST'])
def generate_grade():
    data = request.json
    features = [[data['clarity'], data['accuracy'], data['engagement'], data['depth']]]
    ai_score = model.predict(features)[0]
    return jsonify({'ai_suggested_score': round(ai_score, 2)})

if __name__ == '__main__':
    app.run(debug=True)
