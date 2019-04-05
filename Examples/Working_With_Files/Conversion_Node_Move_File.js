"use strict";
class Conversion_Node_Move_File {
	static Run() {
		var request = new groupdocs_conversion_cloud_1.MoveFileRequest("conversions/one-page1.docx", "conversions1/one-page1.docx", myStorage, myStorage);
		fileApi.moveFile(request)
			.then(function (response) {
				console.log("Expected response type is Void: 'conversions/one-page1.docx' file moved to 'conversions1/one-page1.docx'.");
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Move_File;