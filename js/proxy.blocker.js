const blockedHostsTextArea = document.querySelector("#blocked-hosts");
function storeSettings() {
  let blockedHosts = blockedHostsTextArea.value.split("\n");
  browser.storage.local.set({
    blockedHosts
  });
}

function updateUI(restoredSettings) {
  blockedHostsTextArea.value = restoredSettings.blockedHosts.join("\n");
}

function onError(e) {
  console.error(e);
}
browser.storage.local.get().then(updateUI, onError);
blockedHostsTextArea.addEventListener("change", storeSettings);
