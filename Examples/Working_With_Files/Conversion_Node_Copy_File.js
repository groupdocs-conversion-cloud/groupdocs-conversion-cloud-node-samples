"use strict";
class Conversion_Node_Copy_File {
	static Run() {
		var request = new groupdocs_conversion_cloud_1.CopyFileRequest("conversions/one-page1.docx", "conversions/one-page-copied.docx", myStorage, myStorage);
		fileApi.copyFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'conversions/one-page1.docx' file copied as 'conversions/one-page-copied.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Copy_File;