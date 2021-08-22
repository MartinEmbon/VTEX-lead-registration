# VTEX CHALLENGE - OVERVIEW (ENGLISH VERSION)

This theme is the store´s front end and back end `developed by Martin Embon` for the `Hiring Coders VTEX challenge.`

![](docs/whatslogo.png)

It has several functionalities and details that are in the description right below. 

## FRONT END

### The Store

The project has a home page that displays the header, tab-layouts, slider-layouts and a footer.  Inside each element there are inner props regarding each one of them such as product summary, shelf, buttons and so on. There is also a product page and a `LEADS PAGE` that the user is going to be redirected after subscribing. 

As for the CSS Styling `I looked for every css-selector`rather than editing the style.json file. 

As for the styling of my custom components in react I used `CSS HANDLES`. 

As for `media queries` I used a few for responsive purposes. 


### The Back End - AWS - API GATEWAY - LAMBDA FUNCTIONS - DYNAMO DB

This part of the challenge was very interesting and gave me a lot of new insight about AWS. 

The steps I followed: 
1. Created a table using DynamoDB.
2. Incorporated a Lambda function with proper data.
3. Thru the API Gateway, I created methods and routes.
4. Provided necessary permits with IAM.
5. Test routs with Postman.
6. Within the react component I imported axios and use it to fetch the api`s. 

### Extra Bonus - `get the leads`

Once the user has completed the subscription form, it will redirect to a /leads page.  In there, besides rendering a "thank you" message, `you can click in the button I added to the purpose of printing in console details of all the previous leads that were saved in the database so to check it is fully functioning`. 

### The Whatsapp Link

Available in every page, it links to the api service. 

### Thank you and hope you`ll enjoy!
