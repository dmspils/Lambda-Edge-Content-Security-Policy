# Lambda-Edge-Content-Security-Policy

CSP for AWS Cloudfront Lambda@Edge


Pre-reqs:

1. In AWS, set up a static site hosted in an S3 bucket.
2. Set the permissions on the S3 bucket to include a public access policy and Cloudfront Object Access Identity.
3. Set up Cloudfront to serve the content in the S3 bucket.

Config:

1. Goto Lambda and make sure you're in US-East-1
2. Create a new function, make it Node.js.6.10
3. Dump in your CSP.js, configured to do what you want. Note: start small and build your policy gradually.
4. Save your code.
5. Publish your code and make a note of the ARN (including version number).
6. Select Cloudfront as a trigger, select Origin-Response and select the distribution that you're going to use.
7. Save.
8. Goto Cloudfront, select your distribution and edit behaviours.
9. Scroll to the bottom and add a new Lambda Function Association.
10. Paste in the ARN from Lambda and select Origin-Response.
11. Hit save and wait for the distribution to redeploy.
12. Goto Mozilla Observatory [https://observatory.mozilla.org/] and test your policy.
