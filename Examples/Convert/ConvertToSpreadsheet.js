"use strict";
class ConvertToSpreadsheet {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "xlsx";

		let convertOptions = new conversion_cloud.SpreadsheetConvertOptions();
		convertOptions.fromPage = 2;
		convertOptions.pagesCount = 1;		
		convertOptions.zoom = 150;

		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToSpreadsheet;
