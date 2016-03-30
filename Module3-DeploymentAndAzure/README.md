<a name="HOLTop" ></a>
# Deployment and Azure #

---

<a name="Overview" ></a>
## Overview ##

Microsoft Azure offers secure and flexible development, deployment and scaling options for any size web application. Leverage your existing tools to create and deploy applications without the hassle of managing infrastructure.

Provision a production web application on your own in minutes by easily deploying content created using your favorite development tool. You can deploy an existing site directly from source control with support for **Git**, **GitHub**, **Bitbucket**, **CodePlex**, **TFS**, and even **DropBox**. Deploy directly from your favorite IDE or from scripts using **PowerShell** in Windows or **CLI** tools running on any OS. Once deployed, keep your sites constantly up-to-date with support for continuous deployment.

Microsoft Azure provides scalable, durable cloud storage, backup, and recovery solutions for any data, big or small. When deploying applications to a production environment, storage services such as Tables, Blobs and SQL Databases help you scale your application in the cloud.

With SQL Databases, it's important to keep your productive database up-to-date when deploying new versions of your application. Thanks to **Entity Framework Migrations**, the development and deployment of your data model has been simplified to update your environments in minutes.

This module will show you the different topics you could encounter when deploying your site to production environments in Microsoft Azure.

<a name="Objectives" ></a>
### Objectives ###
In this module, you'll see how to:

- Create and deploy a Web Application to a Microsoft Azure Web App using Visual Studio
- Enable Entity Framework Migrations with an existing model
- Update the object model and database accordingly using Entity Framework Migrations
- Deploy to a Microsoft Azure Web App using Git
- Rollback to a previous deployment using the Azure Portal
- Configure your application to use Azure Active Directory for authenticate your users

<a name="Prerequisites"></a>
### Prerequisites ###

> **Note:** All prerequisites have already been installed on the lab machines at Build 2016.

The following is required to complete this module:

- [Visual Studio Community 2015][1] or greater
- [ASP.NET Core 1.0][2]

[1]: https://www.visualstudio.com/products/visual-studio-community-vs
[2]: https://get.asp.net

> **Note:** You can take advantage of the [Visual Studio Dev Essentials]( https://www.visualstudio.com/en-us/products/visual-studio-dev-essentials-vs.aspx) subscription in order to get everything you need to build and deploy your app on any platform.

<a name="Setup" ></a>
### Setup ###
In order to run the exercises in this module, you'll need to set up your environment first.

1. Open Windows Explorer and browse to the module's **Source** folder.
1. Right-click **Setup.cmd** and select **Run as administrator** to launch the setup process that will configure your environment and install the Visual Studio code snippets for this module.
1. If the User Account Control dialog box is shown, confirm the action to proceed.

> **Note:** Make sure you've checked all the dependencies for this module before running the setup.

<a name="CodeSnippets" ></a>
### Using the Code Snippets ###

Throughout the module document, you'll be instructed to insert code blocks. For your convenience, most of this code is provided as Visual Studio Code Snippets, which you can access from within Visual Studio 2015 to avoid having to add it manually.

>**Note**: Each exercise is accompanied by a starting solution located in the **Begin** folder of the exercise that allows you to follow each exercise independently of the others. Please be aware that the code snippets that are added during an exercise are missing from these starting solutions and may not work until you've completed the exercise. Inside the source code for an exercise, you'll also find an **End** folder containing a Visual Studio solution with the code that results from completing the steps in the corresponding exercise. You can use these solutions as guidance if you need additional help as you work through this module.

---

<a name="Exercises" ></a>
## Exercises ##
This module includes the following exercises:

1. [Build and Deploy from Visual Studio](#Exercise1)
1. [Using Entity Framework Migrations](#Exercise2)
1. [Deploying a Web Site to Staging](#Exercise3)
1. [Performing Deployment Rollback in Production](#Exercise4)
1. [Identity with Azure Active Directory](#Exercise5)

Estimated time to complete this module: **60 minutes**

>**Note:** When you first start Visual Studio, you must select one of the predefined settings collections. Each predefined collection is designed to match a particular development style and determines window layouts, editor behavior, IntelliSense code snippets, and dialog box options. The procedures in this module describe the actions necessary to accomplish a given task in Visual Studio when using the **General Development Settings** collection. If you choose a different settings collection for your development environment, there may be differences in the steps that you should take into account.

<a name="Exercise1"></a>
### Exercise 1: Build and Deploy from Visual Studio ###

**Azure App Service Web Apps** is a fully managed platform that enables you to build, deploy and scale enterprise-grade web apps in seconds. Focus on your application code, and let Azure take care of the infrastructure to scale and securely run it for you.

In this exercise you'll create a new Web site in Visual Studio based on the **ASP.NET Core 1.0 Web Application** project template and then publish the application to an **Azure App Service Web App**.

<a name="Ex2Task1"></a>
#### Task 1 - Deploying a ASP.NET Core application to Azure ####

1. Open **Visual Studio Community 2015** and select **File | New | Project...** to create a new solution.

1. In the **New Project** dialog box, select **ASP.NET Web Application** under the **Visual C# | Web** tab, and make sure **.NET Framework 4.6** is selected. Name the project _MyWebApp_, choose a **Location** and click **OK**.

	![New ASP.NET Web Application project](Images/new-aspnet-web-application-project.png?raw=true "New ASP.NET Web Application project")

	_New ASP.NET Web Application project_

1. In the **New ASP.NET Project** dialog box, select the **Web Application** template under **ASP.NET 5 Templates**. Also, make sure that the **Authentication** option is set to **Individual User Accounts**. Make sure the "**Host in the cloud**" option is not checked (you will run this manually). Click **OK** to continue.

	![Creating a new project with the Web Application template](Images/creating-a-new-aspnet-project.png?raw=true "Creating a new project with the Web Application template")

	_Creating a new project with the Web Application template_

1. Right-click the **MyWebApp** project and select **Publish...**. In the **Publish Web** dialog, click **Microsoft Azure App Service**.

	![Selecting Microsoft Azure App Service](Images/selecting-azure-app-service.png?raw=true "Microsoft Azure App Service")

	_Microsoft Azure App Service_

1. Click **Add an account...**. to sign in to Visual Studio with your Azure account.

	![Adding an account](Images/adding-an-account.png?raw=true "Adding an account")

	_Adding an account_

1. Then, click **New...** to open the _Create App Service_ dialog box. The _Create App Service_ dialog box will appear. Fill the **Web App Name**, **Resource Group** and **App Service Plan** fields. Then, click **Services** to add the SQL Database.

	![Create App Service dialog box](Images/create-app-service-dialog-box.png?raw=true "Create App Service dialog box")

	_Create App Service dialog box_

1. In the **Services** tab, click the add button next to **SQL Database** in **Resource Type** list.

	![Adding a new SQL Database](Images/adding-a-new-sql-database.png?raw=true "Adding a new SQL Database")

	_Adding a new SQL Database_

1. In the **Configure SQL Database** dialog box, create a new SQL Server by clicking the **New...** button. The **Configure SQL Server** dialog box will appear, fill the **Server Name**, **Administrator Username** and **Administrator Password** fields and then click **OK**.

	![Configure SQL Server](Images/configure-sql-server.png?raw=true "Configure SQL Server")

	_Configure SQL Server_

1. Back in the **Configure SQL Database** dialog box, all the fields should be populated. Click **OK**.

	![Configure SQL Database](Images/configure-sql-database.png?raw=true "Configure SQL Database")

	_Configure SQL Database_

1. In the **Create App Service** dialog box, click **Create** and wait until the Web App is created.

	![Creating the App Service](Images/creating-app-service.png?raw=true "Creating the App Service")

	_Creating the App Service_

1. Back in the **Publish Web** dialog, all the connection fields should be populated. Click **Next >**. In the settings tab, expand the **Target DNX Version** box to see the different possibilities and click **Publish** to publish the site.

	![Publishing the site to the new Microsoft Azure Web App](Images/publishing-the-site-to-azure.png?raw=true "Publishing the site to the new Microsoft Azure Web App")

	_Publishing the site to the new Microsoft Azure Web App_

    Once publishing completes, the web app will be automatically launched in your browser (at **http://{yourwebappname}.azurewebsites.net**).

	![Web app published](Images/webapp-published.png?raw=true "Web app published to Azure")

	_Web app published to Azure_

	> **Note:** Also, you can go to the [Azure portal](https://portal.azure.com/) and navigate to the Web app to see the details.

<a name="Exercise2"></a>
### Exercise 2: Using Entity Framework Migrations ###

When you're developing an application, your data model might change over time. These changes could affect the existing model in your database (if you're creating a new version) and it's important to keep your database up-to-date to prevent errors.

To simplify the tracking of these changes in your model, **Entity Framework Code First Migrations** automatically detect changes comparing your model with the database schema and generates specific code to update your database, creating new _versions_ of your database.

In this exercise, you'll enable **Migrations** for your application and see how you can easily detect and generate changes to update your databases.

<a name="Ex2Task1"></a>
#### Task 1 - Enabling Migrations ####

In this task, you'll go through the steps of enabling **Entity Framework Code First Migrations** in your web application's database, changing the model and understanding how those changes are reflected in the database.

1. Open the **MyWebApp.sln** solution file from **Source\Ex2\Begin** in Visual Studio and build the solution in order to download and install the dependencies. To do this, right-click the solution and click **Build Solution** or press **Ctrl + Shift + B**.

1. Open a **Command Prompt** and navigate to the folder where the **MyWebApp** project is located (**Source\Ex2\Begin\src\MyWebApp**).

1. In the **Command Prompt** you just opened, enter the following command and then press **Enter**. An initial migration based on the existing model will be created.

	<!-- mark:1 -->
	````PowerShell
	dnvm upgrade
	dnx ef migrations add InitialMigration --context PeopleContext
	````

	>**Note:** Make sure that there is no database named _aspnet5-MyWebApp-prod_ in your LocalDB instance.
	>
	>**Note:** `dnx ef migrations add` will scaffold the next migration based on changes you've made to your model since the last migration was created. In this case, being the first migration of the project, it will add the scripts to create all the tables defined in the **PeopleContext** class.

1. Back in Visual Studio, verify that the new migration was created inside the **People** folder located under the **Migrations** folder.

	![Initial migration](Images/initial-migration.png?raw=true "Initial migration")

	_Initial migration_

1. Execute the migration to update the database by running the following command in the **Command Prompt**.

	>**Note:** `dnx ef database update` will apply any pending migrations to the database. In this case, it will create the database using the connection string defined in your _appsettings.json_ file.

	<!-- mark:1 -->
	````PowerShell
	dnx ef database update --context PeopleContext
	````

1. Go to the **View** menu and open **SQL Server Object Explorer**. In the **SQL Server Object Explorer** window, verify that you have the **(localdb)\MSSQLLocalDB** database in the list. If the database is not in the list, connect to your LocalDB instance by right-clicking the **SQL Server** node and selecting **Add SQL Server...**.

1. Open the **aspnet5-MyWebApp-prod** database and expand the **Tables** node. As you can see, the `dnx ef database update` command generated all the tables defined in the **PeopleContext** class. Locate the **dbo.Person** table and open the columns node. In the next task, you'll add a new column to this table and update the database using **Migrations**.

	![Person Columns](Images/person-columns.png?raw=true "Person Columns")

	_Person Columns_

<a name="Ex2Task2"></a>
#### Task 2 - Updating Database Schema Using Migrations ####

In this task, you'll use **Entity Framework Code First Migrations** to detect a change in your model and generate the necessary code to update the database. You will update the **Person** entity by adding a new property to it. Then you'll run commands to create a new Migration to include the new column in the table.

1. In **Solution Explorer**, double-click the **Person.cs** file located in the **Models** folder and add a new property named **Country**, as shown in the following code snippet.

	<!-- mark:11 -->
	````C#
    public class Person
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Age { get; set; }

        public string Country { get; set; }
    }
	````

1. Switch back to the **Command Prompt**, enter the following command and then press **Enter**. A new migration will be created reflecting the change in our model.

	<!-- mark:1 -->
	````PowerShell
	dnx ef migrations add PersonCountry --context PeopleContext
	````

1. Back in Visual Studio, verify that the new migration was created inside the **People** folder located under the **Migrations** folder.

	![New migration](Images/new-migration.png?raw=true "New migration")

	_New migration_

	> **Note:** A Migration file is composed of two methods, **Up** and **Down**.

	> * The **Up** method will be used to specify the changes the current version of our application needs to apply to the database.
	> * The **Down** method is used to reverse the changes we have added to the **Up** method.

	> When the Database Migration updates the database, it will run all migrations that have not been used since the last update in the timestamp (The _EFMigrationsHistory table keeps track of which migrations have been applied). The **Up** method of all migrations will be called and will make the changes we have specified to the database. If we decide to go back to a previous migration, the **Down** method will be called to redo the changes in reverse order.

1. In the **Command Prompt**, enter the following command and then press **Enter** to update the database.

	<!-- mark:1 -->
	````PowerShell
	dnx ef database update --context PeopleContext
	````

1. In **SQL Server Object Explorer**, refresh the **dbo.Person** table and check that the new **Country** column is displayed.

	![New Country Column](Images/new-country-column.png?raw=true "New Country Column")

	_New Country Column_

<a name="Exercise3"></a>
### Exercise 3: Deploying a Web Site to Staging ###

**Azure App Service Web Apps** enables you to perform staged publishing. When you deploy your site, you can choose to deploy it to a separate deployment slot instead of the default production slot. And then swap the deployments in these two slots with no down time. This is really useful for validating changes before releasing to the public, incrementally integrating site content, and rolling back if changes are not working as expected.

In this exercise, you'll deploy an application to the staging environment of your **Azure App Service Web Apps** using Git source control. To do this, you'll create the Web App and provision the required components at the management portal, configure a **Git** repository and push the application source code from your local computer to a deployment slot. You will also update your production database with the **Code First Migrations** you created in the previous exercise. You will then execute the application in this staging environment to verify its operation. Once you're satisfied that it's working according to your expectations, you'll promote the application to production.

> **Note:** To enable staged publishing, the Web App must be on one of the Standard plans. Note that additional charges will be incurred if you upgrade your Web App to a Standard plan. For more information about pricing, see [App Service Pricing](http://azure.microsoft.com/en-us/pricing/details/app-service/).

<a name="Ex3Task1"></a>
#### Task 1 - Creating a Microsoft Azure Web App ####

In this task, you'll create a **Microsoft Azure Web App** from the management portal. You will also configure a **SQL Database** to persist the application data, and configure a local Git repository for source control.

1. Go to the [Azure Portal](https://portal.azure.com) and sign in using the Microsoft account associated with your subscription.

1. Click **New** in the left command bar and then search for **Web App + SQL**.

	![Searching for Web App + SQL](Images/searching-for-webapp-sql.png?raw=true "Searching for Web App + SQL")

	_Searching for Web App + SQL_

1. In the **Everything** blade, select **Web App + SQL** from the list. Then, in the **Web App + SQL** blade, click **Create** in order to continue to the configuration of the site.

	![Web App + SQL](Images/webapp-sql.png?raw=true "Web App + SQL")

	_Web App + SQL_

1. In the new **Web App + SQL** blade, select a **Resource Group** or create a new one. Then, click **App name**, provide an available **URL** (e.g. mywebapp-site_), select or create a new **AppService Plan**, then choose the pricing tier and location. Finally, click **OK**.

	![Web App configuration blade](Images/web-app-configuration-blade.png?raw=true "Web App configuration blade")

	_Web App configuration blade_

1. Next, select **Database** and create a new database, specifying the required information for the new server. Then, click **Select** in both **New server** and **New database** blades.

	![SQL Database configuration blade](Images/sql-database-configuration-blade.png?raw=true "SQL Database configuration blade")

	_SQL Database configuration blade_

1. Finally, in the **Web App + SQL** blade, click **Create** and wait until the Web App is created.

	> **Note:** By default, Microsoft Azure provides domains at _azurewebsites.net_ but also gives you the possibility to set custom domains using the Azure Portal. However, you can't use custom domains with a free Web App.

	> Microsoft Azure offers 5 plans for users to run their Web Apps - Free, Shared, Basic, Standard and Premium. In Free and Shared, all Web Apps run in a multi-tenant environment and have quotas for CPU, Memory, and Network usage. You can mix and match which sites are Free (strict quotas) vs. Shared (more flexible quotas). The maximum number of free Web Apps may vary with your plan. In Standard, you choose which Web Apps run on dedicated virtual machines that correspond to the standard Azure compute resources. You can change the mode of your Web App by clicking the **Pricing tier** tile in the **Usage** section of the corresponding App Service plan blade.

	> If you're using **Shared** or **Standard**, you'll be able to manage custom domains for your Web Apps by going to your Web App's **Settings** blade and clicking **Custom domains and SSL**.

	> ![Custom Domains and SLL](Images/manage-custom-domains.png?raw=true "Custom Domains and SSL")

1. Once the Web app is created, select it and click the **Browse** button to validate that the new Web app is running.

	![Browsing to the new Web app](Images/browsing-to-the-new-web-app.png?raw=true "Browsing to the new Web app")

	_Browsing to the new web app_

	![Web app running](Images/web-site-running.png?raw=true "Web app running")

	_Web app running_

<a name="Ex3Task2"></a>
#### Task 2 - Deploying to Staging Using Git ####

In this task, you'll create a staging deployment slot for your **Web App**. Then, you'll use Git to publish an application directly from your local computer to the staging environment of your Web App.

1. Go back to the [Azure Portal](https://portal.azure.com) and open your Web App.

1. Select **Scale Up (App Service Plan)** in the **Settings** blade of your web app. If your Web App is not on a **Standard** plan, select one by clicking the **Pricing tier** tile. For instance, select the **S1 Standard** plan.

	![Web App Pricing tier](Images/web-app-pricing-tiers.png?raw=true "Web App Pricing tier")

	_Web App Pricing tier_

1. Click **Deployment source** in the **Settings** blade of your web app and then choose **Local Git Repository** as source. Then, click **OK** to save the changes.

	![Configuring the Git Deployment](Images/configuring-the-git-deployment.png?raw=true "Configuring the Git Deployment")

	_Configuring the Git Deployment_

1.	Click **Deployment credentials** in the **Settings** blade of your web app to configure the user that will perform the deployments. Fill in the credentials and then click **Save** at the top.

1. Back in the **Settings** blade, select **Deployment slots**. Click the **Add Slot** command at the top and create a new slot named **staging**. Set your Web App as **Configuration Source** and then click **OK**.

	![Creating the staging deployment slot](Images/creating-deployment-slot.png?raw=true "Creating the staging deployment slot")

	_Creating the staging deployment slot_

1. After a few seconds you'll see a new slot with the name of your Web App followed by _**-staging**_. Select it to navigate to the *staging Web App* settings.

1. Repeat step **3** to configure continuous deployment in the *staging Web App* using **Local Git Repository** as source.

1. Now, click the _staging Web App_ **Settings** command, select **Properties** and then copy the **GIT URL** value. You will use it later in this exercise.

	![Copying the Git URL value](Images/coping-the-git-url-value.png?raw=true)

	_Copying the Git URL value_

1. Open a new **Git Bash** console and execute the following commands replacing the placeholders. Update the _[YOUR-APPLICATION-PATH]_ placeholder with the path to the solution located in the **Source\Ex3\Begin** folder of this lab.

	````GitBash
	cd "[YOUR-APPLICATION-PATH]"
	git init
	git config --global user.email "{username@example.com}"
	git config --global user.name "{your-user-name}"
	git add .
	git commit -m "Initial commit"
	````

1. Run the following command to push your site to the remote **Git** repository. Replace the placeholder with the URL you obtained from the Azure Portal.

	> **Note:** When you deploy content to the FTP host or GIT repository of a Microsoft Azure Web App you must authenticate using the **deployment credentials** that you configured in a previous step. If you do not know your deployment credentials you can easily reset them in the Azure Portal by opening the Web App **Settings** and clicking **Deployment credentials**. These deployment credentials are valid for all the Web Apps associated with your subscription.

	````GitBash
	git remote add azure [GIT-URL-STAGING-SLOT]
	git push azure master
	````

1. In order to verify that the site was successfully deployed, go back to the Azure Portal and select your Web App. Navigate to the staging slot of this Web App by clicking **Deployment slots** in the **Settings** blade and then selecting its row inside the **Deployments** blade.

1. In the *staging Web App*, verify that there is an **Active** deployment with your _"initial commit"_ in the **Deployment Source** blade.

	![Active deployment](Images/active-deployment.png?raw=true "Active deployment")

	_Active deployment_

1. Finally, click the **Browse** command to navigate to the deployed site.

	![Browse the staging Web App](Images/browse-web-app.png?raw=true "Browse the staging Web App")

	_Browse the staging Web App_

1. If the application was successfully deployed, you'll see the home page.

	> **Note:** The address URL of the deployed application contains the name of your Web App followed by _-staging_.

	![Application running in the staging environment](Images/application-running-in-staging.png?raw=true "Application running in the staging environment")

	_Application running in the staging environment_

1. If you wish to explore the application, click **Register** to configure a new user. Complete the account details by entering a user name, email address and password.

<a name="Ex3Task3"></a>
#### Task 3 - Promoting the Web App to Production ####

Now that you've verified that the site is working correctly in the deployment slot, you're ready to promote it to production. In this task, you'll swap the site in a staging slot with the production slot.

1. Go back to the Azure Portal and navigate to the *staging Web App*.

1. Click the **Swap** command at the top.

	![Swap to production](Images/swap-to-production.png?raw=true "Swap to production")

	_Swap to production_

1. Verify that the **Source** targets the staging slot and the **Destination** targets production, and then click **OK** to proceed with the swap operation. Azure will immediately swap the content of the production site with the content of the staging site.

	> **Note:** Some settings from the staged version will automatically be copied to the production version (e.g. connection string overrides, handler mappings, etc.) but others will stay the same (e.g. DNS endpoints, SSL bindings, etc.).

	![Confirming swap operation](Images/confirm-swap-operation.png?raw=true "Confirming swap operation")

	_Confirming swap operation_

1. Once the swap is complete, browse to your Web App in both slots. You can verify that the production site is now the one with the deployed application.

	> **Note:** You might need to refresh your browser to clear the cache. In Microsoft Edge, you can do this by pressing **CTRL+F5**.

	![Web App running in the production environment](Images/web-app-running-in-prod.png?raw=true "Web App running in the production environment")

	_Web App running in the production environment_

1. In the **GitBash** console, update the remote URL for the local Git repository to target the production slot. To do this, run the following command replacing the placeholders with your deployment username and the name of your Web App.

	> **Note:** In the following exercises, you'll push changes to the production site instead of staging just for the simplicity of the module. In a real-world scenario, it's recommended to verify the changes in the staging environment before promoting to production.

	````GitBash
	git remote set-url azure https://<your-user>@<your-web-site>.scm.azurewebsites.net:443/<your-web-site>.git
	````

<a name="Exercise4"></a>
### Exercise 4: Performing Deployment Rollback in Production ###

There are scenarios where you do not have a staging slot to perform hot swap between staging and production, for example, if you're working with **Web Apps** running in **Free** or **Shared** mode. In those scenarios, you should test your application in a testing environment (either locally or in a remote site) before deploying to production. However, it's possible that an issue not detected during the testing phase may arise in the production site. In this case, it's important to have a mechanism to easily switch to a previous and more stable version of the application as quickly as possible.

In **Azure Web Apps**, continuous deployment from source control makes this possible thanks to the **Redeploy** action available in the Azure Portal. Microsoft Azure keeps track of the deployments associated with the commits pushed to the repository and provides an option to redeploy your application using any of your previous deployments, at any time.

In this exercise, you'll perform a change to the code in the application that intentionally injects a _bug_. You will deploy the application to production to see the error, and then you'll take advantage of the redeploy feature to go back to the previous state.

<a name="Ex4Task1"></a>
#### Task 1 - Updating the application ####

In this task, you'll add a middleware in the **StartUp** class that configure the current culture based on the culture query string.

1. Open in Visual Studio the solution from the previous exercise (**Source\Ex3\Begin**).

1. In **Solution Explorer**, open the **StartUp.cs** file and add the following code snippet before the **app.UseMvc** method call in the **Configure** method. Note that the core intentionally injects a _bug_ using the **testCulture** variable instead of **cultureQuery**.

	(Code Snippet - _DeploymentAndAzure - Ex4 - CultureMiddware_)
	<!-- mark:1-19 -->
	````C#
    app.Use((context, next) =>
    {
        var cultureQuery = context.Request.Query["culture"];
        var testCulture = "test-culture";
        if (!string.IsNullOrWhiteSpace(cultureQuery))
        {
            var culture = new System.Globalization.CultureInfo(testCulture);
#if !DNXCORE50
            System.Threading.Thread.CurrentThread.CurrentCulture = culture;
            System.Threading.Thread.CurrentThread.CurrentUICulture = culture;
#else
            System.Globalization.CultureInfo.CurrentCulture = culture;
            System.Globalization.CultureInfo.CurrentUICulture = culture;
#endif
        }

        // Call the next delegate/middleware in the pipeline
        return next();
    });
	````

1. Press **CTRL + S** to save the changes.

<a name="Ex4Task2"></a>
#### Task 2 - Redeploying the application ####

In this task, you'll push the changes you made in the previous task to the repository, which will trigger a new deployment to the production environment. Then perform a rollback to the previous deployment from the Azure Portal.

1. Open a new **Git Bash** console to deploy the updated application to Azure Web Apps.

1. Execute the following commands to push the changes to Microsoft Azure. Update the _[YOUR-APPLICATION-PATH]_ placeholder with the path to the solution. You'll be prompted for your deployment password.

	````GitBash
	cd "[YOUR-APPLICATION-PATH]"
	git add .
	git commit -m "Added culture middleware"
	git push azure master
	````

1. Open **Microsoft Edge** and navigate to your site (e.g. _http://mywebapp-site.azurewebsites.net/_).

1. Test the culture middleware by adding a **culture** query parameter (e.g. _http://mywebapp-site.azurewebsites.net/?culture="en-us"_). The **HTTP 500 error** page should appear. Do not close the browser.

	![The HTTP 500 error page](Images/http-500-error.png?raw=true "The HTTP 500 error page")

	_The HTTP 500 error page_

1. In a new browser instance, navigate to the [Azure Portal](http://portal.azure.com) and sign in using the Microsoft account associated with your subscription.

1. Select **App Services** and click the Web app you created in **Exercise 3**.

1. Open the **Deployments** blade by clicking the **Deployment Source** option in the **Settings** blade. Notice that all the commits performed are listed in the deployment history.

	![List of existing deployments](Images/list-of-existing-deployments.png?raw=true "List of existing deployments")

	_List of existing deployments_

1. Select the previous commit and then click **Redeploy** on the command bar. When prompted to confirm, click **Yes**.

	![Redeploying the previous commit](Images/redeploying-previous-commit.png?raw=true "Redeploying the previous commit")

	_Redeploying the previous commit_

1. When the deployment completes, switch back to the browser instance with your site and press **CTRL + F5**. The site should work now without doing anything in particular for the _culture_ query parameter.

1. (Optional) Switch to the **Git Bash** console and execute the following commands to revert to the previous commit.

	> **Note:** These commands create a new commit that undoes all changes in the Git repository that were made in the bad commit. Azure will then redeploy the application using the new commit.

	````GitBash
	git revert HEAD --no-edit
	git push azure master
	````

<a name="Exercise5"></a>
### Exercise 5: Identity with Azure Active Directory ###

**Azure Active Directory** (Azure AD) is Microsoft’s multi-tenant cloud based directory and identity management service.

For IT Admins, Azure AD provides an affordable, easy to use solution to give employees and business partners single sign-on (SSO) access to thousands of cloud SaaS Applications like Office365, Salesforce.com, DropBox, and Concur.

For application developers, Azure AD lets you focus on building your application by making it fast and simple to integrate with a world class identity management solution used by millions of organizations around the world.

In this exercise, you'll create a new **Azure Active Directory** and then create a Web Application that uses it for authenticate your users.

<a name="Ex5Task1"></a>
#### Task 1 - Create an Azure Active Directory ####

In this task, you'll create a new **Azure Active Directory** in the Azure Portal as well as an administrator user that it will be used in the future to configure your applications.

1. Open the [Azure Classic Portal](manage.windowsazure.com/) and click **NEW**. Select **APP SERVICES > ACTIVE DIRECTORY > DIRECTORY > CUSTOM CREATE** in order to add a new **Azure Active Directory**.

	![Creating an Azure Active Directory](Images/creating-an-aad.png?raw=true "Creating an Azure Active Directory")

	_Creating an Azure Active Directory_

1. In the **Add directory** dialog box, select **Create new directory** under **DIRECTORY**, set the **NAME**, **DOMAIN NAME** and **COUNTRY OR REGION** fields and complete the process.

	![Add directory dialog box](Images/add-directory-dialog.png?raw=true "Add directory dialog box")

	_Add directory dialog box_

1. In the **active directory** section, select the new directory and select the one used for this demo.

1. Navigate to the **USERS** tab and add a new user by clicking the **ADD USER** button at the action bar.

1. In the **Tell us about this user** step of the **ADD USER** dialog box, select **New user in your organization** as **TYPE OF USER** and set _admin_ as **USER NAME**.

1. In the **user profile** step of the **ADD USER** dialog box, complete all the fields specifying _Global Admin_ as **ROLE**.

1. In the "Get temporary password" step, click **create** to get a temporary password.

1. Open an **InPrivate** instance of Microsoft Edge navigate to [https://login.microsoftonline.com](https://login.microsoftonline.com). Sign in with the new user (e.g. _admin@yourorganization.onmicrosoft.com_) using the temporary password and set a new password. Once updated, close the browser.


<a name="Ex5Task2"></a>
#### Task 2 - Adding a new website to an organization ####

Visual Studio tooling allows you to enable AAD authentication easily. All you need is to provide your tenant domain name and administrator credentials in the project creation wizard and the two-way trust between your AAD tenant and your web application is automatically configured.

In this task, you'll create a new web application taking advantage of the tooling to configure the application in your **Azure Active Directory**.

1. Open **Visual Studio Community 2015** and select **File | New | Project...** to create a new solution.

1. In the **New Project** dialog box, select **ASP.NET Web Application** under the **Visual C# | Web** tab, and make sure **.NET Framework 4.6** is selected. Name the project _MyWebApp_, choose a **Location** and click **OK**.

	![New ASP.NET Web Application project](Images/new-aspnet-web-application-project.png?raw=true "New ASP.NET Web Application project")

	_New ASP.NET Web Application project_

1. In the **New ASP.NET Project** dialog box, select the **Web Application** template under **ASP.NET 5 Templates**. Click **Change Authentication** to change the **Authentication** option to use **Work And School Accounts**.

	![Changing the authentication option](Images/changing-the-auth-op.png?raw=true "Changing the authentication option")

	_Creating a new project with the Web Application template_

1. In the **Change Authentication** dialog box, select **Work And School Accounts** to enable AAD authentication in your application. Provide your tenant **Domain** name (e.g. _yourorganization.onmicrosoft.com_) and click **OK**.

	![Change Authentication dialog box](Images/change-auth-dialog.png?raw=true "Change Authentication dialog box")

	_Selecting Work And School Accounts_

1. Sign in using an admin account for your organization (e.g.: _admin@yourorganization.onmicrosoft.com_) using the password that you configure during the previous exercise.

	![Sign in to your account dialog box](Images/sign-in-to-your-account.png?raw=true "Sign in to your account dialog box")

	_Sign in to your account dialog box_

1. Back in the **New ASP.NET Project** dialog box, make sure the _"Host in the cloud"_ option is not checked and click **OK**. By doing this, the Visual Studio tooling configures two-way trust relationship between your app and your AAD tenant. Your app is registered as a Relying Party in the tenant; and the tenant is configured as an Identity Provider for the app.

	![Completing the project creation](Images/creating-the-project.png?raw=true "Completing the project creation")

	_Completing the project creation_

1. Press **CTRL+F5** to run the web site. Browse to the site URL using an **InPrivate** instance of Microsoft Edge. If a certificate error is displayed, click **Continue to this website**.

1.	Sign in using the organization user account you created in the previous exercise (e.g.: _admin@yourorganization.onmicrosoft.com_) to verify that the project was correctly configured. Accept the permissions that the app required.

	![Signing in using one of the organization's user account](Images/signing-in-with-an-organization-user.png?raw=true "Signing in using one of the organization's user account")

	_Signing in using one of the organization's user account_

1. Switch to the _Azure Classic Portal_. Navigate to the **Active Directory** section, and navigate the **APPLICATIONS** tab. Filter them by the **Applications my company owns** to find the new application that was automatically created.

	![Your organizations applications](Images/your-organizations-apps.png?raw=true "Your organizations applications")

	_Your organizations applications_

<a name="Ex5Task3"></a>
#### Task 3 - Walk through the Web Application code ####

In this task, you'll walk through the code required to configure authentication using **Azure Active Directory** that is generated by the default templates in Visual Studio.

1. Open **Visual Studio Community 2015** and the **MyWebApp.sln** solution located in the **Source/Ex5/End** folder. Alternatively, you can continue with the solution that you obtained in the previous exercise.

1. Open the _Startup.cs_ file and locate the **Configure** method. In this method, you should find a call to the **UseOpenIdConnectAuthentication** method as shown in the following code snippet that configures Azure Active Directory in your Application.

	````C#
    app.UseOpenIdConnectAuthentication(options =>
    {
        options.AutomaticChallenge = true;
        options.ClientId = Configuration["Authentication:AzureAd:ClientId"];
        options.Authority = Configuration["Authentication:AzureAd:AADInstance"] + Configuration["Authentication:AzureAd:TenantId"];
        options.PostLogoutRedirectUri = Configuration["Authentication:AzureAd:PostLogoutRedirectUri"];
        options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    });
	````

1. Open the **secrets.json** file by right-clicking the **MyWebApp** project and selecting **Manage User Secrets**. In that file, you'll find the configurations values used in as parameter of the **UseOpenIdConnectAuthentication** method call.

1. Open the **project.json** file and locate the **Microsoft.AspNet.Authentication.OpenIdConnect** item inside the **dependencies** node. This dependency is the one used for configuring Azure Active Directory in your Application.

---

<a name="Summary" ></a>
## Summary ##

By completing this module, you should have:

- Created and deployed a Web Application to a Microsoft Azure Web App using Visual Studio
- Enabled Entity Framework Migrations with an existing model
- Updated the object model and database accordingly using Entity Framework Migrations
- Deployed to a Microsoft Azure Web App using Git
- Performed a rollback to a previous deployment using the Azure Portal
- Configured your application to use Azure Active Directory for authenticate your users

> **Note:** You can take advantage of the [Visual Studio Dev Essentials]( https://www.visualstudio.com/en-us/products/visual-studio-dev-essentials-vs.aspx) subscription in order to get everything you need to build and deploy your app on any platform.
