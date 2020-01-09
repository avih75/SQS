import cdk = require('@aws-cdk/core');
import sqs = require('@aws-cdk/aws-sqs');
import { QueueEncryption, QueuePolicy, QueueBase, DeadLetterQueue } from '@aws-cdk/aws-sqs';

export class SqsComponentStack extends cdk.Stack {
  public sqsBase: QueueBase;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deadLetterQueue :DeadLetterQueue = {
      maxReceiveCount: 5,
      queue: new sqs.Queue(this,'deadMessageQueue')
    }
    // Use managed key
    this.sqsBase = new sqs.Queue(this, 'Queue', {
      // contentBasedDeduplication:            // Specifies whether to enable content-based deduplication.                            : Boolean
      // dataKeyReuse:                         // The length of time that Amazon SQS reuses a data key before calling KMS again.      : Duration
      deadLetterQueue: deadLetterQueue,        // Send messages to this queue if they were unsuccessfully dequeued a number of times. : Queue
      // deliveryDelay:                        // The time in seconds that the delivery of all messages in the queue is delayed.      : Duratio
      // encryptionMasterKey:                  // External KMS master key to use for queue encryption.    
      encryption: QueueEncryption.KMS_MANAGED, // Whether the contents of the queue are encrypted, and by what type of key.
      // fifo:                                 // Whether this a first-in-first-out (FIFO) queue.                                     : Boolean
      // maxMessageSizeBytes:                  // The limit of how many bytes that a message can contain before Amazon SQS rejects it : Number
      queueName: 'SimpleSQS',                  // A name for the queue.                                                               : String
      // receiveMessageWaitTime:               // Default wait time for ReceiveMessage calls.                 : Duration
      // retentionPeriod:                      // The number of seconds that Amazon SQS retains a message.    : Duration
      // visibilityTimeout:                    // Timeout of processing a single message.                     : Duration
    });

    const sqsPolicy = new QueuePolicy(this, 'QueuePolicy', {
      queues: [this.sqsBase],      
    })
  }
}
