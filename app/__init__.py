
from flask import Flask, jsonify , render_template , request
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__, template_folder='../templates', static_folder='../static')
auth = HTTPBasicAuth()

users = {
    "jorge": generate_password_hash("1234"),
    "sergi": generate_password_hash("4321")
}

@auth.verify_password
def verify_password(username, password):
    if username in users and \
           check_password_hash(users.get(username), password):
        return username

@app.route('/')
@auth.login_required
def index():
    return "Bienvenido, {}!".format(auth.current_user())


@app.route('/calculadora')
@auth.login_required
def calculadora():
	return render_template('calculadora.html')

@app.route('/suma/<op1>/<op2>')
@auth.login_required
def suma(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'suma', 'resultat': n_op1 + n_op2}
	return jsonify(resultat), 200

@app.route('/resta/<op1>/<op2>')
@auth.login_required
def resta(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'resta', 'resultat': n_op1 - n_op2}
	return jsonify(resultat), 200

@app.route('/multiplicacio/<op1>/<op2>')
@auth.login_required
def multiplicacio(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'multiplicacio', 'resultat': n_op1 * n_op2}
	return jsonify(resultat), 200

@app.route('/divisio/<op1>/<op2>')
@auth.login_required
def divisio(op1, op2):
	n_op1 = float(op1)
	n_op2 = float(op2)
	resultat = {'operador': 'divisio', 'resultat': n_op1 / n_op2}
	return jsonify(resultat), 200

if __name__=='__main__':
	app.run(host='0.0.0.0', port='5000')
