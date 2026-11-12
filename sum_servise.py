from flask import Flask, request

app = Flask(__name__)

@app.route('/hello_world')
def hello():
    luku = int(request.args.get("luku"))
    return "Hello, World!" * luku


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)