"use strict";
class ConverToPdfDirect {
	static async Run() {
		
		let file = fs.readFileSync('./Resources/WordProcessing/four-pages.docx');

		let request = new conversion_cloud.ConvertDocumentDirectRequest("pdf", file);

		let result = await convertApi.convertDocumentDirect(request);

		console.log("Document converted: " + result.length);
	}
}
module.exports = ConverToPdfDirect;
