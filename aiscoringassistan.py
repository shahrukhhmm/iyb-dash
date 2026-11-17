import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

# Load past scoring data
data = pd.read_csv("match_scores.csv")

# Features: Match conditions, speaking clarity, scientific accuracy, etc.
X = data[['clarity', 'accuracy', 'engagement', 'depth']]
y = data['score']

# Train-Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train AI Model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Save Model
import joblib
joblib.dump(model, "scoring_model.pkl")
