
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class DriveCommand extends Command {

	constructor(editor, view) {
		super(editor );
		this.e=editor;
		this.view=view;
	}
	execute( options = {} ) {

		console.log("Google Drive Implementation");
		// var script = document.createElement('script');
		// script.type = 'text/javascript';
		// script.src = "https://apis.google.com/js/api.js";
		// document.body.appendChild(script);
		// handleClientLoad();

	// console.log('authorizeButton - clicked')
    //   // Client ID and API key from the Developer Console
	//   //var CLIENT_ID = '606662169925-mk151o5qhpc5oib4suu6c0d3a1jhkuc4.apps.googleusercontent.com';
	//   var CLIENT_ID = '606662169925-d1nina39aght307e62ia9jngh7q5kse5.apps.googleusercontent.com'
    //   var API_KEY = 'AIzaSyC-8efBIhRGhqvIE-EoevkLIwQNsfrQ2tc';
    //   // Array of API discovery doc URLs for APIs used by the quickstart
    //   var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    //   // Authorization scopes required by the API; multiple scopes can be
    //   // included, separated by spaces.
    //   var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
    // //   var authorizeButton = document.getElementById('authorize_button');
    //   var signoutButton = document.getElementById('signout_button');
    //   var pickerApiLoaded = false;
    //   var oauthToken;
    //   var appId = "162041325332";
    //   var developerKey = 'AIzaSyDFHj-ar92H_K4y5-880Jd2Lf74eDETKC8';

      /**
       *  On load, called to load the auth2 library and API client library.
       */
    //   function handleClientLoad() {
	// 	console.log('Auth and Picker Initialize!');
    //     gapi.load('client:auth2', initClient);
    //     gapi.load('picker', {'callback': onPickerApiLoad});
    //   }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
    //   function initClient() {
	// 	  console.log('initClient');
    //     gapi.client.init({
    //       apiKey: API_KEY,
    //       clientId: CLIENT_ID,
    //       discoveryDocs: DISCOVERY_DOCS,
    //       scope: SCOPES
    //     }).then(function () {
    //       // Listen for sign-in state changes.
    //       gapi.auth2.getAuthInstance().currentUser.listen(handleAuthResult);
    //       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    //       // Handle the initial sign-in state.
    //       updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    //     //   authorizeButton.onclick = handleAuthClick;
    //     //   signoutButton.onclick = handleSignoutClick;
    //     });
    //   }

    // function onPickerApiLoad() {
    //   pickerApiLoaded = true;
    // }

    // function handleAuthResult(currentUser) {
	// 	console.log('handleAuthResult');
    //   if (currentUser.Zi.access_token) {
	// 	oauthToken = currentUser.Zi.access_token;
	// 	console.log('oauthToken - ', oauthToken);
    //   }
    // }
      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
    //   function updateSigninStatus(isSignedIn) {
    //     if (isSignedIn) {
	// 		console.log('updateSigninStatus');
    //       createPicker();
    //     }
    //   }

      /**
       *  Sign in the user upon button click.
       */
	  handleAuthClick();
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
    //   function handleSignoutClick(event) {
    //     gapi.auth2.getAuthInstance().signOut();
    //   }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
    //   function appendPre(message) {
    //     var pre = document.getElementById('content');
    //     //var textContent = document.createTextNode(message + '\n');
    //     pre.innerHTML = message;
    //   }

      // Create and render a Picker object for searching images.
    // function createPicker() {
    //   if (pickerApiLoaded && oauthToken) {
    //     console.log('createPicker - ',oauthToken);
    //     var view = new google.picker.View(google.picker.ViewId.DOCS);
    //     //view.setMimeTypes("image/png,image/jpeg,image/jpg, application/vnd.google-apps.document, text/plain");
    //     view.setMimeTypes("application/vnd.google-apps.document");
    //     var picker = new google.picker.PickerBuilder()
    //         .enableFeature(google.picker.Feature.NAV_HIDDEN)
    //         .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
    //         .setAppId(appId)
    //         .setOAuthToken(oauthToken)
    //         .addView(view)
    //         .addView(new google.picker.DocsUploadView())
    //         .setDeveloperKey(developerKey)
    //         .setCallback(pickerCallback)
    //         .build();
    //      picker.setVisible(true);
    //   }
    // }

    // A simple callback implementation.
    // function pickerCallback(data) {
	// 	console.log('pickerCallback', data);
    //   if (data.action == google.picker.Action.PICKED) {
    //     var fileId = data.docs[0].id;
    //     //alert('The user selected: ' + fileId);
    //     gapi.client.drive.files.export({
    //       'fileId': fileId,
    //       'mimeType': 'text/html'
    //     }).then(function(response) {
    //         console.log(response);
    //         var file = response.body;
    //         var temp = document.createElement("div");
    //         temp.innerHTML = file;
    //         var sanitized = file.textContent || file.innerText;

    //         appendPre('Files:');
    //         appendPre(file);
    //     });
    //   }
    // }
	};
}
