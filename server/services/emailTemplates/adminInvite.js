const keys = require('../../config/keys')

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style='text-align: center'>
          <h3>Click the link below to complete your registration as an admin for Big Ern's Storage Emporium</h3>
          <div>
            <a href='${keys.redirectDomain}/api/surveys/${survey.id}/yes'>Yes</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
