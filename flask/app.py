from flask import Flask, jsonify
import json
app = Flask(__name__)

with open('dictionary.json', 'r') as f:
    sanakirja = json.load(f)

@app.route('/translate/<word>', methods=['GET'])
def translate(word):
    translation = sanakirja.get (word.lower())
    if translation:
        return jsonify({"English": word.lower(), "Finnish": translation})
    else:
        return jsonify({'error': 'Word not found'}), 404


if __name__ == '__main__':
    app.run(port=3000, debug=True)    