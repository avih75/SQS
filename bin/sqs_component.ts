#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SqsComponentStack } from '../lib/sqs_component-stack';

const app = new cdk.App();
new SqsComponentStack(app, 'SqsComponentStack');
