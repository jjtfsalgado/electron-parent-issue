// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


alert("hey")

const electron = require("electron")

const {remote} = electron

function myFunction(){
	return alert("buuuuuuuu")
}


function createChild(){
	const win = new remote.BrowserWindow({});
}
