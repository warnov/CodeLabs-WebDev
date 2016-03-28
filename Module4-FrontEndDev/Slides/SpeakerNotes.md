# Front End Development #
## Overview ##
## Exercises ##
### Exercise 1: Creating an Angular 2 application ###
#### Task 1 - Introducing the Angular 2 documentation ####
* Browse to https://angular.io/
* Click on Docs button and overview Docs
* In References section, click on Cheatsheet

#### Task 2 - Exploring the Angular 2 Quickstart ####
* Click on 5 Minute Quickstart (https://angular.io/docs/ts/latest/quickstart.html)
* Show dependencies in index.html
* Explain main.ts
* Explain app.component.ts
* Edit template and demonstrate change

### Exercise 2: Exploring a more advanced Angular 2 application in an ASP.NET Core application ###
#### Task 1 - Exploring the application ####
* Open OrderApp in Source/Ex2/Begin
* Show /wwwroot/js files
* Show package.json
* Explain gulp copy tasks
* Show Task Runner Explorer
* Open _Layout.cshtml and show script references to scripts we copied via gulp
* Open Index view and show Angular components (`<order-app>
    ` and `System.config`)
    * Show `order-app.component.ts`
    * Show `order-app.html` template

#### Task 2 - Running the Solution ####
* Run the application
* Click on an order
* Modify an order / details item and show that all totals are updated (including order grid above)

### Exercise 3: Integrating with ASP.NET Core API controller ###
#### Task 1 - Creating an ASP.NET Core API controller ####
* Add `OrderViewModel.cs` to `ViewModels` directory
* Insert code snippet `FrontEndDev - Ex3 - OrderViewModelClass`
* Add `OrderDetailsViewModel.cs` to `ViewModels` directory
* Insert code snippet `FrontEndDev - Ex3 - OrderDetailsItemClass`
* Add Web API Controller named `OrdersController`
* Add usings with `FrontEndDev - Ex3 - OrdersControllerUsings`
* Add `FrontEndDev - Ex3 - OrdersControllerContext`
* Add GET action using `FrontEndDev - Ex3 - OrdersControllerGetAction`
* Add GetOrders action using `FrontEndDev - Ex3 - OrdersControllerGetAction`
* Modify API controller output to produce JSON using the following

````C#
  namespace OrderApp.Controllers
  {
	[Produces("application/json")]
	[Route("api/[controller]")]
	public class OrdersController : Controller
	{
		// ...
	}
  }
````

* Create a new OrderDetailsController
* Replace the contents with `FrontEndDev - Ex3 - OrderDetailsControllerBase`
* Add `PutOrderDetails` using `FrontEndDev - Ex3 - OrderDetailsControllerPutOrderDetailsAction`

#### Task 2 - Integrating the front end with the API controller ####
* Open `wwwroot\js\boot.ts`
* Add new import: `	import {HTTP_PROVIDERS} from "angular2/http";`
* Open `order.service.ts`
* Remove MockOrders import
* Add two new properties and a constructor

```TypeScript
    private orderEndpoint = "/api/orders/";
    private orderDetailsEndpoint = "/api/orderDetails/";

    constructor(private http: Http) {
    }
```
* Copy **getOrder**, **getOrderDetails**, and **updateOrderDetails** using code blocks from lab.

#### Task 3 - Running the Solution ####
* Run the application
* Click on an order, update quantity for an Order Details
* Hit F12 in Edge, switch to Network tab (make sure it's recording), update order, show PUT request

### Exercise 4: Developing for Web Standards with Edge and Vorlon.js ###
#### Task 1 - Using Vorlon.js Extension ####
* Run application (if not already running)

#### Task 2 - Using Vorlon.js server ####

### Exercise 5: Packaging SPA as an installable App using ManifoldJS ###
#### Task 1 - Creating a Hosted Web Application with ManifoldJS ####
#### Task 2 - Adding toast and live tiles to your Hosted Web Application ####
## Summary ##
