from flask import Flask, render_template, url_for
app = Flask(__name__) #name==main 



posts=[
        {
            'author':'Anshul Choudhary',
            'title': 'Blog Post 1',
            'content': 'First post',
            'date_posted': 'Dec 14,2019'

            },

        {
            'author':'Tim Wu',
            'title':'Blog Post 2',
            'content':'Second Post',
            'date_posted':'Dec 20,2019'
            }

        ] #dummy data
@app.route("/home") #home page of website or homepage
def home():
    return render_template('home.html', posts =posts)
@app.route("/about") #about page of website or homepage
def about():
    return render_template('about.html', title='post', posts=posts)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')