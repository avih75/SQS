import cdk = require('@aws-cdk/core');
import sqs = require('@aws-cdk/aws-sqs');
import { QueueEncryption, QueuePolicy, QueueBase, DeadLetterQueue } from '@aws-cdk/aws-sqs';

export class SqsScanResultsStack extends cdk.Stack {
  public sqsBase: QueueBase;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.sqsBase = new sqs.Queue(this, 'QueueScanResults', {
      queueName: 'cxast-ms-scanresults'
    });
  }
}
