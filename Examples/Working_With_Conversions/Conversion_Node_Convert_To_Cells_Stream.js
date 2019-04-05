"use strict";
class Conversion_Node_Convert_To_Cells_Stream {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/password-protected.docx";
		settings.format = "xlsx";

		var loadOptions = new groupdocs_conversion_cloud_1.DocxLoadOptions();
		loadOptions.password = "password";

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.XlsxConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;
		convertOptions.password = "password";
		convertOptions.usePdf = false;

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
module.exports = Conversion_Node_Convert_To_Cells_Stream;