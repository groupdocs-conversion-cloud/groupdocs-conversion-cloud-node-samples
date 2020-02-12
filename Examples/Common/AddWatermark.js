"use strict";
class AddWatermark {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "WordProcessing/four-pages.docx";
		settings.format = "pdf";

		let watermark = new conversion_cloud.WatermarkOptions();		
		watermark.text = "Sample watermark";
		watermark.color = "Red";
		watermark.width = 100;
		watermark.height = 100;
		watermark.background = true;
		
		let convertOptions = new conversion_cloud.PdfConvertOptions();
		convertOptions.watermarkOptions = watermark;

		settings.convertOptions = convertOptions
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = AddWatermark;
