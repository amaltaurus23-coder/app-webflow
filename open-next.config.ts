export default {
  default: {
    override: {
      wrapper: "aws-lambda",
      converter: "aws-cloudfront",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "aws-lambda",
      converter: "aws-cloudfront",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
    },
  },
};
