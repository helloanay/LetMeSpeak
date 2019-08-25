# LetMeSpeak

## Problem Statement

Almost 3 million people in India and 30 million worldwide suffer from acute speech or hearing disability according to the World Disability Report by the International Journal of Speech-Language Pathology. The day to day life of these individuals is somewhat different but consists of almost everything every other human does, except communication. The most widely used language by such people is the American Sign Language, that consists of hand gestures to convey alphabetical, numerical letters as well as words. This language however is understood only by a miniscule of people with no disability, causing problems for the speech and hearing impaired. 

Therefore, we decided to build a platform that takes in real time videos of the ASL hand gestures and converts into the word(s) it corresponds to. In order to build that, we focused on four main things:

* Data Creation
We started with writing a python script that uses *opencv* among other libraries to create a 'hand histogram', in order to form a detection boundary of the perimeter of the palm and fingers. This will help later in gesture capture. Another python script takes in video gestures as inputs and outputs a folder with 1200 image frames of the same labelled beforehand. This adds scalability as almost all words from ASL can be incorporated without any strain while we only take 44 words/letter into training for the scope of the event.

* Data Preparation
Since we have 1200 grayscale labelled image frames of each gesture, end up with almost a hundred thousand images. We augment the data by flipping it, it also is noteworthy that this step is also necessary since the gestures are single handed and flipping takes into consideration the case of left handed people.

* Model Training
We train the data over a standard CNN and save the model in the h5 file provided. We encountered a training accuracy of 98.6% and a validation accuracy of 99%. Note: This is due to using a rather simple model over a moderate size of data to reduce overfitting. Also, the test accuracy reaches around 98%.

* Prediction over live-feed
The last python script is responsible to take in video input, convert it into grayscale and predict the gesture over the trained model. It prints the word(s) in real time.

[NOTE]: Environment Setup on AWS Sagemaker notebook instances.
