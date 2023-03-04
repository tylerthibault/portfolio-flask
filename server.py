from flask_app import app, freezer
from flask_app.controllers import controller_routes
 
freezer.freeze()

# keep this at the bottom of this file!!
if __name__=="__main__":	 
    app.run(debug=True)	