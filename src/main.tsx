import { createRoot } from 'react-dom/client';
import { Bookmarks, Settings } from 'types';
import Root  from './compornent';

const settings: Settings = await chrome.storage.local.get('settings');
const bookmarksJson: Bookmarks = JSON.parse(settings.settings.json || "[]");

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  const bookmarks: Bookmarks = bookmarksJson;
  root.render(<Root bookmarks={bookmarks}></Root>);
}
