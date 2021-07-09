#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkImagesStack } from '../lib/cdk-images-stack';
import { CdkImagesDistributionStack } from '../lib/cdk-images-distribution-stack';
import { CdkImagesPermitStack } from '../lib/cdk-images-permit-stack';
import { CdkImagesStrageStack } from '../lib/cdk-images-storage-stack';
import { CdkImagesUiDeployStack } from '../lib/cdk-images-ui-deploy-stack';

const app = new cdk.App();
new CdkImagesStack(app, 'CdkImagesStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
new CdkImagesStrageStack(app, 'CdkImagesStrageStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
new CdkImagesDistributionStack(app, 'CdkImagesDistributionStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
new CdkImagesPermitStack(app, 'CdkImagesPermitStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})
new CdkImagesUiDeployStack(app, 'CdkImagesUiDeployStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
})

