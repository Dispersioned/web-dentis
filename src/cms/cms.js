import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import uploadcare from 'netlify-cms-media-library-uploadcare';

import PaymentConditionsPreview from './preview-templates/PaymentConditionsPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('payment-conditions', PaymentConditionsPreview);
