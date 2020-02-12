"use strict";
class ConvertEmailWithAttachments {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Email/embedded-image-and-attachment.eml";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.EmailLoadOptions();
		loadOptions.convertAttachments = true;		

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertEmailWithAttachments;
