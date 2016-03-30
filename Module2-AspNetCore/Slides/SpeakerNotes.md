# ASP.NET Core 1.0 Internals #
## Overview ##
* App layer hasn't changed much since ASP.NET MVC 5
* Framework has significantly changed

## Exercises ##
### Exercise 1: Working with static files ###
#### Task 1 - Serving static files ####
* File / New / Empty
* `project.json` / dependencies node
* Add `"Microsoft.AspNet.StaticFiles"` (can just type "static" and autocomplete)
* `Startup.cs` / Configure()
* Directly below IIS call, add `app.UseStaticFiles()`
* Add new HTML file named `Index.html` to `wwwroot` with "Hello from static HTML file" text
* Run app, show that middleware (not Index.html) is served
* Navigate to `/Index.html` and show static file is served
 > Note: You can commend out the `app.UseStaticFiles` call and show HTML isn't served

#### Task 2 - Adding default document support ####
* Change `app.UseStaticFiles()` to `app.UseFileServer()`
* Run and show that Index.html is shown as default document

### Exercise 2: Introduction to Routing & MVC ###
#### Task 1 - Adding MVC ####
* Add MVC package ("6.0.0-rc1-final")
* Add Controller, change Index to:

```csharp
public class HomeController : Controller
{
  [HttpGet()]
  public string Index() => "Hello from MVC!";
}
```

* In `ConfigureServices()` add `services.AddMvc()`
* In `Configure()` add:

```csharp
app.UseMvc(routes =>
	{
		routes.MapRoute(
			name: "default",
			template: "{controller=Home}/{action=Index}/{id?}");
	});
```
> Note: Can show `app.UseMvcWithDefaultRoute()`

### Exercise 3: Writing custom middleware ###
#### Task 1 - Writing a middleware class that sets the current culture based on a query string value ####
* File / New / Empty
* Open `Startup.cs` and insert snippet `ASPNETCore - Ex3 - InlineMiddleware`

```csharp
public void Configure(IApplicationBuilder app)
{
    app.UseIISPlatformHandler();

    app.Use((context, next) =>
    {
        var cultureQuery = context.Request.Query["culture"];
        if (!string.IsNullOrWhiteSpace(cultureQuery))
        {
            var culture = new CultureInfo(cultureQuery);
#if !DNXCORE50
            Thread.CurrentThread.CurrentCulture = culture;
            Thread.CurrentThread.CurrentUICulture = culture;
#else
            CultureInfo.CurrentCulture = culture;
            CultureInfo.CurrentUICulture = culture;
#endif
        }

        // Call the next delegate/middleware in the pipeline
        return next();
    });

    app.Run(async (context) =>
    {
        await context.Response.WriteAsync($"Hello {CultureInfo.CurrentCulture.DisplayName}");
    });
}
```

* Browse to `/?culture=no`

#### Task 2 - Moving the middleware to its own type ####
* Add Class / `RequestCultureMiddleware.cs`
* Add snippet `ASPNETCore - Ex3 - RequestCultureMiddlewareClass`
* Inside class, add `ASPNETCore - Ex3 - RequestCultureMiddlewareInvokeMethod`
* End of class add `ASPNETCore - Ex3 - RequestCultureMiddlewareExtensionsClass`
* In `Startup.cs`, replace inline middleware with `app.UseRequestCulture();`

#### Task 3 - Adding options to middleware ####

> **Note**: If running late, this is a good task to just skip to the completed source.

* Add Class / `RequestCultureOptions`
* Add property:

```csharp
public class RequestCultureOptions
{
	public CultureInfo DefaultCulture { get; set; }
}
```
* Modify **RequestCultureMiddleware** constructor to take **RequestCultureOptions**

```csharp
public class RequestCultureMiddleware
{
    private readonly RequestDelegate next;
    private readonly RequestCultureOptions options;

    public RequestCultureMiddleware(RequestDelegate next, RequestCultureOptions options)
    {
        this.next = next;
        this.options = options;
    }

    //...
}
```

* Replace **Invoke** with `Code Snippet - ASPNETCore - Ex3 - InvokeMethodWithDefaultCulture`
* Replace **RequestCultureMiddlewareExtensions** with `ASPNETCore - Ex3 - UpdatedRequestCultureMiddlewareExtensions`
* Open the Startup.cs file and set the fallback culture in the Configure method to some default value, e.g. "en-GB". `Code Snippet - ASPNETCore - Ex3 - UpdatedUseRequestCulture`

```csharp
app.UseRequestCulture(new RequestCultureOptions
{
     DefaultCulture = new CultureInfo("en-GB")
});
```
* Run and verify the default culture is shown.

#### Task 4 - Reading request culture configuration from a file ####
#### Task 5 - Flowing options from dependency injection system to middleware ####
### Exercise 4: Adding Authentication to your web applications ###
#### Task 1 - Introduction to ASP.NET Identity ####
#### Task 2 - Enabling authentication using external providers ####
## Summary ##
