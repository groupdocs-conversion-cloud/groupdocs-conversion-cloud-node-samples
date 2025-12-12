"use strict";
class ConvertToImage {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "jpg";

		let convertOptions = new conversion_cloud.ImageConvertOptions();
		convertOptions.fromPage = 1;
		convertOptions.pagesCount = 2;		

		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToImage;
