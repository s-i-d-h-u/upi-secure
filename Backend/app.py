from flask import Flask, request, jsonify
from model import AutoRegressiveHMM  # Import your HMM model class
import joblib
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler

# Load the trained model
model = joblib.load("hmm_fraud_model.pkl")

# Define Flask app
app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data from request
        data = request.get_json()
        print("Received data:", data)

        # Convert input to DataFrame
        feature_columns = [
            "Transaction Amount (INR)", "Transaction_Amount_Diff", "Transaction_Frequency_Score",
            "Time_Anomaly_Score", "Recipient_Total_Transactions", "Recipient_Avg_Transaction_Amount",
            "Fraud_Type", "Risk_Score", "hour", "day_of_week"
        ] + [f"Location_Hash_{i}" for i in range(10)]
        
        df = pd.DataFrame([data], columns=feature_columns)

        # Convert to NumPy array
        input_data = df.values

        # Make fraud prediction
        anomaly_prediction = model.detect_anomalies(input_data)
        result = bool(anomaly_prediction[0])  # Convert NumPy bool to Python bool

        return jsonify({"fraud_detected": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)
