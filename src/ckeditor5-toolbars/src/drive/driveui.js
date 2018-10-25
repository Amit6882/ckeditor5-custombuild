import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
import driveIcon from "../../theme/icons/drive.svg";
import DriveCommand from "./driveCommand";
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const DRIVE = "drive";
let count = 0;
export default class DriveUI extends Plugin {
	/**
	 * @inheritDoc
	 */

	init() {
		console.log(count++);
		console.log("DriveUI was initialized");

		if (count == 1) {
			window.onload = handleClientLoad();
		}
		console.log("handleClientLoad initialized");
		//handleClientLoad();
		// Google drive code implementation
		var CLIENT_ID =
			"606662169925-d1nina39aght307e62ia9jngh7q5kse5.apps.googleusercontent.com";
		var API_KEY = "AIzaSyC-8efBIhRGhqvIE-EoevkLIwQNsfrQ2tc";
		var DISCOVERY_DOCS = [
			"https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
		];
		var SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";
		var signoutButton = document.getElementById("signout_button");
		var pickerApiLoaded = false;
		var oauthToken;
		var appId = "162041325332";
		var developerKey = "AIzaSyDFHj-ar92H_K4y5-880Jd2Lf74eDETKC8";

		function handleClientLoad() {
			console.log("Auth and Picker Initialize!");
			gapi.load("client:auth2", initClient);
			gapi.load("picker", { callback: onPickerApiLoad });
		}

		function initClient() {
			console.log("initClient");
			gapi.client
				.init({
					apiKey: API_KEY,
					clientId: CLIENT_ID,
					discoveryDocs: DISCOVERY_DOCS,
					scope: SCOPES
				})
				.then(function() {
					// Listen for sign-in state changes.
					console.log("initClient callback");
					gapi.auth2
						.getAuthInstance()
						.currentUser.listen(handleAuthResult);
					gapi.auth2
						.getAuthInstance()
						.isSignedIn.listen(updateSigninStatus);
					// Handle the initial sign-in state.
					updateSigninStatus(
						gapi.auth2.getAuthInstance().isSignedIn.get()
					);
				});
		}

		function onPickerApiLoad() {
			pickerApiLoaded = true;
		}

		function updateSigninStatus(isSignedIn) {
			if (isSignedIn) {
				console.log("updateSigninStatus");
				//   createPicker();
			}
		}

		function handleAuthResult(currentUser) {
			console.log("handleAuthResult");
			if (currentUser.Zi.access_token) {
				oauthToken = currentUser.Zi.access_token;
				console.log("oauthToken - ", oauthToken);
				createPicker();
			}
		}

		function appendPre(message) {
			var pre = document.getElementById("content");
			//var textContent = document.createTextNode(message + '\n');
			pre.innerHTML = message;
		}

		// Create and render a Picker object for searching images.
		function createPicker() {
			if (pickerApiLoaded && oauthToken) {
				console.log("createPicker - ", oauthToken);
				var view = new google.picker.View(google.picker.ViewId.DOCS);
				//view.setMimeTypes("image/png,image/jpeg,image/jpg, application/vnd.google-apps.document, text/plain");
				view.setMimeTypes("application/vnd.google-apps.document");
				var picker = new google.picker.PickerBuilder()
					.enableFeature(google.picker.Feature.NAV_HIDDEN)
					.enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
					.setAppId(appId)
					.setOAuthToken(oauthToken)
					.addView(view)
					.addView(new google.picker.DocsUploadView())
					.setDeveloperKey(developerKey)
					.setCallback(pickerCallback)
					.build();
				picker.setVisible(true);
			}
		}

		function pickerCallback(data) {
			console.log("pickerCallback", data);
			if (data.action == google.picker.Action.PICKED) {
				var fileId = data.docs[0].id;
				//alert('The user selected: ' + fileId);
				gapi.client.drive.files
					.export({
						fileId: fileId,
						mimeType: "text/html"
					})
					.then(function(response) {
						console.log(response);
						var rawHtml = response.body;
						// const html = rawHtml.replace(/<(?!br\s*\/?)[^>]+>/g, '');
						// console.log(html);
						var pre = document.getElementsByClassName('ck-content');
						pre[0].append(rawHtml);
					});
			}
		}

		// Google drive implementation ends here

		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add(DRIVE, locale => {
			const view = new ButtonView(locale);

			// Create DRIVE command.
			editor.commands.add(DRIVE, new DriveCommand(this.editor, view));

			// Set the Ctrl+D keystroke.
			editor.keystrokes.set("CTRL+D", DRIVE);

			const command = editor.commands.get(DRIVE);

			view.set({
				label: t("Drive"),
				icon: driveIcon,
				keystroke: "CTRL+D",
				tooltip: true
			});

			view.bind("isOn", "isEnabled").to(command, "value", "isEnabled");
			// Execute command.
			this.listenTo(view, "execute", () => editor.execute(DRIVE));

			return view;
		});
	}
}
