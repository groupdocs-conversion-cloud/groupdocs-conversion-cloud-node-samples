"use strict";
class ConverToPdfDirectOptions {
	static async Run() {
		
		let file = fs.readFileSync('./Resources/WordProcessing/password-protected.docx');
		let loadOptions = new conversion_cloud.DocxLoadOptions();
		loadOptions.format = "docx";
		loadOptions.password = "password";
		let request = new conversion_cloud.ConvertDocumentDirectRequest("pdf", file, undefined, undefined, loadOptions);

		let result = await convertApi.convertDocumentDirect(request);

		console.log("Document converted: " + result.length);
	}
}
module.exports = ConverToPdfDirectOptions;
