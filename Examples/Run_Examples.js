"use strict";
global.groupdocs_conversion_cloud_1 = require("groupdocs-conversion-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-conversion-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Conversion Cloud API Examples
//// ***********************************************************
//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXX-XXXXX-XXXXX";
global.appKey = "XXXXXXXXXX";
global.myStorage = "XXXXX";

// construct ConversionApi
global.conversionApi = groupdocs_conversion_cloud_1.ConversionApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = groupdocs_conversion_cloud_1.StorageApi.fromKeys(appSid, appKey);

// construct FolderApi
global.folderApi = groupdocs_conversion_cloud_1.FolderApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = groupdocs_conversion_cloud_1.FileApi.fromKeys(appSid, appKey);

// Uploading sample test files from local to storage under folder 'conversions'
console.log("Executing Upload Test Files...");
require('./Common_Utilities/Utils').Upload_Test_File();

// ******* Execute Examples *******
console.log("*** Executing examples...");
// ******* Execute Examples *******

			//// ***********************************************************
			///// ***** WORKING WITH STORAGE *****
			//// ***********************************************************

// Is Storage Exist
//require('./Working_With_Storage/Conversion_Node_Storage_Exist').Run();

// Get Get Disc Usage
//require('./Working_With_Storage/Conversion_Node_Get_Disc_Usage').Run();

// Get File Versions
//require('./Working_With_Storage/Conversion_Node_Get_File_Versions').Run();

// Is Object Exists
//require('./Working_With_Storage/Conversion_Node_Object_Exists').Run();


			//// ***********************************************************
			//// ***** WORKING WITH FOLDER *****
			//// ***********************************************************

// Create Folder
//require('./Working_With_Folder/Conversion_Node_Create_Folder').Run();

// Copy Folder
//require('./Working_With_Folder/Conversion_Node_Copy_Folder').Run();

// Move Folder
//require('./Working_With_Folder/Conversion_Node_Move_Folder').Run();

// Delete Folder
//require('./Working_With_Folder/Conversion_Node_Delete_Folder').Run();

// Get Files List
//require('./Working_With_Folder/Conversion_Node_Get_Files_List').Run();


			//// ***********************************************************
			//// ***** WORKING WITH FILES *****
			//// ***********************************************************

// Upload File
//require('./Working_With_Files/Conversion_Node_Upload_File').Run();

// Copy File
//require('./Working_With_Files/Conversion_Node_Copy_File').Run();

// Move File
//require('./Working_With_Files/Conversion_Node_Move_File').Run();

// Delete File
//require('./Working_With_Files/Conversion_Node_Delete_File').Run();

// Download_File
//require('./Working_With_Files/Conversion_Node_Download_File').Run();


			//// ***********************************************************
			//// ***** WORKING WITH SUPPORTED FORMATS *****
			//// ***********************************************************

// Get All Supported Formats
require('./Supported_File_Formats/Conversion_Node_Get_All_Supported_Formats').Run();

// Get All Supported Formats For Provided Document
//require('./Supported_File_Formats/Conversion_Node_Get_All_Supported_Formats_For_Document').Run();

// Get All Supported Formats For Provided Extension
//require('./Supported_File_Formats/Conversion_Node_Get_All_Supported_Formats_For_Extension').Run();

			//// ***********************************************************
			//// ***** WORKING WITH CONVERSIONS *****
			//// ***********************************************************

// Quick Convert to Any Desired Output Format
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Any_Format').Run("jpg", new groupdocs_conversion_cloud_1.JpgConvertOptions());

// Quick Convert to Any Desired Output Format with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Any_Format_Stream').Run("jpg", new groupdocs_conversion_cloud_1.JpgConvertOptions());

// Convert to Cells with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Cells').Run();

// Convert to Cells with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Cells_Stream').Run();

// Convert to Html with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Html').Run();

// Convert to Html with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Html_Stream').Run();

// Convert to image/s with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Images').Run();

// Convert to Images with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Images_Stream').Run();

// Convert to PDF with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Pdf').Run();

// Convert to PDF with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Pdf_Stream').Run();

// Convert to Slides with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Slides').Run();

// Convert to Slides with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Slides_Stream').Run();

// Convert to Words with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Words').Run();

// Convert to Words with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Words_Stream').Run();

// Convert to Text with load and save options
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Text').Run();

// Convert to Text with load and save options with output as iostream
//require('./Working_With_Conversions/Conversion_Node_Convert_To_Text_Stream').Run();

