const pageConfig = {

  title: "MSIT监控页面",
 
  links: [
    { link: '', label: '未定义' },
  ],
}

const workerConfig = {

  kvWriteCooldownMinutes: 1,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
   // passwordProtection: 'msit:ms188.com',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'remote.ms188.com',
      // `name` is used at status page and callback message
      name: '远程线路',
      // `method` should be a valid HTTP Method
      method: 'TCP_PING',
      // `target` is a valid URL
      target: 'https://remote.ms188.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '这是一条远程线路',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://remote.ms188.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
     // expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 1000
      timeout: 1000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent
    //  body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      //responseKeyword: 'success',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
      //checkLocationWorkerRoute: 'https://remote.ms188.com',
    },
    // dap邮箱
    {
      id: 'dap.support',
      name: 'mail.dap.support',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'mail.dap.support',
      tooltip: 'dap邮箱',
      statusPageLink: 'https://mail.dap.support',
      timeout: 1000,
    },
     {
      id: 'google',
      name: 'google',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: 'https://www.google.com/',
      tooltip: 'google',
      statusPageLink: 'https://www.google.com/',
      timeout: 1000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
