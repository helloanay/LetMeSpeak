# HaXplore - Submission Report Format

This is the official code repository for 'not-a-bot'. This ML backed sign language gesture recognition platform was developed during HaXplore,  the on-campus event conducted by Codefest, the annual departmental fest of Computer Science department, IIT BHU Varanasi.

### not-a-bot

* Tuhin Sarkar
* Vatsal Rathod
* Sarvesh Shroff

#### LetMeSpeak

#### Overview

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

#### Technology used

Dependencies:
* Python
* OpenCV 3.4.2
* Tensorflow (backend)
* Keras
* sklearn
* Node.js (website)
* pyttsx3
* h5py

Domains:
* Artificial Intelligence [Video and Image Processing]
* Convolutional Neural Networks
* Real-time package handling

#### Screenshots/Demo Video

![Best of Luck](/images/ss.png)

[Have a look at the Youtube video](https://youtu.be/v8Lo2EIrgHc)

#### Usage

1. First set your hand histogram. Make sure you run this in the environment you expect to use this. 

```python set_hand_hist.py```

* Two windows will apper, keep your hand between the green boxes. On the other window, keep pressing 'c' until your hand clearly appers in white.
* Make sure all the squares are covered by your hand.
* After you get a good histogram press 's' to save the histogram.

2. Add gestures. Contact us if you want our 44 signs dataset. On executing the following command, you will have to enter the gesture number and gesture name/text. Then an OpenCV window called "Capturing gestures" which will appear. In the webcam feed you will see a green window (inside which you will have to do your gesture) and a counter that counts the number of pictures stored. Keep your palm and fingers inside the box and wait for few seconds. 

```python create_gestures.py```   

3. Press 'c' when you are ready with your gesture. Capturing gesture will begin after a few seconds. Move your hand a little bit here and there. You can pause capturing by pressing 'c' and resume it by pressing 'c'. Capturing resumes after a few secondAfter the counter reaches 1200 the window will close automatically.

Data augmentation is done by flipping the images. Run the following command.

```python flip_images.py```

4. When you are done adding new gestures run the load_images.py file once. You do not need to run this file again until and unless you add a new gesture. This command basically segments the data into test, train and validation sets.

```python load_images.py```

#### Displaying all gestures
1. To see all the gestures that are stored in 'gestures/' folder run this command

```python display_all_gestures.py```

#### Training a model
1. So training can be done with Keras. Train using Keras then use the cnn_keras.py file.

```python cnn_keras.py```

2. Model is saved through Keras. You will have the model in the root directory by the name cnn_model_keras2.h5.

#### Get model reports
1. To get the classification reports about the model make sure you have test_images and test_labels file which are generated by load_images.py. In case you do not have them run load_images.py file again. Then run this file

```python get_model_reports.py```

2. You will get the confusion matrix, f scores, precision and recall for the predictions by the model. Also testing accuracy.

#### Testing gestures
1. For recognition start the recognize_gesture.py file.

```python recognize_gesture.py```

2. You will have a small green box inside which you need to do your gestures. The adjacent area will display the word(s).

#### Tracks used

We chose </b>'Influence the Masses'</b> as the speech and hearing impaired community has been suppressed for a long time due to their disability. This not only revolutionizes as to how these people will communicate in the future but also provides a more open, accepting take on the general people's perception of this community. This helps them become more 'abled'.

#### AWS Services Used

We used the AWS SageMaker notebook instances on the m5.2xlarge VM. The data creation, framing, training and testing was done on the platform. Initially we started with Inception v3, due to overfitting we got satisfactory results through CNN only.
