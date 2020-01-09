#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SqsScanResultsStack } from '../lib/sqs_ScanResults-stack';
import { SqsScanResultsDEVStack } from '../lib/sqs_ScanResultsDEV-stack';

const app = new cdk.App();
new SqsScanResultsStack(app, 'SqsScanResultsStack');
new SqsScanResultsDEVStack(app, 'SqsScanResultsDEVStack');
