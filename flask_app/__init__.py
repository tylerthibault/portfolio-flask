from flask import Flask
from flask_frozen import Freezer

app = Flask(__name__)
app.secret_key = "shhhhhhhhhhhhhhhhhhhhhhh"
freezer = Freezer(app)

@freezer.register_generator
def some_url_generator():
    # return a list of URLs to freeze
    return ['/']

# DATABASE = " database name"