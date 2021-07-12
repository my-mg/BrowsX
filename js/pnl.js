var myWindowId;
const contentBox = document.querySelector("#content");
window.addEventListener("mouseover", () => {
  contentBox.setAttribute("contenteditable", true);
});
window.addEventListener("mouseout", () => {
  contentBox.setAttribute("contenteditable", false);
  browser.tabs.query({windowId: myWindowId, active: true}).then((tabs) => {
    let contentToStore = {};
    contentToStore[tabs[0].url] = contentBox.textContent;
    browser.storage.local.set(contentToStore);
  });
});
function updateContent() {
  browser.tabs.query({windowId: myWindowId, active: true})
    .then((tabs) => {
      return browser.storage.local.get(tabs[0].url);
    })
    .then((storedInfo) => {
      contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
    });
}
browser.tabs.onActivated.addListener(updateContent);
browser.tabs.onUpdated.addListener(updateContent);
browser.windows.getCurrent({populate: true}).then((windowInfo) => {
  myWindowId = windowInfo.id;
  updateContent();
});
