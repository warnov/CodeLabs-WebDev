(function (window) {
    function AddToastNotification() {
        var notifications = window.Windows.UI.Notifications;

        // Generate the toast notification template
        var template = notifications.ToastTemplateType.toastText01;
        var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);

        // Set the toast text
        var toastTextElements = toastXml.getElementsByTagName("text");
        toastTextElements[0].appendChild(toastXml.createTextNode("Order App Toast notification!"));

        // Create the toast notification based on the XML content you've specified
        var toast = new notifications.ToastNotification(toastXml);

        // Send the toast notification
        var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
        toastNotifier.show(toast);
    }

    function AddLiveTile() {
        var notifications = window.Windows.UI.Notifications;

        var template = notifications.TileTemplateType.tileWide310x150Text01;
        var tileXml = notifications.TileUpdateManager.getTemplateContent(template);

        // Supply text content for your notification
        var tileTextAttributes = tileXml.getElementsByTagName("text");
        tileTextAttributes[0].appendChild(tileXml.createTextNode("OrderApp"));
        tileTextAttributes[1].appendChild(tileXml.createTextNode("Live tile"));

        // Include notification bindings for multiple tile sizes in the payload
        var squareTemplate = notifications.TileTemplateType.tileSquare150x150Text04;
        var squareTileXml = notifications.TileUpdateManager.getTemplateContent(squareTemplate);

        var squareTileTextAttributes = squareTileXml.getElementsByTagName("text");
        squareTileTextAttributes[0].appendChild(squareTileXml.createTextNode("OrderApp - Tile notification!"));

        var node = tileXml.importNode(squareTileXml.getElementsByTagName("binding").item(0), true);
        tileXml.getElementsByTagName("visual").item(0).appendChild(node);

        // Create the notification based on the XML content you've specified
        var tileNotification = new notifications.TileNotification(tileXml);

        // Set an expiration time for the notification
        var currentTime = new Date();
        tileNotification.expirationTime = new Date(currentTime.getTime() + 600 * 1000);

        // Send the notification to the app tile
        notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
    }

    if (window.Windows) {
        AddToastNotification();
        AddLiveTile();
    }
}(window));
