"use strict";
class Conversion_Node_Create_Folder {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.CreateFolderRequest("conversions", myStorage);
		folderApi.createFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'conversions' folder created.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Create_Folder;