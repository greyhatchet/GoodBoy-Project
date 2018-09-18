#login checker
from flask import request, redirect
@app.route('/login', methods = ['POST'])
def login():
    username = request.form['username'] 
    password = request.form['password']
    #email = request.form['email']
    #print("The email address is '" + email + "'")
    return redirect('/')