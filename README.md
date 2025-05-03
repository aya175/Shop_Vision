# ShopVision

ShopVision is a web application that helps users identify and find products they see in videos. Here's a simple breakdown of how it works:

Video Product Identification:
Users can take screenshots of products they see in videos (like a power drill in a home improvement video)
The app uses AI to recognize and describe the product in the screenshot
Product Search:
After identifying the product, it uses the description to search for similar products online
It finds matching products from various online stores
Product Comparison:
Shows users different options of the same or similar product
Users can compare prices, brands, and reviews
All this information is shown in one place
The main technologies it uses are:

Google Cloud Vision API for recognizing and describing products
SerpApi for searching and finding similar products online
A web interface for users to interact with
It's like having a shopping assistant that can help you find products you see in videos, making it easier to buy things you see in online content.

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

# Frontend Dependencies

Make sure Node.js and npm are installed. You can download and install them from [nodejs.org](https://nodejs.org/).

Install the required npm packages using the following commands:

```bash
npm install html2canvas

npm install axios

npm install express

```

# Installing Backend Dependencies

If not installed, the first step is to install pip to manage python packages

```sh
#for windows
py -m install pip
#for mac
python install pip

```

Create a seperate environment, in our case, we created a .conda environment within VSCode using ">Python: Create Environment"

Install the required Python packages using the following commands:

```sh
pip install django

pip install djangorestframework

pip install django-cors-headers

pip install pillow

pip install google-cloud-vision

pip install serpapi

pip install google-search-results

pip install python-dotenv

```

# Run the servers:

Must be seperate terminals

```
Frontend:
cd myfrontend
npm start
-------------------------
Backend:
cd tiktokjam
python manage.py runserver
```






![image alt](https://github.com/aya175/Shop_Vision/blob/main/FIND.png?raw=true)











### Google Vision API Help

This is a small tutorial regarding how to use the API key with the Google Vision API.

- Visit [console.cloud.google.com](https://console.cloud.google.com/welcome/)
- Create a new project by selecting "Select a project".
- Ensure your project is selected before developing.
- At the search bar type in "Cloud Vision API" and click "Enable".
- From the Navigation Menu:
  - Hover over the "APIs & Services" tab.
  - Click on "Credentials.
  - Click "+ Create Credentials".
  - From that dropdown menu, select "Service account".
  - Fill out the service account details.
  - In step 2, in "Select a role" select the role "Vision AI Application Editor".
- After setting up the service account, click on the account and go to the "Keys" tab
  - Create new key
  - select JSON type
- From here the json will be downloaded into your personal device. If the json is lost, a new API key will have to be created. However, in order to utilize this, please follow these steps:
  - Make sure the json file is inside of the backend folder(pipVision/myVision)
  - Ensure the json file is named "snap-market-428419-cf3dcb6ba810.json". Do not share the json file publically.

### SerpApi Help

- Create a .env file inside of the backend folder(pipVision/myVision)
- Go to [serpapi.com](https://serpapi.com/)
- Register an account if you don't have one already and fill out the necessary information (You must verify phone number and email)
- Select the plan you want (We used the free plan)
- Once account has been created go to the dashboard and you API key will be there ready to copy and paste
- Go back to your .env file and save your API into a variable called "SERPAPI"
