"use strict";
class Conversion_Node_Delete_File {
	static Run() {
		var request = new groupdocs_conversion_cloud_1.DeleteFileRequest("conversions1/one-page1.docx", myStorage);
		fileApi.deleteFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'conversions1/one-page1.docx' deleted.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Delete_File;