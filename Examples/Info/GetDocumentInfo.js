"use strict";
class GetDocumentInfo {
	static async Run() {
		let request = new conversion_cloud.GetDocumentMetadataRequest();
		request.filePath = "WordProcessing/four-pages.docx";
		request.storageName = myStorage;

		let response = await infoApi.getDocumentMetadata(request);
		console.log("GetDocumentInfo: Page Count = " + response.pageCount);
	}
}
module.exports = GetDocumentInfo;
