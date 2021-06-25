import * as vscode from 'vscode';
import { DesignerPanel } from './DesignerPanel';

import { compile } from './compiler';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bodge-designer" is now active!');
	context.subscriptions.push(
		vscode.commands.registerCommand('bodge.compile', compile)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('bodge.designer', () => {
			DesignerPanel.createOrShow(context.extensionUri)
		})
	);
}

export function deactivate() {}
