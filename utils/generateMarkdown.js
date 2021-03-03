// function to generate markdown for README
function generateMarkdown(data) {
  return `# Table of Contents
*[TITLE](#title) 
*[DESCRIPTION](#description)
*[GITHUB](#github)
*[EMAIL](#email)
*[LICENSE](#license)
*[USAGE](#usage)
*[Installation](#installation)
*[REPO](#repo)
*[CONTRIBUTION](#contribution)

  ## TITLE 
  ${data.project}

  ## DESCRIPTION
  ${data.description}

  ## GITHUB 
  https://github.com/${data.github}

  ## EMAIL 
  ${data.email}

  ## LICENSE 
  ${data.license}

  ## USAGE 
  ${data.usage}

  ## INSTALLATION
  ${data.installation}

  ## REPO 
  ${data.repo}

  ## CONTRIBUTION 
  ${data.contribution}`; 
}

module.exports = generateMarkdown;
