# What it does
Vitaliti is an AI-powered mobile application that uses image recognition to determine whether a food is fresh or moldy, allowing the user a simple and highly efficient, automated method of detecting food that should not be eaten and instead be disposed of. Only a single picture snap, either directly from the camera within Vitaliti or with an image from the gallery is required; all of the rest is handled by Vitaliti. Vitaliti can be used by automated systems, such employed in a conveyer belt, to remove spoiled foods from production lines, and can also be used by those with visual disabilities, allowing them an effective way to make sure that every meal they eat are as fresh as can be.

# Inspiration
We were inspired to create Vitaliti after seeing Ecolab's hackathon challenge and their endeavors in water, food, and climate safety--in particularly, we wanted to tackle how AI could be deployed in mobile phone applications to assist with automated detection of harmful, spoiled foods.

# How we built it
Vitaliti was built using React Native, Django, Python, and the TensorFlow library. The mobile phone application was created using React while the backend server is powered by Django and Python. The AI dataset was trained using TensorFlow.

# Challenges we ran into
Our primary challenge was that we have minimal knowledge of the Django server backend going into the project and had to learn the entirety of it over the course of the hackathon. Since the backend is one of the big 3 important aspects of the system (the other 2 being the mobile application and the AI dataset), it was absolutely necessary that we perfect it as best as we could. Another challenge that we faced was training the AI dataset to be able to properly recognize the difference between fresh and spoiled foods in a variety of backgrounds and image qualities. This was accomplished through extensive trial and error, with tons of failing and finally success.

# Accomplishments that we're proud of
We are proud of having finished this project and brought it to a presentable state in just the time allocated for the hackathon. We did not have extensive AI knowledge (or any knowledge of Django) going into the project and being able to have learned, worked on, and actually created a working project is an amazing feet.

# What we learned
We have learned extensively from the time of working on this project--primarily in backend server development and AI training--specifically how to ensure that the AI system is widely applicable and is not inhibited by image quality or random backgrounds. We have also learned quite a lot into video editing having created the promotional video for the Vitaliti application, included within this Devpost.
