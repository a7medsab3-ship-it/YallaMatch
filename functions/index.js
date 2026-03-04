const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// 1. New User Registration Trigger
exports.onUserRegistration = functions.auth.user().onCreate((user) => {
    // Send welcome email logic here
    console.log("New user created:", user.email);
    return null;
});

// 2. Stripe Webhook (Mock Architecture)
exports.stripeWebhook = functions.https.onRequest((req, res) => {
    // Verify stripe signature
    // Process "payment_intent.succeeded" event
    // Update booking document status to 'Confirmed'
    res.status(200).send("Webhook received");
});

// 3. Daily Cron Job to clean unpaid pending bookings
exports.cleanupPendingBookings = functions.pubsub.schedule('every 24 hours').onRun((context) => {
    // Logic to batch delete/cancel bookings stuck in 'Pending' for > 2 hours
    console.log("Cleanup job running");
    return null;
});
