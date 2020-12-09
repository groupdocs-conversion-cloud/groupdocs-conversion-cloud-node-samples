"use strict";
global.conversion_cloud = require("groupdocs-conversion-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-conversion-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Conversion Cloud API Examples
//// ***********************************************************

//TODO: Get your ClientId and ClientSecret at https://dashboard.groupdocs.cloud (free registration is required).

 global.clientId = "XXXX-XXXX-XXXX-XXXX";
 global.clientSecret = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new conversion_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct ConvertApi
global.convertApi = conversion_cloud.ConvertApi.fromConfig(config);

// construct InfoApi
global.infoApi = conversion_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = conversion_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = conversion_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Info API Examples
    await require('./Info/GetSupportedConversions').Run();    
    await require('./Info/GetDocumentInfo').Run();

    // Document conversion examples with conversion options
    await require('./Convert/ConvertToHtml').Run();
    await require('./Convert/ConvertToImage').Run();
    await require('./Convert/ConvertToWordProcessing').Run();
    await require('./Convert/ConvertToPdf').Run();
    await require('./Convert/ConverToPdfResponseBody').Run();
    await require('./Convert/ConvertToPresentation').Run();
    await require('./Convert/ConvertToSpreadsheet').Run();
    await require('./Convert/ConverToPdfDirect').Run();

    // Document conversion examples with common options
    await require('./Common/AddWatermark').Run();
    await require('./Common/ConvertConsecutivePages').Run();
    await require('./Common/ConvertSpecificPages').Run();

    // Document conversion examples with loading options
    await require('./LoadOptionsByDocumentType/Cad/ConvertCadAndSpecifyLoadOptions').Run();
    await require('./LoadOptionsByDocumentType/Csv/ConvertCsvByConvertingDateTimeAndNumericData').Run();
    await require('./LoadOptionsByDocumentType/Csv/ConvertCsvBySpecifyingDelimiter').Run();
    await require('./LoadOptionsByDocumentType/Csv/ConvertCsvBySpecifyingEncoding').Run();
    await require('./LoadOptionsByDocumentType/Email/ConvertEmailWithAlteringFieldsVisibility').Run();
    await require('./LoadOptionsByDocumentType/Email/ConvertEmailWithAttachments').Run();
    await require('./LoadOptionsByDocumentType/Email/ConvertEmailWithTimezoneOffset').Run();
    await require('./LoadOptionsByDocumentType/Email/ConvertEmailWithFieldLabels').Run();
    await require('./LoadOptionsByDocumentType/Email/ConvertEmailWithOriginalDate').Run();
    await require('./LoadOptionsByDocumentType/Html/ConvertHtmlWithPageNumbering').Run();
    await require('./LoadOptionsByDocumentType/Note/ConvertNoteBySpecifyingFontSubstitution').Run();
    await require('./LoadOptionsByDocumentType/Pdf/ConvertPdfAndFlattenAllFields').Run();
    await require('./LoadOptionsByDocumentType/Pdf/ConvertPdfAndHideAnnotations').Run();
    await require('./LoadOptionsByDocumentType/Pdf/ConvertPdfAndRemoveEmbeddedFiles').Run();
    await require('./LoadOptionsByDocumentType/Presentation/ConvertPresentationByHidingComments').Run();
    await require('./LoadOptionsByDocumentType/Presentation/ConvertPresentationBySpecifyingFontSubstitution').Run();
    await require('./LoadOptionsByDocumentType/Presentation/ConvertPresentationWithHiddenSlidesIncluded').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetAndHideComments').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetByShowingGridLines').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetBySkippingEmptyRowsAndColumns').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetBySpecifyingFontsubstitution').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetBySpecifyingRange').Run();
    await require('./LoadOptionsByDocumentType/Spreadsheet/ConvertSpreadsheetWithHiddenSheetsIncluded').Run();
    await require('./LoadOptionsByDocumentType/Txt/ConvertTxtByControllingLeadingSpacesBehavior').Run();
    await require('./LoadOptionsByDocumentType/Txt/ConvertTxtByControllingTrailingSpacesBehavior').Run();
    await require('./LoadOptionsByDocumentType/Txt/ConvertTxtBySpecifyingEncoding').Run();
    await require('./LoadOptionsByDocumentType/WordProcessing/ConvertWordProcessingByHidingComments').Run();
    await require('./LoadOptionsByDocumentType/WordProcessing/ConvertWordProcessingByHidingTrackedChanges').Run();
    await require('./LoadOptionsByDocumentType/WordProcessing/ConvertWordProcessingBySpecifyingFontSubstitution').Run();

}

examples();
