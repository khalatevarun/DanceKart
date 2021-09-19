
<h1 align="center">
<p align="center">
  <a>
    <img alt="Logo" src=" width="100"/>
  </a>
</p>
  <a>DanceKart</a>
</h1>

<p align="center">
A one stop shop for all the fashion and lifestyle needs of a dancer.
</p>

DanceKart is a fashion e-commerce web application for all the dance enthusiast where you can find all kinds of products, wishlist them and add the ones you want to buy to your cart and make instant payment through card.

<h2>Features</h2> 
 <ul>
  <li>
    <strong>Procut Listing</strong> - The landing page of the website lists all the products. The products list is a static json data.
  </li>
 <li>
    <strong>Wishlist</strong> - Any product can we wishlisted. All the products wishlisted are listed separately in the wishlist page. The user needs to sign in first in order to wishlist a product, since the wishlisted product are directly stored in the Cloud Firestore with user's sign in id. 
  </li>
 <li>
    <strong>Checkout Flow</strong> - The web app follows the same checkout flow which is followed by other e-commerce apps. In order to buy a product the user had to add the product to the cart and go to the cart menu. The user can alter the no. of items it wants to have by changing the quantity of the product. This is followed by clicking on the checkout button which prompts to sign in if the user has not signed in yet. Then the user has to enter the address details and make the payment via card.  
  </li>
<li>
    <strong>Address Input</strong> - In order to place an order, address details are mandotory. The web app has a form asking for all the details. The details are automatically sotred in the database once entered. So, that for the next order the previous address details are fetched, which can also be changed if required.
  </li>
<li>
    <strong>Payment Gateway</strong> - The payment gateway integration is done using Stripe Api, which enables payment via card.
  </li>
                 <li>
    <strong>Orders History</strong> - The user can see the whole orders history in the orders page. The products are listed along with the date and address to which they were to be delivered.
  </li>
                  <li>
    <strong>Authenticaion</strong> - The web app has email/password sign in method integrated using firebase authentication. Only authenticated users are allowed to wishlsit and place the orders.
  </li>
 

  
<h2>Technologies Used</h2> 
  <li>
   Frontend - ReactJS 
  </li>
                 <li>
   Styling - Material UI and CSS 
  </li>
                    <li>
   Deployment 
                 <ul>
                 <li>React App - CI/CD setup using Github Actions and Netlify</li>
                 <li>ExpressJS server (to make api requests to Stripe API) - Heroku </li>
                 </ul>
  </li>
                 <li>
                 Authentication and Authorisation - Firebase Authentication ( email/password )
                 </li>
                  <li>
                 Database - Firebase Cloud Firestore
                 </li>
                 <li>
                 Additional libraries and APIs
                 <ul>
                 <li>
                 Stripe API
                 </li>
                  <li>
                 Axios
                 </li>
                  <li>
                 Moment
                 </li>
                 </li>
               

  
<h2>  Screenshots </h2>

Following is a sneak peek of how the interface looks. To use the website live, head on over to the [link](https://entertainment-hub.netlify.app/)





  












