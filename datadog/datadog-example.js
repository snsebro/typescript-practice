"use strict";
exports.__esModule = true;
var datadog_api_client_1 = require("@datadog/datadog-api-client");
var configuration = datadog_api_client_1.v1.createConfiguration();
var apiInstance = new datadog_api_client_1.v1.MetricsApi(configuration);
var params = {
    // MetricsPayload
    body: {
        series: [
            {
                host: "test.example.com",
                interval: 20,
                metric: "system.load.1",
                points: [[1575317847, 0.5]],
                tags: ["environment:test"],
                type: "rate"
            },
        ]
    }
};
apiInstance.submitMetrics(params).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
})["catch"](function (error) { return console.error(error); });
