import os
from flask import Flask, render_template, url_for, redirect ,session,request,flash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from otp import respon
import random
import csv
from kavi import kavishi
from kk2 import kk


app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
Migrate(app,db)

###################Config end############################
class Caterer(db.Model):

    __tablename__ = 'Caterer'
    id = db.Column(db.Integer,primary_key = True)
    mob = db.Column(db.Text)
    T = db.Column(db.Text)
    N = db.Column(db.Text)
    A = db.Column(db.Text)
    Z = db.Column(db.Text)
    H = db.Column(db.Text)
    Te = db.Column(db.Text)
    Q  = db.Column(db.Text)
    L1 = db.Column(db.Text)
    L2 = db.Column(db.Text)
    L3 = db.Column(db.Text)
    L4 = db.Column(db.Text)
    def __init__(self,mob,T,N,A,Z,H,Te,Q,L1,L2,L3,L4):
        self.mob = mob
        self.T = T
        self.N = N
        self.A = A
        self.Z = Z
        self.H = H
        self.Te = Te
        self.Q = Q
        self.L1 = L1
        self.L2 = L2
        self.L3 = L3
        self.L4 = L4
    def __repr__(self):
        return "Values of CATERER are mob = {} , T = {} , N = {} , A = {} , Z = {} , H = {} , Te = {} , L1 = {}, L2 = {} , L3 = {} , L4 = {}".format(self.mob,self.T,self.N,self.A,self.Z,self.H,self.Te,self.Q,self.L1,self.L2,self.L3,self.L4)



#####################database 1########################
class Org(db.Model):

    __tablename__ = 'Org'
    id = db.Column(db.Integer,primary_key = True)
    mob = db.Column(db.Text)
    add = db.Column(db.Text)
    pin = db.Column(db.Text)
    name = db.Column(db.Text)

    def __init__(self,mob,add,name,pin):
        self.mob = mob
        self.add = add
        self.name = name
        self.pin = pin

    def getnumber(self):
        return str(self.mob)
    def __repr__(self):
        return "Values of ORG are mob = {} , add = {} , name = {} , pin = {}".format(self.mob,self.add,self.name,self.pin)

db.create_all()
#UNHASH TO BUILD DAtabase
kkkkk=[["+911140543751", "N-23, 2nd Floor, Green Park Extension, Green Park, New Delhi", "Teach For India", "110001"], ["+911124320707", "271 & 273, Near Jawaharlal Nehru Stadium, Defence Colony, New Delhi", "Friendicoes", "110005"], ["+911143123700", "Gulmohar House, 3rd Floor, B-4, Yusuf Sarai, NewDelhi", "Smile Foundation", "110009"], ["+911126686831", "A-21, Shivalik Colony, Malviya Nagar, New Delhi", "Make A Wish Foundation", "110001"], ["+911141607055", "I-1804, 2nd Floor, ChittaranjanPark, New Delhi", "Rahi Foundation", "110005"], ["+911129533451", "632, 2nd Floor, Lane 3, Westend Marg, Sainik Farms, New Delhi", "Child Rights And You (CRY)", "110009"], ["+918308532734", None, "Robin Hood Army", "110001"], ["+919350201089", "H-367, Naraina Vihar, Naraina, New Delhi", "Om Foundation", "110005"], ["+911141416635", "A-3, Sarvodaya Enclave, Sri Aurobindo Marg, Adchini, New Delhi", "Katha", "110009"], ["+911123722020", "Oberoi Apartments, T-3, Sham Nath Marg, CivilLines, New Delhi", "The Toy Bank", "110001"], ["+919818089635", "59, Central Avenue, South City 1, Gurgaon", "Lotus Petal Foundation", "110005"], ["+911123357088", "14, Ashoka Road, Connaught Place, New Delhi", "People For Animals", "110009"]]
for sab in kkkkk:
    lol=Org(sab[0],sab[1],sab[2],sab[3])
    db.session.add(lol)
    db.session.commit()
############################################################

@app.route('/')
def login0():
    session['donationmade']=False
    session['superpower']=False
    session['orgreg']=0
    return redirect(url_for('login1'))


@app.route('/login1')
def login1():
    if 'orgreg' in session.keys():
        if  session['orgreg']==1:
            session['add']=request.args.get('add')
            session['name']=request.args.get('name')
            session['pin']=request.args.get('pin')

            new_org = Org(session['mob'],session['add'],session['name'],session['pin'])
            db.session.add(new_org)
            db.session.commit()
            orgs = Org.query.all()
            for org in orgs:
                print(org)

    return render_template('login1.html')

@app.route('/login')
def login():
    mob=request.args.get('mob')
    otp=random.randint(10000,99999)
    session['mob']=mob
    session['otp']=otp
    session['otpattempt']=False
    session['orgreg']=0
    print("OTP=",otp)
    #unhash later
    respon(str(session['mob']),str("Thanks for registering on our site . Your Login Password is "+str(otp)))
    return render_template('login.html',mob=mob)

@app.route('/loginchecker')
def loginchecker():
    if session['superpower']==True:
        return render_template('indi.html')

    otp=request.args.get('otp')
    session['otpattempt']=True
    # OTP DAL CHUKA HAI BKL
    if str(otp)==str(session['otp']):

        flash("OTP Verified")
        org=request.args.get('org')
        if str(org)=='1':
            session['orgreg']=1
            return render_template("orginfo.html")


        else:
            # Individual
            return render_template('indi.html')
    else:
        flash("Please enter correct OTP")
        return render_template('login.html',mob=session['mob'])

@app.route('/indi1')
def indi1():
    choice=request.args.get('choice')
    print("choice=",choice,type(choice))
    #PREDICT
    if str(choice)=='p':
        return render_template('predform.html')

    else:
        return render_template('donate.html')
        #donate
    return render_template('about.html')

@app.route('/indipredict')
def indipredict():
    session['T'] =request.args.get('T')
    session['people'] =request.args.get('people')
    session['A'] =request.args.get('A')
    session['H'] =request.args.get('H')
    session['Te'] =request.args.get('Te')
    session['Z']=str(int(int(session['people'])/3))
    session['N']=str(int(session['people'])-int(session['Z']))
    print("value of date",session['Te'])
    if session['Te'][4:5]=='-':
        date="2016"+"0"+session['Te'][3:4]+session['Te'][0:2]
    else:
        date="2016"+session['Te'][3:5]+session['Te'][0:2]
    print("intermediate",date)
    session['Te']=str(kavishi(date))
    print("date final",date)
    session['Te']="30"
    #kavish model call
    print("values of variables",session['T'],session['Te'],session['N'],session['A'],session['Z'],session['H'])
    session['Q']=str(kk.predict(session['T'],session['Te'],session['N'],session['A'],session['Z'],session['H'])[0][0])
    print("Value of Q",session['Q'])
    session['chapatipredicted']=str(float(session['Q'])*0.25)
    session['dalpredicted']=str(float(session['Q'])*0.33)
    session['ricepredicted']=str(float(session['Q'])*0.2)
    session['vegetablepredicted']=str(float(session['Q'])*0.22)





    '''
    #IN DONATION
    new_caterer = Caterer(session['mob'],session['T'],session['N'],session['A'],session['Z'],session['H'],session['Te'],session['0'],session['L1'],session['L2'],session['L3'],session['L4'])
    db.session.add(new_caterer)
    db.session.commit()
    caterers = Caterer.query.all()
    for caterer in caterers:
        print(caterer)
    session['L1'] =request.args.get('L1')
    session['L2'] =request.args.get('L2')
    session['L3'] =request.args.get('L3')
    session['L4'] =request.args.get('L4')
    '''
    session['superpower']=True
    return render_template('pic-side.html')


@app.route('/donationquantity')
def donationquantity():
    session['chapati']=request.args.get('chapati')
    session['dal']=request.args.get('dal')
    session['rice']=request.args.get('rice')
    session['vegetable']=request.args.get('vegetable')
    session['pincodeofdonor']=request.args.get('pin')
    orgs=Org.query.filter_by(pin=str(session['pincodeofdonor'])).all()
    i=1
    print("mesg sent to orgs")
    for org in orgs:
        #print("orgvale",org['mob'])

        #print(org.getnumber(),type(org.getnumber()))
        respon(org.getnumber(),str(("This is to inform you that food is available in these quantities : Chapati:{},Dal:{},Rice:{},Vegetable:{} . contact details {}").format(session['chapati'],session['dal'],session['rice'],session['vegetable'],session['mob'])))
        #print(str(("This is to inform you that food is available in these quantities : Chapati:{},Dal:{},Rice:{},Vegetable:{} . contact details {}").format(session['chapati'],session['dal'],session['rice'],session['vegetable'],session['mob'])))
        if i==3:
            break
        i+=1
    session['Donationmade']=True
    return redirect(url_for('loginchecker'))










if __name__ == '__main__':
    app.run()
