# schroeder-itdev164-p2

working example of a Gatsby/Stripe client side checkout template I've been working on 

[Orignal Repo](https://github.com/erikthetechhobo/stripe-starter)


  It creates 3 kinds of products in the gatsby-config.js file. A unlimited stock item, a skud item with inventory and a subscription.
  Each type of product has a button in src/componenets where each makes a static query for the product ID given to it by Stripe
  when gatsby-config.js adds them to the Stripe 'cms'.

Added the product display and a few styled components to this version of the project.

To run, create a .env.development file in the 'YourStore' folder and copy over the keys in the project submission.

To test purchases use any name, address, zip, email, and card number 4242 4242 4242 4242 with any legal exp and cvc code
when complete it forwards you to a success or failure page.
