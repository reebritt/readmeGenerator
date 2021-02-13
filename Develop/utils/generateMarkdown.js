// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.github}
         ##GITHUB   
         ${data.email}
         ${data.license}
`;
}

module.exports = generateMarkdown;
