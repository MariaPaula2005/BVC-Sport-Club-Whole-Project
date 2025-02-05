const registration = require('../models/model');

// Handle registration POST request
function registerUser(req, res) {
        const { id, fullName, address, status } = req.body;
        console.log('Registration Data has been received:', { id, fullName, address, status });

        // Calculate registration fee based on status
        const fee = registration.calculateFee(status);
        console.log('Calculated fee:', fee);

        // Prepare confirmation URL with registration data
        const confirmationUrl = `/confirmation?id=${id}&fullName=${encodeURIComponent(fullName)}&address=${encodeURIComponent(address)}&status=${status}&fee=${fee}`;
        console.log('Confirmation URL:', confirmationUrl);

        // Respond with the confirmation URL as plain text
        res.type('text').send(confirmationUrl);
};

module.exports = { registerUser};