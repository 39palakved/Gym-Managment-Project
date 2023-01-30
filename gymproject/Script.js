Document.QuerySelector(".Mobile-Btn").AddEventListener("Click", Function () {
  Document.QuerySelector(".Menu").ClassList.Toggle("Active");
});