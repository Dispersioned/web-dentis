import React from 'react';

import { PaymentConditionsPageTemplate } from '../../templates/payment-conditions-page/payment-conditions-page';

const PaymentConditionsPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  console.log(data);

  if (data) {
    return <PaymentConditionsPageTemplate props={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default PaymentConditionsPreview;
