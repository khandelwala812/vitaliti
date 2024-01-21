from rest_framework.response import Response
from rest_framework.decorators import api_view
from PIL import Image
import tensorflow as tf
from tensorflow.keras.preprocessing import image as tf_image
import numpy as np
import matplotlib.pyplot as plt

@api_view(['POST'])
def determineFresh(request):
    image_file = request.FILES.get('image')
    pil_image = Image.open(image_file)
    pil_image = pil_image.resize((224, 224))


    img_array = tf_image.img_to_array(pil_image)
    img_array = np.expand_dims(img_array, axis=0) / 255.0 

    model = tf.keras.models.load_model('C:/Users/avikw/Coding/Projects/EcoFruit/model')
    prediction = model.predict(img_array)

    # print(prediction[0][0])
    if prediction[0][0] < 0.5:
        print("Fresh")
        ans = "Fresh"
    else:
        print("Molded")
        ans = "Molded"

    return Response({'prediction': ans})