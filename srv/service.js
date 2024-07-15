const cds = require('@sap/cds');
const cron = require('node-cron');

module.exports = cds.service.impl(async function () {
    this.on('fetchData', fetchData);
    this.on('READ', 'SavingsPOSet', onReadSavingsPOSet)

    cds.on('served', () => {
        console.log("Service is served. Scheduling job...");
        scheduleJob();
    });
});

async function fetchData(req) {
    try {
        console.log("Fetching data from OData service...");
        const odataService = await cds.connect.to('WiproOdata');
        const response = await odataService.send({
            method: 'GET',
            path: '/ZMM_PO_SAVING_SRV/GraphPOSet'
        });

        const poData = response;
        console.log("Data fetched successfully:", poData);

        for (const po of poData) {
            console.log("Triggering workflow for PO:", po.PONumber);
            console.log("Updating SAP with trigger status for PO:", po.PONumber);
            // await updateSAP(po.PONumber, 'Triggered');
        }

        return 'Workflows triggered successfully';
    } catch (error) {
        console.error('Error in fetchData:', error);
        return 'Failed to trigger workflows';
    }
}






// async function updateSAP(poNumber, status) {
//     console.log("Updating SAP for PO:", poNumber, "with status:", status);
//     const odataService = await cds.connect.to('WiproOdata');
//     const updateResponse = await odataService.send({
//         method: 'PATCH',
//         path: `/ZMM_PO_SAVING_SRV/GraphPOSet(${poNumber})`,
//         data: {
//             TriggerStatus: status
//         }
//     });
//     return updateResponse;
// }


function scheduleJob() {
    cron.schedule('0 0 * * *', async () => {
        console.log('Cron job is running!');

        try {
            const srv = await cds.connect.to('POService');
            await srv.tx().send('fetchData');
            console.log("success!")
        } catch (error) {
            console.error('Something went wrong. Scheduled task failed:', error);
            throw error;
        }
    });
}

async function onReadSavingsPOSet(req) {
    try {
        console.log("Fetching data from OData service...");
        const odataService = await cds.connect.to('WiproOdata');
        const response = await odataService.send({
            method: 'GET',
            path: '/ZMM_PO_SAVING_SRV/GraphPOSet'
        });

        console.log("Data fetched successfully:", response);

        /*for (const po of poData) {
            console.log("Triggering workflow for PO:", po.PONumber);
        }

        return { message: 'Workflows triggered successfully' };*/
        return response;
    } catch (error) {
        console.trace('Error in fetchData:', error);
        return [];
    }
}