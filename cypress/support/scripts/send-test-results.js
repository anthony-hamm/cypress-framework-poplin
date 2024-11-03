import readJsonResult from './read-test-results.js'
import fetch from 'node-fetch'

const summary = await readJsonResult()
let slack_webhook
slack_webhook = 'https://hooks.slack.com/services/TESTURL/TESTURL/TESTURL'

const total_minutes = Math.floor(summary.total_duration / 60)

const generateAttachment = () => {
  const attachment = {
    color: summary.passed_porcentage === 100 ? '#2EA710' : '#AB2327',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${summary.project}*\n (${summary.passed_porcentage}%) / Duration: ${total_minutes} minutes`,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Open BrowserStack Dashboard',
            },
            url: summary.report_url,
            style: 'primary',
          },
        ],
      },
      {
        type: 'divider',
      },
    ],
  }

  summary.feature_files.forEach(function (feature) {
    const feature_hyphens = feature.name.replace(/-/g, ' ')
    const feature_name = feature_hyphens.replace(/.spec.js/g, '')
    const featureBlock = {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${feature_name} - ${feature.device}*\n${feature.passed}/${feature.total_tests} Passed (${feature.passed_porcentage}%)`,
      },
    }
    attachment.blocks.push(featureBlock)
  })

  return attachment
}

const send_result_to_slack = () => {
  const payload = {
    attachments: [generateAttachment()],
  }

  fetch(slack_webhook, {method: 'POST', body: JSON.stringify(payload)}).then(
    function (res) {
      if (res.status === 200) {
        console.log('Sent')
      } else {
        throw new Error('Something went wrong')
      }
    },
  )
}
send_result_to_slack()
