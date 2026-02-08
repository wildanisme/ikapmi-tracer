<template>
    <Head title="Alerts" />
    <PageBreadcrumb pageTitle="Alerts" />

    <div class="space-y-5 sm:space-y-6">
        <ComponentCard title="Success Alert">
            <div class="space-y-4">
                <Alert
                    variant="success"
                    title="Success Message"
                    message="Be cautious when performing this action."
                    :show-link="true"
                    link-href="/"
                    link-text="Learn more"
                />

                <Alert
                    variant="success"
                    title="Success Message"
                    message="Be cautious when performing this action."
                    :show-link="false"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Warning Alert">
            <div class="space-y-4">
                <Alert
                    variant="warning"
                    title="Warning Message"
                    message="Be cautious when performing this action."
                    :show-link="true"
                    link-href="/"
                    link-text="Learn more"
                />

                <Alert
                    variant="warning"
                    title="Warning Message"
                    message="Be cautious when performing this action."
                    :show-link="false"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Error Alert">
            <div class="space-y-4">
                <Alert
                    variant="error"
                    title="Error Message"
                    message="Be cautious when performing this action."
                    :show-link="true"
                    link-href="/"
                    link-text="Learn more"
                />

                <Alert
                    variant="error"
                    title="Error Message"
                    message="Be cautious when performing this action."
                    :show-link="false"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Info Alert">
            <div class="space-y-4">
                <Alert
                    variant="info"
                    title="Info Message"
                    message="Be cautious when performing this action."
                    :show-link="true"
                    link-href="/"
                    link-text="Learn more"
                />

                <Alert
                    variant="info"
                    title="Info Message"
                    message="Be cautious when performing this action."
                    :show-link="false"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Alert Variations">
            <div class="space-y-4">
                <Alert variant="success" title="Custom Content Alert">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                        This alert uses
                        <strong class="text-gray-900 dark:text-white">custom slot content</strong>
                        instead of the message prop.
                    </p>
                    <ul class="mt-2 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
                        <li>You can add any HTML content</li>
                        <li>Including lists and formatting</li>
                        <li>Perfect for complex messages</li>
                    </ul>
                </Alert>

                <Alert
                    variant="info"
                    title="Quick Info"
                    message="Sometimes you just need a simple message."
                />

                <Alert
                    variant="warning"
                    title="Important Notice"
                    message="This is a longer message that provides more detailed information about the warning. You should read this carefully before proceeding with your action."
                    :show-link="true"
                    link-href="/docs"
                    link-text="View documentation"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Real-World Examples">
            <div class="space-y-4">
                <Alert variant="success" title="Payment Successful">
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Your payment of
                        <strong class="text-gray-900 dark:text-white">$99.00</strong>
                        has been processed successfully.
                    </p>
                    <div class="text-sm text-gray-500 dark:text-gray-400">
                        <p><strong>Order ID:</strong> #TAILADMIN-0014</p>
                        <p><strong>Transaction ID:</strong> TXN-1234567890</p>
                    </div>
                    <a
                        href="/orders"
                        class="inline-block mt-3 text-sm font-medium text-green-600 dark:text-green-400 underline hover:text-green-700"
                    >
                        View Order Details
                    </a>
                </Alert>

                <Alert
                    variant="warning"
                    title="Your trial is ending soon"
                    message="Your 14-day trial will expire in 3 days. Upgrade now to continue using all features."
                    :show-link="true"
                    link-href="/billing"
                    link-text="Upgrade now"
                />

                <Alert variant="error" title="Form Validation Failed">
                    <ul class="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
                        <li>Email field is required</li>
                        <li>Password must be at least 8 characters</li>
                        <li>Please accept the terms and conditions</li>
                    </ul>
                </Alert>

                <Alert
                    variant="info"
                    title="Scheduled Maintenance"
                    message="Our system will undergo maintenance on November 15, 2025 from 2:00 AM to 4:00 AM EST. Some features may be unavailable during this time."
                    :show-link="true"
                    link-href="/status"
                    link-text="Check status page"
                />
            </div>
        </ComponentCard>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import Alert from '../../components/ui/Alert.vue';

defineOptions({
    layout: AppLayout,
});
</script>
