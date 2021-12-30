# Timed React Challenge

Create a metadata driven dashboard using Reactjs. It contains different configurable components.


Components:


List of products - Display a list of products. Each product has a title, picture, category, price and description. Please use this endpoint to fetch products: https://fakestoreapi.com/products


Total Products - A card that displays the total count of products. Endpoint:  https://fakestoreapi.com/products (Sample screenshot)


Total Customers - A card that displays the total number of customers registered on the website. Use a fake value for the count. https://fakestoreapi.com/users (Sample screenshot)


Latest product - This card will display any 1 random product (picture, title, category, price). https://fakestoreapi.com/products (Sample screenshot)


Display categories - This card will display a list of different product categories. URL: https://fakestoreapi.com/products/categories


The app should allow you to create multiple dashboards which will be a combination of the above given components. Everytime you create a new dashboard, allow the user to add these components to the dashboard. Once the dashboard is configured, allow the user to save it with a name (e.x. Dashboard 1, Dashboard 2, etc). Please use Redux for maintaining the state. Please add functionality to load the previously configured dashboard, choose a dashboard and display all the components on the UI.


Note: You can use the Fake Store API to fetch data.