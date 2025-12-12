"use strict";
class ConvertToWordProcessing {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Pdf/sample.pdf";
		settings.format = "docx";

		let loadOptions = new conversion_cloud.PdfLoadOptions();
		loadOptions.password = "";
		loadOptions.hidePdfAnnotations = true;
		loadOptions.removeEmbeddedFiles = false;
		loadOptions.flattenAllFields = true;

		settings.loadOptions = loadOptions;
		settings.convertOptions = new conversion_cloud.WordProcessingConvertOptions();
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertToWordProcessing;
