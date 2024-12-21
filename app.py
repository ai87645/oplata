from flask import Flask, request, jsonify
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app) # Разрешить запросы со всех источников

DATA_FILE = "payment_data.txt"

@app.route('/save-payment-data', methods=['POST'])
def save_payment_data():
    try:
        data = request.get_json()
        if not data:
             return jsonify({'message': 'Данные не найдены в теле запроса'}), 400

        with open(DATA_FILE, 'a') as f:
            f.write(json.dumps(data) + '\n')
            return jsonify({'message': 'Данные успешно сохранены'}), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'Ошибка сохранения данных'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)