from flask import Flask, request, jsonify
import random

app = Flask(__name__)

rules = {
    "roles": "Each match has three roles: Reporter, Opponent, and Reviewer.",
    "grading": "Jurors assign grades: Reporter (1-30), Opponent (1-20), Reviewer (1-10).",
    "penalties": "Rejected challenges and repeated speaking violations lead to penalties.",
    "time limits": "Each phase of the match has a fixed duration as per competition rules."
}

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json["question"].lower()
    response = rules.get(user_input, "I don't have information on that. Please refer to the rulebook.")
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
