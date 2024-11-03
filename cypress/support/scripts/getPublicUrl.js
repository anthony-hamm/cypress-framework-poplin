const username = process.env.BROWSERSTACK_USERNAME
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY
fetch('https://api.browserstack.com/automate/builds.json?limit=5', {
  method: 'GET',
  headers: new Headers({
    Authorization: 'Basic ' + btoa(`${username}:${accessKey}`),
  }),
})
  .then(response => response.json())
  .then(data => {
    const builds = Array.isArray(data) ? data : [data]
    const manualEntry = builds.find(
      build =>
        build.automation_build &&
        (build.automation_build.name.includes('Manual') ||
          build.automation_build.name.includes('QA-build')) &&
        (build.automation_build.status === 'done' ||
          build.automation_build.status === 'failed'),
    )

    if (manualEntry && manualEntry.automation_build) {
      console.log(manualEntry.automation_build.public_url)
    } else {
      console.log('No public URL for completed manual triggers found.')
    }
  })
  .catch(error => console.error('Error:', error))
