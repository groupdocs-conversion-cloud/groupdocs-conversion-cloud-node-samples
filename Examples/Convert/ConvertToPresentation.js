"use strict";
class ConvertToPresentation {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "ppt";

		let convertOptions = new conversion_cloud.PresentationConvertOptions();
		convertOptions.fromPage = 2;
		convertOptions.pagesCount = 1;		

		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToPresentation;
