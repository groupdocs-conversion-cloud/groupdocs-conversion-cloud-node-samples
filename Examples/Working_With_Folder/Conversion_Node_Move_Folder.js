"use strict";
class Conversion_Node_Move_Folder {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.MoveFolderRequest("conversions1", "conversions/conversions1", myStorage, myStorage);
		folderApi.moveFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'conversions1' folder moved to 'conversions/conversions1'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Move_Folder;