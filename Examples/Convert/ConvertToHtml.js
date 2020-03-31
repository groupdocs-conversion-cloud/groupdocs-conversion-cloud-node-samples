"use strict";
class ConvertToHtml {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "html";

		let convertOptions = new conversion_cloud.HtmlConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 1;
		convertOptions.fixedLayout = true;
		convertOptions.fixedLayoutShowBorders = true;

		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToHtml;
