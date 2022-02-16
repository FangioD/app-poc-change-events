export default [
    {
      match: {
        
      },
      callback: {
        url: "http://changeevents/delta", method: "POST"
      },
      options: {
        resourceFormat: "v0.0.1",
        gracePeriod: 1000
      }
    }
  ]