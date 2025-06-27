// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

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

	// Register the Lineage Panel command
	let lineagePanelDisposable = vscode.commands.registerCommand('sqlmeshflow.showLineagePanel', () => {
		const panel = vscode.window.createWebviewPanel(
			'sqlmeshflowLineage',
			'Lineage Panel',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);
		panel.webview.html = getLineagePanelHtml();
	});

	context.subscriptions.push(lineagePanelDisposable);
}

function getLineagePanelHtml(): string {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
