const { PDFDocument } = require('pdf-lib');

async function test() {
  try {
    const doc = await PDFDocument.create();
    const b64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAGBAQABAAAAAA//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwA=";
    await doc.embedJpg(b64);
    console.log("Success with data URI");
  } catch (err) {
    console.log("Error with data URI:", err.message);
  }
}
test();
