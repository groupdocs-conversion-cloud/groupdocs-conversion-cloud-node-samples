"use strict";
class Conversion_Node_Convert_To_Any_Format_Stream {
	static Run(convertToFormat, convertOptions) {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/sample.docx";
		settings.format = convertToFormat;
		settings.convertOptions = convertOptions;
		settings.outputPath = null; // set OutputPath as null will result the output as document IOStream

		var request = new groupdocs_conversion_cloud_1.ConvertDocumentRequest(settings);
		convertApi.convertDocumentDownload(request)
			.then(function (response) {
				console.log("Document converted successfully: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Convert_To_Any_Format_Stream;