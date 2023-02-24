import matplotlib.pyplot as plt
import numpy as np
import os
import PIL
from keras.models import load_model
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.python.keras.layers import Dense, Flatten
from tensorflow.keras.models import Sequential
from tensorflow.keras.optimizers import Adam
import matplotlib.pyplot as plt
from matplotlib import pyplot as plt
import PIL.Image as Image
import pathlib
import cv2
cnn_model = load_model('resnet50.h5')

def predictor (path, cnn_model):
  result_list=['doubtful', 'mild', 'moderate ', 'normal', 'severe']
  image_size =(224,224)
  img= cv2.imread(path)
  img_resized= cv2.resize(img,image_size)
  img=np.expand_dims(img_resized,axis=0)
  print (np.array(img).shape)
  print (img.shape)
  result = cnn_model.predict(img)
  print(result)
  i= result.argmax()
  return result_list[i]

data = r"C:\Users\Ahmed\Desktop\OrthoDocWeb\Python\instance\uploads\download.png"
predictor(data, cnn_model)