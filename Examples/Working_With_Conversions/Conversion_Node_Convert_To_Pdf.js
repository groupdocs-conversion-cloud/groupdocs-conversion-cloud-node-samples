"use strict";
class Conversion_Node_Convert_To_Pdf {
	static Run() {

		var settings = new groupdocs_conversion_cloud_1.ConvertSettings();
		settings.storageName = myStorage;
		settings.filePath = "conversions/password-protected.docx";
		settings.format = "pdf";

		var loadOptions = new groupdocs_conversion_cloud_1.DocxLoadOptions();
		loadOptions.password = "password";

		settings.loadOptions = loadOptions;

		var convertOptions = new groupdocs_conversion_cloud_1.PdfConvertOptions();
		convertOptions.bookmarksOutlineLevel = 1;
		convertOptions.centerWindow = true;
		convertOptions.compressImages = false;
		convertOptions.displayDocTitle = true;
		convertOptions.dpi = 1024;
		convertOptions.expandedOutlineLevels = 1;
		convertOptions.fitWindow = false;
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;
		convertOptions.grayscale = true;
		convertOptions.headingsOutlineLevels = 1;
		convertOptions.imageQuality = 100;
		convertOptions.linearize = false;
		convertOptions.marginTop = 5;
		convertOptions.marginLeft = 5;
		convertOptions.password = "password";
		convertOptions.unembedFonts = true;
		convertOptions.removeUnusedStreams = true;
		convertOptions.removeUnusedObjects = true;
		convertOptions.removePdfaCompliance = false;
		convertOptions.height = 1024;

		settings.convertOptions = convertOptions;
		settings.outputPath = "converted/topdf";

		var request = new groupdocs_conversion_cloud_1.ConvertDocumentRequest(settings);
		convertApi.convertDocument(request)
			.then(function (response) {
				console.log("Document converted successfully: " + response[0].url);
			})
			.catch(function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Conversion_Node_Convert_To_Pdf;