/* uz-footer.js stub — delegates to suite-root /uz-footer.js so all
   sub-apps share a single source of truth. Added 2026-05-12 as part
   of the mobile/iOS-Safari UX pass. */
(function () {
  'use strict';
  if (window.__uzFooterRootLoaded) return;
  window.__uzFooterRootLoaded = true;
  var s = document.createElement('script');
  s.src = '../uz-footer.js?v=15';
  s.async = false;
  document.body.appendChild(s);
})();
