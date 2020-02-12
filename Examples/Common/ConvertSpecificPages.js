"use strict";
class ConvertSpecificPages {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "pdf";

		let convertOptions = new conversion_cloud.PdfConvertOptions();
		convertOptions.pages = [1, 3];		

		settings.convertOptions = convertOptions
		settings.outputPath = "converted/two-pages.pdf";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertSpecificPages;
