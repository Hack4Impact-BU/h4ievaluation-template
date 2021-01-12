from flask import Flask, jsonify, request
from flask_pymongo import PyMongo

app = Flask(__name__) 
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)


@app.route("/index", methods=["GET"])
def index(): 
    return jsonify(message="Todo app is running")


if __name__ == "__main__":
    app.run(port=4000, debug=True)