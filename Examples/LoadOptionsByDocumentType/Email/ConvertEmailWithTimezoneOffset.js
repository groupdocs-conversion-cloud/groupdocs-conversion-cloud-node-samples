"use strict";
class ConvertEmailWithTimezoneOffset {
	static async Run() {
		
		let settings = new conversion_cloud.ConvertSettings();
		settings.filePath = "Email/sample.msg";
		settings.format = "pdf";

		let loadOptions = new conversion_cloud.EmailLoadOptions();
		loadOptions.timeZoneOffset = "05:00:00";		

		settings.loadOptions = loadOptions;
		settings.outputPath = "converted";

		let result = await convertApi.convertDocument(new conversion_cloud.ConvertDocumentRequest(settings));

		console.log("Document converted: " + result[0].url);
	}
}
module.exports = ConvertEmailWithTimezoneOffset;
