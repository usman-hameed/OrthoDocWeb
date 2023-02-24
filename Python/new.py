import cv2
file=r'C:\Users\Ahmed\Desktop\OrthoDocWeb\Python\instance\uploads\NormalG0 (512).png'
image=cv2.imread(file)
print(image.shape)
# if (len(image.shape)==2):
#     print('gray scale')
# elif (len(image.shape)==3):
#     print('Rgb')