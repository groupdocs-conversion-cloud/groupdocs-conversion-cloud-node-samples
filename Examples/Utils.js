"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new conversion_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new conversion_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("Cad/Sample.dwg");
		await this.UploadTestFile("Email/sample.msg");
		await this.UploadTestFile("Email/embedded-image-and-attachment.eml");
		await this.UploadTestFile("Note/sample.one");
		await this.UploadTestFile("Pdf/sample.pdf");
		await this.UploadTestFile("Presentation/with_hidden_page.pptx");
		await this.UploadTestFile("Presentation/with_notes.pptx");
		await this.UploadTestFile("Presentation/uses-custom-font.pptx");
		await this.UploadTestFile("font/ttf/foo.ttf");
		await this.UploadTestFile("Spreadsheet/sample.csv");
		await this.UploadTestFile("Spreadsheet/sample.xlsx");
		await this.UploadTestFile("Spreadsheet/with_hidden_sheet.xlsx");
		await this.UploadTestFile("Text/sample.txt");
		await this.UploadTestFile("WordProcessing/four-pages.docx");
		await this.UploadTestFile("WordProcessing/password-protected.docx");
		await this.UploadTestFile("WordProcessing/with_tracked_changes.docx");		
	}	
}

module.exports = Utils;
