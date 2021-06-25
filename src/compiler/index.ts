import * as vscode from 'vscode';
import * as fs from 'fs-extra'

export const compile = async () => {
    if (vscode.workspace.workspaceFolders !== undefined) {
        const currentPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
        const exists = await fs.pathExists(`${currentPath}/Bodgefile`)
        
        if(exists){
            const file = await fs.readFile(`${currentPath}/Bodgefile`)
            console.log(JSON.parse(file.toString()))
        } else {
            vscode.window.showErrorMessage(`Bodge Designer: Bodgefile doesn't exist in this folder. Open Bodge Designer to create it."}`);
        }

    } else {
        vscode.window.showErrorMessage(
            'Bodge: Working folder not found, open a folder an try again'
        );
    }
}