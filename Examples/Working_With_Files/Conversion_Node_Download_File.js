"use strict";
class Conversion_Node_Download_File {
	static Run() {
		var request = new groupdocs_conversion_cloud_1.DownloadFileRequest("conversions/one-page.docx", myStorage);
		fileApi.downloadFile(request)
			.then(function (response) {
				console.log("Expected response type is Stream: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Download_File;