"use strict";
class ConvertEmailWithAlteringFieldsVisibility {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Email/sample.msg";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.EmailLoadOptions();
		loadOptions.displayHeader = false;
		loadOptions.displayFromEmailAddress = false;
		loadOptions.displayToEmailAddress = false;
		loadOptions.displayCcEmailAddress = false;
		loadOptions.displayBccEmailAddress = false;

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertEmailWithAlteringFieldsVisibility;
