export const trackView = (adId: string) => {
  googleAnalyticsTrack('View', adId);
};

export const trackClick = (adId: string, event?: MouseEvent) => {
  const timeForTrackingRequests = 150; // ms
  if (event) {
    event.preventDefault();
  }

  googleAnalyticsTrack('Click', adId);

  // give tracking request time to complete
  setTimeout(() => {
    const link = hrefClimber(event?.target as Node);
    if (link.target && link.target.toLowerCase() === '_blank') {
      window.open(link.href);
    } else if (link.href) {
      document.location = link.href;
    }
  }, timeForTrackingRequests);
};

const googleAnalyticsTrack = (type: 'Click' | 'View', adId: string) => {
  if (!(window as any)['gtag']) {
    console.warn(
      'Unable to track Google Analytics event, gtag not found', type, adId
    );
    return;
  }

  (window as any)['gtag']('event', `Docs ad - ${type} - ${adId}`, {
    'event_category': `Docs ad - ${type}`,
    'event_label': adId
  });
};

// recursive function to climb the DOM looking for href tags
const hrefClimber = (el: any): any => {
  if (el['href']) {
    return el;
  } else if (el.parentNode) {
    return hrefClimber(el.parentNode);
  }
};
