// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

class LineagePanelViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'sqlmeshflow.lineagePanelView';
	private _view?: vscode.WebviewView;

	constructor(private readonly _extensionUri: vscode.Uri) {}

	resolveWebviewView(
		view: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken
	) {
		this._view = view;
		view.webview.options = {
			enableScripts: true,
			localResourceRoots: [this._extensionUri]
		};
		view.webview.html = getLineagePanelHtml();
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sqlmeshflow" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('sqlmeshflow.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const message = 'Hello you!';
		vscode.window.showInformationMessage(message);
	});

	context.subscriptions.push(disposable);

	// Register the Lineage Panel ViewProvider for the panel area
	const provider = new LineagePanelViewProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(LineagePanelViewProvider.viewType, provider)
	);
}

function getLineagePanelHtml(): string {
	return `
		<!DOCTYPE html>
		<html lang=\"en\">
		<head>
			<meta charset=\"UTF-8\">
			<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
			<title>Lineage Panel</title>
		</head>
		<body>
			<h2>Lineage Panel Placeholder</h2>
			<p>The interactive lineage graph will appear here.</p>
		</body>
		</html>
	`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
