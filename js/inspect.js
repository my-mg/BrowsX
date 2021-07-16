browser.devtools.panels.elements.createSidebarPane("DOM").then(sidebar => {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    sidebar.setExpression(`$0`);
  });
});
