from flask import Flask,render_template,redirect,url_for
import os
app = Flask(__name__,template_folder="src/views",static_folder='src/assets')

import data
 

@app.route('/')
def home():
    return redirect(url_for('index'))

@app.route('/index.html')
def index():
    return render_template("index.html",data=data.data["courses"])

 

@app.route('/about-us.html')
def aboutus():
    return render_template("about-us.html")

@app.route('/login.html')
def login():
    return render_template("/login.html")

@app.route('/register.html')
def register():
    return render_template("/register.html")

@app.route('/forgot-password.html')
def forgotpassword():
    return render_template("/forgot-password.html")

@app.route('/dashboard.html')
def dashboard():
    return render_template("/dashboard.html")

@app.route('/attendance.html')
def attendance():
    return render_template("/attendance.html")

@app.route('/certifications.html')
def certifications():
    return render_template("/certifications.html")

@app.route('/certifications-empty.html')
def certificationsempty():
    return render_template("/certifications-empty.html")

@app.route('/upload-question.html')
def uploadquestion():
    return render_template("/upload-question.html")

@app.route('/profile.html')
def profile():
    return render_template("/profile.html")

@app.route('/profile-step2.html')
def profilestep2():
    return render_template("/profile-step2.html")

@app.route('/profile-step3.html')
def profilestep3():
    return render_template("/profile-step3.html")

@app.route('/profile-step4.html')
def profilestep4():
    return render_template("/profile-step4.html")

@app.route('/change-password.html')
def changepassword():
    return render_template("/change-password.html")

@app.route('/live-sessions.html')
def livesessions():
    return render_template("/live-sessions.html",data=data.data["courses2"])

 
@app.route('/live-sessions-series.html')
def livesessionsseries():
    return render_template("/live-sessions-series.html",data=data.data["tests"])

 
@app.route('/live-sessions-pdf.html')
def livesessionspdf():
    return render_template("/live-sessions-pdf.html",data=data.data["courses2"])

 

@app.route('/practice-assigned-tests.html')
def practiceassignedtests():
    return render_template("/practice-assigned-tests.html",data=data.data["tests"])

@app.route('/practice-completed-tests.html')
def practicecompletedtests():
    return render_template("/practice-completed-tests.html",data=data.data["tests"])

@app.route('/series-assigned-tests.html')
def seriesassignedtests():
    return render_template("/series-assigned-tests.html",data=data.data["tests"])

@app.route('/series-completed-tests.html')
def seriescompletedtests():
    return render_template("/series-completed-tests.html",data=data.data["tests"])



if __name__ == '__main__':
    app.run(debug=True)