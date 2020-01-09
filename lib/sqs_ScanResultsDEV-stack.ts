import cdk = require('@aws-cdk/core');
import sqs = require('@aws-cdk/aws-sqs');
import { QueueBase } from '@aws-cdk/aws-sqs';

export class SqsScanResultsDEVStack extends cdk.Stack {
  public sqsBase: QueueBase;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.sqsBase = new sqs.Queue(this, 'QueueScanResultsDEV', {
      contentBasedDeduplication: true,
      fifo: true,
      queueName: 'cxast-ms-scanresults-dev.fifo'
    });
  }
}
