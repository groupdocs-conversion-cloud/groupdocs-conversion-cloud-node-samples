"use strict";
class Conversion_Node_Copy_Folder {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.CopyFolderRequest("conversions", "conversions1", myStorage, myStorage);
		folderApi.copyFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'conversions' folder copied as 'conversions1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Copy_Folder;