Template.uploadPathway.events({
  "submit #upload-pathway": function (event, template) {

    console.log("submit button hit");

    event.preventDefault(); // prevent default browser form submit

    var pathwayFile = event.target.pathwayFile.files[0];

    UploadedFiles.insert(new FS.File(pathwayFile), function (error, fileObj) {
      console.log("done uploading the file");
      Meteor.call("parseFile", fileObj._id, function () {
        console.log("done parsing file");
      });
    });
  }
});
