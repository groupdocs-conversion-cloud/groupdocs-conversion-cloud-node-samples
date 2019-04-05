"use strict";
class Conversion_Node_Delete_Folder {
	static Run() {
		
		var request = new groupdocs_conversion_cloud_1.DeleteFolderRequest("conversions/conversions1", myStorage, true);
		folderApi.deleteFolder(request)
			.then(function () {
				console.log("Expected response type is Void: 'conversions/conversions1' folder deleted recursively.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Delete_Folder;