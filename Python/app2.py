
from flask import Flask,jsonify, render_template, request
from keras.models import load_model
import keras.utils as image
import cv2
import os
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# dic = ['Normal','Doubtful','Mild','Moderate','Severe']
dic = ['(Grade 1 : Doubtful) There has been very little bone spur formation, and there is no pain or discomfort.','(Grade 2 : Mild) Doubtful joint space narrowing, patient start to feel symptoms for the first time.','(Grade 3 : Moderate) The gap between the bones is getting smaller and the cartilage between them clearly displays damage.','(Grade 0 : Normal) This is "normal" knee health.',"(Grade 4 : Severe) The cartilage is completely eradicated, and the joint space between the bones is reduced greatly."]


#Image Size
img_size=(224,224)
model = load_model('resnet50.h5')

model.make_predict_function()

def predict_label(img_path):
    print("imagepath",img_path)
    img=cv2.imread(img_path)
    print(img.shape[:3])
    #gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  
    resized=cv2.resize(img,img_size)
   # i = image.img_to_array(resized)/224.0
    i=np.expand_dims(resized,axis=0)
    #a = i.reshape(1,img_size,1)
    print("helloo",i)
    p = model.predict(i)
    ans=p.argmax()
    return dic[ans]

# routes
# @app.route("/", methods=['GET', 'POST'])
# def main():
#     return render_template("index.html")

@app.route("/uploadXray", methods = ['GET', 'POST'])
def upload():
    print("ds",request.method)

    if request.method == 'POST':
       print("ddss",request.files)
       img = request.files['files']
       uploads_dir = os.path.join(app.instance_path, 'uploads')
       img.save(os.path.join(uploads_dir, img.filename))

       #img_path = "uploads/" + img.filename
       #img.save(img_path)
       print("iamgapath",img.filename)
       p = predict_label('./instance/uploads/'+img.filename)
       print(p)
       res={
      "status":200,
      "message":"true",
      "headers":p
       }
       return jsonify(res)
if __name__ =='__main__':
    #app.debug = True
    app.run(debug=True,port=5002)