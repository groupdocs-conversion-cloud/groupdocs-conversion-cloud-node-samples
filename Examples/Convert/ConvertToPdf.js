"use strict";
class ConvertToPdf {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/password-protected.docx";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.DocxLoadOptions();
		loadOptions.password = "password";

		settings.loadOptions = loadOptions;
		let convertOptions = new conversion_cloud.PdfConvertOptions();
		convertOptions.bookmarksOutlineLevel = 1;
		convertOptions.centerWindow = true;
		convertOptions.compressImages = false;
		convertOptions.displayDocTitle = true;
		convertOptions.dpi = 1024;
		convertOptions.expandedOutlineLevels = 1;
		convertOptions.fitWindow = false;
		convertOptions.fromPage = 1;
		convertOptions.grayscale = false;
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
		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToPdf;
