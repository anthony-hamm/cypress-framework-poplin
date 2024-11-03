import fs from 'fs-extra'

const file = './results/browserstack-cypress-report.json'
let summary = {
  project: `${process.env.CYPRESS_RUNLABEL}`.toUpperCase(),
  report_url: '',
  total_passed: 0,
  total_failed: 0,
  total_tests: 0,
  passed_porcentage: 0,
  total_duration: 0,
  feature_files: [],
}

const porcentage = (number, total) => {
  const value = (number / total) * 100
  return Math.round(value)
}

export default async function readJsonResult() {
  let result = await fs
    .readJSON(file)
    .then(object => {
      return object
    })
    .catch(e => console.log(e))

  reportURL(result)
  generateSummaryReport(result)

  summary.passed_porcentage = porcentage(
    summary.total_passed,
    summary.total_tests,
  )
  return summary
}

const reportURL = result => (summary.report_url = result.public_build_url)

const generateSummaryReport = result => {
  Object.keys(result.rows).forEach(function (feature) {
    result.rows[feature]['sessions'].forEach(function (device) {
      const metadata = device['meta']
      const deviceName = device['name']
      const featureFile = {
        name: feature,
        device: deviceName,
        total_tests: metadata['total_tests'],
        passed: metadata['passed'],
        failed: metadata['failed'],
        duration: metadata['duration'],
        passed_porcentage: porcentage(
          metadata['passed'],
          metadata['total_tests'],
        ),
      }
      if (featureFile.passed > 0 || featureFile.failed > 0) {
        summary.feature_files.push(featureFile)
        summary.total_passed += metadata['passed']
        summary.total_failed += metadata['failed']
        summary.total_tests += metadata['total_tests']
        summary.total_duration += metadata['duration']
      }
    })
  })
}
