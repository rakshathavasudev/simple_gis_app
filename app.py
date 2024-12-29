from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    geojson = request.get_json()
    # Process or store GeoJSON data
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(debug=True)
