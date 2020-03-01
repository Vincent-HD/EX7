from flask import Flask, render_template, request
from flask_restx import Resource, Api
from flask_cors import CORS, cross_origin
import sqlite3
import json

app = Flask(__name__)
api = Api(app)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
@app.route("/")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@api.route('/currency/<string:currency>')
class TodoSimple(Resource):
    def get(self, currency):
            con = sqlite3.connect('CoinData.db')
            con.row_factory = dict_factory
            curs = con.cursor()
            curs.execute("SELECT * FROM coin WHERE currency='" + str(currency) + "'")
            print(str(currency))
            return {currency: curs.fetchall()}


@app.route('/chart')
def index():
    con = sqlite3.connect('CoinData.db')
    con.row_factory = dict_factory
    curs = con.cursor()
    curs.execute('SELECT * FROM coin')
    # return(json.dumps(curs.fetchall()))
    return render_template('index.html', data = curs.fetchall())

if __name__ == '__main__':
   app.run(debug=True)
# con = sqlite3.connect('ex5/CoinData.db')

# curs = con.cursor()

# curs.execute('SELECT * FROM coin')
# print(curs.fetchall())