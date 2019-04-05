"use strict";
class Conversion_Node_Convert_To_Words_Stream {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "converted/topdf/password-protected.pdf";
		settings.format = "docx";

		var loadOptions = new groupdocs_conversion_cloud_1.PdfLoadOptions();
		loadOptions.password = "password";
		loadOptions.hidePdfAnnotations = true;
		loadOptions.removeEmbeddedFiles = false;
		loadOptions.flattenAllFields = true;

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.DocxConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;

		settings.convertOptions = convertOptions;
		settings.outputPath = null; // set OutputPath as null will result the output as document IOStream

		var request = new groupdocs_conversion_cloud_1.ConvertDocumentRequest(settings);
		conversionApi.convertDocumentDownload(request)
			.then(function (response) {
				console.log("Document converted successfully: " + response.length);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Convert_To_Words_Stream;