#######################################################################

from flask import Flask, render_template
import os

#######################################################################

app = Flask(__name__)
app.secret_key = 'helloooo'
app.config["CACHE_TYPE"] = "null"

#######################################################################

@app.route('/')
def mainpage():

    return render_template('CV.html')

#######################################################################

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=int(os.environ.get('PORT', 8080)), debug=False)

#######################################################################



