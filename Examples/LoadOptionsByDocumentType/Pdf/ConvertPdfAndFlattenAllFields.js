"use strict";
class ConvertPdfAndFlattenAllFields {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Pdf/sample.pdf";
		settings.format = "docx";

		let loadOptions = new conversion_cloud.PdfLoadOptions();
		loadOptions.flattenAllFields = true;		

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertPdfAndFlattenAllFields;
