from flask import Flask, jsonify , render_template , request
from flask_login import LoginManager

app = Flask(__name__)

login_manager = LoginManager()
login_manager.login_view = 'index.html'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
	return null

@app.errorhandler(404)
def not_found(e):
	return '<h1>La página especificada no existe</h1>'

@app.route('/login', methods=['GET'])
def login_redirect():
	return render_template('index.html')

@app.route('/login', methods=['POST'])
def login_post():
	if request.form.get('username') == "username" and request.form.get('password') == "password":
		return "OK"
	return "NO OK"

@app.route('/suma/<op1>/<op2>')
def suma(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'suma', 'resultat': n_op1 + n_op2}
	return jsonify(resultat), 200

@app.route('/resta/<op1>/<op2>')
def resta(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'resta', 'resultat': n_op1 - n_op2}
	return jsonify(resultat), 200

@app.route('/multiplicacio/<op1>/<op2>')
def multiplicacio(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'multiplicacio', 'resultat': n_op1 * n_op2}
	return jsonify(resultat), 200

@app.route('/divisio/<op1>/<op2>')
def divisio(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'divisio', 'resultat': n_op1 / n_op2}
	return jsonify(resultat), 200

if __name__=='__main__':
	app.run(host='0.0.0.0', port='5000')
