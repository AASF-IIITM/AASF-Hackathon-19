import os
from flask import Flask, render_template, url_for, redirect ,session,request,flash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from otp import respon
import random

app = Flask(__name__)
# Key for Forms
app.config['SECRET_KEY'] = 'mysecretkey'

############################################

        # SQL DATABASE AND MODELS

##########################################
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
Migrate(app,db)

###################Config end############################
class Caterer(db.Model):

    __tablename__ = 'Caterer'
    id = db.Column(db.Integer,primary_key = True)
    hname = db.Column(db.Text)
    hno = db.Column(db.Text)
    hadd = db.Column(db.Text)
    pcd = db.Column(db.Text)

    def __init__(self,hname,hno,hadd,pcd):
        self.hname = hname
        self.hno = hno
        self.hadd = hadd
        self.pcd = pcd


    def __repr__(self):
        return "Values of CATERER are hname = {} , hno = {} , hadd = {} , pcd = {}".format(self.hname,self.hno,self.hadd,self.pcd)



#####################database 1########################
class Org(db.Model):

    __tablename__ = 'Org'
    id = db.Column(db.Integer,primary_key = True)
    oname = db.Column(db.Text)
    ono = db.Column(db.Text)
    oadd = db.Column(db.Text)
    pcd = db.Column(db.Text)

    def __init__(self,oname,ono,oadd,pcd):
        self.oname = oname
        self.ono = ono
        self.oadd = oadd
        self.pcd = pcd


    def __repr__(self):
        return "Values of ORG are oname = {} , ono = {} , oadd = {} , pcd = {}".format(self.oname,self.ono,self.oadd,self.pcd)

db.create_all()
#####################database 2########################

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/loginchecker')
def loginchecker():
    session['flag']=1
    otpentered=request.args.get('psw')
    print("inside login checker values are",otpentered,"and",session['otp'])
    if str(otpentered)==str(session['otp']):
        session['alert']='p'
        flash('Login Successful')
        return redirect(url_for('profile'))
    else:
        session['alert']='n'
        flash('Please enter correct OTP')
        return redirect(url_for('login'))


@app.route('/signup')
def signup():
    session['hname']=request.args.get('hname')
    session['hno']=request.args.get('hno')
    session['hadd']=request.args.get('hadd')
    session['pcd']=request.args.get('pcd')

    new_caterer = Caterer(session['hname'],session['hno'],session['hadd'],session['pcd'])
    db.session.add(new_caterer)
    db.session.commit()
    otp=random.randint(10000,99999)
    print("OTP=",otp)
    session['otp']=otp
    session['flag']=0
    #unhash later
    #respon(str(session['ono']),str("Thanks for registering on our site . Your Login Password is "+str(otp)))

    #session['lgid']=request.args.get('lgid')
    #session['pwd']=request.args.get('pwd')
    caterers = Caterer.query.all()
    for caterer in caterers:
        print(caterer)

    return render_template('login.html')

@app.route('/orgsignup')
def orgsignup():
    session['oname']=request.args.get('oname')
    session['ono']=request.args.get('ono')
    session['oadd']=request.args.get('oadd')
    session['pcd']=request.args.get('pcd')
    new_org = Org(session['oname'],session['ono'],session['oadd'],session['pcd'])
    db.session.add(new_org)
    db.session.commit()
    orgs = Org.query.all()

    otp=random.randint(10000,99999)
    session['otp']=otp
    print("OTP=",otp)
    #TO unhash later
    #respon(str(session['ono']),str("Thanks for registering on our site . Your Login Password is "+str(otp)))


    for org in orgs:
        print(org)


    #session['lgid']=request.args.get('lgid')
    #session['pwd']=request.args.get('pwd')

    return render_template('login.html')

#home page
@app.route('/')
def front():
    return render_template('front.html')

@app.route('/signup1')
def signup1():
    return render_template('signup.html')
@app.route('/orgsignup1')
def orgsignup1():
    return render_template('orgsignup.html')


@app.route('/dataread')
def dataread():
    return render_template('dataread.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/about')
def about():

    #print(session['hno'])
    return render_template('about.html')
if __name__ == '__main__':
    app.run(debug=True)
