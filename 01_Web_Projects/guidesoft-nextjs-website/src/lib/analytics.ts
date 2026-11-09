// Google Analytics and conversion tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  linkedInInsightTag?: string;
  hotjarId?: string;
}

export interface ConversionEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  currency?: string;
  event_id?: string;
}

export interface EcommerceEvent {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
  }>;
}

class Analytics {
  private static instance: Analytics;
  private config: AnalyticsConfig = {};
  private isInitialized = false;

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  initialize(config: AnalyticsConfig): void {
    this.config = config;
    this.isInitialized = true;

    // Initialize Google Analytics
    if (config.googleAnalyticsId) {
      this.initializeGoogleAnalytics(config.googleAnalyticsId);
    }

    // Initialize Google Tag Manager
    if (config.googleTagManagerId) {
      this.initializeGoogleTagManager(config.googleTagManagerId);
    }

    // Initialize Facebook Pixel
    if (config.facebookPixelId) {
      this.initializeFacebookPixel(config.facebookPixelId);
    }

    // Initialize LinkedIn Insight Tag
    if (config.linkedInInsightTag) {
      this.initializeLinkedInInsight(config.linkedInInsightTag);
    }

    // Initialize Hotjar
    if (config.hotjarId) {
      this.initializeHotjar(config.hotjarId);
    }
  }

  private initializeGoogleAnalytics(measurementId: string): void {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }

  private initializeGoogleTagManager(gtmId: string): void {
    // GTM script in head
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(gtmScript);

    // GTM noscript in body
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoscript);
  }

  private initializeFacebookPixel(pixelId: string): void {
    const fbScript = document.createElement('script');
    fbScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbScript);
  }

  private initializeLinkedInInsight(partnerId: string): void {
    const linkedInScript = document.createElement('script');
    linkedInScript.innerHTML = `
      _linkedin_partner_id = "${partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(linkedInScript);

    const linkedInPixel = document.createElement('script');
    linkedInPixel.async = true;
    linkedInPixel.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(linkedInPixel);
  }

  private initializeHotjar(hjid: string): void {
    const hjScript = document.createElement('script');
    hjScript.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hjid},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(hjScript);
  }

  // Event tracking methods
  trackPageView(url?: string, title?: string): void {
    if (!this.isInitialized) return;

    const pageData = {
      page_title: title || document.title,
      page_location: url || window.location.href,
    };

    // Google Analytics
    if (window.gtag) {
      window.gtag('config', this.config.googleAnalyticsId!, pageData);
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }

  trackEvent(event: ConversionEvent): void {
    if (!this.isInitialized) return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        currency: event.currency,
        custom_parameters: {
          event_id: event.event_id,
        },
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      window.fbq('track', event.action, {
        value: event.value,
        currency: event.currency,
      });
    }
  }

  trackConversion(conversionName: string, value?: number, currency = 'USD'): void {
    this.trackEvent({
      action: 'conversion',
      category: 'engagement',
      label: conversionName,
      value,
      currency,
    });
  }

  trackFormSubmission(formName: string, formLocation: string): void {
    this.trackEvent({
      action: 'form_submit',
      category: 'engagement',
      label: `${formName} - ${formLocation}`,
    });
  }

  trackDownload(fileName: string, fileType: string): void {
    this.trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: `${fileName} (${fileType})`,
    });
  }

  trackVideoPlay(videoTitle: string, videoDuration?: number): void {
    this.trackEvent({
      action: 'video_play',
      category: 'engagement',
      label: videoTitle,
      value: videoDuration,
    });
  }

  trackScrollDepth(depth: number): void {
    this.trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: `${depth}%`,
      value: depth,
    });
  }

  trackOutboundClick(url: string, linkText?: string): void {
    this.trackEvent({
      action: 'click',
      category: 'outbound',
      label: linkText || url,
    });
  }

  trackPurchase(transaction: EcommerceEvent): void {
    if (!this.isInitialized) return;

    // Google Analytics Enhanced Ecommerce
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transaction.transaction_id,
        value: transaction.value,
        currency: transaction.currency,
        items: transaction.items,
      });
    }

    // Facebook Pixel Purchase Event
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: transaction.value,
        currency: transaction.currency,
        content_ids: transaction.items.map(item => item.item_id),
        content_type: 'product',
      });
    }
  }

  // User identification
  identifyUser(userId: string, properties?: Record<string, any>): void {
    if (!this.isInitialized) return;

    // Google Analytics
    if (window.gtag) {
      window.gtag('config', this.config.googleAnalyticsId!, {
        user_id: userId,
        custom_map: properties,
      });
    }
  }

  // A/B Testing
  trackExperiment(experimentId: string, variantId: string): void {
    this.trackEvent({
      action: 'experiment_impression',
      category: 'ab_testing',
      label: `${experimentId}:${variantId}`,
    });
  }

  // Custom dimensions
  setCustomDimension(index: number, value: string): void {
    if (window.gtag) {
      window.gtag('config', this.config.googleAnalyticsId!, {
        [`custom_map.dimension${index}`]: value,
      });
    }
  }
}

// Export singleton instance
export const analytics = Analytics.getInstance();

// Utility functions for common tracking scenarios
export const trackContactFormSubmission = () => {
  analytics.trackFormSubmission('Contact Form', 'Contact Page');
  analytics.trackConversion('contact_form_submit');
};

export const trackVisaApplicationSubmission = (visaType: string) => {
  analytics.trackFormSubmission('Visa Application', `Visa Services - ${visaType}`);
  analytics.trackConversion('visa_application_submit');
};

export const trackNewsletterSignup = (source: string) => {
  analytics.trackFormSubmission('Newsletter Signup', source);
  analytics.trackConversion('newsletter_signup');
};

export const trackServiceInquiry = (serviceName: string) => {
  analytics.trackEvent({
    action: 'service_inquiry',
    category: 'services',
    label: serviceName,
  });
};

export const trackBlogEngagement = (postTitle: string, action: 'read' | 'share' | 'comment') => {
  analytics.trackEvent({
    action: `blog_${action}`,
    category: 'content',
    label: postTitle,
  });
};

// Initialize with default configuration
export const initializeAnalytics = () => {
  analytics.initialize({
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID,
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
    linkedInInsightTag: process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_TAG,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID,
  });
};

// React hook for analytics
export const useAnalytics = () => {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: analytics.trackConversion.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    identifyUser: analytics.identifyUser.bind(analytics),
  };
};