export const openTab = (links: string[]) => {
  links.forEach((link) => chrome.tabs.create({ url: link }));
}
