# Purea - Hygiene Assistance
Purea is the innovative hygiene and cleanliness assistant, developed on top-off the gpt 3.5 turbo model. This project is designed to provide you with all the information and guidance you need to maintain a healthy and clean lifestyle.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [How Purea Works](#How-Purea-Works)
- [Prepared by](#Prepared-by)
- [Screenshots](#Screenshots)

## About

## Who is Purea ? 
Purea is an AI chatbot created with the aim of promoting proper hygiene and cleanliness practices. It offers information, tips, and advice on various hygiene-related topics, making it a valuable resource for anyone looking to improve their personal hygiene routines.

Purea can provide accurate and comprehensive answers to your questions. It can also generate personalized hygiene recommendations based on your individual needs and preferences.

## What can Purea do?
**Here are some of the things that Purea can do for you:**

- Provide information on a variety of hygiene topics, such as skin care, hair care, oral care, body care, menstrual hygiene, travel hygiene, and pregnancy hygiene.
- Offer tips and advice on how to improve your hygiene habits.
- Generate personalized hygiene recommendations based on your individual needs and preferences.
- Track your hygiene progress over time and identify areas where you need to improve.
- Purea is the perfect companion for anyone who wants to improve their hygiene habits and overall health and well-being.

## How can Purea help you?
**Purea can help you in a variety of ways, including:**
- Improving your hygiene knowledge: Purea can teach you about the importance of good hygiene and how to maintain healthy hygiene habits.
- Identifying and addressing hygiene problems: Purea can help you to identify and address any hygiene problems that you may have.
- Staying motivated and on track: Purea can provide support and encouragement to help you stay motivated and on track with your hygiene goals.
  
## Who can benefit from using Purea?
**Purea can benefit anyone who wants to improve their hygiene habits and overall health and well-being. This includes:**

- **Individuals**: Purea can help individuals to learn about good hygiene practices and to develop personalized hygiene routines.
- **Families**: Purea can help families to teach their children about hygiene and to create a healthy hygiene environment in the home.
- **Schools and workplaces**: Purea can be used in schools and workplaces to promote hygiene and to educate people about the importance of good hygiene practices.




## Features

**Here are the some of the feature of the Purea**

- **Smart Enough to Decline Off-Topic Conversation**
     - Purea is programmed to provide informative responses related to hygiene and cleanliness. It declines to answer any off-topic questions, ensuring the conversation stays on point.
  
- **Natural Human-Like Tone**
    - Purea engages in conversations with a friendly and natural human-like tone, making it easy to interact with user.
- **Supportive and Empathetic**
     -  Purea provides support and empathy in its responses, ensuring that users feel comfortable seeking advice and information.
- **Hygiene Tips**
     - Purea offers a wide range of hygiene tips and practices to help users improve their cleanliness routines.
- **24/7 Availability**
     -  Purea is available 24/7, providing assistance whenever you need it.
- **Responsive Across Multiple Platforms**
      - Purea is accessible on various platforms, ensuring you can get assistance wherever you are.
- **Extensive Knowledge Base**
     - Purea has a vast knowledge and expertise in her field, with the ability to provide answers to trending questions. It's supportive and can understand emotions, making interactions more personalized and empathetic.
- **Data Retention**
      - Purea do not store your personal conversations or data 
- **Anonymity**
      - Purea does not require users to provide personal information, such as names or email addresses, to use  You can interact with Purea anonymously.



## Technologies Used
[![Technology used](https://skillicons.dev/icons?i=js,html,css,javascript,bootstrap,chatgpt,streamlit)](https://skillicons.dev)
- Python (3.11)
- Streamlit 
- OpenAI API (GPT-3.5 Turbo)
- HTML, CSS, Bootstrap, and JavaScript
  

## Getting Started
To get started with Purea, follow these steps:

### Prerequisites
** Before you begin , verify that you have the following prerequisites installed on your environment: 
- Python installed on your computer.
- Streamlit 
- Access to the OpenAI GPT-3.5 Turbo API.
- Bootstrap NPM

### Installation
1. **Clone the Repository**: Start by cloning the Purea repository from GitHub to your local machine. This will give you access to the project's source code.

   ```bash
   git clone https://github.com/Darshan-hegde04/Pure_chatbox.git
   ```
2. Navigate to the Project Directory: Move to the project directory after cloning it.

  ``` bash
  cd Pure_chatboxSet
  ```
3. SetUp Virtual Environment: It's a good practice to work within a virtual environment to manage dependencies cleanly. Create a virtual environment using your preferred method. 
 For example, you can use Python's virtualenv or venv.

  While in the project directory, run:

  ``` bash
  python -m venv .venv
  ```
  Activate the Virtual Environment: Activate the virtual environment to isolate your project's dependencies.

  On Windows:
  ```bash
  .venv\Scripts\activate
  ```

  On macOS and Linux:
  ```bash
  source .venv/bin/activate
  ```
4. Install Requirements: Use pip to install the required Python packages specified in the requirements.txt file. These packages are essential for the project's proper functioning.

  ```bash
  pip install -r requirements.txt
  ```

5. Set Up OpenAI GPT-3.5 Turbo API Access: You'll need access to the OpenAI GPT-3.5 Turbo API for Purea's intelligent responses. Follow OpenAI's documentation to set up your API access and get your API key.

  Configure API Key: Add your OpenAI API key to the project. You can do this by creating an environment variable or by adding it directly to the project's configuration.



### How to Use

Once you've installed Purea and set up the environment, you can start using it to get valuable hygiene-related information and assistance. Here's how:

Launch Purea: Open Live server on vs-code as well as in terminal run the streamlit by entering the below command 

  bash
  ```
  streamlit run main.py
  ```

Initiate a Conversation: Type your hygiene-related questions or topics into the chat interface. Purea is available 24/7 to assist you with informative and friendly responses.

Receive Assistance: Purea will provide natural and helpful responses related to hygiene and cleanliness. You can engage in a conversation with Purea just like you would with a human assistant.

Enjoy 24/7 Access: You can use Purea at any time to get advice, tips, and information related to hygiene. It's a reliable and supportive assistant to help you maintain a healthy and clean lifestyle.

That's it! You're all set to use Purea for your hygiene-related queries and assistance.

**Note Purea May not be fully optimised for the all the devices may have manior / major bugs**  


### How Purea Works 

**Task is to use the free version of the Open-Ai Api Purea Uses The free version of the OpenAi api free version / Explorer Version. The Free / Explorer version has the various restriction to overcome those restriction and in-order to make Purea not to compramise in any feild we used these tecnique**

- **Prompt engineering**
  
  Prompt engineering is the process of designing and creating prompts to guide OpenAI's GPT-3.5 Turbo API to generate the desired output. Purea uses  prompt engineering techniques to ensure that its responses     are accurate, comprehensive, and helpful.

  One of the key techniques that Purea uses is to send a default prompt with the user's prompt. The default prompt provides OpenAI with additional context about the user's query, which helps it to generate        more accurate and relevant responses.

  For example,
  if a user asks Purea "How do I prevent acne?", Purea might send the following prompt to OpenAI:
  ```
  **Default prompt:** <Default_Prompt>.
  **User prompt:** How do I prevent acne?
  ```

  This prompt provides OpenAI with the context that the user is asking about acne prevention, and it also gives OpenAI the opportunity to access its knowledge base of acne information.


- **Render/AWS as hosting**
  Purea is hosted on Render, a cloud platform that provides a variety of services for deploying and managing web applications. Render uses AWS as its underlying infrastructure, so Purea is able to take       advantage of AWS's scalability and reliability. 

- **OpenAI API**
  Purea uses the OpenAI GPT-3.5 Turbo API to generate responses to user queries. The OpenAI GPT-3.5 Turbo API is a powerful language model that can generate text, translate languages, write different kinds of     creative content, and answer your questions in an informative way.

- **Limitation of the OpenAI free API**
  The OpenAI free API has a limit on the number of requests that can be made per day and the Token size and various other restriction like unavailability of Fine-Tunning etc. To overcome this limitation, Purea    uses a combination of techniques, including:

    - Prompt engineering: Purea uses prompt engineering techniques to generate more efficient prompts, which reduces the number of tokens that OpenAI needs to generate a response. 
    - Emotion analysis
                    Purea uses emotion analysis to understand the user's emotional state and to generate responses that are tailored to the user's mood. For example, if a user is feeling anxious about their                         acne, Purea might generate a response that is more reassuring and supportive.

  Implementation of frontend HTML, CSS, Bootstrap, and JS to backend
  Purea's frontend is implemented using HTML, CSS, Bootstrap, and JavaScript. The backend is implemented using Python, streamlit framework.


**Purea is a complex system that uses a variety of technologies to generate accurate, comprehensive, and helpful responses to user queries. It is hosted on Render / AWS, and it uses the OpenAI GPT-3.5 Turbo API to generate responses. Purea uses a variety of techniques to overcome the limitation of the OpenAI free API, prompt engineering , analysising the user queries , limiting the number of token in response etc. **Purea can analyse emotion to understand the user's emotional state and to generate responses that are tailored to the user's mood.** The frontend is implemented using HTML, CSS, Bootstrap, and JavaScript, streamlit and the backend is implemented using Python Streamlit framework.**



### Prepared by
Darshan Hegde 
[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=github)](https://github.com/Darshan-hegde04)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/darshan-hegde-050b8625a)

### Screen Shots

**Purea Generates Response Like Human**

![Auto_Complete](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/00e3b5d8-6d8d-4dfe-9f56-8d4b8fb26469)

**Smart Enough to Decline Off-Topic Conversation**

![Smart_to_decline_offtopic_questions](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/b44d3935-3324-4ec4-8fb3-07e505660383)

**Purea is informative**

![Human Like Response](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/39e6a8cd-e3a3-485a-93ab-6a8c0f4c5557)

**Purea is Responsive**

![mobile ](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/99f668dd-c494-41a7-b762-c957218fbc6f)
![Responcive](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/a3e9e7fa-11c5-4137-86db-21d51fd4dc25)

**Purea is Friendly**

![Friendly _Assistent](https://github.com/Darshan-hegde04/Pure_chatbox/assets/149821544/e37e000b-9d3e-4565-ac78-1f7f884f5031)




