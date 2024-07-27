# Angus Bezzina's Portfolio

This is my static portfolio website with a few bells & whistles to make my star shine a little brighter ✨.

Stack for this includes, but is not limited to:

- Vite
- React
- Typescript
- Tailwind CSS
- ThreeJS

To see how the APIs are set up, checkout the Serverless backend repo [here](https://github.com/angusbezzina/portfolio-vite-backend).

## Getting setup

Run the command `npm i` from the root directory.

## Local development

Run the command `npm run dev` from the root directory.

## Testing

Testing is handled with Vitest and React Testing Library.

To run the test suite, use the command `npm run test` from the root directory.

## Deploying

This site is hosted on AWS. To deploy it you will need to make sure that you have the AWS CLI installed locally and have it configured correctly.

To configure, run the command `aws configure` and enter the Access Key ID and Secret Access Key associated with the `portfolio-deployment` IAM user in AWS.

Once configured, you can run the command `npm run deploy` from the root directory to deploy the website. You will need to clear the terminal after the cache-invalidation runs.
