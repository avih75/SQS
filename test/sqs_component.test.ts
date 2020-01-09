import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import SqsComponent = require('../lib/sqs_component-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SqsComponent.SqsComponentStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});